<?php

class Meow_MWAI_Labs_MCP {
  private $core = null;
  private $namespace = 'mcp/v1';
  private $server_version = '0.0.1';
  private $protocol_version = '2025-03-26';
  private $queue_key = 'mwai_mcp_msg';
  private $session_id = null;
  private $logging = false;
  private $last_action_time = 0;
  private $bearer_token = null;

  #region Initialize
  public function __construct( $core ) {
    $this->core = $core;
    add_action( 'rest_api_init', [ $this, 'rest_api_init' ] );
  }

  public function rest_api_init() {
		$this->bearer_token = $this->core->get_option( 'mcp_bearer_token' );
		if ( !empty( $this->bearer_token ) ) {
			add_filter( 'mwai_allow_mcp', [ $this, 'auth_via_bearer_token' ], 10, 2 );
		}
    register_rest_route( $this->namespace, '/sse', [
      'methods' => 'GET',
      'callback' => [ $this, 'handle_sse' ],
      'permission_callback' => function( $request ) {
				return $this->can_access_mcp( $request );
			},
    ] );

    register_rest_route( $this->namespace, '/sse', [
      'methods' => 'POST',
      'callback' => [ $this, 'handle_sse' ],
      'permission_callback' => function( $request ) {
				return $this->can_access_mcp( $request );
			},
    ] );

    register_rest_route( $this->namespace, '/messages', [
      'methods' => 'POST',
      'callback' => [ $this, 'handle_message' ],
      'permission_callback' => function( $request ) {
				return $this->can_access_mcp( $request );
			},
    ] );
  }
  #endregion

  #region Auth (Bearer token)
  function can_access_mcp( $request ) {
    $logged_in = is_user_logged_in();
    return apply_filters( 'mwai_allow_mcp', $logged_in, $request );
	}

  public function auth_via_bearer_token( $allow, $request ) {
    if ( empty( $this->bearer_token ) ) {
      return false;
    }
		$hdr = $request->get_header( 'authorization' );
    if ( $hdr && preg_match( '/Bearer\s+(.+)/i', $hdr, $m ) &&
        hash_equals( $this->bearer_token, trim( $m[1] ) ) ) {
      if ( $admin = $this->core->get_admin_user() ) {
        wp_set_current_user( $admin->ID, $admin->user_login );
      }
      return true;
    }
    // ?token=xyz fallback (optional)
    $q = sanitize_text_field( $request->get_param( 'token' ) );
    if ( $q && hash_equals( $this->bearer_token, $q ) ) return true;
    return $allow;
	}
  #endregion

  #region Helpers (log / JSON-RPC utils)
  private function log( $msg ) {
    if ( $this->logging ) {
      Meow_MWAI_Logging::log( "[MCP] ({$this->session_id}): {$msg}" );
    }
  }

  /** Wrap a JSON-RPC error object */
  private function rpc_error( $id, int $code, string $msg, $extra = null ): array {
    $err = [ 'code' => $code, 'message' => $msg ];
    if ( $extra !== null ) $err['data'] = $extra;
    return [ 'jsonrpc' => '2.0', 'id' => $id, 'error' => $err ];
  }

  /** Queue an error for SSE delivery */
  private function queue_error( $sess, $id, int $code, string $msg, $extra = null ): void {
    $this->store_message( $sess, $this->rpc_error( $id, $code, $msg, $extra ) );
  }
  
  /** Format tool result for MCP protocol */
  private function format_tool_result( $result ) : array {
    // If result is a string, wrap it in the MCP content format
    if ( is_string( $result ) ) {
      return [
        'content' => [
          [
            'type' => 'text',
            'text' => $result,
          ],
        ],
      ];
    }
    
    // If result has 'content' key, assume it's already properly formatted
    if ( is_array( $result ) && isset( $result['content'] ) ) {
      return $result;
    }
    
    // If result is an array without 'content' key, wrap it as JSON
    if ( is_array( $result ) ) {
      return [
        'content' => [
          [
            'type' => 'text',
            'text' => wp_json_encode( $result, JSON_PRETTY_PRINT ),
          ],
        ],
        'data' => $result,
      ];
    }
    
    // For any other type, convert to string and wrap
    return [
      'content' => [
        [
          'type' => 'text',
          'text' => (string) $result,
        ],
      ],
    ];
  }
  #endregion

