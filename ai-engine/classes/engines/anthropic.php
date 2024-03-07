<?php

class Meow_MWAI_Engines_Anthropic extends Meow_MWAI_Engines_OpenAI
{

  // Streaming
  protected $streamInTokens = null;
  protected $streamOutTokens = null;

  public function __construct( $core, $env )
  {
    parent::__construct( $core, $env );
  }

  protected function set_environment() {
    $env = $this->env;
    $this->apiKey = $env['apikey'];
  }

  protected function build_url( $query, $endpoint = null ) {
    $endpoint = apply_filters( 'mwai_anthropic_endpoint', 'https://api.anthropic.com/v1', $this->env );
    if ( $query instanceof Meow_MWAI_Query_Text ) {
      $url = trailingslashit( $endpoint ) . 'messages';
    }
    else {
      throw new Exception( 'AI Engine: Unsupported query type.' );
    }
    return $url;
  }

  protected function build_headers( $query ) {
    parent::build_headers( $query );
    $headers = array(
      'Content-Type' => 'application/json',
      'x-api-key' => $this->apiKey,
      'anthropic-version' => '2023-06-01',
      'User-Agent' => 'AI Engine',
    );
    return $headers;
  }

  protected function build_messages( $query ) {
    $messages = [];

    // Then, if any, we need to add the 'messages', they are already formatted.
    foreach ( $query->messages as $message ) {
      $messages[] = $message;
    }

    // If the first message is not a 'user' role, we remove it.
    if ( !empty( $messages ) && $messages[0]['role'] !== 'user' ) {
      array_shift( $messages );
    }

    // Finally, we need to add the message
    // If there is a file (image), we need to sent the data (not the URL, as it's not supported by Anthropic yet).
    $fileUrl = $query->get_file_url();
    if ( !empty( $fileUrl ) ) {
      $messages[] = [ 
        'role' => 'user',
        'content' => [
          [
            "type" => "text",
            "text" => $query->get_message()
          ],
          [
            "type" => "image",
            "source" => [
              "type" => "base64",
              "media_type" => "image/jpeg",
              "data" => $query->get_file_data()
            ]
          ]
        ]
      ];
    }
    else {
      $messages[] = [ 'role' => 'user', 'content' => $query->get_message() ];
    }

    return $messages;
  }

  protected function build_body( $query, $streamCallback = null, $extra = null ) {
    if ( $query instanceof Meow_MWAI_Query_Text ) {
      $body = array(
        "model" => $query->model,
        "max_tokens" => $query->maxTokens,
        "temperature" => $query->temperature,
        "stream" => !is_null( $streamCallback ),
      );
  
      if ( !empty( $query->stop ) ) {
        $body['stop'] = $query->stop;
      }

      // First, we need to add the first message (the instructions).
      if ( !empty( $query->instructions ) ) {
        $body['system'] = $query->instructions;
      }

      // If there is a context, we need to add it.
      if ( !empty( $query->context ) ) {
        if ( empty( $body['system'] ) ) {
          $body['system'] = "";
        }
        $body['system'] = empty( $body['system'] ) ? '' : $body['system'] . "\n\n";
        $body['system'] = $body['system'] . "Context:\n\n" . $query->context;
      }

      $body['messages'] = $this->build_messages( $query );
      return $body;
    }
    else {
      throw new Exception( 'AI Engine: Unsupported query type.' );
    }
  }

  protected function stream_data_handler( $json ) {
    $content = null;

    // Get the data
    if ( isset( $json['type'] ) && $json['type'] === 'message_start' ) {
      $usage = $json['message']['usage'];
      $this->streamInTokens = $usage['input_tokens'];
      $this->inModel = $json['message']['model'];
      $this->inId = $json['message']['id'];
    }
    else if ( isset( $json['type'] ) && ( $json['type'] === 'delta' || $json['type'] === 'content_block_delta' ) ) {
      $content = $json['delta']['text'];
    }
    else if ( isset( $json['type'] ) && $json['type'] === 'message_delta' ) {
      $usage = $json['usage'];
      $this->streamOutTokens = $usage['output_tokens'];
    }
    else if ( isset( $json['type'] ) && $json['type'] === 'error' ) {
      $error = $json['error'];
      $message = $error['message'];
      throw new Exception( $message );
    }

    // Avoid some endings
    $endings = [ "<|im_end|>", "</s>" ];
    if ( in_array( $content, $endings ) ) {
      $content = null;
    }

    return empty( $content ) ? null : $content;
  }