  #region Handle direct JSON-RPC (for Claude's MCP client)
  /**
   * Claude's MCP client (via Anthropic API) sends JSON-RPC requests directly to the SSE endpoint
   * as POST requests, rather than following the typical SSE flow:
   * - Normal flow: GET /sse → establish SSE stream → POST /messages for JSON-RPC
   * - Claude's flow: POST /sse with JSON-RPC body → expect immediate JSON response
   * 
   * This method handles the direct JSON-RPC requests to maintain compatibility with Claude.
   */
  private function handle_direct_jsonrpc( WP_REST_Request $request, $data ) {
    $id = $data['id'] ?? null;
    $method = $data['method'] ?? null;
    
    if ( json_last_error() !== JSON_ERROR_NONE ) {
      return new WP_REST_Response( [
        'jsonrpc' => '2.0',
        'id' => null,
        'error' => [ 'code' => -32700, 'message' => 'Parse error: invalid JSON' ]
      ], 200 );
    }
    
    if ( ! is_array( $data ) || !$method ) {
      return new WP_REST_Response( [
        'jsonrpc' => '2.0',
        'id' => $id,
        'error' => [ 'code' => -32600, 'message' => 'Invalid Request' ]
      ], 200 );
    }

    try {
      $reply = null;

      switch ( $method ) {
        case 'initialize':
          // Check if client requests a specific protocol version
          $params = $data['params'] ?? [];
          $requested_version = $params['protocolVersion'] ?? null;
          
          if ( $requested_version && $requested_version !== $this->protocol_version ) {
            if ( $this->logging ) {
              Meow_MWAI_Logging::warn( "[MCP] Client requested protocol version {$requested_version}, but we only support {$this->protocol_version}" );
            }
          }
          
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [
              'protocolVersion' => $this->protocol_version,
              'serverInfo'      => (object)[
                'name'    => get_bloginfo( 'name' ) . ' MCP',
                'version' => $this->server_version,
              ],
              'capabilities'    => [
                'tools'     => [ 'listChanged' => true ],
                'prompts'   => [ 'subscribe'   => false, 'listChanged' => false ],
                'resources' => [ 'listChanged' => false ],
              ],
            ],
          ];
          break;

        case 'tools/list':
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [ 'tools' => $this->get_tools_list() ],
          ];
          break;

        case 'tools/call':
          $params    = $data['params']      ?? [];
          $tool      = $params['name']     ?? '';
          $arguments = $params['arguments']?? [];
          $reply     = $this->execute_tool( $tool, $arguments, $id );
          break;

        default:
          $reply = [
            'jsonrpc' => '2.0',
            'id' => $id,
            'error' => [ 'code' => -32601, 'message' => "Method not found: {$method}" ]
          ];
      }