  public function run_completion_query( $query, $streamCallback = null ) : Meow_MWAI_Reply {
    if ( !is_null( $streamCallback ) ) {
      $this->streamCallback = $streamCallback;
      add_action( 'http_api_curl', [ $this, 'stream_handler' ], 10, 3 );
    }

    $body = $this->build_body( $query, $streamCallback );
    $url = $this->build_url( $query );
    $headers = $this->build_headers( $query );
    $options = $this->build_options( $headers, $body );

    try {
      $res = $this->run_query( $url, $options, $streamCallback );
      $reply = new Meow_MWAI_Reply( $query );

      $returned_id = null;
      $returned_model = $this->inModel;
      $returned_choices = [];

      if ( !is_null( $streamCallback ) ) {
        // Streamed data
        if ( empty( $this->streamContent ) ) {
          $json = json_decode( $this->streamBuffer, true );
          if ( isset( $json['error']['message'] ) ) {
            throw new Exception( $json['error']['message'] );
          }
        }
        $returned_id = $this->inId;
        $returned_model = $this->inModel ? $this->inModel : $query->model;
        $returned_in_tokens = !is_null( $this->streamInTokens ) ? $this->streamInTokens : null;
        $returned_out_tokens = !is_null( $this->streamOutTokens ) ? $this->streamOutTokens : null;
        $returned_choices = [
          [ 
            'message' => [ 
              'content' => $this->streamContent,
              //'function_call' => $this->streamFunctionCall
            ]
          ]
        ];
      }
      else {
        // Regular data
        $data = $res['data'];
        if ( empty( $data ) ) {
          throw new Exception( 'No content received (res is null).' );
        }
        if ( !$data['model'] ) {
          error_log( print_r( $data, 1 ) );
          throw new Exception( 'Invalid response (no model information).' );
        }
        $returned_id = $data['id'];
        $returned_model = $data['model'];
        $returned_in_tokens = isset( $data['usage']['input_tokens'] ) ? $data['usage']['input_tokens'] : null;
        $returned_out_tokens = isset( $data['usage']['output_tokens'] ) ? $data['usage']['output_tokens'] : null;
        // There is only one choice with 
        $returned_choices = [ [ 
          'message' => [ 
            'content' => $data['content'][0]['text'],
            //'function_call' => $data['choices'][0]['delta']['function_call']
          ]
        ] ];
      }
      
      $reply->set_choices( $returned_choices );
      if ( !empty( $returned_id ) ) {
        $reply->set_id( $returned_id );
      }

      // Handle tokens.
      $this->handle_tokens_usage( $reply, $query, $returned_model, $returned_in_tokens, $returned_out_tokens );

      return $reply;
    }
    catch ( Exception $e ) {
      error_log( $e->getMessage() );
      $service = $this->get_service_name();
      $message = "From $service: " . $e->getMessage();
      throw new Exception( $message );
    }
  }

  protected function get_service_name() {
    return "Anthropic";
  }

  public function get_models() {
    return apply_filters( 'mwai_openai_models', MWAI_ANTHROPIC_MODELS );
  }

  static public function get_models_static() {
    return MWAI_ANTHROPIC_MODELS;
  }

  public function handle_tokens_usage( $reply, $query, $returned_model, $returned_in_tokens, $returned_out_tokens ) {
    $returned_in_tokens = !is_null( $returned_in_tokens ) ? $returned_in_tokens : $reply->get_in_tokens( $query );
    $returned_out_tokens = !is_null( $returned_out_tokens ) ? $returned_out_tokens : $reply->get_out_tokens();

    // This is how to retrieve the exact number of tokens used with Anthropic.
    // However, it doesn't work with streaming and it slows the request.

    if ( !empty( $reply->id ) ) {
      $url = 'https://anthropic.ai/api/v1/generation?id=' . $reply->id;
      try {

        // This is the CURL way
        // $ch = curl_init();
        // curl_setopt( $ch, CURLOPT_URL, $url );
        // curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        // curl_setopt( $ch, CURLOPT_HTTPHEADER, [ 'Authorization: Bearer ' . $this->apiKey ] );
        // curl_setopt( $ch, CURLOPT_USERAGENT, 'AI Engine' );
        // $res = curl_exec( $ch );
        // curl_close( $ch );
        // $res = json_decode( $res, true );

        // This is the WordPress way
        // It currently doesn't work with Anthropic (for mysterious reasons)
        // $res = wp_remote_get( $url, array(
        //   'headers' => array(
        //     'Authorization' => 'Bearer ' . $this->apiKey,
        //     'User-Agent' => 'AI Engine',
        //     'Accept' => 'application/json',
        //   ),
        //   'sslverify' => false,
        //   'user-agent' => 'AI Engine',
        //   'timeout' => 30,
        //   'blocking' => false,
        // ) );

        if ( isset( $res['data'] ) ) {
          $data = $res['data'];
          $returned_model = $data['model'];
          $returned_in_tokens = $data['tokens_prompt'];
          $returned_out_tokens = $data['tokens_completion'];
          $price = $res['usage'];
          $usage = $this->core->record_tokens_usage( $returned_model, $returned_in_tokens, $returned_out_tokens );
          $reply->set_usage( $usage );
          return;
        }
      }
      catch ( Exception $e ) {
        error_log( $e->getMessage() );
      }
    }

    $usage = $this->core->record_tokens_usage( $returned_model, $returned_in_tokens, $returned_out_tokens );
    $reply->set_usage( $usage );
  }

  public function get_price( Meow_MWAI_Query_Base $query, Meow_MWAI_Reply $reply ) {
    return parent::get_price( $query, $reply );
  }
}