      return new WP_REST_Response( $reply, 200 );

    } catch ( Exception $e ) {
      return new WP_REST_Response( [
        'jsonrpc' => '2.0',
        'id' => $id,
        'error' => [ 'code' => -32603, 'message' => 'Internal error', 'data' => $e->getMessage() ]
      ], 200 );
    }
  }
  #endregion

  #region Handle SSE (stream loop)
  private function reply( string $event, $data = null, string $enc = 'json' ) {
    if ( $enc === 'json' && $data === null ) {
      $this->log( "no data for {$event}");
      return;
    }
    echo "event: {$event}\n";
    if ( $enc === 'json' )
      $data = $data === null ? '{}' : wp_json_encode( $data, JSON_UNESCAPED_UNICODE );
    echo 'data: ' . $data . "\n\n";

    if ( ob_get_level() ) ob_end_flush();
    flush();

    $this->last_action_time = time();
    $this->log( "→ {$event}" );
  }

  private function generate_sse_id( $req ) {
    $last = $req ? $req->get_header( 'last-event-id' ) : '';
    return $last ?: str_replace( '-', '', wp_generate_uuid4() );
  }

  public function handle_sse( WP_REST_Request $request ) {

    $raw_body = $request->get_body();
    if ( $this->logging ) {
      Meow_MWAI_Logging::log( '[MCP] Raw Body: ' . $raw_body );
    }

    // Handle POST request with JSON-RPC body (Claude's MCP client behavior)
    // Claude's API sends JSON-RPC requests directly to the SSE endpoint instead of
    // establishing an SSE connection first. This is non-standard but we need to support it.
    // Expected: GET /sse (establish stream) → POST /messages (send JSON-RPC)
    // Claude: POST /sse with JSON-RPC body → expects immediate JSON response
    if ( $request->get_method() === 'POST' && !empty( $raw_body ) ) {
      $data = json_decode( $raw_body, true );
      if ( $data && isset( $data['method'] ) ) {
        if ( $this->logging ) {
          Meow_MWAI_Logging::log( '[MCP] Handling direct JSON-RPC for method: ' . $data['method'] );
        }
        // Process as a direct JSON-RPC request instead of starting SSE stream
        return $this->handle_direct_jsonrpc( $request, $data );
      }
    }

    @ini_set( 'zlib.output_compression', '0' );
    @ini_set( 'output_buffering',        '0' );
    @ini_set( 'implicit_flush',          '1' );
    if ( function_exists( 'ob_implicit_flush' ) ) ob_implicit_flush( true );

    header( 'Content-Type: text/event-stream' );
    header( 'Cache-Control: no-cache' );
    header( 'X-Accel-Buffering: no' );
    header( 'Connection: keep-alive' );
    while ( ob_get_level() ) ob_end_flush();

    /* — greet client —*/
    $this->session_id       = $this->generate_sse_id( $request );
    $this->last_action_time = time();
    echo "id: {$this->session_id}\n\n";
    flush();

    $msg_uri = sprintf(
      '%s/messages?session_id=%s',
      rest_url( $this->namespace ),
      $this->session_id
    );
    $this->reply( 'endpoint', $msg_uri, 'text' );
    $this->log( 'SSE started' );

    /* — main loop —*/
    while ( true ) {
      $max_time = 60 * 5; // 5 minutes
      $idle = ( time() - $this->last_action_time ) >= $max_time;
      if ( connection_aborted() || $idle ) {
        $this->reply( 'bye' );
        $this->log( $idle ? 'idle-timeout' : 'client abort' );
        break;
      }

      foreach ( $this->fetch_messages( $this->session_id ) as $p )
        $this->reply( 'message', $p );

      usleep( 200000 ); // 200 ms
    }
    exit;
  }
  #endregion

  #region Handle /messages (JSON-RPC ingress)
  public function handle_message( WP_REST_Request $request ) {
    $sess = sanitize_text_field( $request->get_param( 'session_id' ) );
    $raw  = $request->get_body();
    $dat  = json_decode( $raw, true );

    if ( json_last_error() !== JSON_ERROR_NONE ) {
      $this->queue_error( $sess, null, -32700, 'Parse error: invalid JSON' );
      return new WP_REST_Response( null, 204 );
    }
    if ( ! is_array( $dat ) ) {
      $this->queue_error( $sess, null, -32600, 'Invalid Request' );
      return new WP_REST_Response( null, 204 );
    }

    $id = $dat['id'] ?? null;
    $method = $dat['method'] ?? null;

    /* — notifications —*/
    if ( $method === 'initialized' ) return new WP_REST_Response( null, 204 );
    if ( $method === 'mwai/kill' )   exit(0);

    // It's a notification, no ID = no reply
    if ( $id === null && $method !== null ) {
      return new WP_REST_Response( null, 204 );
    }

    if ( !$method ) {
      $this->queue_error( $sess, $id, -32600, 'Invalid Request: method missing' );
      return new WP_REST_Response( null, 204 );
    }

    try {

      $reply = null;

      #region Methods switch
      switch ( $method ) {

        case 'initialize':
          // Check if client requests a specific protocol version
          $params = $data['params'] ?? [];
          $requested_version = $params['protocolVersion'] ?? null;
          
          if ( $requested_version && $requested_version !== $this->protocol_version ) {
            if ( $this->logging ) {
              Meow_MWAI_Logging::warn( "[MCP] Client requested protocol version {$requested_version}, but we only support {$this->protocol_version}" );
            }
          }
          
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [
              'protocolVersion' => $this->protocol_version,
              'serverInfo'      => (object)[
                'name'    => get_bloginfo( 'name' ) . ' MCP',
                'version' => $this->server_version,
              ],
              'capabilities'    => [
                'tools'     => [ 'listChanged' => true ],
                'prompts'   => [ 'subscribe'   => false, 'listChanged' => false ],
                'resources' => [ 'listChanged' => false ],
              ],
            ],
          ];
          break;

        case 'tools/list':
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [ 'tools' => $this->get_tools_list() ],
          ];
          break;

        case 'resources/list':
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [ 'resources' => $this->get_resources_list() ],
          ];
          break;

        case 'prompts/list':
          $reply = [
            'jsonrpc' => '2.0',
            'id'      => $id,
            'result'  => [ 'prompts' => $this->get_prompts_list() ],
          ];
          break;

        case 'tools/call':
          $params    = $dat['params']      ?? [];
          $tool      = $params['name']     ?? '';
          $arguments = $params['arguments']?? [];
          $reply     = $this->execute_tool( $tool, $arguments, $id );
          break;

        default:
          $reply = $this->rpc_error( $id, -32601, "Method not found: {$method}" );
      }
      #endregion

      if ( $reply ) $this->store_message( $sess, $reply );

    } catch ( Exception $e ) {
      $this->queue_error( $sess, $id, -32603, 'Internal error', $e->getMessage() );
    }

    return new WP_REST_Response( null, 204 );
  }
  #endregion

  #region Tools Definitions
  private function get_tools_list() {
    $base_tools = [
      [
        'name'        => 'mcp_ping',
        'description' => 'Simple connectivity check. Returns the current GMT time and the WordPress site name. Whenever a tool call fails (error or timeout), immediately invoke mcp_ping to verify the server; if mcp_ping itself does not respond, assume the server is temporarily unreachable and pause additional tool calls.',
        'inputSchema' => [ 'type' => 'object', 'properties' => (object) [] ],
      ],
    ];
    return apply_filters( 'mwai_mcp_tools', $base_tools );
  }
  #endregion

  #region Resources Definitions
  private function get_resources_list() {
    return [];
  }
  #endregion

  #region Prompts Definitions
  private function get_prompts_list() {
    return [];
  }
  #endregion

  #region Tools Call (execute_tool)
  private function execute_tool( $tool, $args, $id ) {
    try {
      // Handle built-in tools first
      if ( $tool === 'mcp_ping' ) {
        $ping_data = [
          'time' => gmdate( 'Y-m-d H:i:s' ),
          'name' => get_bloginfo( 'name' ),
        ];
        return [
          'jsonrpc' => '2.0',
          'id' => $id,
          'result' => [
            'content' => [
              [
                'type' => 'text',
                'text' => 'Ping successful: ' . wp_json_encode( $ping_data, JSON_PRETTY_PRINT ),
              ],
            ],
            'data' => $ping_data,
          ],
        ];
      }
      
      // Let other modules handle their tools
      $filtered = apply_filters( 'mwai_mcp_callback', null, $tool, $args, $id, $this );
      
      if ( $filtered !== null ) {
        // Check if it's already a full JSON-RPC response (backward compatibility)
        if ( is_array( $filtered ) && isset( $filtered['jsonrpc'] ) && isset( $filtered['id'] ) ) {
          return $filtered;
        }
        
        // Otherwise, wrap the result in proper JSON-RPC format
        return [
          'jsonrpc' => '2.0',
          'id' => $id,
          'result' => $this->format_tool_result( $filtered ),
        ];
      }
      
      throw new Exception( "Unknown tool: {$tool}" );
    } catch ( Exception $e ) {
      return $this->rpc_error( $id, -32603, $e->getMessage() );
    }
  }
  #endregion

  #region Message Queue (per-message transient)
  private function transient_key( $sess, $id ) {
    return "{$this->queue_key}_{$sess}_{$id}";
  }

  private function store_message( $sess, $payload ) {
    if ( !$sess ) return;
    $idKey = array_key_exists( 'id', $payload ) ? ( $payload['id'] ?? 'NULL' ) : 'N/A';
    set_transient( $this->transient_key( $sess, $idKey ), $payload, 30 );
    $this->log( "queued #{$idKey}" );
  }

  private function fetch_messages( $sess ) {
    global $wpdb;
    $like = $wpdb->esc_like( '_transient_' . "{$this->queue_key}_{$sess}_" ) . '%';

    $rows = $wpdb->get_results(
      $wpdb->prepare(
        "SELECT option_name, option_value FROM {$wpdb->options} WHERE option_name LIKE %s",
        $like
      ),
      ARRAY_A
    );

    $msgs = [];
    foreach ( $rows as $r ) {
      $msgs[] = maybe_unserialize( $r['option_value'] );
      delete_option( $r['option_name'] );
    }
    usort( $msgs, fn( $a,$b ) => ( $a['id'] ?? 0 ) <=> ( $b['id'] ?? 0 ) );
    if ( $msgs ) $this->log( 'flush '.count($msgs).' msg(s)' );
    return $msgs;
  }
  #endregion

  #region Resources (note)
  /*--------------------------------------------------*/
  /**
   * MCP also supports “resources” – static or dynamic data a client can
   * retrieve by URL (e.g. `mcp://resource/posts/123`).
   */
  #endregion
}
