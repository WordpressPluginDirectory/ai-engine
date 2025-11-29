/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/i18n.js":
/*!*********************!*\
  !*** ./app/i18n.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://developer.wordpress.org/block-editor/how-to-guides/internationalization/

const { __, sprintf } = wp.i18n;

const i18n = {};

i18n.COMMON = {
  GENERAL: __( 'General', 'ai-engine' ),
  MODULES: __( 'Modules', 'ai-engine' ),
  CLIENT_MODULES: __( 'Client Modules', 'ai-engine' ),
  BACKEND_MODULES: __( 'Admin Modules', 'ai-engine' ),
  SERVER_MODULES: __( 'Server Modules', 'ai-engine' ),
  ADVISOR: __( 'Advisor', 'ai-engine' ),
  SETTINGS: __( 'Settings', 'ai-engine' ),
  CHATBOT: __( 'Chatbot', 'ai-engine' ),
  CHATBOTS: __( 'Chatbots', 'ai-engine' ),
  CHATBOT_HELP: __( 'Build intelligent conversational experiences with fully customizable AI-powered chatbots.', 'ai-engine' ),
  INSIGHTS: __( 'Insights', 'ai-engine' ),
  STYLE: __( 'Style', 'ai-engine' ),
  ENABLE: __( 'Enable', 'ai-engine' ),
  NAME: __( 'Name', 'ai-engine' ),
  SUBMIT: __( 'Submit', 'ai-engine' ),
  MODEL: __( 'Model', 'ai-engine' ),
  AI_MODEL: __( 'AI Model', 'ai-engine' ),
  TEMPERATURE: __( 'Temperature', 'ai-engine' ),
  MAX_TOKENS: __( 'Max Tokens', 'ai-engine' ),
  CONTEXT_MAX_LENGTH: __( 'Context Max Length', 'ai-engine' ),
  STOP_SEQUENCE: __( 'Stop Sequence', 'ai-engine' ),
  MODE: __( 'Mode', 'ai-engine' ),
  CONTEXT: __( 'Knowledge & Context', 'ai-engine' ),
  IMAGES_NUMBER: __( 'Number of Images', 'ai-engine' ),
  AVATAR: __( 'Avatar', 'ai-engine' ),
  AI_NAME: __( 'AI Name', 'ai-engine' ),
  GUEST_NAME: __( 'Guest Name', 'ai-engine' ),
  USER_NAME: __( 'User Name', 'ai-engine' ),
  PLACEHOLDER: __( 'Placeholder', 'ai-engine' ),
  START_SENTENCE: __( 'Start Sentence', 'ai-engine' ),
  SEND: __( 'Send', 'ai-engine' ),
  CLEAR: __( 'Clear', 'ai-engine' ),
  CLOSE: __( 'Close', 'ai-engine' ),
  VIEW: __( 'View', 'ai-engine' ),
  EDIT: __( 'Edit', 'ai-engine' ),
  SYSTEM_NAME: __( 'System Name', 'ai-engine' ),
  ID: __( 'ID', 'ai-engine' ),
  SCOPE: __( 'Scope', 'ai-engine' ),
  POPUP: __( 'Popup', 'ai-engine' ),
  POSITION: __( 'Position', 'ai-engine' ),
  CENTER: __( 'Center', 'ai-engine' ),
  OPEN_DELAY: __( 'Open Delay', 'ai-engine' ),
  WINDOW_ANIMATION: __( 'Window Animation', 'ai-engine' ),
  ZOOM: __( 'Zoom', 'ai-engine' ),
  SLIDE: __( 'Slide', 'ai-engine' ),
  FADE: __( 'Fade', 'ai-engine' ),
  VOICE: __( 'Voice', 'ai-engine' ),
  TALK_MODE: __( 'Talk Mode', 'ai-engine' ),
  HANDS_FREE: __( 'Hands-Free', 'ai-engine' ),
  HOLD_TO_TALK: __( 'Hold to Talk', 'ai-engine' ),
  ICON: __( 'Icon', 'ai-engine' ),
  ICON_TEXT: __( 'Icon Text', 'ai-engine' ),
  ICON_TEXT_DELAY: __( 'Icon Text Delay', 'ai-engine' ),
  FULL_SCREEN: __( 'Full Screen', 'ai-engine' ),
  CASUALLY_FINE_TUNED: __( 'Casually Fine-Tuned', 'ai-engine' ),
  CONTENT_AWARE: __( 'Content Aware', 'ai-engine' ),
  TITLE: __( 'Title', 'ai-engine' ),
  TOPIC: __( 'Topic', 'ai-engine' ),
  TOPICS: __( 'Topics', 'ai-engine' ),
  SPACING: __( 'Spacing', 'ai-engine' ),
  BORDER_RADIUS: __( 'Border Radius', 'ai-engine' ),
  FONT_SIZE: __( 'Font Size', 'ai-engine' ),
  FONT_COLOR: __( 'Font Color', 'ai-engine' ),
  BORDER_COLOR: __( 'Border Color', 'ai-engine' ),
  BACK_PRIMARY_COLOR: __( 'Back Primary Color', 'ai-engine' ),
  BACK_SECONDARY_COLOR: __( 'Back 2nd Color', 'ai-engine' ),
  HEADER_COLOR: __( 'Header Color', 'ai-engine' ),
  HEADER_BACKGROUND_COLOR: __( 'Header Back Color', 'ai-engine' ),
  HEADER_SUBTITLE: __( 'Header Subtitle', 'ai-engine' ),
  BUBBLE_COLOR: __( 'Bubble Color', 'ai-engine' ),
  BACK_USER_COLOR: __( 'Back User Color', 'ai-engine' ),
  BACK_AI_COLOR: __( 'Back AI Color', 'ai-engine' ),
  BACK_AI_SECONDARY_COLOR: __( 'Back AI 2nd Color', 'ai-engine' ),
  AVATAR_MESSAGE_BACKGROUND_COLOR: __( 'Message Back', 'ai-engine' ),
  AVATAR_MESSAGE_FONT_COLOR: __( 'Message Color', 'ai-engine' ),
  POPUP_ICON: __( 'Popup Icon', 'ai-engine' ),
  CUSTOM_ICON: __( 'Custom Icon (URL or Emoticon)', 'ai-engine' ),
  FEATURES: __( 'Features', 'ai-engine' ),
  TIMEFRAME: __( 'Timeframe', 'ai-engine' ),
  ABSOLUTE: __( 'Absolute', 'ai-engine' ),
  NONE: __( 'None', 'ai-engine' ),
  EDITORS_ADMINS: __( 'Editors & Admins', 'ai-engine' ),
  ADMINS_ONLY: __( 'Admins Only', 'ai-engine' ),
  MAINTENANCE: __( 'Maintenance', 'ai-engine' ),
  CREDITS: __( 'Credits', 'ai-engine' ),
  TYPE: __( 'Type', 'ai-engine' ),
  LIMITS: __( 'Limits', 'ai-engine' ),
  USERS: __( 'Users', 'ai-engine' ),
  USER: __( 'User', 'ai-engine' ),
  GUESTS: __( 'Guests', 'ai-engine' ),
  GUEST: __( 'Guest', 'ai-engine' ),
  OPENAI: __( 'Open AI', 'ai-engine' ),
  LICENSE_TAB: __( 'License', 'ai-engine' ),
  FINETUNES: __( 'Finetunes', 'ai-engine' ),
  MODELS: __( 'Models', 'ai-engine' ),
  FILES: __( 'Files', 'ai-engine' ),
  ASSISTANT: __( 'Assistant', 'ai-engine' ),
  ASSISTANTS: __( 'Assistants', 'ai-engine' ),
  UTILITIES: __( 'Utilities', 'ai-engine' ),
  POSTS_SUGGESTIONS: __( 'AI Copilot, AI Suggestions, Magic Wands', 'ai-engine' ),
  POSTS_SUGGESTIONS_HELP: __( 'Tools to brainstorm/write faster and better.', 'ai-engine' ),
  GENERATORS: __( 'Generators', 'ai-engine' ),
  CONTENT_GENERATOR: __( 'Content Generator', 'ai-engine' ),
  CONTENT_GENERATOR_HELP: __( 'Transform ideas into polished articles with AI-powered content creation.', 'ai-engine' ),
  IMAGES_GENERATOR: __( 'Images Generator', 'ai-engine' ),
  IMAGES_GENERATOR_HELP: __( 'Bring your vision to life with stunning AI-generated visuals.', 'ai-engine' ),
  IMAGES_GENERATOR_INTRO: __( 'Create stunning visuals with AI-powered image generation. Use detailed prompts, customize styles and resolutions, and generate multiple variations. Perfect for creative projects, marketing materials, and visual content.', 'ai-engine' ),
  PLAYGROUND: __( 'Playground', 'ai-engine' ),
  PLAYGROUND_HELP: __( 'Experiment with AI models and unlock endless creative possibilities.', 'ai-engine' ),
  FORMS: __( 'Forms', 'ai-engine' ),
  FORMS_HELP: __( 'Create dynamic, intelligent forms that adapt and respond based on user input with conditional logic.', 'ai-engine' ),
  SEARCH: __( 'Search', 'ai-engine' ),
  SEARCH_HELP: __( 'Override the default WordPress search with AI powered keywords or embeddings.', 'ai-engine' ),
  INSIGHTS_HELP: __( 'Enable Query Logs, Usage and Limits.', 'ai-engine' ),
  CLIENT_DEBUG: __( 'Client Debug', 'ai-engine' ),
  CLIENT_DEBUG_HELP: __( 'Debugging information for Chatbots and Forms will be displayed in the Browser Console.', 'ai-engine' ),
  SERVER_DEBUG: __( 'Server Debug', 'ai-engine' ),
  SERVER_DEBUG_HELP: __( 'API calls and server events will be logged and displayed in the Logs Console.', 'ai-engine' ),
  MCP_DEBUG: __( 'MCP Debug', 'ai-engine' ),
  MCP_DEBUG_HELP: __( 'Debugging information from MCP will be written directly to the PHP error logs using error_log().', 'ai-engine' ),
  QUERIES_DEBUG: __( 'Queries Debug', 'ai-engine' ),
  QUERIES_DEBUG_HELP: __( 'Full queries and responses will be written directly to the PHP error logs using error_log().', 'ai-engine' ),
  DEV_MODE: __( 'Dev Mode', 'ai-engine' ),
  DEV_MODE_HELP: __( 'Run tasks frequently for debugging.', 'ai-engine' ),
  CLEAR_LOGS: __( 'Clear Logs', 'ai-engine' ),
  REFRESH_LOGS: __( 'Refresh Logs', 'ai-engine' ),
  API_KEY: __( 'API Key', 'ai-engine' ),
  USAGE_HELP: __( 'Estimates only. Check your AI service for actual costs. Insights module provides better accuracy.', 'ai-engine' ),
  RESET_USAGE_SURE: __( 'Are you sure you want to reset the usage data?', 'ai-engine' ),
  USAGE_PRO_HELP: __( 'If you would like to have better control on the amounts, add conditions or set limits to the usage of the AI, consider %s.', 'ai-engine' ),
  USAGE_PRO_HELP_URL: 'https://meowapps.com/ai-engine/',
  USAGE_PRO_HELP_LINK_TEXT: __( 'AI Engine Pro ↗', 'ai-engine' ),
  LANGUAGE: __( 'Language', 'ai-engine' ),
  HIDE: __( 'Hide', 'ai-engine' ),
  SHOW: __( 'Show', 'ai-engine' ),
  CONTENT: __( 'Content', 'ai-engine' ),
  IMAGES: __( 'Images', 'ai-engine' ),
  IMAGES_AND_FILES: __( 'Images & Files', 'ai-engine' ),
  EXCERPT: __( 'Excerpt', 'ai-engine' ),
  GENERATE: __( 'Generate', 'ai-engine' ),
  MODEL_PARAMS: __( 'Model Params', 'ai-engine' ),
  CONTEXT_PARAMS: __( 'Context Params', 'ai-engine' ),
  PROMPT: __( 'Prompt', 'ai-engine' ),
  PROMPTS: __( 'Prompts', 'ai-engine' ),
  LABEL: __( 'Label', 'ai-engine' ),
  SYSTEM: __( 'System', 'ai-engine' ),
  SHORTCODE: __( 'Shortcode', 'ai-engine' ),
  SHORTCODES: __( 'Shortcodes', 'ai-engine' ),
  RESOLVE: __( 'Resolve', 'ai-engine' ),
  MAX_MESSAGES: __( 'Max Messages', 'ai-engine' ),
  INPUT_MAX_LENGTH: __( 'Input Max Length', 'ai-engine' ),
  COMPLIANCE_TEXT: __( 'Compliance Text', 'ai-engine' ),
  MODERATION: __( 'Moderation', 'ai-engine' ),
  MODERATION_HELP: __( 'Moderation features with AI.', 'ai-engine' ),
  FORMATTING: __( 'Formatting', 'ai-engine' ),
  FORMATTING_HELP: __( 'Format the reply from AI into HTML. This is already done automatically if Markdown is detected in the reply.', 'ai-engine' ),
  LOGS: __( 'Logs', 'ai-engine' ),
  QUERY: __( 'Query', 'ai-engine' ),
  REPLY: __( 'Reply', 'ai-engine' ),
  CODE: __( 'Code', 'ai-engine' ),
  EMBEDDINGS: __( 'Embeddings', 'ai-engine' ),
  QUERY_LOGS: __( 'Query Logs', 'ai-engine' ),
  KNOWLEDGE: __( 'Knowledge', 'ai-engine' ),
  KNOWLEDGE_HELP: __( 'Searchable data for AI. Powered by <b>embeddings</b> for now, alternatives will come later.', 'ai-engine' ),
  REMOTE_ACCESS: __( 'Remote Access', 'ai-engine' ),
  OTHERS: __( 'Others', 'ai-engine' ),
  PINECONE_APIKEY_HELP: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  PINECONE_APIKEY_URL: 'https://app.pinecone.io/organizations/keys',
  PINECONE_APIKEY_LINK_TEXT: __( 'Pinecone Account ↗', 'ai-engine' ),
  QDRANT_APIKEY_HELP: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  QDRANT_APIKEY_URL: 'https://cloud.qdrant.io/accounts/',
  QDRANT_APIKEY_LINK_TEXT: __( 'Qdrant Account ↗', 'ai-engine' ),
  SERVER: __( 'Server', 'ai-engine' ),
  PINECONE_SERVER_HELP: __( 'The URL of your host (check your Indexes).', 'ai-engine' ),
  PINECONE_NAMESPACE_HELP: __( 'The namespace is used to separate the data from other data. This allows you to use the same server/index on more than one website. This is optional.', 'ai-engine' ),
  QDRANT_SERVER_HELP: __( 'The URL of your cluster (known as Cluster URL).', 'ai-engine' ),
  QDRANT_COLLECTION_HELP: __( 'The collection keeps data apart so you can use one cluster for many websites. If there\'s no collection, Qdrant makes one with 1536 dimensions and uses cosine similarity.', 'ai-engine' ),
  COST: __( 'Cost', 'ai-engine' ),
  USAGE: __( 'Usage', 'ai-engine' ),
  USAGE_ESTIMATES_NOTE: __( 'Costs and tokens are estimates. For accurate data and detailed analytics, visit the Insights tab.', 'ai-engine' ),
  ACTIVITY: __( 'Activity', 'ai-engine' ),
  TRANSCRIPTION: __( 'Transcription', 'ai-engine' ),
  TRANSCRIPTION_HELP: __( 'Introduces a \'Transcribe\' tab to easily transform audio/images into text and get AI answers in JSON format.', 'ai-engine' ),
  AUDIO_TRANSCRIPTION: __( 'Audio-to-Text', 'ai-engine' ),
  IMAGE_TRANSCRIPTION: __( 'Image-to-Text', 'ai-engine' ),
  AUDIO_TO_TEXT: __( 'Audio ➡ Text', 'ai-engine' ),
  IMAGE_TO_TEXT: __( 'Image ➡ Text', 'ai-engine' ),
  EMBEDDINGS_ENV: __( 'Environment', 'ai-engine' ),
  EMBEDDINGS_INDEX: __( 'Index', 'ai-engine' ),
  NAMESPACE: __( 'Namespace', 'ai-engine' ),
  NAMESPACES: __( 'Namespaces', 'ai-engine' ),
  NAMESPACE_HELP: __( 'The namespace is used to separate the data from other data. This allows you to use the same index on more than one website.', 'ai-engine' ),
  NAMESPACES_HELP: __( 'Enter the namespaces you would like to use on this site, separated by commas.', 'ai-engine' ),
  ERROR: __( 'Error', 'ai-engine' ),
  RETRY: __( 'Retry', 'ai-engine' ),
  AUTO_RETRY: __( 'Auto Retry', 'ai-engine' ),
  SKIP: __( 'Skip', 'ai-engine' ),
  AUTO_SKIP: __( 'Auto Skip', 'ai-engine' ),
  STOP: __( 'Stop', 'ai-engine' ),
  AUTO_RETRY_DESCRIPTION: __( 'Auto Retry retries actions up to 10 times with increasing delay to avoid timeouts.', 'ai-engine' ),
  WIDTH: __( 'Width', 'ai-engine' ),
  MAX_HEIGHT: __( 'Max Height', 'ai-engine' ),
  APPEARANCE: __( 'Appearance', 'ai-engine' ),
  THRESHOLDS: __( 'Thresholds', 'ai-engine' ),
  DASHBOARD: __( 'Dashboard', 'ai-engine' ),
  ADVANCED: __( 'Advanced', 'ai-engine' ),
  DISCUSSIONS: __( 'Discussions', 'ai-engine' ),
  DISCUSSION_TITLES: __( 'Discussion Titles', 'ai-engine' ),
  SUMMARIZE: __( 'Summarize', 'ai-engine' ),
  ROWS: __( 'Rows', 'ai-engine' ),
  POST_TYPE: __( 'Post Type', 'ai-engine' ),
  GENERATE_CONTENT: __( 'Generate Content', 'ai-engine' ),
  GENERATE_IMAGES: __( 'Generate Images', 'ai-engine' ),
  REST_API: __( 'Public API', 'ai-engine' ),
  ADMIN_BAR: __( 'Admin Bar', 'ai-engine' ),
  REFRESH: __( 'Refresh', 'ai-engine' ),
  DELETE: __( 'Delete', 'ai-engine' ),
  DELETE_ALL: __( 'Delete All', 'ai-engine' ),
  DELETE_SELECTED: __( 'Delete Selected', 'ai-engine' ),
  OPENAI_ORGANIZATION_ID: __( 'Organization ID', 'ai-engine' ),
  OPENAI_AZURE_API_KEY: __( 'API Key', 'ai-engine' ),
  OPENAI_AZURE_DEPLOYMENT_NAME: __( 'Deployment Name', 'ai-engine' ),
  OPENAI_AZURE_DEPLOYMENTS: __( 'Deployments', 'ai-engine' ),
  ENDPOINT: __( 'Endpoint', 'ai-engine' ),
  HUGGINGFACE_MODELS: __( 'Models', 'ai-engine' ),
  HUGGINGFACE_MODEL_NAME: __( 'Name', 'ai-engine' ),
  HUGGINGFACE_MODEL_URL: __( 'API URL', 'ai-engine' ),
  THEME: __( 'Theme', 'ai-engine' ),
  THEMES: __( 'Themes', 'ai-engine' ),
  BANNED_WORDS: __( 'Banned Words', 'ai-engine' ),
  WORD_BOUNDARIES: __( 'Word Boundaries', 'ai-engine' ),
  IGNORE: __( 'Ignore', 'ai-engine' ),
  BANNED_IPS: __( 'Banned IPs', 'ai-engine' ),
  SECURITY: __( 'Security', 'ai-engine' ),
  POST_TYPES: __( 'Post Types', 'ai-engine' ),
  COPY_BUTTON: __( 'Copy Button', 'ai-engine' ),
  AI_AVATAR: __( 'AI Avatar', 'ai-engine' ),
  GUEST_AVATAR: __( 'Guest Avatar', 'ai-engine' ),
  SITE_WIDE_CHATBOT: __( 'Site-Wide Chatbot', 'ai-engine' ),
  QUERIES_DATA: __( 'Queries Data', 'ai-engine' ),
  QUERIES_FORMS_DATA: __( 'Queries Form Data', 'ai-engine' ),
  WEBSPEECH_API: __( 'Web Speech API', 'ai-engine' ),
  GDPR_CONSENT: __( 'GDPR Consent', 'ai-engine' ),
  GDPR_TEXT: __( 'GDPR Text', 'ai-engine' ),
  GDPR_BUTTON: __( 'GDPR Button', 'ai-engine' ),
  FIX: __( 'Fix', 'ai-engine' ),
  SPEECH_RECOGNITION: __( 'Speech Recognition', 'ai-engine' ),
  SPEECH_SYNTHESIS: __( 'Speech Synthesis', 'ai-engine' ),
  QUERIES: __( 'Queries', 'ai-engine' ),
  LOCAL_MEMORY: __( 'Local Memory', 'ai-engine' ),
  ACTIONS: __( 'Actions', 'ai-engine' ),
  RESET: __( 'Reset', 'ai-engine' ),
  INCIDENTS_OPENAI: __( 'Incidents (OpenAI)', 'ai-engine' ),
  PREVIEW: __( 'Preview', 'ai-engine' ),
  LEGACY_FORMS: __( 'Legacy Forms', 'ai-engine' ),
  LEGACY_FEATURES: __( 'Legacy Features', 'ai-engine' ),
  DUPLICATE: __( 'Duplicate', 'ai-engine' ),
  CHATBOT_EDITOR: __( 'Chatbot Editor', 'ai-engine' ),
  THEME_EDITOR: __( 'Theme Editor', 'ai-engine' ),
  STREAMING: __( 'Streaming', 'ai-engine' ),
  SYNTAX_HIGHLIGHT: __( 'Syntax Highlight', 'ai-engine' ),
  EVENT_LOGS: __( 'Event Logs', 'ai-engine' ),
  PRIVACY_FIRST: __( 'Privacy First', 'ai-engine' ),
  DATA_NOT_AVAILABLE: __( 'Data not available.', 'ai-engine' ),
  EXPORT: __( 'Export', 'ai-engine' ),
  IMPORT: __( 'Import', 'ai-engine' ),
  MODIFY_EMBEDDING: __( 'Modify Embedding', 'ai-engine' ),
  ADD_EMBEDDING: __( 'Add Embedding', 'ai-engine' ),
  DEV_TOOLS: __( 'Dev Tools', 'ai-engine' ),
  SINGLE_GENERATE: __( 'Single Generate', 'ai-engine' ),
  PUBLIC_API: __( 'Public API', 'ai-engine' ),
  USER_INTERFACE: __( 'User Interface', 'ai-engine' ),
  INTRO_MESSAGE: __( 'Intro Message', 'ai-engine' ),
  ADDONS: __( 'Add-ons', 'ai-engine' ),
  AI_ENVIRONMENT_DEFAULTS: __( 'Default Environments for AI', 'ai-engine' ),
  ENVIRONMENTS_FOR_AI: __( 'Environments for AI', 'ai-engine' ),
  ENVIRONMENT_ID: __( 'Environment ID', 'ai-engine' ),
  EMBEDDINGS_ENVIRONMENT_DEFAULT: __( 'Default Embeddings Environment', 'ai-engine' ),
  ENVIRONMENT: __( 'Environment', 'ai-engine' ),
  PLUGIN_DATA: __( 'Plugin Data', 'ai-engine' ),
  PLUGIN_DATA_DESCRIPTION: __( "The database and all the options of the plugin will be removed on uninstall.", 'ai-engine' ),
  RESET_LIMITS: __( 'Reset Limits', 'ai-engine' ),
  VISION: __( 'Vision', 'ai-engine' ),
  FILE_SEARCH: __( 'File Search', 'ai-engine' ),
  PROMPT_TO_JSON: __( 'Prompt ➡ JSON', 'ai-engine' ),
  RESOLUTION: __( 'Resolution', 'ai-engine' ),
  DEFAULT: __( 'Default', 'ai-engine' ),
  DEFAULTS: __( 'Defaults', 'ai-engine' ),
  DEFAULT_FAST: __( 'Fast', 'ai-engine' ),
  REFRESH_MODELS: __( 'Refresh Models', 'ai-engine' ),
  AUDIO: __( 'Audio', 'ai-engine' ),
  JSON: __( 'JSON', 'ai-engine' ),
  AI_ENVIRONMENT: __( 'AI Environment', 'ai-engine' ),
  OVERRIDE_DEFAULTS: __( 'Override Defaults', 'ai-engine' ),
  REGION: __( 'Region', 'ai-engine' ),
  PROJECT_ID: __( 'Project ID', 'ai-engine' ),
  BEARER_TOKEN: __( 'Bearer Token', 'ai-engine' ),
  DIMENSIONS: __( 'Dimensions', 'ai-engine' ),
  EMBEDDINGS_MODEL: __( 'Embeddings Model', 'ai-engine' ),
  MIN_SCORE: __( 'Min Score', 'ai-engine' ),
  MAX_SELECT: __( 'Max Results', 'ai-engine' ),
  QDRANT_COLLECTION: __( 'Collection', 'ai-engine' ),
  INSTRUCTIONS: __( 'Instructions', 'ai-engine' ),
  FUNCTIONS: __( 'Functions', 'ai-engine' ),
  TOOLS: __( 'Tools & Capabilities', 'ai-engine' ),
  WEB_SEARCH: __( 'Web Search', 'ai-engine' ),
  IMAGE_GENERATION: __( 'Image Generation', 'ai-engine' ),
  CODE_INTERPRETER: __( 'Code Interpreter', 'ai-engine' ),
  ALLOWED_MIME_TYPES: __( 'Allowed Mime Types', 'ai-engine' ),
  SELECT_MIME_TYPES: __( 'Select', 'ai-engine' ),
  MIME_TYPE_SELECTOR: __( 'MIME Type Selector', 'ai-engine' ),
  AUTO_SELECT: __( 'Auto-Select', 'ai-engine' ),
  CUSTOM_MIME_TYPES: __( 'Custom MIME Types', 'ai-engine' ),
  HISTORY_STRATEGY: __( 'History Strategy', 'ai-engine' ),
  AUTOMATIC: __( 'Automatic', 'ai-engine' ),
  FULL_HISTORY: __( 'Full History', 'ai-engine' ),
  INCREMENTAL: __( 'Incremental', 'ai-engine' ),
  BUBBLE: __( 'Bubble', 'ai-engine' ),
  TABS: __( 'Tabs', 'ai-engine' ),
  DROPDOWN: __( 'Dropdown', 'ai-engine' ),
  CHATBOT_SELECT: __( 'Chatbot Select', 'ai-engine' ),
  CONDITIONS: __( 'Conditions', 'ai-engine' ),
  CONDITION: __( 'Condition', 'ai-engine' ),
  ADD_CONDITION: __( 'Add Condition', 'ai-engine' ),
  REMOVE: __( 'Remove', 'ai-engine' ),
  MCP_NO_OPTIONS: __( 'MCP is enabled but no options are selected. Please enable at least one option.', 'ai-engine' ),
  ORCHESTRATION: __( 'Orchestration', 'ai-engine' ),
  ORCHESTRATION_HELP: __( 'Connect AI models to external tools and services through MCP servers. Currently, MCP servers need to be set up in Settings > Orchestration.', 'ai-engine' ),
  MCP_SERVERS: __( 'MCP Servers', 'ai-engine' ),
  MCP_FUNCTIONS: __( 'MCP Functions', 'ai-engine' ),
  URL: __( 'URL', 'ai-engine' ),
  TOKEN: __( 'Token', 'ai-engine' ),
  SERVER_ID: __( 'Server ID', 'ai-engine' ),
  PRICE: __( 'Price', 'ai-engine' ),
  UNITS: __( 'Units', 'ai-engine' ),
  FAMILY: __( 'Family', 'ai-engine' ),
  DAILY: __( 'Daily', 'ai-engine' ),
  MONTHLY: __( 'Monthly', 'ai-engine' ),
  UNKNOWN_MODEL: __( 'Unknown Model', 'ai-engine' ),
  CONTEXTUAL: __( 'Contextual', 'ai-engine' ),
  COMPLETION: __( 'Completion', 'ai-engine' ),
  TOTAL_MAX_TOKENS: __( 'Total Max Tokens', 'ai-engine' ),
  RECOMMENDED: __( 'Recommended', 'ai-engine' ),
  SESSION: __( 'Session', 'ai-engine' ),
  LAST_REQUEST: __( 'Last Request', 'ai-engine' ),
  RESET_USAGE: __( 'Reset Usage', 'ai-engine' ),
  COPIED: __( 'Copied!', 'ai-engine' ),
  CLIPBOARD_ERROR: __( 'Clipboard is not enabled (only works with https).', 'ai-engine' ),
  VIEW_IN_PLATFORM: __( 'View in OpenAI Platform', 'ai-engine' ),
};

i18n.FORMS = {
  PROMPT_INFO: __( 'The template of your prompt. To re-use the data entered by the user, use the name of that field between curly braces. Example: Recommend me {MUSIC_TYPE} artists. You can also use an ID as an input, like this: ${#myfield}. Finally, if you wish the output to be formatted, add: \'Use Markdown.\'."', 'ai-engine' ),
  OUTPUT: __( 'Output', 'ai-engine' ),
  OUTPUT_ELEMENT: __( 'Output Element', 'ai-engine' ),
  OUTPUT_ELEMENT_INFO: __( 'The result will be written to this element. If you wish to simply display the result in an Output Block, use its ID. For instance, if its ID is mwai-666, use \'#mwai-666\'.', 'ai-engine' ),
};

i18n.HELP = {
  TEMPERATURE: __( 'Between 0 and 1. Higher values means the model will take more risks.', 'ai-engine' ),
  MAX_TOKENS: __( 'The maximum number of tokens to generate. The model will stop generating once it hits this limit.', 'ai-engine' ),
  STOP_SEQUENCE: __( 'The sequence of tokens that will cause the model to stop generating text. You absolutely need this with fine-tuned models.', 'ai-engine' ),
  COST: __( 'Keeps track of the current costs.', 'ai-engine' ),
  RESOLVE_SHORTCODE: __( 'Will resolve the shortcode in your content when needed (Content-Aware will use this, for instance).', 'ai-engine' ),
  FINETUNES: __( 'Train your own AI models.', 'ai-engine' ),
  DISCUSSIONS: __( 'Keep the conversations and enable browsing them via the Conversations tab.', 'ai-engine' ),
  DISCUSSION_TITLES: __( 'Generate titles for the discussions automatically with AI.', 'ai-engine' ),
  DISCUSSION_SUMMARY: __( 'Automatically generate a brief summary of the discussion using the default (fast) model. It will be used as the discussion title.', 'ai-engine' ),
  AZURE_DEPLOYMENTS: __( 'Add your deployments below and define what kind of model they are. GPT-5 models will automatically use the Responses API, while other models will use the Chat Completions API.', 'ai-engine' ),
  BANNED_WORDS: __( 'Reject queries containing these words; separate with commas.', 'ai-engine' ),
  WORD_BOUNDARIES: __( 'Ignore standard word separation (space) and match banned words anywhere in the text.', 'ai-engine' ),
  BANNED_IPS: __( 'Block access from specified IP addresses or ranges using CIDR notation; separate with commas.', 'ai-engine' ),
  GDPR_CONSENT: __( 'If enabled, the user will have to accept the conditions before using the chatbot.', 'ai-engine' ),
  POST_TYPES: __( 'Enable for these post types; separate with commas.', 'ai-engine' ),
  POST_STATUS: __( 'Enable for these post statuses (publish, draft, future, private, etc); separate with commas.', 'ai-engine' ),
  POST_CATEGORIES: __( 'Enable for these categories (slugs); separate with commas. If none, it will be enabled for all.', 'ai-engine' ),
  CONTEXT_MAX_LENGTH: __( 'Truncate the context (Content-Aware, Embeddings, etc) to make sure it is below this number of characters.', 'ai-engine' ),
  MAX_MESSAGES: __( 'Maximum number of historical messages that is sent to the AI model.', 'ai-engine' ),
  INPUT_MAX_LENGTH: __( 'Maximum number of characters that can be input by the user.', 'ai-engine' ),
  STATISTICS: __( ' In the Insights tab, you can browse through all your users\' activity. Contextual data is excluded unless you activate the options below. Make sure your users are aware of this.', 'ai-engine' ),
  QUERIES_DATA: __( 'Record the queries and their replies.', 'ai-engine' ),
  QUERIES_FORMS_DATA: __( 'Capture form data neatly for simple reuse.', 'ai-engine' ),
  SPEECH_RECOGNITION: __( 'Enable speech-to-text. Depends on the browser and OS used by the user.', 'ai-engine' ),
  SPEECH_SYNTHESIS: __( 'Enable text-to-speech.', 'ai-engine' ),
  CUSTOM_SHORTCODE: __( 'Prefer the above version. If you need many chatbots, you can custom shortcodes, like the one below. Custom shortcodes are based on the default chatbot, and their attributes override the default ones.', 'ai-engine' ),
  USER_FILTER: __( 'Type an User ID, or an IP.', 'ai-engine' ),
  STREAMING: __( 'The AI\'s response will appear as it\'s being created. Be cautious: this feature\'s ability to manage statistics, limits, and filters is still in its beta phase.', 'ai-engine' ),
  SYNTAX_HIGHLIGHT: __( 'Enable syntax highlighting for the code blocks.', 'ai-engine' ),
  EVENT_LOGS: __( 'Display streaming events and function calls in the chatbot interface for debugging. Requires Streaming to be enabled. Currently only visible in chatbots.', 'ai-engine' ),
  PRIVACY_FIRST: __( 'Only essential data is stored. IPs, conversations, and other private details are minimized and kept as anonymous as possible.', 'ai-engine' ),
  DEV_TOOLS: __( 'Enable a new tab with debugging tools. For developers only.', 'ai-engine' ),
  DEV_MODE: __( 'Run tasks very frequently for debugging.', 'ai-engine' ),
  PUBLIC_API: __( 'Enable the Public REST API.', 'ai-engine' ),
  INTRO_MESSAGE: __( 'Enable introduction messages on some modules.', 'ai-engine' ),
  ADDONS: __( 'Enable the AI Addons section under the Meow Apps menu.', 'ai-engine' ),
  OPENAI_API_KEY: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  OPENAI_API_KEY_URL: 'https://platform.openai.com/api-keys',
  OPENAI_API_KEY_LINK_TEXT: __( 'OpenAI Account ↗', 'ai-engine' ),
  OPENAI_ORGANIZATION_ID: __( 'You can link this environment to an %s. This is optional.', 'ai-engine' ),
  OPENAI_ORGANIZATION_URL: 'https://platform.openai.com/account/organization',
  OPENAI_ORGANIZATION_LINK_TEXT: __( 'Organization ↗', 'ai-engine' ),
  AZURE_API_KEY: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  AZURE_API_KEY_URL: 'https://oai.azure.com/portal',
  AZURE_API_KEY_LINK_TEXT: __( 'Azure Account ↗', 'ai-engine' ),
  AZURE_ENDPOINT: __( 'Enter just your Azure resource domain (e.g., <code>myresource.openai.azure.com</code>). AI Engine will automatically construct the appropriate API endpoint based on the model type.', 'ai-engine' ),
  AZURE_REGION: __( 'Optional: Specify your Azure deployment region (e.g., <code>swedencentral</code>, <code>eastus2</code>, <code>westus</code>). This is required for Realtime API connections. If not specified, AI Engine will attempt to auto-detect the region from your endpoint or use <code>eastus2</code> as default.', 'ai-engine' ),
  ANTHROPIC_API_KEY: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  ANTHROPIC_API_KEY_URL: 'https://console.anthropic.com/settings/keys',
  ANTHROPIC_API_KEY_LINK_TEXT: __( 'Anthropic Account ↗', 'ai-engine' ),
  GOOGLE_API_KEY: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  GOOGLE_API_KEY_URL: 'https://aistudio.google.com/apikey',
  GOOGLE_API_KEY_LINK_TEXT: __( 'Google AI Studio ↗', 'ai-engine' ),
  OPENROUTER_API_KEY: __( 'You can get your API Keys in your %s.', 'ai-engine' ),
  OPENROUTER_API_KEY_URL: 'https://openrouter.ai/keys',
  OPENROUTER_API_KEY_LINK_TEXT: __( 'OpenRouter Account ↗', 'ai-engine' ),
  QDRANT: __( 'Use the code <b>#AIENGINE5</b> when you %s. You will get 5% off.', 'ai-engine' ),
  QDRANT_URL: 'https://qdrant.to/cloud',
  QDRANT_LINK_TEXT: __( 'Create a Qdrant Account ↗', 'ai-engine' ),
  ASSISTANTS: __( 'The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks.', 'ai-engine' ),
  ASSISTANTS_INTRO: __( 'The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks. To create them, head to the %s dashboard, then <b>Refresh Assistants</b> here. You can use an assistant in your chatbots by switching the <b>Mode</b> to <b>Assistant</b>.', 'ai-engine' ),
  ASSISTANTS_INTRO_URL: 'https://beta.openai.com/assistants',
  ASSISTANTS_INTRO_LINK_TEXT: __( 'OpenAI Assistants ↗', 'ai-engine' ),
  ASSISTANTS_WARNINGS: __( 'Assistants are also %1$s, both for OpenAI and AI Engine. OpenAI did not add streaming support for them yet. Pricing is still quite unclear and %2$s. AI Engine can only perform an estimation. If you want to discuss assistants with other users, visit the %3$s.', 'ai-engine' ),
  ASSISTANTS_BETA_URL: 'https://platform.openai.com/docs/api-reference/assistants',
  ASSISTANTS_BETA_TEXT: __( 'in beta ↗', 'ai-engine' ),
  ASSISTANTS_PRICING_URL: 'https://openai.com/pricing',
  ASSISTANTS_PRICING_TEXT: __( 'tricky ↗', 'ai-engine' ),
  ASSISTANTS_DISCORD_URL: 'https://discord.gg/bHDGh38',
  ASSISTANTS_DISCORD_TEXT: __( 'Meow Apps Discord Server ↗', 'ai-engine' ),
  BEARER_TOKEN: __( 'The Public API will be usable by using this Bearer Token. If not set, you will need to %s by using the <i>mwai_allow_public_api</i> filter.', 'ai-engine' ),
  BEARER_TOKEN_URL: 'https://meowapps.com/ai-engine/api/#public-rest-api',
  BEARER_TOKEN_LINK_TEXT: __( 'build your own authentication ↗', 'ai-engine' ),
  REST_API_INTRO: __( 'The Public API enables integration with automation platforms and external applications. Use it with %s, n8n, Zapier, or any platform that supports HTTP requests to automate AI workflows and connect your WordPress site with other services.', 'ai-engine' ),
  REST_API_MAKE_URL: 'https://www.make.com/en/integrations/ai-engine',
  REST_API_MAKE_TEXT: __( 'Make.com ↗', 'ai-engine' ),
  MCP_BEARER_TOKEN: __( 'A secret token used to authenticate AI assistants. Required for secure access to your WordPress site.', 'ai-engine' ),
  MCP_INTRO: __( 'ChatGPT works perfectly with the No-Auth URL. %s for step-by-step setup. For Claude, which cannot handle SSE directly, %s is needed.', 'ai-engine' ),
  MCP_TUTORIAL_URL: 'https://ai.thehiddendocs.com/mcp/mcp-server-chatgpt/',
  MCP_TUTORIAL_TEXT: __( 'Check this tutorial ↗', 'ai-engine' ),
  MCP_CLAUDE_TUTORIAL_URL: 'https://ai.thehiddendocs.com/mcp/mcp-server-claude/',
  MCP_CLAUDE_TUTORIAL_TEXT: __( 'a relay ↗', 'ai-engine' ),
  MCP_SERVER_URL: __( 'The URL of the MCP server. Must start with https://', 'ai-engine' ),
  MCP_SERVER_TOKEN: __( 'Bearer token for authenticating with the MCP server.', 'ai-engine' ),
  REST_API_DOCS_URL: 'https://ai.thehiddendocs.com/public-rest-api/',
  REST_API_DOCS_TEXT: __( 'documentation ↗', 'ai-engine' ),
  PHP_API_FUNCTIONS_URL: 'https://ai.thehiddendocs.com/php-functions/',
  PHP_API_FUNCTIONS_TEXT: __( 'PHP Functions ↗', 'ai-engine' ),
  PHP_API_CLASSES_URL: 'https://ai.thehiddendocs.com/php-classes/',
  PHP_API_CLASSES_TEXT: __( 'PHP Classes ↗', 'ai-engine' ),
  PHP_API_FILTERS_URL: 'https://ai.thehiddendocs.com/php-filters/',
  PHP_API_FILTERS_TEXT: __( 'WordPress Filters ↗', 'ai-engine' ),
  NO_EMBEDDINGS_RESULTS: __( 'No results for this search. Make sure the Minimum Score is not too high.', 'ai-engine' ),
  NO_EMBEDDINGS_ROWS: __( 'No embeddings yet in this environment.', 'ai-engine' ),
  MIN_SCORE: __( 'The minimum score the embeddings need to have to be returned. Between 0 and 100 and defaults to 35.', 'ai-engine' ),
  MAX_SELECT: __( 'The maximum number of embeddings to return and to use as context. Between 1 and 100 and defaults to 10.', 'ai-engine' ),
  FUNCTIONS: __( 'Select the functions to make available for the AI model\'s choice. It will use them to enhance responses and perform specific actions. This feature is known as Function Calling or Tools.', 'ai-engine' ),
  FUNCTIONS_UNAVAILABLE: __( 'There are no functions available. Please use %s to add some. The Pro Version of AI Engine is also required for this feature.', 'ai-engine' ),
  FUNCTIONS_CODE_ENGINE_URL: 'https://wordpress.org/plugins/code-engine/',
  FUNCTIONS_CODE_ENGINE_TEXT: __( 'Code Engine ↗', 'ai-engine' ),
  MCP_SERVERS: __( 'Select the MCP servers to make available for the AI model. These servers provide external tools and capabilities that the AI can use to enhance responses and perform specialized actions.', 'ai-engine' ),
  MCP_SERVERS_UNAVAILABLE: __( 'No MCP servers are available. Configure them in Settings > Orchestration.', 'ai-engine' ),
  TOOLS: __( 'Enable AI tools to enhance your chatbot capabilities. Web Search and Image Generation work with OpenAI and Google. Code Interpreter is OpenAI-only.', 'ai-engine' ),
  WEB_SEARCH: __( 'Allow the AI to search the web for current information', 'ai-engine' ),
  IMAGE_GENERATION: __( 'Allow the AI to generate images based on text descriptions', 'ai-engine' ),
  CODE_INTERPRETER: __( 'Allow the AI to write and run Python code to solve complex problems, process data, and generate visualizations', 'ai-engine' ),
  ALLOWED_MIME_TYPES: __( 'Restrict file uploads to specific mime types. Leave empty to use defaults. Comma-separated list (e.g., image/png, image/jpeg, application/pdf).', 'ai-engine' ),
  HISTORY_STRATEGY: __( 'Control how conversation history is sent to the Responses API. Incremental uses previous_response_id for efficiency, Full History sends all messages.', 'ai-engine' ),
  ADVISOR: __( 'In your Dashboard will be displayed daily recommendations tailored to your WordPress setup. Admins only.', 'ai-engine' ),
  BUBBLE: __( 'The popup will be displayed as a bubble.', 'ai-engine' ),
  ICON_TEXT: __( 'If set, this text will appear next to the icon/bubble.', 'ai-engine' ),
  ICON_TEXT_DELAY: __( 'Delay before text appears.', 'ai-engine' ),
  WIDTH: __( 'Width of the chatbot when open.', 'ai-engine' ),
  OPEN_DELAY: __( 'Auto-open after X seconds.', 'ai-engine' ),
  CHATBOT_SELECT: __( 'Choose how you want to select the chatbot. By default, tabs are used, but you can also use a filterable dropdown if you have many chatbots.', 'ai-engine' ),
};

i18n.SETTINGS = {
  AI_ENV_SETUP: __( 'To leverage the functionalities of AI Engine, it needs to be connected directly to AI services. We recommend starting with OpenAI. Create an account and generate an API Key by visiting the %s website. Once obtained, navigate to the <b>Settings</b> tab and input your OpenAI API Key in the "Environments for AI" section.', 'ai-engine' ),
  AI_ENV_SETUP_URL: 'https://platform.openai.com/api-keys',
  AI_ENV_SETUP_LINK_TEXT: __( 'OpenAI ↗', 'ai-engine' ),
  PINECONE_SETUP: __( 'You choose to use Embeddings. To use them, you need to a Pinecone account. Visit the %s website to create an account, then insert your Pinecone API Key in the <b>Settings</b> tab.', 'ai-engine' ),
  PINECONE_SETUP_URL: 'https://app.pinecone.io',
  PINECONE_SETUP_LINK_TEXT: __( 'Pinecone ↗', 'ai-engine' ),
  INTRO: __( 'Boost your WordPress with AI, now! Please start with our %1$s. Then move to our %2$s. Have a look at our %3$s. And make sure you read the %4$s. Have fun! 🎵', 'ai-engine' ),
  INTRO_TUTORIAL_URL: 'https://meowapps.com/ai-engine/tutorial/',
  INTRO_TUTORIAL_TEXT: __( 'tutorial ↗', 'ai-engine' ),
  INTRO_DOCS_URL: 'https://ai.thehiddendocs.com/',
  INTRO_DOCS_TEXT: __( 'documentation ↗', 'ai-engine' ),
  INTRO_ADDONS_URL: 'https://meowapps.com/products/category/ai-add-ons/',
  INTRO_ADDONS_TEXT: __( 'add-ons ↗', 'ai-engine' ),
  INTRO_DISCLAIMER_URL: 'https://meowapps.com/ai-engine/disclaimer/',
  INTRO_DISCLAIMER_TEXT: __( 'disclaimer ↗', 'ai-engine' ),
  MODULES_INTRO: __( 'To avoid cluttering the UI and your WP, only enable the features you need.', 'ai-engine' ),
  ALERT_INJECT_BUT_NO_POPUP: __( 'You choose to inject the chatbot in your website. You probably also want to use the chatbot in a Popup.', 'ai-engine' ),
  ALERT_CASUALLY_BUT_NO_FINETUNE: __( 'Normally, you should not check the Casually Fine Tuned option with a non-finetuned model. Make sure that\'s what you want.', 'ai-engine' ),
  ALERT_CONTENTAWARE_BUT_NO_CONTENT: __( 'Content Aware requires your Context to use the {CONTENT} placeholder. It will be replaced by the content of page the chatbot is on. More info %s.', 'ai-engine' ),
  ALERT_CONTENTAWARE_URL: 'https://meowapps.com/ai-engine/tutorial/#contextualization',
  ALERT_CONTENTAWARE_LINK_TEXT: __( 'here ↗', 'ai-engine' ),
  SET_AS_DEFAULT_PARAMETERS: __( 'Set as Default Parameters', 'ai-engine' ),
  SET_AS_DEFAULT_PARAMETERS_HELP: __( 'Set the parameters above as the default parameters for the chatbot. You can then use the shortcode [mwai_chat] anywhere on your website.', 'ai-engine' ),
  INJECT_DEFAULT_CHATBOT: __( 'Inject Default Chatbot in Entire Website', 'ai-engine' ),
  INJECT_DEFAULT_CHATBOT_HELP: __( 'Inject the chatbot [mwai_chat] in the entire website.', 'ai-engine' ),
  CHATGPT_STYLE_INTRO: __( 'Keep in mind that you can also style the chatbot (or a specific chatbot, if you use many) by injecting CSS. Have a look %1$s. More information in the %2$s.', 'ai-engine' ),
  CHATGPT_STYLE_CSS_URL: 'https://meowapps.com/ai-engine/tutorial/#apply-custom-style-to-the-chatbot',
  CHATGPT_STYLE_CSS_TEXT: __( 'here ↗', 'ai-engine' ),
  CHATGPT_STYLE_FAQ_URL: 'https://meowapps.com/ai-engine/faq',
  CHATGPT_STYLE_FAQ_TEXT: __( 'FAQ ↗', 'ai-engine' ),
  TYPEWRITER_EFFECT: __( 'Typewriter Effect', 'ai-engine' ),
  TYPEWRITER_EFFECT_HELP: __( 'The reply from AI will be typewrited. This delays the final output! Absolutely not recommended. Please use <b>Streaming</b> instead.', 'ai-engine' ),
  CHATBOT_MODERATION_HELP: __( 'If the conversation seems offensive, the chatbot will reject it.', 'ai-engine' ),
  CUSTOM_URL: __( 'Custom URL', 'ai-engine' ),
  ASSISTANT_NO_FILE_SEARCH: __( 'This assistant does not support File Search. You can activate it on the %s dashboard. Then, use the Refresh button in the Assistants tab.', 'ai-engine' ),
  ASSISTANT_NO_FILE_SEARCH_URL: 'https://platform.openai.com/assistants',
  ASSISTANT_NO_FILE_SEARCH_LINK_TEXT: __( 'OpenAI Assistants ↗', 'ai-engine' ),
  ASSISTANT_FILE_SEARCH: __( 'File Search will be used when the users upload documents. If the user uploads images, those will be handled by AI Vision if the model supports it and if it is enabled.', 'ai-engine' ),
  MCP_SERVERS_INFO: __( 'MCP (Model Context Protocol) servers enable AI models to interact with external tools and systems. The URL must be a secure HTTPS endpoint that implements the MCP protocol. You can configure multiple servers to provide different capabilities to your AI models.', 'ai-engine' ),
  REMOTE_ACCESS_INFO: __( 'AI Engine provides two ways to integrate with external systems: REST API and Model Context Protocol (MCP).<h2>REST API</h2><p>Ideal for automation platforms like Make.com, Zapier, or n8n. Use this when you want to trigger AI operations from external services or integrate AI Engine into your existing workflows.</p><h2>MCP</h2><p><u>How to Use</u></p><ul><li>- <b>Claude Desktop App:</b> Use the <code>mcp.js</code> relay. Check <code>/labs/mcp.md</code> for setup instructions.</li><li>- <b>OpenAI/ChatGPT:</b> Limited to Deep Research mode with only <code>search</code> and <code>fetch</code> tools (requires Tuned Core enabled).</li><li>- <b>Claude.ai:</b> Currently not supported.</li></ul><p><u>Available Tools</u></p><ul><li>- <b>Full access (Claude Desktop):</b> WordPress management, plugin/theme development, SEO Engine, Code Engine snippets</li><li>- <b>Limited access (OpenAI):</b> Only search and fetch WordPress posts/pages</li></ul><p><u>For Developers</u></p><p>Extend functionality using <code>mwai_mcp_tools</code> and <code>mwai_mcp_callback</code> filters. See <code>dev-notes.md</code> for details.</p><p><b>Note:</b> This makes WordPress an MCP server. For connecting TO external MCP servers, use the Orchestration module.</p>', 'ai-engine' ),
  KNOWLEDGE_INFO: __( 'Embeddings are textual data converted into vectors for similarity search. You can manage embeddings in the Knowledge tab, where you can switch from EDIT to AI SEARCH mode to query your knowledge base.<br/><br/>Embeddings are synchronized with vector databases like %1$s or Qdrant. You can create, edit, and search embeddings, then use Sync to process your posts and create/update embeddings as needed.<br/><br/>Both chatbots and AI Forms can use embeddings to enrich their answers with relevant context from your knowledge base.<br/><br/><b>If you want to discuss embeddings with other users, visit the %2$s.</b>', 'ai-engine' ),
  KNOWLEDGE_PINECONE_URL: 'https://www.pinecone.io/',
  KNOWLEDGE_PINECONE_TEXT: __( 'Pinecone ↗', 'ai-engine' ),
  KNOWLEDGE_DISCORD_URL: 'https://discord.gg/bHDGh38',
  KNOWLEDGE_DISCORD_TEXT: __( 'Meow Apps Discord Server ↗', 'ai-engine' ),
  ORCHESTRATION_INFO: __( 'MCP servers extend AI capabilities by providing tools and functions that AI models can call during conversations. Configure external MCP servers here to give your chatbots access to specialized tools like web browsing, file system access, database queries, or custom business logic.<br/><br/>Each server requires a secure HTTPS URL implementing the MCP protocol and may require authentication via bearer token. Once configured, the tools from these servers become available to AI models through function calling.<br/><br/><b>Note:</b> This is for connecting TO external MCP servers. To make your WordPress accessible AS an MCP server for AI agents like Claude, use the MCP option under Remote Access.', 'ai-engine' ),
};

i18n.CHATBOT = {
  CHATBOT_BUILDER: __( 'Chatbot Builder', 'ai-engine' ),
  RESET_PARAMS: __( 'Reset Parameters', 'ai-engine' ),
};

i18n.STATISTICS = {
  ABSOLUTE_HELP: __( 'Using Absolute, Day represents <i>today</i>. Otherwise, the <i>past 24 hours</i>. Same logic applies to the other timeframes.', 'ai-engine' ),
  NO_CREDITS_MESSAGE: __( 'Message for No Credits', 'ai-engine' ),
  FULL_ACCESS_USERS: __( 'Full-Access Users', 'ai-engine' ),
  ENABLE_LIMITS: __( 'Enable Limits', 'ai-engine' ),
};

i18n.CONTENT_GENERATOR = {
  INTRO: __( 'Generate high-quality articles with AI assistance. Create comprehensive content with customizable templates, writing styles, and automatic SEO optimization. Perfect for blogs, documentation, and marketing materials.', 'ai-engine' ),
  TITLE_MISSING: __( 'Title is missing!', 'ai-engine' ),
  SECTIONS_MISSING: __( 'Sections are missing!', 'ai-engine' ),
  SINGLE_GENERATE: __( 'Single Generate', 'ai-engine' ),
  BULK_GENERATE: __( 'Bulk Generate', 'ai-engine' ),
  CONTENT_PARAMS: __( 'Content Params', 'ai-engine' ),
  POST_PARAMS: __( 'Post Params', 'ai-engine' ),
  CONTENT_PARAMS_INTRO: __( 'Input fields are displayed for certain placeholders used in prompts, such as {LANGUAGE} or {WRITING_TONE}', 'ai-engine' ),
  CUSTOM_LANGUAGE: __( 'Custom Language', 'ai-engine' ),
  WRITING_STYLE: __( 'Writing Style', 'ai-engine' ),
  WRITING_TONE: __( 'Writing Tone', 'ai-engine' ),
  CUSTOM_LANGUAGE_HELP: __( 'AI supports all languages with varying quality. %s.', 'ai-engine' ),
  CUSTOM_LANGUAGE_URL: 'https://meowapps.com/ai-engine/faq/#languages',
  CUSTOM_LANGUAGE_LINK_TEXT: __( 'Learn more ↗', 'ai-engine' ),
  MODEL_HELP: __( 'It is recommended to use Turbo or GPT-4 to write texts.', 'ai-engine' ),
  PROMPTS_INTRO: __( 'Prompts represent the exact request sent to the AI. The variables between curly braces will be replaced by the content of the corresponding field. Prompts are saved in your templates.', 'ai-engine' ),
  PROMPT_TITLE: __( 'Prompt for <b>Title</b>', 'ai-engine' ),
  PROMPT_SECTIONS: __( 'Prompt for <b>Sections</b>', 'ai-engine' ),
  PROMPT_CONTENT: __( 'Prompt for <b>Content</b>', 'ai-engine' ),
  PROMPT_EXCERPT: __( 'Prompt for <b>Excerpt</b>', 'ai-engine' ),
  POST_CREATED: __( 'Post Created', 'ai-engine' ),
  POST_CREATED_AS_DRAFT: __( 'The post was created as a draft.', 'ai-engine' ),
  CONTENT_HELP: __( 'You can modify the content before using "Create Post". Markdown is supported, and will be converted to HTML when the post is created.', 'ai-engine' ),
  SECTIONS_HELP: __( 'Add, rewrite, remove, or reorganize those sections as you wish before (re)clicking on "Generate Content". Markdown format is recommended.', 'ai-engine' ),
  GENERATE_EXCERPT: __( 'Generate Excerpt', 'ai-engine' ),
  GENERATE_CONTENT: __( 'Generate Content', 'ai-engine' ),
  GENERATE_SECTIONS: __( 'Generate Sections', 'ai-engine' ),
  PARAGRAPHS_PER_SECTION: __( '# of Paragraphs per Section', 'ai-engine' ),
  NUMBER_OF_SECTIONS: __( '# of Sections', 'ai-engine' ),
  ADVICE: __( 'Advice', 'ai-engine' ),
  SECTIONS: __( 'Sections', 'ai-engine' ),
  USE_MAX_TOKENS: __( 'Use Max Tokens', 'ai-engine' ),
  TOPICS_HELP: __( 'Write or paste your topics below. Each line will be used as a topic. The <b>Context</b> on the left will be applied to all topics. The same <b>Params</b> and <b>Prompts</b> will be used as with the <b>Single Generate</b>, so make sure you get satisfying results with it first. This <b>takes time</b>, so relax and enjoy some coffee ☕️ and tea 🍵 :)', 'ai-engine' ),
  GENERATED_POSTS: __( 'Generated Posts', 'ai-engine' ),
  USE_TOPICS_AS_TITLES: __( 'Use Topics as Titles', 'ai-engine' ),
  NOTHING_YET: __( 'Nothing yet.', 'ai-engine' ),
  BULK_ERROR_CONFIRM: __( 'An error was caught ({MESSAGE}). Should we continue?', 'ai-engine' ),
  GENERATE_ALL: __( 'Generate All', 'ai-engine' ),
  EDIT_POST: __( 'Edit Post', 'ai-engine' ),
  CREATE_POST: __( 'Create Post', 'ai-engine' ),
  TITLE_TOO_SHORT: __( 'The title is too short. It should be at least 3 words.', 'ai-engine' ),
  TITLE_TOO_SHORT_2: __( 'The title is too short.  It should be at least 40 characters.', 'ai-engine' ),
  TITLE_TOO_LONG: __( 'The title is too long. It should be less than 8 words.', 'ai-engine' ),
  TITLE_TOO_LONG_2: __( 'The title is too long. It should be less than 70 characters.', 'ai-engine' ),
};

i18n.TEMPLATES = {
  TEMPLATE: __( 'Template', 'ai-engine' ),
  TEMPLATES: __( 'Templates', 'ai-engine' ),
  DELETE_CONFIRM: __( 'Are you sure you want to delete this template?', 'ai-engine' ),
  DELETE_ALL_CONFIRM: __( 'Are you sure you want to delete all the templates?', 'ai-engine' ),
  NEW_TEMPLATE_NAME: __( 'New Template', 'ai-engine' ),
  EDIT: __( 'EDIT', 'ai-engine' )
};

i18n.PLAYGROUND = {
  INTRO: __( 'Welcome to the AI Playground! Here, you can play with different AI models and ask the UI to perform various tasks for you. You can ask it to write, rewrite, or translate an article, categorize words or elements into groups, write an email, etc. <b>Let me know if there are any new features you would like to see!</b> Have fun 🥳', 'ai-engine' ),
  PROMPT: __( 'Query / Prompt', 'ai-engine' ),
  REPLY: __( 'Reply', 'ai-engine' ),
};

i18n.ALERTS = {
  FINETUNING_STARTED: __( 'Fine-tuning started! Check its progress in the Models section. Depending on your dataset size, it may take a while (from a few minutes to days).', 'ai-engine' ),
  RESET_BUILDER: __( 'This will delete all the rows in the builder. Are you sure?', 'ai-engine' ),
  DELETE_FINETUNE: __( 'You are going to delete this fine-tune. Are you sure?\n\nPlease note that it will take a while before it is actually deleted. This might be a temporary issue of OpenAI.', 'ai-engine' ),
  FINETUNE_ALREADY_DELETED: __( 'This fine-tune was already deleted. It will be removed from the list.', 'ai-engine' ),
  CHECK_CONSOLE: __( 'Error! Check your console for more details.', 'ai-engine' ),
  DATASET_UPLOADED: __( 'Uploaded successfully! You can now train a model based on this dataset.', 'ai-engine' ),
  ONLY_SUPPORTS_FILES: __( 'This only supports JSON, JSONL, and CSV files. Check the Instructions section below.', 'ai-engine' ),
  EMPTY_LINES_DATASET: __( 'Some lines were empty. Make sure the CSV has a header row and that the columns are named \'prompt\' and \'completion\'. For debugging, an empty line was logged to the console.', 'ai-engine' ),
  EMPTY_LINES_EMBEDDINGS: __( 'Some lines were empty. Make sure the CSV has a header row and that the columns are named \'title\' and \'content\'. For debugging, an empty line was logged to the console.', 'ai-engine' ),
  ARE_YOU_SURE: __( 'Are you sure?', 'ai-engine' ),
};

i18n.FINETUNING = {
  MODELS_INTRO: __( 'The AI models you have fine-tuned. To create more, visit <b>Files</b>.', 'ai-engine' ),
  LEGACY_MODELS_INTRO: __( 'The AI models you have fine-tuned. <b>Do not use legacy fine-tuning anymore (based on models prior to GPT 3.5). Their deprecation has been %s for January 4th, 2024.</b><br />', 'ai-engine' ),
  LEGACY_MODELS_DEPRECATION_URL: 'https://platform.openai.com/docs/guides/legacy-fine-tuning',
  LEGACY_MODELS_DEPRECATION_TEXT: __( 'announced by OpenAI ↗', 'ai-engine' ),
  FILES_INTRO: __( 'The files you have uploaded to OpenAI. To create a new dataset file, switch from <b>Model & Files</b> to <b>Dataset Editor</b>. To train a new model, click on the <i>magic wand</i>.', 'ai-engine' ),
  MODEL_FINETUNE: __( 'Model Finetune', 'ai-engine' ),
  MODELS_FILES: __( 'Models & Files', 'ai-engine' ),
  DATASET_EDITOR: __( 'Dataset Editor', 'ai-engine' ),
  EDITOR: __( 'Editor', 'ai-engine' ),
  GENERATOR: __( 'Generator', 'ai-engine' ),
  HUGE_DATASET_WARNING: __( 'Caution: The data is too large to be saved in your browser\'s local storage.', 'ai-engine' ),
  NO_FINETUNES_YET: __( 'No fine-tunes found. Refresh the list, or create a new one (via a dataset).', 'ai-engine' ),
  CLEAN_MODELS_LIST: __( 'Clean Models List', 'ai-engine' ),
  DELETED_FINETUNE_ISSUE: __( 'For some reason, OpenAI still return the models even after you deleted them. Don\'t worry, AI Engine will do the cleanup for you! You can force the cleanup by using this button. It takes a bit of time depending on the total of models you have.', 'ai-engine' ),
};

i18n.DISCUSSIONS = {
  NEW_CHAT: __( 'New Chat', 'ai-engine' ),
  NO_MESSAGES_YET: __( 'No messages yet', 'ai-engine' ),
  RENAME: __( 'Rename', 'ai-engine' ),
  DELETE: __( 'Delete', 'ai-engine' ),
  UNTITLED: __( 'Untitled', 'ai-engine' ),
  TITLE_GENERATION_PROMPT: __( 'Based on the following conversation, generate a concise and specific title for the discussion, strictly less than 64 characters. Focus on the main topic, avoiding unnecessary words such as articles, pronouns, or adjectives. Do not include any punctuation at the end. Do not include anything else than the title itself, only one sentence, no line breaks, just the title.', 'ai-engine' ),
};

i18n.WRITING_STYLES = {
  INFORMATIVE: __( 'Informative', 'ai-engine' ),
  DESCRIPTIVE: __( 'Descriptive', 'ai-engine' ),
  CREATIVE: __( 'Creative', 'ai-engine' ),
  NARRATIVE: __( 'Narrative', 'ai-engine' ),
  PERSUASIVE: __( 'Persuasive', 'ai-engine' ),
  REFLECTIVE: __( 'Reflective', 'ai-engine' ),
  ARGUMENTATIVE: __( 'Argumentative', 'ai-engine' ),
  ANALYTICAL: __( 'Analytical', 'ai-engine' ),
  EVALUATIVE: __( 'Evaluative', 'ai-engine' ),
  JOURNALISTIC: __( 'Journalistic', 'ai-engine' ),
  TECHNICAL: __( 'Technical', 'ai-engine' ),
};

i18n.WRITING_TONES = {
  NEUTRAL: __( 'Neutral', 'ai-engine' ),
  FORMAL: __( 'Formal', 'ai-engine' ),
  ASSERTIVE: __( 'Assertive', 'ai-engine' ),
  CHEERFUL: __( 'Cheerful', 'ai-engine' ),
  HUMOROUS: __( 'Humorous', 'ai-engine' ),
  INFORMAL: __( 'Informal', 'ai-engine' ),
  INSPIRATIONAL: __( 'Inspirational', 'ai-engine' ),
  PROFESSIONAL: __( 'Professional', 'ai-engine' ),
  CONFLUENT: __( 'Confluent', 'ai-engine' ),
  EMOTIONAL: __( 'Emotional', 'ai-engine' ),
  PERSUASIVE: __( 'Persuasive', 'ai-engine' ),
  SUPPORTIVE: __( 'Supportive', 'ai-engine' ),
  SARCASTIC: __( 'Sarcastic', 'ai-engine' ),
  CONDESCENDING: __( 'Condescending', 'ai-engine' ),
  SKEPTICAL: __( 'Skeptical', 'ai-engine' ),
  NARRATIVE: __( 'Narrative', 'ai-engine' ),
  JOURNALISTIC: __( 'Journalistic', 'ai-engine' ),
};

i18n.EMBEDDINGS = {
  EDIT: __( 'EDIT', 'ai-engine' ),
  AI_SEARCH: __( 'AI SEARCH', 'ai-engine' ),
  SYNC_POSTS: __( 'Sync Posts', 'ai-engine' ),
  AUTO_SYNC_POSTS: __( 'Auto-Sync Posts', 'ai-engine' ),
  AUTO_SYNC_POSTS_DESCRIPTION: __( 'Embeddings will be created, updated or removed based on the activity related to your posts.', 'ai-engine' ),
  REWRITE_CONTENT: __( 'Rewrite Content', 'ai-engine' ),
  REWRITE_CONTENT_DESCRIPTION: __( 'Shorten and improve the content for your embedding using the default model.', 'ai-engine' ),
  FORCE_RECREATE: __( 'Force Recreate', 'ai-engine' ),
  FORCE_RECREATE_DESCRIPTION: __( 'Force recreation of existing embeddings even when content, model, and dimensions haven\'t changed. Note: New posts without embeddings will always be synced regardless of this setting.', 'ai-engine' ),
  DELETE_ALL_EMBEDDINGS: __( 'Delete All Embeddings', 'ai-engine' ),
  DELETE_ALL_EMBEDDINGS_CONFIRM: __( 'Are you sure you want to delete all the embeddings in this environment?', 'ai-engine' ),
  REWRITE_PROMPT_DESCRIPTION: __( 'Prompt for the rewrite. Supports {CONTENT}, {TITLE}, {URL}, {EXCERPT}, {LANGUAGE}, {ID}.', 'ai-engine' ),
  SYNC_ALL: __( 'Sync All', 'ai-engine' ),
  SYNC_ONE: __( 'Sync One', 'ai-engine' ),
  ADD_INDEX: __( 'Add Index', 'ai-engine' ),
  ADD_INDEX_DESCRIPTION: __( 'An index is like a database, and contains embeddings. You can have many indexes and switch between them. The indexes are hosted on Pinecone.', 'ai-engine' ),
  NO_NAMESPACE_SUPPORT: __( 'Note: This server does not support namespaces.', 'ai-engine' ),
};

i18n.ERROR = {
  UPDATING_OPTIONS: __( 'An error occurred while updating the options.' ),
  GETTING_OPTIONS: __( 'An error occurred while getting the options.' ),
  CHECK_YOUR_CONSOLE: __( 'For more information, check <a target="_blank" href="https://meowapps.com/tutorial-network-activity-dev-tools/">your console ↗</a>. You might also want to check your <a target="_blank" href="https://meowapps.com/tutorial-php-error-logs/">PHP Error Logs ↗</a>.', 'ai-engine' ),
  SESSION_EXPIRED: __( 'Your session has expired. Please refresh the page to continue using AI Engine.', 'ai-engine' ),
  COULD_NOT_PARSE_ERROR_STREAM: __( 'Could not parse the \'error\' stream.', 'ai-engine' ),
  COULD_NOT_PARSE_END_STREAM: __( 'Could not parse the \'end\' stream.', 'ai-engine' ),
  // Chatbot specific errors
  INVALID_API_KEY: __( 'Invalid API key: Please check your OpenAI API key in settings.', 'ai-engine' ),
  RATE_LIMIT_EXCEEDED: __( 'Rate limit exceeded: Too many requests. Please try again later.', 'ai-engine' ),
  NETWORK_ERROR: __( 'Network error: Failed to establish connection to the AI service.', 'ai-engine' ),
  AUTHENTICATION_FAILED: __( 'Authentication failed: Your session has expired. Please refresh the page.', 'ai-engine' ),
  INTERNAL_SERVER_ERROR: __( 'Internal server error: An unexpected error occurred. Please try again.', 'ai-engine' ),
  PROCESSING_ERROR: __( 'An error occurred while processing your request. Please try again.', 'ai-engine' ),
  // Realtime errors
  MEDIADEVICES_NOT_AVAILABLE: __( 'MediaDevices API not available. Please ensure you are using HTTPS and a modern browser.', 'ai-engine' ),
  MICROPHONE_ACCESS_FAILED: __( 'Failed to access microphone. Please ensure microphone permissions are granted and try again.', 'ai-engine' ),
  CONNECTION_FAILED: __( 'Failed to establish connection with OpenAI servers. Please try again.', 'ai-engine' ),
};

// Console/debug messages
i18n.DEBUG = {
  CRASH_IN_MARKDOWN: __( 'Crash in markdown-to-jsx! Reverting to plain text.', 'ai-engine' ),
  AI_ENGINE_COULD_NOT_FIND_BLOCK: __( 'AI Engine: Could not find block element for', 'ai-engine' ),
  AI_WAND_TABLE_REQUIRES_DATA: __( 'AI Wand: Table requires structured data for proper update', 'ai-engine' ),
  AI_WAND_COULD_NOT_FIND_SELECTION: __( 'AI Wand: Could not find selection, replacing entire block content', 'ai-engine' ),
  NEW_TOKEN_RECEIVED: __( '[MWAI] 🔐 New token received', 'ai-engine' ),
  NONCE_ERROR_DETECTED: __( '[MWAI] Nonce error detected, attempting to refresh...', 'ai-engine' ),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18n);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "./app/js/chatbot/AudioVisualizer.js":
/*!*******************************************!*\
  !*** ./app/js/chatbot/AudioVisualizer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioVisualizerTwoStreams)
/* harmony export */ });
/**
 * AudioVisualizerTwoStreams.jsx
 *
 * Two circles for user + assistant with volume-based pulsing.
 * Each circle is inside a container of fixed size (circleSize + pulseMaxSize),
 * so we don't affect overall layout when the ring expands.
 *
 * Outer ring has class "mwai-animation" to be styled or animated by your CSS.
 * If userColor / assistantColor is null, we do NOT inline a color.
 */

// React & Vendor Libs
const {
  useState,
  useRef,
  useEffect
} = wp.element;

/**
 * measureVolume()
 * Reads time-domain data and calculates an RMS volume (~0..~20 typical).
 */
function measureVolume(analyser, dataArray) {
  analyser.getByteTimeDomainData(dataArray);
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    const val = dataArray[i] - 128;
    sum += val * val;
  }
  return Math.sqrt(sum / dataArray.length); // RMS
}
function AudioVisualizerTwoStreams({
  // Streams
  assistantStream = null,
  userStream = null,
  // Colors for the circles
  // If null, we don't apply inline color (you can do it via CSS)
  assistantColor = null,
  userColor = null,
  // UI representations
  // e.g. { emoji: "😊", text: "User", image: "url", use: "image" }
  userUI = {
    emoji: null,
    text: null,
    image: null,
    use: "text"
  },
  assistantUI = {
    emoji: null,
    text: null,
    image: null,
    use: "text"
  },
  // Attack/Release speeds
  attackSpeed = 0.3,
  releaseSpeed = 0.05,
  // Circle sizing
  circleSize = 50,
  // base diameter (inner circle)
  pulseMaxSize = 30 // how many extra px to grow at max volume
}) {
  // Smoothed volumes (state) for rendering
  const [assistantVolume, setAssistantVolume] = useState(0);
  const [userVolume, setUserVolume] = useState(0);

  // We keep references to the raw volumes for attack/release
  const assistantSmoothedRef = useRef(0);
  const userSmoothedRef = useRef(0);

  // AudioContext + Analyser
  const audioContextRef = useRef(null);
  const assistantAnalyserRef = useRef(null);
  const assistantDataArrayRef = useRef(null);
  const userAnalyserRef = useRef(null);
  const userDataArrayRef = useRef(null);
  useEffect(() => {
    // If no streams, do nothing
    if (!assistantStream && !userStream) {
      return;
    }

    // Create or reuse AudioContext
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const audioContext = audioContextRef.current;
    let assistantSource;
    let userSource;
    let animationFrameId;

    // Setup assistant audio
    if (assistantStream) {
      assistantSource = audioContext.createMediaStreamSource(assistantStream);
      assistantAnalyserRef.current = audioContext.createAnalyser();
      assistantAnalyserRef.current.fftSize = 1024;
      assistantDataArrayRef.current = new Uint8Array(assistantAnalyserRef.current.frequencyBinCount);
      assistantSource.connect(assistantAnalyserRef.current);
    }

    // Setup user audio
    if (userStream) {
      userSource = audioContext.createMediaStreamSource(userStream);
      userAnalyserRef.current = audioContext.createAnalyser();
      userAnalyserRef.current.fftSize = 1024;
      userDataArrayRef.current = new Uint8Array(userAnalyserRef.current.frequencyBinCount);
      userSource.connect(userAnalyserRef.current);
    }

    // Animation loop
    const tick = () => {
      let newAssistantVolume = 0;
      if (assistantAnalyserRef.current && assistantDataArrayRef.current) {
        newAssistantVolume = measureVolume(assistantAnalyserRef.current, assistantDataArrayRef.current);
      }
      let newUserVolume = 0;
      if (userAnalyserRef.current && userDataArrayRef.current) {
        newUserVolume = measureVolume(userAnalyserRef.current, userDataArrayRef.current);
      }

      // Attack/release for assistant
      if (newAssistantVolume > assistantSmoothedRef.current) {
        // Attack
        assistantSmoothedRef.current = assistantSmoothedRef.current * (1 - attackSpeed) + newAssistantVolume * attackSpeed;
      } else {
        // Release
        assistantSmoothedRef.current = assistantSmoothedRef.current * (1 - releaseSpeed) + newAssistantVolume * releaseSpeed;
      }

      // Attack/release for user
      if (newUserVolume > userSmoothedRef.current) {
        // Attack
        userSmoothedRef.current = userSmoothedRef.current * (1 - attackSpeed) + newUserVolume * attackSpeed;
      } else {
        // Release
        userSmoothedRef.current = userSmoothedRef.current * (1 - releaseSpeed) + newUserVolume * releaseSpeed;
      }

      // Update state
      setAssistantVolume(assistantSmoothedRef.current);
      setUserVolume(userSmoothedRef.current);

      // Next frame
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      if (assistantSource) assistantSource.disconnect();
      if (assistantAnalyserRef.current) assistantAnalyserRef.current.disconnect();
      if (userSource) userSource.disconnect();
      if (userAnalyserRef.current) userAnalyserRef.current.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [assistantStream, userStream, attackSpeed, releaseSpeed]);

  // Convert volumes ~0..20 to [0..1]
  const normAssistant = Math.min(assistantVolume / 20, 1);
  const normUser = Math.min(userVolume / 20, 1);

  // Outer ring diameter = base circleSize + extra pulse
  const assistantPulseDiameter = circleSize + normAssistant * pulseMaxSize;
  const userPulseDiameter = circleSize + normUser * pulseMaxSize;

  // The container is always big enough for the max ring
  const containerSize = circleSize + pulseMaxSize; // e.g. 50 + 30 = 80

  // If userColor/assistantColor is null, skip inline styling for backgroundColor
  const userPulseStyle = {
    width: userPulseDiameter,
    height: userPulseDiameter,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0.5
  };
  if (userColor) {
    userPulseStyle.backgroundColor = userColor;
  }
  const assistantPulseStyle = {
    width: assistantPulseDiameter,
    height: assistantPulseDiameter,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0.5
  };
  if (assistantColor) {
    assistantPulseStyle.backgroundColor = assistantColor;
  }
  const userCircleStyle = {
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    color: "#fff"
  };
  if (userColor) {
    userCircleStyle.backgroundColor = userColor;
  }
  const assistantCircleStyle = {
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    color: "#fff"
  };
  if (assistantColor) {
    assistantCircleStyle.backgroundColor = assistantColor;
  }

  // Determine who is "talking"
  let containerClass = "mwai-visualizer";
  if (userVolume > assistantVolume) {
    containerClass += " mwai-user-talking";
  } else if (assistantVolume > userVolume) {
    containerClass += " mwai-assistant-talking";
  }

  // Renders the UI inside the fixed circle
  const renderUI = uiObj => {
    if (!uiObj) return null;
    const {
      emoji,
      text,
      image,
      use
    } = uiObj;
    switch (use) {
      case "emoji":
        if (emoji) return /*#__PURE__*/React.createElement("span", null, emoji);
        if (text) return /*#__PURE__*/React.createElement("span", null, text.slice(0, 1));
        return null;
      case "image":
        if (image) {
          return /*#__PURE__*/React.createElement("img", {
            src: image,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              borderRadius: "50%"
            }
          });
        }
        // fallback to emoji or first-letter
        if (emoji) return /*#__PURE__*/React.createElement("span", null, emoji);
        if (text) return /*#__PURE__*/React.createElement("span", null, text.slice(0, 1));
        return null;
      case "text":
      default:
        if (text) return /*#__PURE__*/React.createElement("span", null, text.slice(0, 1));
        if (emoji) return /*#__PURE__*/React.createElement("span", null, emoji);
        return null;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: containerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-visualizer-user",
    style: {
      position: "relative",
      width: containerSize,
      height: containerSize,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-animation",
    style: userPulseStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: userCircleStyle
  }, renderUI(userUI))), /*#__PURE__*/React.createElement("hr", {
    className: "mwai-visualizer-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mwai-visualizer-assistant",
    style: {
      position: "relative",
      width: containerSize,
      height: containerSize,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-animation",
    style: assistantPulseStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: assistantCircleStyle
  }, renderUI(assistantUI))));
}

/***/ }),

/***/ "./app/js/chatbot/ChatClearIcon.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/ChatClearIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/eraser.js");




// React & Vendor Libs
const {
  useMemo
} = wp.element;
const ChatClearIcon = () => {
  const css = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__.useChatbotContext)();
  const {
    busy,
    messages,
    theme
  } = state;
  const isTimeless = (theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless';
  const hasContent = useMemo(() => (messages || []).length > 0, [messages]);

  // Hide if nothing to clear
  if (!hasContent) return null;
  const onClick = () => {
    if (!busy) {
      actions.onClear();
    }
  };

  // Reuse upload icon sizing styles for lucide-based small icon buttons
  // Timeless: rely on .mwai-file-upload-icon.mwai-lucide styling
  // Other themes: we add .mwai-lucide via CSS in theme to size/color the icon
  const wrapperClass = css('mwai-file-upload', {});
  const iconClass = `mwai-file-upload-icon mwai-lucide`;
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClass,
    style: {
      cursor: busy ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: iconClass,
    role: "button",
    "aria-label": "Clear conversation",
    title: "Clear",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatClearIcon);

/***/ }),

/***/ "./app/js/chatbot/ChatUploadIcon.js":
/*!******************************************!*\
  !*** ./app/js/chatbot/ChatUploadIcon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/paperclip.js");




// React & Vendor Libs
const {
  useState,
  useMemo,
  useRef
} = wp.element;
const ChatUploadIcon = () => {
  var _state$theme;
  const css = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__.useChatbotContext)();
  const {
    uploadedFile,
    uploadedFiles,
    multiUpload,
    busy,
    fileUpload,
    fileSearch,
    draggingType,
    allowedMimeTypes
  } = state;
  const {
    onUploadFile,
    onMultiFileUpload,
    resetUploadedFiles
  } = actions;
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef();
  const hasUploadedFile = multiUpload ? uploadedFiles.length > 0 : uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.uploadedId;
  const uploadEnabled = fileSearch || fileUpload;
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const resetUpload = () => onUploadFile(null);
  const handleClick = () => {
    if (hasUploadedFile && !multiUpload) {
      resetUpload();
      return;
    }
    if (!busy) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = event => {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (multiUpload) {
        // Handle multiple files
        for (let i = 0; i < files.length; i++) {
          onMultiFileUpload(files[i]);
        }
        // Clear the input so the same files can be selected again
        event.target.value = '';
      } else {
        // Handle single file
        onUploadFile(files[0]);
      }
    }
  };

  // Mock uploadedFile for testing
  // const mockUploadedFile = {
  //   localFile: { type: 'image/png' },
  //   uploadedId: '123',
  //   uploadProgress: 83.39
  // };
  const file = uploadedFile;
  const type = useMemo(() => {
    if (file !== null && file !== void 0 && file.localFile) {
      return file.localFile.type.startsWith('image/') ? 'image' : 'document';
    }
    return draggingType;
  }, [file, draggingType]);
  const imgClass = useMemo(() => {
    let status = 'idle';
    if (file !== null && file !== void 0 && file.uploadProgress) {
      status = 'up';
    } else if (draggingType) {
      status = 'add';
    } else if (isHovering && hasUploadedFile && !multiUpload) {
      status = 'del';
    } else if (isHovering && multiUpload) {
      status = 'add';
    } else if (hasUploadedFile) {
      status = 'ok';
    } else if (isHovering) {
      status = 'add';
    }
    const typeClass = type ? type.toLowerCase() : 'idle';
    return `mwai-file-upload-icon mwai-${typeClass}-${status}`;
  }, [type, file, draggingType, isHovering, hasUploadedFile, multiUpload]);

  // Calculate the UploadProgress Value
  const uploadProgress = useMemo(() => {
    if (file !== null && file !== void 0 && file.uploadProgress) {
      if (file.uploadProgress > 99) {
        return 99;
      }
      return Math.round(file.uploadProgress);
    }
    return "";
  }, [file]);
  const attachCount = useMemo(() => {
    if (multiUpload) return (uploadedFiles || []).length || 0;
    return hasUploadedFile ? 1 : 0;
  }, [multiUpload, uploadedFiles, hasUploadedFile]);
  if (!uploadEnabled) {
    return null;
  }
  const isTimeless = (state === null || state === void 0 || (_state$theme = state.theme) === null || _state$theme === void 0 ? void 0 : _state$theme.themeId) === 'timeless';
  const isInputNone = (state === null || state === void 0 ? void 0 : state.inputType) === 'none';
  const useLucide = isTimeless || isInputNone;
  const uploadWrapperClass = css('mwai-file-upload', {
    'mwai-enabled': uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.uploadedId,
    'mwai-busy': (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.localFile) && !(uploadedFile !== null && uploadedFile !== void 0 && uploadedFile.uploadedId)
  });
  return /*#__PURE__*/React.createElement("div", {
    disabled: busy,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: uploadWrapperClass,
    style: {
      cursor: busy ? 'default' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${imgClass}${useLucide ? ' mwai-lucide' : ''}${useLucide && isHovering && hasUploadedFile ? ' mwai-hover' : ''}`
  }, useLucide && /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 16
  }), useLucide && attachCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "mwai-upload-count",
    "data-count": attachCount,
    onClick: e => {
      e.stopPropagation();
      if (multiUpload) resetUploadedFiles();else resetUpload();
    }
  }), !useLucide && /*#__PURE__*/React.createElement("span", {
    className: "mwai-file-upload-progress"
  }, uploadProgress)), /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: fileInputRef,
    onChange: handleFileChange,
    multiple: multiUpload,
    accept: allowedMimeTypes || undefined,
    style: {
      display: 'none'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatUploadIcon);

/***/ }),

/***/ "./app/js/chatbot/ChatbotBody.js":
/*!***************************************!*\
  !*** ./app/js/chatbot/ChatbotBody.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _ChatUploadIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatUploadIcon */ "./app/js/chatbot/ChatUploadIcon.js");
/* harmony import */ var _ChatClearIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatClearIcon */ "./app/js/chatbot/ChatClearIcon.js");
/* harmony import */ var _ChatbotRealtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatbotRealtime */ "./app/js/chatbot/ChatbotRealtime.js");
/* harmony import */ var _ChatbotEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatbotEvents */ "./app/js/chatbot/ChatbotEvents.js");
/* harmony import */ var _MwaiFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MwaiFiles */ "./app/js/chatbot/MwaiFiles.js");
/* harmony import */ var _components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ComponentRegistry */ "./app/js/chatbot/components/ComponentRegistry.js");
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = wp.element;










const ChatbotBody = ({
  conversationRef,
  onScroll,
  jsxShortcuts,
  jsxBlocks,
  inputClassNames,
  handleDrop,
  handleDrag,
  needsFooter,
  needTools,
  uploadIconPosition
}) => {
  const {
    state,
    actions
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    debugMode,
    eventLogs,
    messages,
    isRealtime,
    textCompliance,
    chatbotInputRef,
    isWindow,
    fullscreen,
    windowed,
    messagesType,
    inputType,
    theme
  } = state;
  const [allStreamData, setAllStreamData] = useState([]);
  const [clearedMessageIds, setClearedMessageIds] = useState(new Set());
  const streamDataRef = useRef([]);
  const lastMessageCountRef = useRef(0);
  const [realtimeMessages, setRealtimeMessages] = useState([]);

  // Reset clearedMessageIds when messages are cleared (new conversation)
  useEffect(() => {
    if (messages.length === 0 || messages.length === 1 && messages[0].role === 'assistant') {
      setClearedMessageIds(new Set());
    }
  }, [messages]);
  useEffect(() => {
    // Collect all stream events from all messages (including realtime)
    const newStreamData = [];
    const allMessages = [...messages, ...realtimeMessages];
    allMessages.forEach(message => {
      // Skip messages that have been cleared
      if (message.streamEvents && (debugMode || eventLogs) && !clearedMessageIds.has(message.id)) {
        // Add all events from this message
        message.streamEvents.forEach(event => {
          newStreamData.push({
            ...event,
            messageId: message.id
          });
        });
      }
    });

    // DON'T overwrite if we're in realtime mode - preserve directly added events
    if (!isRealtime) {
      // Always update to show all events
      streamDataRef.current = newStreamData;
      setAllStreamData(newStreamData);
    }
  }, [messages, realtimeMessages, debugMode, eventLogs, isRealtime, clearedMessageIds]);
  const handleClearStreamData = () => {
    // Clear the allStreamData
    setAllStreamData([]);
    streamDataRef.current = [];
    // Mark which message IDs have been cleared to prevent their events from reappearing
    const clearedMessageIds = new Set();
    [...messages, ...realtimeMessages].forEach(msg => {
      if (msg.streamEvents) {
        clearedMessageIds.add(msg.id);
      }
    });
    setClearedMessageIds(clearedMessageIds);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mwai-body"
  }, !isRealtime && /*#__PURE__*/React.createElement(React.Fragment, null, fullscreen && !windowed ? /*#__PURE__*/React.createElement(React.Fragment, null, messagesType !== 'none' && (() => {
    const MessagesComponent = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('messages', messagesType);
    if (!MessagesComponent) {
      console.warn(`Messages component '${messagesType}' not found, falling back to standard`);
      const StandardMessages = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('messages', 'standard');
      return /*#__PURE__*/React.createElement(StandardMessages, {
        messages: messages,
        conversationRef: conversationRef,
        onScroll: onScroll,
        shortcuts: jsxShortcuts,
        blocks: jsxBlocks
      });
    }
    return /*#__PURE__*/React.createElement(MessagesComponent, {
      messages: messages,
      conversationRef: conversationRef,
      onScroll: onScroll,
      shortcuts: jsxShortcuts,
      blocks: jsxBlocks
    });
  })(), /*#__PURE__*/React.createElement("div", {
    className: "mwai-fullscreen-spacer"
  }), /*#__PURE__*/React.createElement(_MwaiFiles__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : /*#__PURE__*/React.createElement(React.Fragment, null, messagesType !== 'none' && (() => {
    const MessagesComponent = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('messages', messagesType);
    if (!MessagesComponent) {
      console.warn(`Messages component '${messagesType}' not found, falling back to standard`);
      const StandardMessages = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('messages', 'standard');
      return /*#__PURE__*/React.createElement(StandardMessages, {
        messages: messages,
        conversationRef: conversationRef,
        onScroll: onScroll,
        shortcuts: jsxShortcuts,
        blocks: jsxBlocks
      });
    }
    return /*#__PURE__*/React.createElement(MessagesComponent, {
      messages: messages,
      conversationRef: conversationRef,
      onScroll: onScroll,
      shortcuts: jsxShortcuts,
      blocks: jsxBlocks
    });
  })(), /*#__PURE__*/React.createElement(_MwaiFiles__WEBPACK_IMPORTED_MODULE_2__["default"], null)), inputType !== 'none' && (() => {
    const InputComponent = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('input', inputType);
    if (!InputComponent) {
      console.warn(`Input component '${inputType}' not found, falling back to standard`);
      const StandardInput = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_1__.getComponent)('input', 'standard');
      return /*#__PURE__*/React.createElement(StandardInput, {
        inputClassNames: inputClassNames,
        chatbotInputRef: chatbotInputRef,
        handleDrop: handleDrop,
        handleDrag: handleDrag
      });
    }
    return /*#__PURE__*/React.createElement(InputComponent, {
      inputClassNames: inputClassNames,
      chatbotInputRef: chatbotInputRef,
      handleDrop: handleDrop,
      handleDrag: handleDrag
    });
  })()), isRealtime && /*#__PURE__*/React.createElement("div", {
    className: "mwai-realtime"
  }, /*#__PURE__*/React.createElement(_ChatbotRealtime__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onMessagesUpdate: setRealtimeMessages,
    onStreamEvent: event => {
      setAllStreamData(prev => [...prev, event]);
    }
  })), needsFooter && /*#__PURE__*/React.createElement("div", {
    className: "mwai-footer"
  }, (() => {
    // Check if we should show each tool
    const shouldShowUpload = (uploadIconPosition === 'mwai-tools' || inputType === 'none') && needTools;
    const shouldShowClear = inputType === 'none' || (theme === null || theme === void 0 ? void 0 : theme.themeId) !== 'chatgpt' && (theme === null || theme === void 0 ? void 0 : theme.themeId) !== 'timeless' && (theme === null || theme === void 0 ? void 0 : theme.themeId) !== 'messages';

    // Check if tools would actually render content
    // ChatUploadIcon returns null if !uploadEnabled (needTools handles this)
    // ChatClearIcon returns null if no messages
    const hasMessages = messages && messages.length > 0;
    const wouldShowUpload = shouldShowUpload && needTools; // needTools already checks if uploads are enabled
    const wouldShowClear = shouldShowClear && hasMessages;

    // Only render tools div if at least one tool will actually show
    if (wouldShowUpload || wouldShowClear) {
      return /*#__PURE__*/React.createElement("div", {
        className: "mwai-tools"
      }, shouldShowUpload && /*#__PURE__*/React.createElement(_ChatUploadIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null), shouldShowClear && /*#__PURE__*/React.createElement(_ChatClearIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
    return null;
  })(), textCompliance && /*#__PURE__*/React.createElement("div", {
    className: "mwai-compliance",
    dangerouslySetInnerHTML: {
      __html: textCompliance
    }
  })), eventLogs && /*#__PURE__*/React.createElement(_ChatbotEvents__WEBPACK_IMPORTED_MODULE_6__["default"], {
    allStreamData: allStreamData,
    debugMode: debugMode,
    onClear: handleClearStreamData,
    hasData: allStreamData.length > 0,
    isWindow: isWindow
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotBody);

/***/ }),

/***/ "./app/js/chatbot/ChatbotContent.js":
/*!******************************************!*\
  !*** ./app/js/chatbot/ChatbotContent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/index.modern.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _root_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/i18n */ "./app/i18n.js");
const {
  useMemo
} = wp.element;




// Display a clickable link with additional file information
const LinkContainer = ({
  href,
  children
}) => {
  if (!href) {
    return /*#__PURE__*/React.createElement("span", null, children);
  }
  const target = '_blank';
  // Check if this is a file link (uploaded file, not image)
  const isFile = String(children) === "Uploaded File" || href && href.match(/\.(pdf|doc|docx|txt|csv|xlsx)$/i);
  if (isFile) {
    // If children is a filename, use it; otherwise extract from URL
    const displayName = String(children) !== "Uploaded File" ? children : href.split('/').pop();
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: target,
      rel: "noopener noreferrer",
      className: "mwai-filename"
    }, /*#__PURE__*/React.createElement("span", null, "\u2713 ", displayName));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    rel: "noopener noreferrer"
  }, children);
};
const ChatbotContent = ({
  message
}) => {
  let content = message.content ?? "";

  // For error messages (like limit messages), render HTML directly to preserve attributes
  const isError = message.isError || message.role === 'error';

  // Ensure this is enclosed markdown
  const matches = (content.match(/```/g) || []).length;
  if (matches % 2 !== 0) {
    // if count is odd
    content += "\n```"; // add ``` at the end
  }
  const markdownOptions = useMemo(() => {
    const options = {
      // Enable breaks to preserve line breaks (similar to GitHub Flavored Markdown)
      forceBlock: false,
      forceInline: false,
      breaks: true,
      overrides: {
        BlinkingCursor: {
          component: _app_helpers__WEBPACK_IMPORTED_MODULE_0__.BlinkingCursor
        },
        a: {
          component: LinkContainer
        },
        // Max width for images should be 300px
        img: {
          props: {
            onError: e => {
              const src = e.target.src;
              const isImage = src.match(/\.(jpeg|jpg|gif|png)$/) !== null;
              if (isImage) {
                e.target.src = "https://placehold.co/600x200?text=Expired+Image";
                return;
              }
            },
            className: "mwai-image"
          }
        }
      }
    };
    return options;
  }, []);
  const renderedContent = useMemo(() => {
    // For error messages, render HTML directly (similar to compliance text)
    if (isError) {
      return content;
    }
    let out = "";
    try {
      // Pre-process content to preserve line breaks
      // Replace single newlines with two spaces + newline (Markdown line break syntax)
      // But preserve double newlines (paragraph breaks) and code blocks
      let processedContent = content;

      // Don't process line breaks inside code blocks
      const codeBlocks = [];
      processedContent = processedContent.replace(/```[\s\S]*?```/g, (match, offset) => {
        codeBlocks.push(match);
        return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
      });

      // Also preserve inline code
      const inlineCode = [];
      processedContent = processedContent.replace(/`[^`]+`/g, match => {
        inlineCode.push(match);
        return `__INLINE_CODE_${inlineCode.length - 1}__`;
      });

      // Replace single newlines with markdown line breaks (two spaces + newline)
      // But don't replace double newlines (paragraph breaks)
      processedContent = processedContent.replace(/(?<!\n)\n(?!\n)/g, '  \n');

      // Restore code blocks
      codeBlocks.forEach((block, i) => {
        processedContent = processedContent.replace(`__CODE_BLOCK_${i}__`, block);
      });

      // Restore inline code
      inlineCode.forEach((code, i) => {
        processedContent = processedContent.replace(`__INLINE_CODE_${i}__`, code);
      });
      out = (0,markdown_to_jsx__WEBPACK_IMPORTED_MODULE_1__.compiler)(processedContent, markdownOptions);
    } catch (e) {
      console.error(_root_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].DEBUG.CRASH_IN_MARKDOWN, {
        e,
        content
      });
      out = content;
    }
    return out;
  }, [content, markdownOptions, message.id, message.key, isError]);

  // If streaming, always show the blinking cursor
  if (message.isStreaming) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, isError ? /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: renderedContent
      }
    }) : renderedContent, /*#__PURE__*/React.createElement(_app_helpers__WEBPACK_IMPORTED_MODULE_0__.BlinkingCursor, null));
  }

  // For error messages, render HTML directly to preserve attributes
  if (isError) {
    return /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: renderedContent
      }
    });
  }
  return renderedContent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotContent);

/***/ }),

/***/ "./app/js/chatbot/ChatbotContext.js":
/*!******************************************!*\
  !*** ./app/js/chatbot/ChatbotContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotContextProvider: () => (/* binding */ ChatbotContextProvider),
/* harmony export */   useChatbotContext: () => (/* binding */ useChatbotContext)
/* harmony export */ });
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/chatbot/MwaiAPI */ "./app/js/chatbot/MwaiAPI.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/helpers/tokenManager */ "./app/js/helpers/tokenManager.js");
// React & Vendor Libs
const {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef
} = wp.element;

// AI Engine






// Translation fallback for frontend where wp.i18n isn't available
const __ = text => {
  if (typeof wp !== 'undefined' && wp.i18n && wp.i18n.__) {
    return wp.i18n.__(text, 'ai-engine');
  }
  return text;
};
const rawAiName = 'AI: ';
const rawUserName = 'User: ';
const ChatbotContext = createContext();
const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbotContext must be used within a ChatbotContextProvider');
  }
  return context;
};

// Small color helpers to compute gradients from a base color
const clamp01 = n => Math.min(1, Math.max(0, n));
const hexToRgb = hex => {
  if (!hex || typeof hex !== 'string') return null;
  const clean = hex.replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  const int = parseInt(full, 16);
  if (Number.isNaN(int) || full.length !== 6) return null;
  return {
    r: int >> 16 & 255,
    g: int >> 8 & 255,
    b: int & 255
  };
};
const rgbToHsl = ({
  r,
  g,
  b
}) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l
  };
};
const hslToRgb = ({
  h,
  s,
  l
}) => {
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
const rgbToHex = ({
  r,
  g,
  b
}) => `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
const lightenHex = (hex, amount = 0.4) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex; // fallback
  const hsl = rgbToHsl(rgb);
  hsl.l = clamp01(hsl.l + (1 - hsl.l) * amount);
  // Slight saturation boost for liveliness
  hsl.s = clamp01(hsl.s * 1.05);
  return rgbToHex(hslToRgb(hsl));
};
const gradientFromBase = (baseHex, amount = 0.55) => {
  const end = lightenHex(baseHex, amount);
  return `linear-gradient(130deg, ${baseHex} 0%, ${end} 100%)`;
};
const ChatbotContextProvider = ({
  children,
  ...rest
}) => {
  var _params$startSentence;
  const {
    params,
    system,
    theme,
    atts
  } = rest;
  const {
    timeElapsed,
    startChrono,
    stopChrono
  } = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useChrono)();
  const shortcodeStyles = useMemo(() => (theme === null || theme === void 0 ? void 0 : theme.settings) || {}, [theme]);
  const [restNonce, setRestNonce] = useState(system.restNonce || _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].getToken());
  const restNonceRef = useRef(system.restNonce || _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].getToken());

  // Subscribe to global token updates
  useEffect(() => {
    const unsubscribe = _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(newToken => {
      setRestNonce(newToken);
      restNonceRef.current = newToken;
    });
    return unsubscribe;
  }, []);
  const [messages, setMessages] = useState([]);
  const [shortcuts, setShortcuts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [locked, setLocked] = useState(false);
  const [chatId, setChatId] = useState((0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)());
  const [inputText, setInputText] = useState('');
  const [chatbotTriggered, setChatbotTriggered] = useState(false);
  const [showIconMessage, setShowIconMessage] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({
    localFile: null,
    uploadedId: null,
    uploadedUrl: null,
    uploadProgress: null
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  // For non-popup fullscreen chatbots, start in fullscreen mode (windowed = false)
  // For popup chatbots or non-fullscreen, start in windowed mode (windowed = true)
  const [windowed, setWindowed] = useState(() => {
    // Access params directly without processing since userData isn't available yet
    const isWindow = Boolean(params.window);
    const fullscreen = Boolean(params.fullscreen);
    // If it's not a popup window and fullscreen is enabled, start in fullscreen mode
    return isWindow || !fullscreen;
  });
  const [open, setOpen] = useState(false);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [busyNonce, setBusyNonce] = useState(false);
  const [lastFailedQuery, setLastFailedQuery] = useState(null); // Store the last failed query for retry
  const [serverReply, setServerReply] = useState();
  const [previousResponseId, setPreviousResponseId] = useState(null);
  const chatbotInputRef = useRef();
  const conversationRef = useRef();
  const hasFocusRef = useRef(false);

  // Component configuration for modular UI
  const [containerType, setContainerType] = useState(params.containerType);
  const [headerType, setHeaderType] = useState(params.headerType);
  const [messagesType, setMessagesType] = useState(params.messagesType || 'standard');
  const [inputType, setInputType] = useState(params.inputType || 'standard');
  const [footerType, setFooterType] = useState(params.footerType);

  // Update component types when params change
  useEffect(() => {
    setContainerType(params.containerType);
    setHeaderType(params.headerType);
    setMessagesType(params.messagesType || 'standard');
    setInputType(params.inputType || 'standard');
    setFooterType(params.footerType);
  }, [params.containerType, params.headerType, params.messagesType, params.inputType, params.footerType]);
  const {
    isListening,
    setIsListening,
    speechRecognitionAvailable
  } = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useSpeechRecognition)(text => {
    setInputText(text);
  });

  // System Parameters
  //const id = system.id;
  const stream = system.stream || false;
  const internalId = useMemo(() => (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(), []);
  const botId = system.botId;
  const customId = system.customId;
  const userData = system.userData;
  const [sessionId, setSessionId] = useState(system.sessionId);
  const contextId = system.contextId; // This is used by Content Aware (to retrieve a Post)
  const pluginUrl = system.pluginUrl;
  const restUrl = system.restUrl;
  const debugMode = system.debugMode;
  const eventLogs = system.eventLogs;
  const typewriter = (system === null || system === void 0 ? void 0 : system.typewriter) ?? false;
  const speechRecognition = (system === null || system === void 0 ? void 0 : system.speech_recognition) ?? false;
  const speechSynthesis = (system === null || system === void 0 ? void 0 : system.speech_synthesis) ?? false;
  const startSentence = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.doPlaceholders)(((_params$startSentence = params.startSentence) === null || _params$startSentence === void 0 ? void 0 : _params$startSentence.trim()) ?? "", userData);

  // Initial Actions, Shortcuts, and Blocks
  const initialActions = system.actions || [];
  const initialShortcuts = system.shortcuts || [];
  const initialBlocks = system.blocks || [];

  // UI Parameters
  const isMobile = document.innerWidth <= 768;
  const processedParams = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.processParameters)(params, userData);
  const {
    aiName,
    userName,
    guestName,
    aiAvatar,
    userAvatar,
    guestAvatar
  } = processedParams;
  const {
    textSend,
    textClear,
    textInputMaxLength,
    textInputPlaceholder,
    textCompliance,
    window: isWindow,
    copyButton,
    headerSubtitle,
    popupTitle,
    fullscreen,
    localMemory: localMemoryParam,
    icon,
    iconText,
    iconTextDelay,
    iconAlt,
    iconPosition,
    centerOpen,
    width,
    openDelay,
    iconBubble,
    fileUpload,
    multiUpload,
    maxUploads,
    fileSearch,
    allowedMimeTypes,
    windowAnimation
  } = processedParams;
  const isRealtime = processedParams.mode === 'realtime';
  const localMemory = localMemoryParam && (!!customId || !!botId);
  const localStorageKey = localMemory ? `mwai-chat-${customId || botId}` : null;
  const {
    cssVariables,
    iconUrl,
    aiAvatarUrl,
    userAvatarUrl,
    guestAvatarUrl
  } = useMemo(() => {
    const processUrl = url => {
      if (!url) return null;
      if ((0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmoji)(url)) return url;
      return (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.isURL)(url) ? url : `${pluginUrl}/images/${url}`;
    };
    const iconUrl = icon ? processUrl(icon) : `${pluginUrl}/images/chat-traditional-1.svg`;
    const finalAiAvatarUrl = processUrl(processedParams.aiAvatarUrl);
    const finalUserAvatarUrl = processUrl(processedParams.userAvatarUrl);
    const finalGuestAvatarUrl = processUrl(processedParams.guestAvatarUrl);
    let cssVariables = Object.keys(shortcodeStyles).reduce((acc, key) => {
      acc[`--mwai-${key}`] = shortcodeStyles[key];
      return acc;
    }, {});

    // Backward/alternate keys mapping (ensure popup icon text colors apply)
    if (!(shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.iconTextBackgroundColor) && shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.avatarMessageBackgroundColor) {
      cssVariables['--mwai-iconTextBackgroundColor'] = shortcodeStyles.avatarMessageBackgroundColor;
    }
    if (!(shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.iconTextColor) && shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.avatarMessageFontColor) {
      cssVariables['--mwai-iconTextColor'] = shortcodeStyles.avatarMessageFontColor;
    }

    // Timeless: preserve the nice header gradient while allowing a base color override
    if ((theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless' && shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.backgroundHeaderColor) {
      const base = shortcodeStyles.backgroundHeaderColor;
      if (typeof base === 'string' && base.trim().startsWith('#')) {
        cssVariables['--mwai-backgroundHeaderColor'] = gradientFromBase(base, 0.55);
        cssVariables['--mwai-accentColor'] = base;
      }
    }

    // Timeless: also preserve gradient for Back User Color
    if ((theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless' && shortcodeStyles !== null && shortcodeStyles !== void 0 && shortcodeStyles.backgroundUserColor) {
      const base = shortcodeStyles.backgroundUserColor;
      if (typeof base === 'string' && base.trim().startsWith('#')) {
        // Use a softer gradient intensity to match SASS default (~+8% absolute lightness)
        cssVariables['--mwai-backgroundUserColor'] = gradientFromBase(base, 0.16);
      }
    }
    return {
      cssVariables,
      iconUrl,
      aiAvatarUrl: finalAiAvatarUrl,
      userAvatarUrl: finalUserAvatarUrl,
      guestAvatarUrl: finalGuestAvatarUrl
    };
  }, [icon, pluginUrl, shortcodeStyles, processedParams]);
  const [draggingType, setDraggingType] = useState(false);
  // This is used to block the drop event when the file is not allowed:
  const [isBlocked, setIsBlocked] = useState(false);

  // Theme-Related Parameters
  const uploadIconPosition = useMemo(() => {
    if ((theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless') {
      return 'mwai-tools';
    }
    return "mwai-input";
  }, [theme === null || theme === void 0 ? void 0 : theme.themeId]);
  const submitButtonConf = useMemo(() => {
    const isTimeless = (theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless';
    return {
      text: textSend,
      textSend: textSend,
      textClear: textClear,
      // Prefer Lucide icons for Timeless; do not use image assets
      imageSend: isTimeless ? null : null,
      imageClear: isTimeless ? null : null,
      useLucide: isTimeless,
      lucideSend: 'send-horizontal'
      //imageOnly: false,
    };
  }, [textClear, textSend, theme === null || theme === void 0 ? void 0 : theme.themeId]);
  const resetMessages = () => {
    resetUploadedFile();
    setPreviousResponseId(null); // Reset response ID when clearing messages
    if (startSentence) {
      // Create a fresh message with a new ID and timestamp
      // This ensures React will treat it as a new message and re-render/re-process it
      const freshMessages = [{
        id: (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(),
        role: 'assistant',
        content: startSentence,
        who: rawAiName,
        timestamp: new Date().getTime(),
        // Add a key prop to force complete re-render
        key: `start-${Date.now()}`
      }];
      setMessages(freshMessages);
    } else {
      setMessages([]);
    }
  };
  const refreshRestNonce = useCallback(async (force = false) => {
    try {
      if (!force && restNonce) {
        return restNonce;
      }
      setBusyNonce(true);
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai/v1/start_session`);
      const data = await res.json();
      setRestNonce(data.restNonce);
      restNonceRef.current = data.restNonce;
      _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(data.restNonce); // Update globally
      // Update sessionId if it was N/A or different
      if (data.sessionId && data.sessionId !== 'N/A') {
        setSessionId(data.sessionId);
      }

      // Also update if new_token is present (in case of token test mode)
      if (data.new_token) {
        // Log token update with expiration info
        if (data.token_expires_at) {
          const expiresAt = new Date(data.token_expires_at * 1000);
          console.log(`[MWAI] 🔐 New token received - expires at ${expiresAt.toLocaleTimeString()} (in ${data.token_expires_in}s)`);
        }
        setRestNonce(data.new_token);
        restNonceRef.current = data.new_token;
        _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(data.new_token); // Update globally
        return data.new_token;
      }
      return data.restNonce;
    } catch (err) {
      console.error('Error while fetching the restNonce.', err);
    } finally {
      setBusyNonce(false);
    }
  }, [restNonce, setRestNonce, restUrl, setSessionId]);

  // Track if we're resuming an existing conversation
  const [isResumingConversation, setIsResumingConversation] = useState(false);
  const [isConversationLoaded, setIsConversationLoaded] = useState(false);

  // Initialize the initialActions, initialShortcuts, and initialBlocks
  useEffect(() => {
    if (debugMode) {
      // console.log('[INIT] Shortcuts init effect', {
      //   isConversationLoaded,
      //   isResumingConversation,
      //   messagesLength: messages.length,
      //   initialShortcutsLength: initialShortcuts.length
      // });
    }

    // Wait until we've checked for existing conversation before initializing
    if (!isConversationLoaded) {
      return;
    }

    // Only show initial shortcuts if this is a new conversation
    // Check both isResumingConversation flag and if we have existing messages (excluding start sentence)
    const hasExistingConversation = isResumingConversation || messages.length > 1 || messages.length === 1 && messages[0].content !== startSentence;
    if (!hasExistingConversation) {
      if (debugMode) {
        // console.log('[INIT] Showing initial shortcuts');
      }
      if (initialActions.length > 0) {
        handleActions(initialActions);
      }
      if (initialShortcuts.length > 0) {
        handleShortcuts(initialShortcuts);
      }
      if (initialBlocks.length > 0) {
        handleBlocks(initialBlocks);
      }
    } else {
      if (debugMode) {
        // console.log('[INIT] NOT showing initial shortcuts - existing conversation');
      }
    }
  }, [isConversationLoaded, isResumingConversation, messages, startSentence]);

  // Initialized the restNonce
  useEffect(() => {
    if (chatbotTriggered && !restNonce) {
      refreshRestNonce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatbotTriggered]);
  useEffect(() => {
    if (inputText.length > 0 && !chatbotTriggered) {
      setChatbotTriggered(true);
    }
  }, [chatbotTriggered, inputText]);

  // Reset messages when the start sentence changes.
  useEffect(() => {
    resetMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSentence]);

  // Initializes the mwaiAPI (used to interact with the chatbot)
  useEffect(() => {
    if (customId || botId) {
      const existingChatbotIndex = _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.mwaiAPI.chatbots.findIndex(chatbot => chatbot.internalId === internalId);
      const chatbot = {
        internalId: internalId,
        // This is used to identify the chatbot in the current page.
        botId: botId,
        chatId: chatId,
        customId: customId,
        localStorageKey: localStorageKey,
        // Add localStorageKey for discussion loading
        open: () => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'open'
          }]);
        },
        close: () => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'close'
          }]);
        },
        clear: params => {
          const {
            chatId = null
          } = params || {};
          setTasks(prevTasks => [...prevTasks, {
            action: 'clear',
            data: {
              chatId
            }
          }]);
        },
        toggle: () => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'toggle'
          }]);
        },
        ask: (text, submit = false) => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'ask',
            data: {
              text,
              submit
            }
          }]);
        },
        lock: () => {
          setLocked(true);
        },
        unlock: () => {
          setLocked(false);
        },
        setShortcuts: shortcuts => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'setShortcuts',
            data: shortcuts
          }]);
        },
        setBlocks: blocks => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'setBlocks',
            data: blocks
          }]);
        },
        addBlock: block => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'addBlock',
            data: block
          }]);
        },
        removeBlockById: blockId => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'removeBlockById',
            data: blockId
          }]);
        },
        getBlocks: () => {
          return blocks;
        },
        setContext: ({
          chatId,
          messages,
          previousResponseId
        }) => {
          console.warn('MwaiAPI: setContext is deprecated. Please use setConversation instead.');
          setTasks(prevTasks => [...prevTasks, {
            action: 'setContext',
            data: {
              chatId,
              messages,
              previousResponseId
            }
          }]);
        },
        setConversation: ({
          chatId,
          messages,
          previousResponseId
        }) => {
          setTasks(prevTasks => [...prevTasks, {
            action: 'setContext',
            data: {
              chatId,
              messages,
              previousResponseId
            }
          }]);
        }
      };
      if (existingChatbotIndex !== -1) {
        _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.mwaiAPI.chatbots[existingChatbotIndex] = chatbot;
      } else {
        _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.mwaiAPI.chatbots.push(chatbot);
      }
    }
  }, [botId, chatId, customId, internalId, localStorageKey, blocks]); // blocks dependency ensures getBlocks() returns current value

  // Starts the timer when the chatbot is busy
  useEffect(() => {
    var _chatbotInputRef$curr;
    if (busy) {
      startChrono();
      return;
    }
    if (!isMobile && hasFocusRef.current && (_chatbotInputRef$curr = chatbotInputRef.current) !== null && _chatbotInputRef$curr !== void 0 && _chatbotInputRef$curr.focusInput) {
      chatbotInputRef.current.focusInput();
    }
    stopChrono();
  }, [busy, startChrono, stopChrono, isMobile]);
  const saveMessages = useCallback(messages => {
    if (!localStorageKey) {
      return;
    }
    localStorage.setItem(localStorageKey, (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.nekoStringify)({
      chatId: chatId,
      messages: messages
    }));
  }, [localStorageKey, chatId]);
  const resetError = () => {
    setError(null);
  };

  // Add error as a message to the discussion
  const addErrorMessage = useCallback((errorText, failedQuery = null) => {
    const errorMessage = {
      id: (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(),
      role: 'error',
      content: errorText,
      who: 'Error',
      timestamp: new Date().getTime(),
      isError: true,
      failedQuery: failedQuery // Store the failed query for retry
    };
    setMessages(prevMessages => [...prevMessages, errorMessage]);
    setLastFailedQuery(failedQuery);
  }, []);

  // New BotId: Initializes the chat history
  useEffect(() => {
    let chatHistory = [];
    if (localStorageKey) {
      chatHistory = localStorage.getItem(localStorageKey);
      if (chatHistory) {
        chatHistory = JSON.parse(chatHistory);
        setMessages(chatHistory.messages);
        setChatId(chatHistory.chatId);
        setIsResumingConversation(true);
        setIsConversationLoaded(true);
        return;
      }
    }
    setIsResumingConversation(false);
    setIsConversationLoaded(true);
    resetMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId]);

  // Track executed actions to prevent double execution
  const executedActionsRef = useRef(new Set());
  const handleActions = useCallback((actions, lastMessage) => {
    actions = actions || [];
    let callsCount = 0;
    for (const action of actions) {
      if (action.type === 'function') {
        const data = action.data || {};
        const {
          name = null,
          args = []
        } = data;

        // Create a unique key for this action based on function name and arguments
        const actionKey = `${name}_${JSON.stringify(args)}`;

        // Check if this action was already executed recently
        if (executedActionsRef.current.has(actionKey)) {
          if (debugMode) {
            console.log(`[CHATBOT] Skipping duplicate execution of ${name}`);
          }
          continue;
        }
        const finalArgs = args ? Object.values(args).map(arg => {
          return JSON.stringify(arg);
        }) : [];
        try {
          if (debugMode) {
            // eslint-disable-next-line no-console
            console.log(`[CHATBOT] CALL ${name}(${finalArgs.join(', ')})`);
          }

          // Mark as executed before calling to prevent race conditions
          executedActionsRef.current.add(actionKey);
          eval(`${name}(${finalArgs.join(', ')})`);
          callsCount++;

          // Clean up old entries after 5 seconds
          setTimeout(() => {
            executedActionsRef.current.delete(actionKey);
          }, 5000);
        } catch (err) {
          console.error('Error while executing an action.', err);
          // Remove from executed set if there was an error
          executedActionsRef.current.delete(actionKey);
        }
      }
    }
    if (!lastMessage.content && callsCount > 0) {
      lastMessage.content = `*Done!*`;
    }
  }, [debugMode]);
  const handleShortcuts = useCallback(shortcuts => {
    setShortcuts(shortcuts || []);
  }, []);
  const handleBlocks = useCallback(blocks => {
    setBlocks(blocks || []);
  }, []);

  // New Server Reply: Update the messages
  useEffect(() => {
    if (!serverReply) {
      return;
    }
    setBusy(false);
    const freshMessages = [...messages];
    const lastMessage = freshMessages.length > 0 ? freshMessages[freshMessages.length - 1] : null;

    // Failure
    if (!serverReply.success) {
      // Remove the isQuerying placeholder for the assistant.
      if (lastMessage.role === 'assistant' && lastMessage.isQuerying) {
        freshMessages.pop();
      }

      // Get the user message to extract query for retry
      const userMessageIndex = freshMessages.length - 1;
      let textToRetry = null;
      let fileToRetry = null;
      if (userMessageIndex >= 0 && freshMessages[userMessageIndex].role === 'user') {
        const userMessage = freshMessages[userMessageIndex];
        const content = userMessage.content;
        const markdownMatch = content.match(/^(?:\!\[.*?\]\(.*?\)|\[.*?\]\(.*?\))\n(.*)$/s);
        textToRetry = markdownMatch ? markdownMatch[1] : content;
        if (markdownMatch && uploadedFile) {
          fileToRetry = uploadedFile;
        }
      }
      setMessages(freshMessages);
      saveMessages(freshMessages);

      // Add error as a message
      addErrorMessage(serverReply.message, textToRetry ? {
        text: textToRetry,
        file: fileToRetry
      } : null);
      return;
    }

    // Success: Let's update the isQuerying/isStreaming or add a new message.
    if (lastMessage.role === 'assistant' && lastMessage.isQuerying) {
      lastMessage.content = (0,_app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('ai.reply', serverReply.reply, {
        chatId,
        botId
      });
      if (serverReply.images) {
        lastMessage.images = serverReply.images;
      }
      lastMessage.timestamp = new Date().getTime();
      delete lastMessage.isQuerying;
      handleActions(serverReply === null || serverReply === void 0 ? void 0 : serverReply.actions, lastMessage);
      handleBlocks(serverReply === null || serverReply === void 0 ? void 0 : serverReply.blocks);
      handleShortcuts(serverReply === null || serverReply === void 0 ? void 0 : serverReply.shortcuts);
    } else if (lastMessage.role === 'assistant' && lastMessage.isStreaming) {
      lastMessage.content = (0,_app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('ai.reply', serverReply.reply, {
        chatId,
        botId
      });
      if (serverReply.images) {
        lastMessage.images = serverReply.images;
      }
      lastMessage.timestamp = new Date().getTime();
      delete lastMessage.isStreaming;
      // Add completion event for streaming
      if ((debugMode || eventLogs) && lastMessage.streamEvents) {
        var _lastMessage$streamEv;
        const now = new Date().getTime();
        const startTime = ((_lastMessage$streamEv = lastMessage.streamEvents[0]) === null || _lastMessage$streamEv === void 0 ? void 0 : _lastMessage$streamEv.timestamp) || now;
        const duration = now - startTime;

        // Format duration in human-readable format
        let durationText;
        if (duration < 1000) {
          durationText = `${duration}ms`;
        } else if (duration < 60000) {
          durationText = `${(duration / 1000).toFixed(1)}s`;
        } else {
          const minutes = Math.floor(duration / 60000);
          const seconds = (duration % 60000 / 1000).toFixed(0);
          durationText = `${minutes}m ${seconds}s`;
        }
        lastMessage.streamEvents.push({
          type: 'event',
          subtype: 'status',
          data: `Request completed in ${durationText}.`,
          timestamp: now
        });
      }
      handleActions(serverReply === null || serverReply === void 0 ? void 0 : serverReply.actions, lastMessage);
      handleBlocks(serverReply === null || serverReply === void 0 ? void 0 : serverReply.blocks);
      handleShortcuts(serverReply === null || serverReply === void 0 ? void 0 : serverReply.shortcuts);
    }
    // Otherwise, let's add a new message
    else {
      const newMessage = {
        id: (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(),
        role: 'assistant',
        content: (0,_app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('ai.reply', serverReply.reply, {
          botId,
          chatId,
          customId
        }),
        who: rawAiName,
        timestamp: new Date().getTime()
      };
      if (serverReply.images) {
        newMessage.images = serverReply.images;
      }
      handleActions(serverReply === null || serverReply === void 0 ? void 0 : serverReply.actions, newMessage);
      handleBlocks(serverReply === null || serverReply === void 0 ? void 0 : serverReply.blocks);
      handleShortcuts(serverReply === null || serverReply === void 0 ? void 0 : serverReply.shortcuts);
      freshMessages.push(newMessage);
    }

    // Store response ID if available (for Responses API)
    if (serverReply.responseId) {
      setPreviousResponseId(serverReply.responseId);
    }
    setMessages(freshMessages);
    saveMessages(freshMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverReply]);

  // #region Submit Actions (Clear, Submit, File Upload, etc.)
  const onClear = useCallback(async ({
    chatId = null
  } = {}) => {
    if (!chatId) {
      chatId = (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)();
    }
    await setChatId(chatId);
    if (localStorageKey) {
      localStorage.removeItem(localStorageKey);
    }
    resetMessages();
    setInputText('');
    // Mark as not resuming since we're starting fresh
    setIsResumingConversation(false);
    setIsConversationLoaded(true);
    // Restore initial shortcuts instead of clearing them
    if (initialShortcuts.length > 0) {
      handleShortcuts(initialShortcuts);
    } else {
      setShortcuts([]);
    }
    setBlocks([]);
    setPreviousResponseId(null); // Reset response ID on clear
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId, initialShortcuts, handleShortcuts]);
  const onStartRealtimeSession = useCallback(async (talkMode = 'hands-free') => {
    const body = {
      botId: botId,
      customId: customId,
      contextId: contextId,
      chatId: chatId,
      talkMode: talkMode
    };
    const nonce = restNonceRef.current ?? (await refreshRestNonce());
    const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai-ui/v1/openai/realtime/start`, body, nonce);
    const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiHandleRes)(res, null, null, null, debugMode);
    return data;
  }, [botId, customId, contextId, chatId, restNonce, refreshRestNonce, restUrl]);
  const onCommitStats = useCallback(async (stats, refId = null) => {
    try {
      const nonce = restNonceRef.current ?? (await refreshRestNonce());
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai-ui/v1/openai/realtime/stats`, {
        botId: botId,
        session: sessionId,
        refId: refId || chatId,
        stats: stats
      }, nonce);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiHandleRes)(res, null, null, null, debugMode);
      return {
        success: data.success,
        message: data.message,
        overLimit: data.overLimit || false,
        limitMessage: data.limitMessage || null
      };
    } catch (err) {
      console.error('Error while committing stats.', err);
      return {
        success: false,
        message: __('An error occurred while committing the stats.')
      };
    }
  }, [botId, restNonce, refreshRestNonce, restUrl, sessionId, chatId]);
  const onCommitDiscussions = useCallback(async (messages = []) => {
    try {
      const nonce = restNonceRef.current ?? (await refreshRestNonce());
      const payload = {
        botId: botId,
        session: sessionId,
        chatId: chatId,
        messages: (messages ?? []).filter(msg => msg.role !== 'error' && !msg.isError)
      };
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai-ui/v1/openai/realtime/discussions`, payload, nonce);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiHandleRes)(res, null, null, null, debugMode);
      return {
        success: data.success,
        message: data.message
      };
    } catch (err) {
      console.error('Error while committing discussion.', err);
      return {
        success: false,
        message: __('An error occurred while committing the discussion.')
      };
    }
  }, [botId, chatId, restNonce, refreshRestNonce, restUrl, sessionId]);
  const onRealtimeFunctionCallback = useCallback(async (functionId, functionType, functionName, functionTarget, args) => {
    const body = {
      functionId,
      functionType,
      functionName,
      functionTarget,
      arguments: args
    };
    if (functionTarget === 'js') {
      const finalArgs = args ? Object.values(args).map(arg => {
        return JSON.stringify(arg);
      }) : [];
      try {
        if (debugMode) {
          // eslint-disable-next-line no-console
          console.log(`[CHATBOT] CALL ${functionName}(${finalArgs.join(', ')})`);
        }
        eval(`${functionName}(${finalArgs.join(', ')})`);
        return {
          success: true,
          message: 'The function was executed',
          data: null
        };
      } catch (err) {
        console.error('Error while executing an action.', err);
        return {
          success: false,
          message: __('An error occurred while executing the function.'),
          data: null
        };
      }
    } else {
      const nonce = restNonceRef.current ?? (await refreshRestNonce());
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai-ui/v1/openai/realtime/call`, body, nonce);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiHandleRes)(res, null, null, null, debugMode);
      return data;
    }
    return null;
  }, [restNonce, refreshRestNonce, restUrl, debugMode]);
  const onSubmit = useCallback(async textQuery => {
    var _uploadedFile$localFi;
    if (busy) {
      console.error('AI Engine: There is already a query in progress.');
      return;
    }

    // This avoid the onSubmit to send an event.
    if (typeof textQuery !== 'string') {
      textQuery = inputText;
    }
    const currentFile = uploadedFile;
    const currentFiles = multiUpload ? uploadedFiles : [];
    const currentImageUrl = uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.uploadedUrl;
    const mimeType = uploadedFile === null || uploadedFile === void 0 || (_uploadedFile$localFi = uploadedFile.localFile) === null || _uploadedFile$localFi === void 0 ? void 0 : _uploadedFile$localFi.type;
    const isImage = mimeType ? mimeType.startsWith('image') : false;

    // textQuery is the text that will be sent to AI
    // but we also need the text that will be displayed in the chat, with the uploaded image first, using Markdown
    let textDisplay = textQuery;

    // Handle multiple files display
    if (multiUpload && currentFiles.length > 0) {
      const fileLinks = currentFiles.map(file => {
        var _file$localFile;
        const fileMimeType = (_file$localFile = file.localFile) === null || _file$localFile === void 0 ? void 0 : _file$localFile.type;
        const fileIsImage = fileMimeType ? fileMimeType.startsWith('image') : false;
        if (fileIsImage) {
          return `![Uploaded Image](${file.uploadedUrl})`;
        } else {
          var _file$localFile2;
          return `[${((_file$localFile2 = file.localFile) === null || _file$localFile2 === void 0 ? void 0 : _file$localFile2.name) || 'Uploaded File'}](${file.uploadedUrl})`;
        }
      }).join(' ');
      textDisplay = `${fileLinks}\n\n${textQuery}`;
    } else if (currentImageUrl) {
      // Single file display (backward compatibility)
      if (isImage) {
        textDisplay = `![Uploaded Image](${currentImageUrl})\n\n${textQuery}`;
      } else {
        textDisplay = `[Uploaded File](${currentImageUrl})\n\n${textQuery}`;
      }
    }
    setBusy(true);
    setInputText('');
    setShortcuts([]);
    setBlocks([]);
    resetUploadedFile();
    if (multiUpload) {
      resetUploadedFiles();
    }

    // Get the current messages to ensure we have the latest state
    const currentMessages = messages;
    const bodyMessages = [...currentMessages, {
      id: (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(),
      role: 'user',
      content: textDisplay,
      who: rawUserName,
      timestamp: new Date().getTime()
    }];
    saveMessages(bodyMessages);
    const freshMessageId = (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)();
    const freshMessages = [...bodyMessages, {
      id: freshMessageId,
      role: 'assistant',
      content: stream ? '' : null,
      who: rawAiName,
      timestamp: null,
      isQuerying: stream ? false : true,
      isStreaming: stream ? true : false,
      // Add initial stream event for request start
      streamEvents: stream && (debugMode || eventLogs) ? [] : undefined
    }];
    setMessages(freshMessages);

    // TEMPORARY: Force error for testing - remove this after testing
    if (textQuery === '[ERROR]') {
      setBusy(false);
      // Remove the assistant "thinking" message
      const updatedMessages = messages.slice(0, -1);
      setMessages(updatedMessages);

      // Array of random test error messages
      const testErrors = [__('Connection timeout: The server took too long to respond.'), __('Invalid API key: Please check your OpenAI API key in settings.'), __('Rate limit exceeded: Too many requests. Please try again later.'), __('Model overloaded: The AI model is currently experiencing high demand.'), __('Network error: Failed to establish connection to the AI service.'), __('Authentication failed: Your session has expired. Please refresh the page.'), __('Service unavailable: The AI service is temporarily down for maintenance.'), __('Invalid request: The message format was not recognized by the server.'), __('Quota exceeded: You have reached your usage limit for this period.'), __('Internal server error: An unexpected error occurred. Please try again.')];

      // Pick a random error
      const randomError = testErrors[Math.floor(Math.random() * testErrors.length)];

      // Add error message and save to localStorage
      const errorMessage = {
        id: (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)(),
        role: 'error',
        content: `[TEST ERROR] ${randomError}`,
        who: 'Error',
        timestamp: new Date().getTime(),
        isError: true,
        failedQuery: {
          text: textQuery,
          file: currentFile
        }
      };
      const messagesWithError = [...bodyMessages, errorMessage];
      setMessages(messagesWithError);
      saveMessages(messagesWithError);
      setLastFailedQuery({
        text: textQuery,
        file: currentFile
      });
      return;
    }
    const body = {
      botId: botId,
      customId: customId,
      session: sessionId,
      chatId: chatId,
      contextId: contextId,
      messages: messages.filter(msg => msg.role !== 'error' && !msg.isError),
      newMessage: textQuery,
      newFileId: multiUpload ? null : currentFile === null || currentFile === void 0 ? void 0 : currentFile.uploadedId,
      newFileIds: multiUpload ? currentFiles.map(f => f.uploadedId).filter(id => id) : null,
      stream,
      ...atts
    };

    // Add previousResponseId if available (for Responses API)
    if (previousResponseId) {
      body.previousResponseId = previousResponseId;
    }
    try {
      if (debugMode) {
        // eslint-disable-next-line no-console
        console.log('[CHATBOT] OUT: ', body);
      }
      const streamCallback = !stream ? null : (content, streamData) => {
        // Debug enhanced streaming data
        if (debugMode && streamData && streamData.subtype) {
          console.log('[CHATBOT] STREAM EVENT:', streamData);
        }
        setMessages(messages => {
          const freshMessages = [...messages];
          const lastMessage = freshMessages.length > 0 ? freshMessages[freshMessages.length - 1] : null;
          if (lastMessage && lastMessage.id === freshMessageId) {
            lastMessage.content = content;
            lastMessage.timestamp = new Date().getTime();
            // Store stream data for enhanced display
            if (streamData && streamData.subtype) {
              // Initialize streamEvents array if not exists
              if (!lastMessage.streamEvents) {
                lastMessage.streamEvents = [];
              }
              // Add the new event with timestamp
              lastMessage.streamEvents.push({
                ...streamData,
                timestamp: new Date().getTime()
              });
            }
          }
          return freshMessages;
        });
      };

      // We need to refresh the restNonce before sending the request.
      const nonce = restNonceRef.current ?? (await refreshRestNonce());

      // Send "Request sent..." event immediately when we send the HTTP request
      if (stream && (debugMode || eventLogs) && streamCallback) {
        streamCallback('', {
          type: 'event',
          subtype: 'status',
          data: 'Request sent...',
          timestamp: new Date().getTime()
        });
      }

      // Handler for token updates
      const handleTokenUpdate = newToken => {
        setRestNonce(newToken);
        restNonceRef.current = newToken;
        _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(newToken); // Update globally
      };

      // Let's perform the request. The mwaiHandleRes will handle the complexity of response.
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetch)(`${restUrl}/mwai-ui/v1/chats/submit`, body, nonce, stream, undefined, handleTokenUpdate);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiHandleRes)(res, streamCallback, debugMode ? "CHATBOT" : null, handleTokenUpdate, debugMode);
      if (!data.success && data.message) {
        // We remove the 'busy' message.
        const updatedMessages = [...freshMessages];
        updatedMessages.pop(); // Remove assistant message

        // Get the user message to extract the query for retry
        const userMessageIndex = updatedMessages.length - 1;
        let textToRetry = null;
        let fileToRetry = null;
        if (userMessageIndex >= 0 && updatedMessages[userMessageIndex].role === 'user') {
          const userMessage = updatedMessages[userMessageIndex];
          // Extract the actual text content without image/file markdown
          const content = userMessage.content;
          // Remove markdown image/file prefix if present
          const markdownMatch = content.match(/^(?:\!\[.*?\]\(.*?\)|\[.*?\]\(.*?\))\n(.*)$/s);
          textToRetry = markdownMatch ? markdownMatch[1] : content;
          // Check if there was a file
          if (markdownMatch) {
            fileToRetry = currentFile;
          }
        }
        setMessages(updatedMessages);
        saveMessages(updatedMessages);

        // Add error as a message instead of setting error state
        addErrorMessage(data.message, textToRetry ? {
          text: textToRetry,
          file: fileToRetry
        } : null);
        setBusy(false);
        return;
      }
      setServerReply(data);
    } catch (err) {
      console.error("An error happened in the handling of the chatbot response.", {
        err
      });
      setBusy(false);

      // Remove the "thinking" message that was added
      setMessages(prevMessages => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.role === 'assistant' && (lastMessage.content === '' || lastMessage.content === null)) {
          return prevMessages.slice(0, -1);
        }
        return prevMessages;
      });

      // Extract the user's query for retry
      const userMessageIndex = messages.length;
      let textToRetry = null;
      let fileToRetry = null;
      if (userMessageIndex >= 0 && freshMessages[userMessageIndex].role === 'user') {
        const userMessage = freshMessages[userMessageIndex];
        const content = userMessage.content;
        const markdownMatch = content.match(/^(?:\!\[.*?\]\(.*?\)|\[.*?\]\(.*?\))\n(.*)$/s);
        textToRetry = markdownMatch ? markdownMatch[1] : content;
        if (markdownMatch) {
          fileToRetry = currentFile;
        }
      }

      // Add error as a message
      addErrorMessage(err.message || __('An error occurred while processing your request. Please try again.'), textToRetry ? {
        text: textToRetry,
        file: fileToRetry
      } : null);
    }
  }, [busy, uploadedFile, messages, saveMessages, stream, botId, customId, sessionId, chatId, contextId, atts, inputText, debugMode, restNonce, refreshRestNonce, restUrl]);
  const onSubmitAction = useCallback((forcedText = null) => {
    var _chatbotInputRef$curr2;
    const hasFileUploaded = !!(uploadedFile !== null && uploadedFile !== void 0 && uploadedFile.uploadedId);
    hasFocusRef.current = ((_chatbotInputRef$curr2 = chatbotInputRef.current) === null || _chatbotInputRef$curr2 === void 0 ? void 0 : _chatbotInputRef$curr2.currentElement) && document.activeElement === chatbotInputRef.current.currentElement();
    if (forcedText) {
      onSubmit(forcedText);
    } else if (hasFileUploaded || inputText.length > 0) {
      onSubmit(inputText);
    }
  }, [inputText, onSubmit, uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.uploadedId]);

  // Retry the last failed query - restore it to the input field
  const retryLastQuery = useCallback(() => {
    if (lastFailedQuery) {
      var _chatbotInputRef$curr3;
      // Restore the input text
      setInputText(lastFailedQuery.text);
      // If there was an uploaded file, restore it
      if (lastFailedQuery.file) {
        setUploadedFile(lastFailedQuery.file);
      }
      // Clear the last failed query
      setLastFailedQuery(null);
      // Focus the input field if possible
      if ((_chatbotInputRef$curr3 = chatbotInputRef.current) !== null && _chatbotInputRef$curr3 !== void 0 && _chatbotInputRef$curr3.focusInput) {
        setTimeout(() => {
          chatbotInputRef.current.focusInput();
        }, 100);
      }
    }
  }, [lastFailedQuery, setInputText, chatbotInputRef]);

  // This is called when the user uploads an image or file.
  const onFileUpload = async (file, type = "N/A", purpose = "N/A") => {
    try {
      if (file === null) {
        resetUploadedFile();
        return;
      }
      const params = {
        type,
        purpose
      };
      const url = `${restUrl}/mwai-ui/v1/files/upload`;

      // Upload with progress
      const nonce = restNonceRef.current ?? (await refreshRestNonce());
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetchUpload)(url, file, nonce, progress => {
        setUploadedFile({
          localFile: file,
          uploadedId: null,
          uploadedUrl: null,
          uploadProgress: progress
        });
      }, params);
      setUploadedFile({
        localFile: file,
        uploadedId: res.data.id,
        uploadedUrl: res.data.url,
        uploadProgress: null
      });
    } catch (error) {
      console.error('onFileUpload Error', error);
      addErrorMessage(error.message || 'An unknown error occurred');
      resetUploadedFile();
    }
  };

  // This is called when the user uploads an image or file.
  const onUploadFile = async file => {
    // Remove any error messages when uploading a new file
    setMessages(prevMessages => prevMessages.filter(msg => !msg.isError));
    return onFileUpload(file);
  };
  const resetUploadedFile = () => {
    setUploadedFile({
      localFile: null,
      uploadedId: null,
      uploadedUrl: null,
      uploadProgress: null
    });
  };

  // Multi-file upload functions
  const addUploadedFile = file => {
    setUploadedFiles(prev => [...prev, file]);
  };
  const removeUploadedFile = index => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };
  const resetUploadedFiles = () => {
    setUploadedFiles([]);
  };
  const onMultiFileUpload = async (file, type = "N/A", purpose = "N/A") => {
    // Create tempId outside try block so it's accessible in catch
    const tempId = (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.randomStr)();
    try {
      if (file === null) {
        return;
      }

      // Check max uploads limit
      const limit = maxUploads || 5;
      if (uploadedFiles.length >= limit) {
        addErrorMessage(__(`Maximum upload limit reached (${limit} files). Please remove some files before uploading more.`));
        return;
      }
      const params = {
        type,
        purpose
      };
      const url = `${restUrl}/mwai-ui/v1/files/upload`;

      // Create temporary file entry with progress
      const tempFile = {
        localFile: file,
        uploadedId: null,
        uploadedUrl: null,
        uploadProgress: 0,
        tempId: tempId
      };
      addUploadedFile(tempFile);

      // Upload with progress - use tempId to identify the file
      const nonce = restNonceRef.current ?? (await refreshRestNonce());
      const res = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_2__.mwaiFetchUpload)(url, file, nonce, progress => {
        setUploadedFiles(prev => prev.map(f => f.tempId === tempId ? {
          ...f,
          uploadProgress: progress
        } : f));
      }, params);

      // Update file with upload results
      setUploadedFiles(prev => prev.map(f => f.tempId === tempId ? {
        localFile: file,
        uploadedId: res.data.id,
        uploadedUrl: res.data.url,
        uploadProgress: null,
        tempId: tempId
      } : f));
    } catch (error) {
      console.error('onMultiFileUpload Error', error);
      addErrorMessage(error.message || 'An unknown error occurred');
      // Remove the failed file by tempId
      setUploadedFiles(prev => prev.filter(f => f.tempId !== tempId));
    }
  };
  // #endregion

  // #region Timer
  const runTimer = useCallback(() => {
    const timer = setTimeout(() => {
      setOpen(prevOpen => {
        if (!prevOpen) {
          setShowIconMessage(true);
        }
        return prevOpen;
      });
    }, iconTextDelay * 1000);
    return () => clearTimeout(timer);
  }, [iconText, iconTextDelay]);
  useEffect(() => {
    if (iconText && !iconTextDelay) {
      setShowIconMessage(true);
    } else if (iconText && iconTextDelay) {
      return runTimer();
    }
  }, [iconText]);
  // #endregion

  // #region Tasks Queue
  const [tasks, setTasks] = useState([]);
  const runTasks = useCallback(async () => {
    if (tasks.length > 0) {
      const task = tasks[0];
      if (task.action === 'ask') {
        const {
          text,
          submit
        } = task.data;
        if (submit) {
          onSubmit(text);
        } else {
          setInputText(text);
        }
      } else if (task.action === 'toggle') {
        setOpen(prevOpen => !prevOpen);
      } else if (task.action === 'open') {
        setOpen(true);
      } else if (task.action === 'close') {
        setOpen(false);
      } else if (task.action === 'clear') {
        const {
          chatId
        } = task.data;
        onClear({
          chatId
        });
      } else if (task.action === 'setContext') {
        const {
          chatId,
          messages,
          previousResponseId
        } = task.data;
        setChatId(chatId);
        setMessages(messages);
        if (previousResponseId) {
          setPreviousResponseId(previousResponseId);
        }
        // Mark as resuming conversation when loading from Discussions Module
        setIsResumingConversation(true);
        setIsConversationLoaded(true);
        // Clear shortcuts when loading an existing discussion
        setShortcuts([]);
        // Save to localStorage to persist the loaded conversation
        saveMessages(messages);
      } else if (task.action === 'setShortcuts') {
        const shortcuts = task.data;
        handleShortcuts(shortcuts);
      } else if (task.action === 'setBlocks') {
        const blocks = task.data;
        handleBlocks(blocks);
      } else if (task.action === 'addBlock') {
        const block = task.data;
        setBlocks(prevBlocks => {
          return [...prevBlocks, block];
        });
      } else if (task.action === 'removeBlockById') {
        const blockId = task.data;
        setBlocks(prevBlocks => {
          return prevBlocks.filter(block => block.id !== blockId);
        });
      }
      setTasks(prevTasks => prevTasks.slice(1));
    }
  }, [tasks, onClear, onSubmit, setChatId, setInputText, setMessages, setOpen, handleShortcuts, handleBlocks]);
  useEffect(() => {
    runTasks();
  }, [runTasks]);
  // #endregion

  const updateComponentConfig = config => {
    if (config.containerType !== undefined) setContainerType(config.containerType);
    if (config.headerType !== undefined) setHeaderType(config.headerType);
    if (config.contentType !== undefined) setContentType(config.contentType);
    if (config.footerType !== undefined) setFooterType(config.footerType);
  };
  const actions = {
    // Text Chatbot
    setInputText,
    saveMessages,
    setMessages,
    resetMessages,
    setError,
    resetError,
    addErrorMessage,
    retryLastQuery,
    onClear,
    onSubmit,
    onSubmitAction,
    onFileUpload,
    onUploadFile,
    resetUploadedFile,
    setUploadedFile,
    onMultiFileUpload,
    addUploadedFile,
    removeUploadedFile,
    resetUploadedFiles,
    setUploadedFiles,
    setOpen,
    setOpening,
    setClosing,
    setWindowed,
    setShowIconMessage,
    setIsListening,
    setDraggingType,
    setIsBlocked,
    // Realtime Chatbot
    onStartRealtimeSession,
    onRealtimeFunctionCallback,
    onCommitStats,
    onCommitDiscussions,
    // Component configuration
    updateComponentConfig
  };
  const state = {
    theme,
    params,
    // Add the full params object
    botId,
    customId,
    userData,
    pluginUrl,
    inputText,
    messages,
    shortcuts,
    // Quick actions are buttons that can be displayed in the chat.
    blocks,
    // Blocks are used to display HTML content. A form, a video, etc.
    busy,
    error,
    setBusy,
    typewriter,
    speechRecognition,
    speechSynthesis,
    localMemory,
    isRealtime,
    fileUpload,
    multiUpload,
    maxUploads,
    uploadedFile,
    uploadedFiles,
    fileSearch,
    allowedMimeTypes,
    textSend,
    textClear,
    textInputMaxLength,
    textInputPlaceholder,
    textCompliance,
    aiName,
    userName,
    guestName,
    aiAvatar,
    userAvatar,
    guestAvatar,
    aiAvatarUrl,
    userAvatarUrl,
    guestAvatarUrl,
    isWindow,
    copyButton,
    headerSubtitle,
    popupTitle,
    fullscreen,
    icon,
    iconText,
    iconAlt,
    iconPosition,
    centerOpen,
    width,
    openDelay,
    iconBubble,
    windowAnimation,
    cssVariables,
    iconUrl,
    chatbotInputRef,
    conversationRef,
    isMobile,
    open,
    opening,
    closing,
    locked,
    windowed,
    showIconMessage,
    timeElapsed,
    isListening,
    speechRecognitionAvailable,
    uploadIconPosition,
    submitButtonConf,
    draggingType,
    isBlocked,
    busyNonce,
    debugMode,
    eventLogs,
    system,
    // Add the full system object
    // Component configuration
    containerType,
    headerType,
    messagesType,
    inputType,
    footerType
  };
  return /*#__PURE__*/React.createElement(ChatbotContext.Provider, {
    value: {
      state,
      actions
    }
  }, children);
};

/***/ }),

/***/ "./app/js/chatbot/ChatbotEvents.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/ChatbotEvents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wrench.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/minimize-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/maximize-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/index.modern.js");
const {
  useState,
  useMemo,
  useEffect
} = wp.element;


const ChatbotEvents = ({
  allStreamData,
  debugMode,
  onClear,
  hasData,
  isWindow
}) => {
  const [expanded, setExpanded] = useState({});
  const [isVisible, setIsVisible] = useState(false); // Default to hidden/minimized
  const [showAll, setShowAll] = useState(isWindow ? false : true); // Minimal view (false) in popup mode, full view otherwise

  // Process all stream data into chunks
  const chunks = useMemo(() => {
    if (!allStreamData || allStreamData.length === 0) {
      return [];
    }
    const processedData = allStreamData.map((data, index) => ({
      ...data,
      id: `${data.messageId}-${index}`,
      displayTime: new Date(data.timestamp).toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    })).reverse(); // Newest first

    // If showAll is false, only show the last event
    if (!showAll) {
      return processedData.slice(0, 1);
    }

    // Otherwise show up to 20 events
    return processedData.slice(0, 20);
  }, [allStreamData, showAll]);

  // Map subtypes to simplified categories
  const getEventCategory = (subtype, metadata) => {
    switch (subtype) {
      case 'tool_call':
      case 'tool_args':
        return 'function';
      case 'tool_result':
        // Check if this is an MCP result by looking at the metadata
        if ((metadata === null || metadata === void 0 ? void 0 : metadata.is_mcp) === true) {
          return 'mcp';
        }
        // Legacy check: look for previous mcp_tool_call event
        if (metadata !== null && metadata !== void 0 && metadata.tool_name && chunks.some(c => {
          var _c$metadata;
          return c.subtype === 'mcp_tool_call' && ((_c$metadata = c.metadata) === null || _c$metadata === void 0 ? void 0 : _c$metadata.name) === metadata.tool_name;
        })) {
          return 'mcp';
        }
        return 'function';
      case 'mcp_discovery':
      case 'mcp_tool_call':
      case 'mcp_tool_result':
        return 'mcp';
      case 'thinking':
        return 'thinking';
      case 'status':
        return 'output';
      // Most status events are about output
      case 'web_search':
      case 'file_search':
        return 'search';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'content':
        return 'output';
      default:
        return subtype;
    }
  };
  const getIcon = category => {
    switch (category) {
      case 'function':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          size: 14
        });
      case 'mcp':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          size: 14
        });
      case 'thinking':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          size: 14
        });
      case 'output':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          size: 14
        });
      case 'search':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 14
        });
      case 'error':
      case 'warning':
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 14
        });
      default:
        return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          size: 14
        });
    }
  };
  const getCategoryColor = (category, data) => {
    switch (category) {
      case 'function':
        return '#3b82f6';
      // blue for function calls
      case 'mcp':
        return '#8b5cf6';
      // purple for MCP discovery
      case 'thinking':
        return '#8b5cf6';
      // purple
      case 'output':
        // Different colors for different output messages
        if (data && data.includes('completed')) {
          return '#10b981'; // green for completion
        }
        if (data && data.includes('started') || data && data.includes('...')) {
          return '#06b6d4'; // cyan for in-progress
        }
        return '#6b7280';
      // gray for other output
      case 'search':
        return '#f59e0b';
      // amber
      case 'error':
        return '#ef4444';
      // red
      case 'warning':
        return '#f97316';
      // orange
      default:
        return '#6b7280';
      // gray
    }
  };
  const toggleExpanded = chunkId => {
    setExpanded(prev => ({
      ...prev,
      [chunkId]: !prev[chunkId]
    }));
  };

  // Get the latest meaningful event for status display
  const latestEvent = useMemo(() => {
    if (chunks.length === 0) return null;

    // Look for the most recent meaningful status
    for (const chunk of chunks) {
      const category = getEventCategory(chunk.subtype, chunk.metadata);

      // Show all events except debug and heartbeat
      if (chunk.subtype !== 'debug' && chunk.subtype !== 'heartbeat') {
        // For completed events, check if it's the stream completed message
        if (chunk.data.includes('Stream completed')) {
          // Find if there's a request completed message after this
          const completedIndex = chunks.findIndex(c => c.data.includes('Request completed'));
          if (completedIndex >= 0 && completedIndex < chunks.indexOf(chunk)) {
            // Use the request completed message instead
            const completedChunk = chunks[completedIndex];
            return {
              data: completedChunk.data,
              category: getEventCategory(completedChunk.subtype, completedChunk.metadata),
              color: getCategoryColor(getEventCategory(completedChunk.subtype, completedChunk.metadata), completedChunk.data)
            };
          }
        }
        return {
          data: chunk.data,
          category: category,
          color: getCategoryColor(category, chunk.data)
        };
      }
    }
    return null;
  }, [chunks]);
  return /*#__PURE__*/React.createElement("div", {
    className: `mwai-chunks ${!isVisible ? 'mwai-chunks-collapsed' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunks-header"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "mwai-chunks-title"
  }, "Events", latestEvent && /*#__PURE__*/React.createElement("span", {
    className: "mwai-chunks-status",
    style: {
      color: latestEvent.color
    }
  }, ": ", latestEvent.data)), isVisible && /*#__PURE__*/React.createElement(React.Fragment, null, chunks.length > 0 && onClear && /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunks-toggle",
    onClick: onClear,
    title: "Clear stream events"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 12
  })), !isWindow && /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunks-toggle",
    onClick: () => setShowAll(!showAll),
    title: showAll ? "Show minimal (last event only)" : "Show detailed (all events)"
  }, showAll ? /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 12
  }) : /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunks-toggle",
    onClick: () => setIsVisible(!isVisible),
    title: isVisible ? "Hide events" : "Show events"
  }, isVisible ? /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 12
  }) : /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 12
  }))), isVisible && (chunks.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-chunk-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mwai-chunk-time"
  }, "--:--:--"), /*#__PURE__*/React.createElement("span", {
    className: "mwai-chunk-type",
    style: {
      backgroundColor: '#6b7280'
    }
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 14
  }), "waiting"), /*#__PURE__*/React.createElement("span", {
    className: "mwai-chunk-data"
  }, "No events yet."))) : chunks.map(chunk => {
    const isExpanded = expanded[chunk.id];
    const category = getEventCategory(chunk.subtype, chunk.metadata);
    const hasDetails = chunk.metadata && Object.keys(chunk.metadata).length > 0 || category === 'thinking';
    return /*#__PURE__*/React.createElement("div", {
      key: chunk.id,
      className: "mwai-chunk"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwai-chunk-header",
      onClick: () => hasDetails && toggleExpanded(chunk.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "mwai-chunk-time"
    }, chunk.displayTime), /*#__PURE__*/React.createElement("span", {
      className: "mwai-chunk-type",
      style: {
        backgroundColor: getCategoryColor(category, chunk.data)
      }
    }, getIcon(category), category), /*#__PURE__*/React.createElement("span", {
      className: "mwai-chunk-data"
    }, (() => {
      const dataStr = typeof chunk.data === 'string' ? chunk.data : JSON.stringify(chunk.data);
      if (category === 'thinking') {
        // Check if the content starts with **something**
        const headerMatch = dataStr.match(/^\*\*([^*]+)\*\*/);
        if (headerMatch) {
          // Show only the header text (no formatting)
          return headerMatch[1];
        }

        // If no header found, show the beginning of the content
        return dataStr.substring(0, 50) + (dataStr.length > 50 ? '...' : '');
      }
      return dataStr;
    })()), hasDetails && /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: 12,
      className: "mwai-chunk-expand",
      style: {
        transform: isExpanded ? 'rotate(90deg)' : 'none'
      }
    })), isExpanded && hasDetails && /*#__PURE__*/React.createElement("div", {
      className: "mwai-chunk-details"
    }, category === 'thinking' ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0px 10px',
        fontFamily: 'system-ui'
      }
    }, (() => {
      const dataStr = typeof chunk.data === 'string' ? chunk.data : JSON.stringify(chunk.data);
      try {
        return (0,markdown_to_jsx__WEBPACK_IMPORTED_MODULE_10__.compiler)(dataStr);
      } catch (e) {
        return /*#__PURE__*/React.createElement("pre", null, dataStr);
      }
    })()) : /*#__PURE__*/React.createElement("pre", null, JSON.stringify(chunk.metadata, null, 2))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotEvents);

/***/ }),

/***/ "./app/js/chatbot/ChatbotHeader.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/ChatbotHeader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ComponentRegistry */ "./app/js/chatbot/components/ComponentRegistry.js");
/**
 * ChatbotHeader Component
 * 
 * Renders the chatbot header based on the selected header type.
 * For standard headers, it renders inline. For custom headers (osx, terminal),
 * it uses the modular header components from the ComponentRegistry.
 */

// React & Vendor Libs
const {
  useMemo
} = wp.element;





/**
 * Format avatar for display
 * @param {string} aiName - AI name
 * @param {string} pluginUrl - Plugin URL
 * @param {string} iconUrl - Icon URL
 * @param {string} aiAvatarUrl - AI Avatar URL
 * @returns {JSX.Element} Formatted avatar element
 */
function formatAvatar(aiName, pluginUrl, iconUrl, aiAvatarUrl) {
  const getAvatarSrc = url => {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isURL)(url)) {
      return url;
    } else if (url) {
      return `${pluginUrl}/images/${url}`;
    }
    return null;
  };
  const renderAvatar = (src, alt) => /*#__PURE__*/React.createElement("div", {
    className: "mwai-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    alt: alt,
    src: src
  }));
  const renderEmoji = emoji => /*#__PURE__*/React.createElement("div", {
    className: "mwai-avatar mwai-emoji",
    style: {
      fontSize: '48px',
      lineHeight: '48px'
    }
  }, emoji);
  if ((0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.isEmoji)(aiAvatarUrl || iconUrl)) {
    return renderEmoji(aiAvatarUrl || iconUrl);
  }

  // Priority: aiAvatarUrl > iconUrl > default image
  const avatarSrc = getAvatarSrc(aiAvatarUrl) || iconUrl || `${pluginUrl}/images/chat-openai.svg`;
  if (avatarSrc) {
    return renderAvatar(avatarSrc, "AI Engine");
  }

  // If no avatar is available, return the aiName as text
  return /*#__PURE__*/React.createElement("div", {
    className: "mwai-name-text"
  }, aiName);
}
const ChatbotHeader = ({
  onDragStart
}) => {
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_2__.useChatbotContext)();
  const {
    theme,
    isWindow,
    fullscreen,
    aiName,
    pluginUrl,
    open,
    closing,
    iconUrl,
    aiAvatarUrl,
    windowed,
    headerSubtitle,
    popupTitle,
    headerType,
    windowAnimation
  } = state;
  const {
    setOpen,
    setClosing,
    setWindowed
  } = actions;

  // Handle close with animation
  const handleClose = () => {
    if (closing || !open) return;

    // If no animation, close immediately
    if (!windowAnimation || windowAnimation === 'none') {
      setOpen(false);
      return;
    }

    // With animation, handle the timing
    setClosing(true);
    // Animation durations aligned with SASS
    const ANIM_DUR = {
      zoom: {
        close: 180,
        tail: 150
      },
      slide: {
        close: 200,
        tail: 150
      },
      fade: {
        close: 180,
        tail: 120
      }
    };
    const closeDur = ANIM_DUR[windowAnimation] && ANIM_DUR[windowAnimation].close || 180;
    const tailDur = ANIM_DUR[windowAnimation] && ANIM_DUR[windowAnimation].tail || 150;
    // First let the window animate closed
    setTimeout(() => {
      setOpen(false);
      // Keep closing state a bit longer for trigger to finish animating
      setTimeout(() => {
        setClosing(false);
      }, tailDur);
    }, closeDur); // Match the window close duration
  };

  // Determine if we should render a header
  if (!isWindow) {
    return null;
  }

  // Check if header is set to 'none'
  if (headerType === 'none') {
    return null;
  }

  // Standard header content (inline, used for 'standard' and also under OSX for Timeless)
  const headerContent = useMemo(() => {
    const timelessStyle = (theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless';
    const avatarImage = timelessStyle ? formatAvatar(aiName, pluginUrl, iconUrl, aiAvatarUrl) : null;
    const finalHeaderSubtitle = headerSubtitle === null || headerSubtitle === undefined ? "Discuss with" : headerSubtitle;
    const showStandardButtons = headerType !== 'osx'; // OSX header provides its own controls

    return /*#__PURE__*/React.createElement(React.Fragment, null, timelessStyle && /*#__PURE__*/React.createElement(React.Fragment, null, avatarImage, /*#__PURE__*/React.createElement("div", {
      className: "mwai-name"
    }, finalHeaderSubtitle && /*#__PURE__*/React.createElement("small", {
      className: "mwai-subtitle"
    }, finalHeaderSubtitle), /*#__PURE__*/React.createElement("div", null, aiName)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'auto'
      }
    })), showStandardButtons && /*#__PURE__*/React.createElement("div", {
      className: "mwai-buttons"
    }, fullscreen && /*#__PURE__*/React.createElement("div", {
      className: "mwai-resize-button",
      onClick: () => setWindowed(!windowed)
    }), /*#__PURE__*/React.createElement("div", {
      className: "mwai-close-button",
      onClick: handleClose
    })));
  }, [theme === null || theme === void 0 ? void 0 : theme.themeId, aiName, pluginUrl, iconUrl, aiAvatarUrl, fullscreen, setWindowed, windowed, handleClose, headerSubtitle, headerType]);

  // Get the appropriate header component (OSX, etc.)
  const actualHeaderType = headerType || 'standard';
  const HeaderComponent = (0,_components_ComponentRegistry__WEBPACK_IMPORTED_MODULE_3__.getComponent)('headers', actualHeaderType);

  // If we have a custom header component, render it. For macOS header we merge the Timeless big header
  // content inside the same container to avoid double borders and achieve a larger header.
  if (HeaderComponent && actualHeaderType !== 'standard') {
    const headerProps = {
      title: popupTitle || aiName,
      aiName,
      subtitle: headerSubtitle,
      pluginUrl,
      iconUrl,
      aiAvatarUrl,
      onClose: handleClose,
      onResize: () => setWindowed(!windowed),
      onMinimize: handleClose,
      onMaximize: () => setWindowed(!windowed),
      showResize: fullscreen,
      theme,
      isFullscreen: fullscreen && !windowed,
      isWindowed: windowed,
      onDragStart
    };

    // Merge Timeless header content inside OSX header; otherwise render OSX header alone
    const mergedContent = (theme === null || theme === void 0 ? void 0 : theme.themeId) === 'timeless' ? headerContent : null;
    return /*#__PURE__*/React.createElement(HeaderComponent, headerProps, mergedContent);
  }

  // For standard headers, wrap in mwai-header div
  return /*#__PURE__*/React.createElement("div", {
    className: "mwai-header",
    onMouseDown: onDragStart,
    role: "toolbar",
    "aria-label": "Chat header"
  }, headerContent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotHeader);

/***/ }),

/***/ "./app/js/chatbot/ChatbotInput.js":
/*!****************************************!*\
  !*** ./app/js/chatbot/ChatbotInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js");
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _ChatUploadIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatUploadIcon */ "./app/js/chatbot/ChatUploadIcon.js");
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
// React & Vendor Libs
const {
  useRef,
  useState,
  useEffect,
  useImperativeHandle
} = wp.element;




const ChatbotInput = () => {
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__.useChatbotContext)();
  const {
    inputText,
    textInputMaxLength,
    textInputPlaceholder,
    error,
    speechRecognitionAvailable,
    isMobile,
    conversationRef,
    open,
    uploadIconPosition,
    locked,
    isListening,
    busy,
    speechRecognition,
    chatbotInputRef
  } = state;
  const {
    onSubmitAction,
    setIsListening,
    resetError,
    setInputText
  } = actions;
  const [composing, setComposing] = useState(false);
  const inputRef = useRef();
  useImperativeHandle(chatbotInputRef, () => ({
    focusInput: () => {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
    },
    currentElement: () => inputRef.current
  }));

  // Focus input when opening (except mobile)
  useEffect(() => {
    if (!isMobile && open) {
      inputRef.current.focus();
    }
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [open, isMobile, conversationRef]);
  const onTypeText = text => {
    if (isListening) {
      setIsListening(false);
    }
    if (error) {
      resetError();
    }
    setInputText(text);
  };
  const classNames = css('mwai-input-text', {
    'mwai-dragging': state.draggingType,
    'mwai-blocked': state.isBlocked
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: chatbotInputRef,
    className: classNames
  }, uploadIconPosition === 'mwai-input' && /*#__PURE__*/React.createElement(_ChatUploadIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    disabled: busy || locked,
    placeholder: textInputPlaceholder,
    value: inputText,
    maxLength: textInputMaxLength,
    onCompositionStart: () => setComposing(true),
    onCompositionEnd: () => setComposing(false),
    onKeyDown: event => {
      if (composing) return;
      if (event.code === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        onSubmitAction();
      }
    },
    onChange: e => onTypeText(e.target.value)
  }), speechRecognition && /*#__PURE__*/React.createElement(_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.Microphone, {
    active: isListening,
    disabled: !speechRecognitionAvailable || busy,
    className: "mwai-microphone",
    onClick: () => setIsListening(!isListening)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotInput);

/***/ }),

/***/ "./app/js/chatbot/ChatbotName.js":
/*!***************************************!*\
  !*** ./app/js/chatbot/ChatbotName.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./app/js/helpers.js");
// React & Vendor Libs
const {
  useMemo
} = wp.element;



const ChatbotName = ({
  role = 'user'
}) => {
  const {
    state
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    pluginUrl,
    iconUrl,
    userData,
    userName,
    aiName,
    guestName,
    userAvatar,
    aiAvatar,
    guestAvatar,
    userAvatarUrl,
    aiAvatarUrl,
    guestAvatarUrl
  } = state;
  const formattedOutput = useMemo(() => {
    const isAi = role === 'assistant';
    const isGuest = !userData && !isAi;
    const getAvatarSrc = (url, isUserData = false) => {
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isURL)(url)) {
        return url;
      } else if (url && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmoji)(url)) {
        return isUserData ? url : `${pluginUrl}/images/${url}`;
      }
      if (!isUserData && !(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmoji)(url)) {
        console.warn('Invalid URL for avatar:', url);
      }
      return null;
    };
    const renderAvatar = (src, alt) => /*#__PURE__*/React.createElement("div", {
      className: "mwai-avatar"
    }, /*#__PURE__*/React.createElement("img", {
      width: "32",
      height: "32",
      src: src,
      alt: alt
    }));
    const renderEmoji = emoji => /*#__PURE__*/React.createElement("div", {
      className: "mwai-avatar mwai-emoji",
      style: {
        fontSize: '32px',
        lineHeight: '32px'
      }
    }, emoji);
    const renderName = name => /*#__PURE__*/React.createElement("div", {
      className: "mwai-name-text"
    }, name);
    const getAvatarContent = (avatarEnabled, avatarUrl, fallbackUrl, altText, isUserData = false) => {
      if (!avatarEnabled) return null;
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmoji)(avatarUrl)) {
        return renderEmoji(avatarUrl);
      }
      const src = getAvatarSrc(avatarUrl, isUserData) || fallbackUrl;
      if (!src) return null;
      return renderAvatar(src, altText);
    };
    if (isAi) {
      const aiAvatarContent = getAvatarContent(aiAvatar, aiAvatarUrl, iconUrl, "AI Avatar");
      if (aiAvatarContent) {
        if (aiAvatarUrl === null && iconUrl) {
          console.warn('Using iconUrl as a temporary fallback for AI avatar. Please set aiAvatarUrl.');
        }
        return aiAvatarContent;
      }
      return renderName(aiName);
    }
    if (!isGuest) {
      const userAvatarContent = getAvatarContent(userAvatar, userAvatarUrl, userData === null || userData === void 0 ? void 0 : userData.AVATAR_URL, "User Avatar", true);
      if (userAvatarContent) return userAvatarContent;
      return renderName(formatName(userName, guestName, userData));
    }
    if (isGuest) {
      const guestAvatarContent = getAvatarContent(guestAvatar, guestAvatarUrl, null, "Guest Avatar");
      if (guestAvatarContent) return guestAvatarContent;
      return renderName(guestName || "Guest");
    }
  }, [role, aiName, userName, guestName, userData, iconUrl, aiAvatar, userAvatar, guestAvatar, aiAvatarUrl, userAvatarUrl, guestAvatarUrl, pluginUrl]);
  return /*#__PURE__*/React.createElement("span", {
    className: "mwai-name"
  }, formattedOutput);
};
function formatName(template, guestName, userData) {
  if (!userData || Object.keys(userData).length === 0) {
    return guestName || template || "Guest";
  }
  return Object.entries(userData).reduce((acc, [placeholder, value]) => {
    const realPlaceholder = `{${placeholder}}`;
    return acc.includes(realPlaceholder) ? acc.replace(realPlaceholder, value) : acc;
  }, template);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotName);

/***/ }),

/***/ "./app/js/chatbot/ChatbotRealtime.js":
/*!*******************************************!*\
  !*** ./app/js/chatbot/ChatbotRealtime.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/image.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/square.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pause.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mic.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/captions.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/bug.js");
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _AudioVisualizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioVisualizer */ "./app/js/chatbot/AudioVisualizer.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./app/js/helpers.js");
/* harmony import */ var _helpers_RealtimeEventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/RealtimeEventEmitter */ "./app/js/helpers/RealtimeEventEmitter.js");
/* harmony import */ var _constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/streamTypes */ "./app/js/constants/streamTypes.js");
// React & Vendor Libs
const {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect
} = wp.element;








// Translation fallback for frontend where wp.i18n isn't available
const __ = text => {
  if (typeof wp !== 'undefined' && wp.i18n && wp.i18n.__) {
    return wp.i18n.__(text, 'ai-engine');
  }
  return text;
};

// Debug levels
const DEBUG_LEVELS = {
  none: 0,
  low: 1,
  normal: 2,
  high: 3,
  verbose: 4
};
const CURRENT_DEBUG = DEBUG_LEVELS.low;

/** Only logs if CURRENT_DEBUG >= level. */
function debugLog(level, ...args) {
  if (CURRENT_DEBUG >= level) console.log(...args);
}

/** Simplified parseUsage to gather 6 fields. */
function parseUsage(usage) {
  if (!usage) return null;
  const {
    input_token_details: {
      text_tokens: textIn = 0,
      audio_tokens: audioIn = 0,
      cached_tokens_details: {
        text_tokens: cachedText = 0,
        audio_tokens: cachedAudio = 0
      } = {}
    } = {},
    output_token_details: {
      text_tokens: textOut = 0,
      audio_tokens: audioOut = 0
    } = {}
  } = usage;
  return {
    text_input_tokens: textIn,
    audio_input_tokens: audioIn,
    text_output_tokens: textOut,
    audio_output_tokens: audioOut,
    text_cached_tokens: cachedText,
    audio_cached_tokens: cachedAudio
  };
}

/**
 * Representation of a chatbot participant (user or assistant).
 */
function getChatbotRepresentation(state, role = 'user') {
  const {
    pluginUrl,
    iconUrl,
    userData,
    userName,
    aiName,
    guestName,
    userAvatar,
    aiAvatar,
    guestAvatar,
    userAvatarUrl,
    aiAvatarUrl,
    guestAvatarUrl
  } = state;
  const getAvatarSrc = (url, isUserData = false) => {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isURL)(url)) return url;
    if (url && !(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isEmoji)(url)) return isUserData ? url : `${pluginUrl}/images/${url}`;
    return null;
  };
  const getRepresentation = (name, avatarEnabled, avatarUrl, fallbackUrl, isUserData = false) => {
    if (avatarEnabled) {
      const src = getAvatarSrc(avatarUrl, isUserData) || fallbackUrl;
      if (src) return {
        emoji: null,
        text: null,
        image: src,
        use: 'image'
      };
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isEmoji)(name)) return {
      emoji: name,
      text: null,
      image: null,
      use: 'emoji'
    };
    return {
      emoji: null,
      text: name,
      image: null,
      use: 'text'
    };
  };
  if (role === 'assistant') {
    return getRepresentation(aiName, aiAvatar, aiAvatarUrl, iconUrl);
  }
  if (userData) {
    const name = formatName(userName, guestName, userData);
    return getRepresentation(name, userAvatar, userAvatarUrl, userData === null || userData === void 0 ? void 0 : userData.AVATAR_URL, true);
  }
  if (!userData && role === 'user') {
    return getRepresentation(guestName || 'Guest', guestAvatar, guestAvatarUrl, null);
  }
  return {
    emoji: null,
    text: 'Unknown',
    image: null,
    use: 'text'
  };
}
function formatName(template, guestName, userData) {
  if (!userData || Object.keys(userData).length === 0) return guestName || template || 'Guest';
  return Object.entries(userData).reduce((acc, [key, val]) => {
    const placeholder = `{${key}}`;
    return acc.includes(placeholder) ? acc.replace(placeholder, val) : acc;
  }, template);
}
const ChatbotRealtime = ({
  onMessagesUpdate,
  onStreamEvent
}) => {
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_2__.useChatbotContext)();
  const {
    busy,
    locked,
    open,
    popup,
    system,
    blocks,
    params
  } = state;
  const {
    onStartRealtimeSession,
    onRealtimeFunctionCallback,
    onCommitStats,
    onCommitDiscussions
  } = actions;
  const debugMode = (system === null || system === void 0 ? void 0 : system.debugMode) || false;
  const eventLogs = (system === null || system === void 0 ? void 0 : system.eventLogs) || false;
  const visionEnabled = (params === null || params === void 0 ? void 0 : params.fileUpload) === true || (system === null || system === void 0 ? void 0 : system.fileUpload) === true;
  const talkMode = (params === null || params === void 0 ? void 0 : params.talkMode) || 'hands-free'; // 'hands-free' or 'hold-to-talk'

  // Realtime session states
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isPaused, setIsPaused] = useState(talkMode === 'hold-to-talk'); // Start paused in hold-to-talk mode
  const [isPushingToTalk, setIsPushingToTalk] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [whoIsSpeaking, setWhoIsSpeaking] = useState(null);
  const [error, setError] = useState(null);
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVision, setHasVision] = useState(false);

  // Statistics
  const [statistics, setStatistics] = useState({
    text_input_tokens: 0,
    audio_input_tokens: 0,
    text_output_tokens: 0,
    audio_output_tokens: 0,
    text_cached_tokens: 0,
    audio_cached_tokens: 0
  });

  // Image upload support
  const fileInputRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [processingImage, setProcessingImage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Conversation messages
  const [messages, setMessages] = useState([]);
  const processedItemIdsRef = useRef(new Set());

  // Event callback for stream events - send directly to parent
  const handleStreamEvent = useCallback((content, eventData) => {
    if (eventData && eventData.subtype && onStreamEvent) {
      // Send event directly to parent component
      onStreamEvent({
        ...eventData,
        timestamp: eventData.timestamp || new Date().getTime(),
        messageId: 'realtime-session'
      });
    }
  }, [onStreamEvent]);

  // Initialize event emitter
  const eventEmitterRef = useRef(null);
  useEffect(() => {
    eventEmitterRef.current = new _helpers_RealtimeEventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"](handleStreamEvent, eventLogs);
  }, [handleStreamEvent, eventLogs]);

  // WebRTC references
  const pcRef = useRef(null);
  const dataChannelRef = useRef(null);
  const localStreamRef = useRef(null);
  const stopRealtimeConnectionRef = useRef(null);

  // Toggles
  const [showOptions, setShowOptions] = useState(true);
  const [showUsers, setShowUsers] = useState(true);
  const [showCaptions, setShowCaptions] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [transcriptExpanded, setTranscriptExpanded] = useState(false);

  // Assistant stream
  const [assistantStream, setAssistantStream] = useState(null);

  // Replay feature - store last response audio
  const [lastResponseAudio, setLastResponseAudio] = useState(null);
  const [isReplaying, setIsReplaying] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  // Function callbacks from the server
  const functionCallbacksRef = useRef([]);

  // UI representation
  const userUI = useMemo(() => getChatbotRepresentation(state, 'user'), [state]);
  const assistantUI = useMemo(() => getChatbotRepresentation(state, 'assistant'), [state]);

  // Cleanup
  useEffect(() => {
    if (!open && isSessionActive && popup) stopRealtimeConnection();
  }, [open, popup, isSessionActive]);

  // Update parent component with messages
  useEffect(() => {
    if (onMessagesUpdate) {
      onMessagesUpdate(messages);
    }
  }, [messages, onMessagesUpdate]);

  /**
   * Helper: Send updated stats to your WordPress REST API.
   */
  const commitStatsToServer = useCallback(async usageStats => {
    // usageStats contains {text_input_tokens, audio_input_tokens, text_output_tokens, ...}
    const result = await onCommitStats(usageStats);

    // Check if user has exceeded limits
    if (result.overLimit) {
      // Emit an event about the limit being exceeded
      if (eventLogs && eventEmitterRef.current) {
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.ERROR, result.limitMessage || __('Usage limit exceeded'), {
          visibility: 'visible',
          error: true
        });
      }

      // Stop the realtime connection
      console.warn('Usage limit exceeded, stopping realtime connection:', result.limitMessage);
      if (stopRealtimeConnectionRef.current) {
        stopRealtimeConnectionRef.current();
      }
    }
  }, [onCommitStats, eventLogs]);

  /**
   * Enable audio transcription (Whisper).
   */
  const enableAudioTranscription = useCallback(() => {
    if (!dataChannelRef.current || dataChannelRef.current.readyState !== 'open') {
      console.error('Data channel is not open yet; cannot enable transcription.');
      return;
    }
    dataChannelRef.current.send(JSON.stringify({
      type: 'session.update',
      session: {
        input_audio_transcription: {
          model: 'whisper-1'
        }
      }
    }));
    debugLog(DEBUG_LEVELS.low, 'Sent session.update to enable Whisper.');
  }, []);

  /**
   * Handle real-time function calls from the AI.
   */
  const handleFunctionCall = useCallback(async (callId, functionName, rawArgs) => {
    let parsedArgs = {};
    try {
      parsedArgs = JSON.parse(rawArgs || '{}');
    } catch (err) {
      console.error('Could not parse function arguments.', rawArgs);
    }
    const fns = functionCallbacksRef.current;
    const cb = fns.find(f => f.name === functionName);
    if (!cb) {
      console.error(`No match for callback: '${functionName}'.`);
      return;
    }
    try {
      var _dataChannelRef$curre;
      const result = await onRealtimeFunctionCallback(cb.id, cb.type, cb.name, cb.target, parsedArgs);
      if (!(result !== null && result !== void 0 && result.success)) {
        console.error('Callback failed.', result === null || result === void 0 ? void 0 : result.message);
        // Function error will be shown in stream events
        return;
      }
      const functionOutput = result.data;

      // Emit function result event
      if (eventLogs && eventEmitterRef.current) {
        const resultPreview = typeof functionOutput === 'string' ? functionOutput : JSON.stringify(functionOutput);
        const previewText = resultPreview.length > 100 ? resultPreview.substring(0, 100) + '...' : resultPreview;
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.TOOL_RESULT, `Got result from ${functionName}.`, {
          metadata: {
            tool_name: functionName,
            result: previewText,
            call_id: callId
          }
        });
      }
      if (((_dataChannelRef$curre = dataChannelRef.current) === null || _dataChannelRef$curre === void 0 ? void 0 : _dataChannelRef$curre.readyState) === 'open') {
        debugLog(DEBUG_LEVELS.low, 'Send callback value:', functionOutput);
        dataChannelRef.current.send(JSON.stringify({
          type: 'conversation.item.create',
          item: {
            type: 'function_call_output',
            call_id: callId,
            output: JSON.stringify(functionOutput)
          }
        }));
        dataChannelRef.current.send(JSON.stringify({
          type: 'response.create',
          response: {
            instructions: "Reply based on the function's output."
          }
        }));
      }
    } catch (err) {
      console.error('Error in handleFunctionCall.', err);
    }
  }, [onRealtimeFunctionCallback, eventLogs]);

  /**
   * Start the Realtime connection.
   */
  const startRealtimeConnection = useCallback(async (clientSecret, model, realtimeUrl) => {
    setIsConnecting(true);

    // Emit session starting event
    if (eventLogs && eventEmitterRef.current) {
      eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS, 'Starting realtime session...', {
        visibility: 'visible'
      });
    }
    const pc = new RTCPeerConnection();
    pcRef.current = pc;

    // Monitor connection state
    pc.addEventListener('connectionstatechange', () => {
      console.log('PC connection state:', pc.connectionState);
      if (pc.connectionState === 'failed') {
        setError(__('Connection failed. Please check your network and try again.'));
        setIsConnecting(false);
        setIsSessionActive(false);
        setIsPaused(false);
        if (uploadingImage) {
          setUploadingImage(false);
          setUploadProgress(0);
        }
        // Emit error event
        if (eventLogs && eventEmitterRef.current) {
          eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.ERROR, __('Connection failed'), {
            visibility: 'visible',
            error: true
          });
        }
      } else if (pc.connectionState === 'disconnected') {
        setError(__('Connection lost. Reconnecting...'));
        if (uploadingImage) {
          setUploadingImage(false);
          setUploadProgress(0);
        }
      } else if (pc.connectionState === 'closed') {
        // Connection was closed - reset states
        setIsSessionActive(false);
        setIsConnecting(false);
        setIsPaused(false);
      }
    });
    let ms;
    try {
      // Check if mediaDevices API is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(__('MediaDevices API not available. Please ensure you are using HTTPS and a modern browser.'));
      }
      ms = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      localStreamRef.current = ms;

      // In hold-to-talk mode, start with microphone muted
      if (talkMode === 'hold-to-talk') {
        ms.getAudioTracks().forEach(track => {
          track.enabled = false;
        });
        setIsPaused(true);
      }
      ms.getTracks().forEach(track => pc.addTrack(track, ms));
    } catch (err) {
      console.error('Error accessing microphone.', err);

      // Emit error event
      if (eventLogs && eventEmitterRef.current) {
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS, __('Failed to access microphone: ') + err.message, {
          visibility: 'visible',
          error: true
        });
      }

      // Show error to user
      setError(__('Failed to access microphone. Please ensure microphone permissions are granted and try again.'));
      setIsConnecting(false);
      return;
    }
    pc.ontrack = event => {
      const audioEl = document.getElementById('mwai-audio');
      if (audioEl) audioEl.srcObject = event.streams[0];
      setAssistantStream(event.streams[0]);
    };
    const dataChannel = pc.createDataChannel('oai-events');
    dataChannelRef.current = dataChannel;
    dataChannel.addEventListener('open', () => {
      debugLog(DEBUG_LEVELS.low, 'Data channel open.');

      // Emit session connected event
      if (eventLogs && eventEmitterRef.current) {
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS, 'Realtime session connected', {
          visibility: 'visible'
        });
      }
      enableAudioTranscription();
    });
    dataChannel.addEventListener('close', () => {
      console.log('Data channel closed');
      if (uploadingImage) {
        setError(__('Connection lost while uploading image. Please try again.'));
        setUploadingImage(false);
        setUploadProgress(0);
      }
    });
    dataChannel.addEventListener('error', error => {
      console.error('Data channel error:', error);
      if (uploadingImage) {
        setError(__('Error uploading image. Please try again.'));
        setUploadingImage(false);
        setUploadProgress(0);
      }
    });
    dataChannel.addEventListener('message', e => {
      let msg;
      try {
        msg = JSON.parse(e.data);
      } catch (err) {
        console.error('Could not parse Realtime message.', e.data);
        return;
      }
      if (CURRENT_DEBUG >= DEBUG_LEVELS.high) {
        console.log('Incoming message from Realtime API.', msg);
      } else if (CURRENT_DEBUG === DEBUG_LEVELS.low) {
        var _msg$type;
        const isMajor = ((_msg$type = msg.type) === null || _msg$type === void 0 ? void 0 : _msg$type.endsWith('.done')) || msg.type === 'input_audio_buffer.committed' || msg.type === 'conversation.item.input_audio_transcription.completed' || msg.type === 'response.done';
        if (isMajor) console.log('Key event from Realtime API.', msg);
      }

      // Emit stream event for important realtime API events only
      if (eventLogs && msg.type && eventEmitterRef.current) {
        let eventMessage = '';
        let eventSubtype = _constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS;
        let shouldEmit = false;

        // Only emit events for key moments
        switch (msg.type) {
          case 'input_audio_buffer.speech_started':
            eventMessage = 'User started talking...';
            shouldEmit = true;
            break;
          case 'input_audio_buffer.speech_stopped':
            eventMessage = 'User stopped speaking.';
            shouldEmit = true;
            break;
          case 'response.audio.started':
            eventMessage = 'Assistant started speaking.';
            shouldEmit = true;
            break;
          case 'response.audio.done':
            eventMessage = 'Assistant stopped speaking.';
            shouldEmit = true;
            break;
          case 'conversation.item.input_audio_transcription.completed':
            eventMessage = 'Got transcript from user.';
            eventSubtype = _constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.TRANSCRIPT;
            shouldEmit = true;
            break;
          case 'response.audio_transcript.done':
            eventMessage = 'Got transcript from assistant.';
            eventSubtype = _constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.TRANSCRIPT;
            shouldEmit = true;
            break;
          case 'response.function_call_arguments.done':
            eventMessage = `Calling ${msg.name}...`;
            eventSubtype = _constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.TOOL_CALL;
            shouldEmit = true;
            break;
          case 'response.done':
            // Don't emit this event - it's too verbose
            break;
        }
        if (shouldEmit) {
          eventEmitterRef.current.emit(eventSubtype, eventMessage, {
            visibility: 'visible',
            metadata: {
              event_type: msg.type,
              event_id: msg.event_id
            }
          });
        }
      }
      switch (msg.type) {
        case 'input_audio_buffer.committed':
          {
            const itemId = msg.item_id;
            if (!processedItemIdsRef.current.has(itemId)) {
              processedItemIdsRef.current.add(itemId);
              setMessages(prev => [...prev, {
                id: itemId,
                role: 'user',
                content: '[Audio]'
              }]);
            }
            setWhoIsSpeaking('user');
            break;
          }
        case 'conversation.item.created':
          {
            var _msg$item, _msg$item2;
            // Handle image item creation confirmation
            console.log('Conversation item created:', msg);

            // Check if this is an image item we sent
            if ((_msg$item = msg.item) !== null && _msg$item !== void 0 && (_msg$item = _msg$item.content) !== null && _msg$item !== void 0 && _msg$item.some(c => c.type === 'input_image' || c.type === 'input_image_url')) {
              console.log('Image item confirmed by API');
              // Image was successfully added to conversation - stop processing animation and show success
              setProcessingImage(prev => {
                if (prev) {
                  console.log('Clearing processing state - image confirmed by API');
                  return false;
                }
                return prev;
              });
              // Also clear uploading state if it's still active
              setUploadingImage(false);
              setUploadProgress(0);

              // Show success tick for 2 seconds
              setShowSuccess(true);
              setTimeout(() => {
                setShowSuccess(false);
              }, 2000);
            }

            // Check if this is the start of an assistant response
            if (((_msg$item2 = msg.item) === null || _msg$item2 === void 0 ? void 0 : _msg$item2.role) === 'assistant') {
              console.log('Assistant response started');
              // Also clear processing state if still active
              if (processingImage) {
                console.log('Clearing processing state - assistant is responding');
                setProcessingImage(false);
              }
            }
            break;
          }
        case 'conversation.item.input_audio_transcription.completed':
          {
            const itemId = msg.item_id;
            const transcript = (msg.transcript || '[Audio]').trim();
            setMessages(prev => prev.map(m => m.id === itemId && m.role === 'user' ? {
              ...m,
              content: transcript
            } : m));
            break;
          }
        case 'response.audio_transcript.done':
          {
            const itemId = msg.item_id;
            const transcript = (msg.transcript || '[Audio]').trim();
            setWhoIsSpeaking('assistant');
            if (!processedItemIdsRef.current.has(itemId)) {
              processedItemIdsRef.current.add(itemId);
              setMessages(prev => [...prev, {
                id: itemId,
                role: 'assistant',
                content: transcript
              }]);
            }
            break;
          }
        case 'output_audio_buffer.started':
          {
            // Start recording the assistant's audio for replay
            if (talkMode === 'hold-to-talk' && pcRef.current) {
              try {
                // Get remote stream from peer connection receivers
                const receivers = pcRef.current.getReceivers();
                const audioReceiver = receivers.find(r => r.track && r.track.kind === 'audio');
                if (audioReceiver && audioReceiver.track) {
                  const stream = new MediaStream([audioReceiver.track]);
                  debugLog(DEBUG_LEVELS.low, 'output_audio_buffer.started - creating recorder from peer connection track');
                  recordedChunksRef.current = [];
                  const mediaRecorder = new MediaRecorder(stream);
                  mediaRecorderRef.current = mediaRecorder;
                  mediaRecorder.ondataavailable = e => {
                    if (e.data && e.data.size > 0) {
                      recordedChunksRef.current.push(e.data);
                    }
                  };
                  mediaRecorder.start(100); // Collect data every 100ms
                  debugLog(DEBUG_LEVELS.low, 'Started recording assistant audio for replay');
                } else {
                  debugLog(DEBUG_LEVELS.low, 'Cannot start recording - no audio track found in peer connection');
                }
              } catch (err) {
                console.error('Failed to start recording assistant audio:', err);
              }
            } else {
              debugLog(DEBUG_LEVELS.low, 'Cannot start recording - not in hold-to-talk mode or no peer connection');
            }
            break;
          }
        case 'output_audio_buffer.stopped':
          {
            var _mediaRecorderRef$cur;
            // Stop recording and save the audio
            debugLog(DEBUG_LEVELS.low, 'output_audio_buffer.stopped - mediaRecorder state:', (_mediaRecorderRef$cur = mediaRecorderRef.current) === null || _mediaRecorderRef$cur === void 0 ? void 0 : _mediaRecorderRef$cur.state);
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
              mediaRecorderRef.current.stop();
              mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(recordedChunksRef.current, {
                  type: 'audio/webm'
                });
                setLastResponseAudio(blob);
                debugLog(DEBUG_LEVELS.low, 'Saved assistant audio for replay:', blob.size, 'bytes', 'chunks:', recordedChunksRef.current.length);
              };
            } else {
              debugLog(DEBUG_LEVELS.low, 'Cannot save recording - no active mediaRecorder');
            }
            break;
          }
        case 'response.text.done':
          {
            // Handle text response (which might be a response to an image)
            const itemId = msg.item_id;
            const text = msg.text || '';
            if (text && !processedItemIdsRef.current.has(itemId)) {
              processedItemIdsRef.current.add(itemId);
              setMessages(prev => [...prev, {
                id: itemId,
                role: 'assistant',
                content: text
              }]);
            }
            break;
          }
        case 'response.output_item.done':
          {
            // Handle output item completion (contains the actual response content)
            console.log('Output item done:', msg);
            const item = msg.item;

            // Clear processing state when we get a response
            if (processingImage) {
              console.log('Clearing processing state after response');
              setProcessingImage(false);
            }
            // Also clear upload state if still active
            if (uploadingImage) {
              console.log('Clearing upload state after response');
              setUploadingImage(false);
              setUploadProgress(0);
            }
            if (item) {
              // Log the item structure for debugging
              console.log('Item structure:', {
                hasContent: !!item.content,
                contentType: Array.isArray(item.content) ? 'array' : typeof item.content,
                contentLength: Array.isArray(item.content) ? item.content.length : 0,
                firstContent: Array.isArray(item.content) && item.content[0] ? item.content[0] : null
              });
              if (item.content) {
                // Check if content is an array
                if (Array.isArray(item.content)) {
                  // Check for text content in the response
                  const textContent = item.content.find(c => c.type === 'text');
                  if (textContent && textContent.text && !processedItemIdsRef.current.has(item.id)) {
                    processedItemIdsRef.current.add(item.id);
                    setMessages(prev => [...prev, {
                      id: item.id,
                      role: item.role || 'assistant',
                      content: textContent.text
                    }]);
                    console.log('Added text response from output_item array:', textContent.text);
                  }
                } else if (typeof item.content === 'string') {
                  // Content might be a direct string
                  if (!processedItemIdsRef.current.has(item.id)) {
                    processedItemIdsRef.current.add(item.id);
                    setMessages(prev => [...prev, {
                      id: item.id,
                      role: item.role || 'assistant',
                      content: item.content
                    }]);
                    console.log('Added text response from output_item string:', item.content);
                  }
                }
              }
            }
            break;
          }
        case 'response.function_call_arguments.done':
          {
            const {
              call_id,
              name,
              arguments: rawArgs
            } = msg;
            debugLog(DEBUG_LEVELS.low, 'Function call requested.', call_id, name);
            handleFunctionCall(call_id, name, rawArgs);
            break;
          }
        case 'response.done':
          {
            const resp = msg.response;

            // Clear processing state when response is done
            setProcessingImage(prev => {
              if (prev) {
                console.log('Response completed after image processing');
                return false;
              }
              return prev;
            });
            // Also clear upload state if still active
            setUploadingImage(prev => {
              if (prev) {
                console.log('Response completed while still uploading');
                setUploadProgress(0);
                return false;
              }
              return prev;
            });
            if (resp !== null && resp !== void 0 && resp.usage) {
              debugLog(DEBUG_LEVELS.low, 'Response usage data:', resp.usage);
              const usageStats = parseUsage(resp.usage);
              if (usageStats) {
                debugLog(DEBUG_LEVELS.low, 'Parsed usage stats:', usageStats);
                setStatistics(prev => {
                  const updated = {
                    text_input_tokens: (prev.text_input_tokens || 0) + usageStats.text_input_tokens,
                    audio_input_tokens: (prev.audio_input_tokens || 0) + usageStats.audio_input_tokens,
                    text_output_tokens: (prev.text_output_tokens || 0) + usageStats.text_output_tokens,
                    audio_output_tokens: (prev.audio_output_tokens || 0) + usageStats.audio_output_tokens,
                    text_cached_tokens: (prev.text_cached_tokens || 0) + usageStats.text_cached_tokens,
                    audio_cached_tokens: (prev.audio_cached_tokens || 0) + usageStats.audio_cached_tokens
                  };
                  debugLog(DEBUG_LEVELS.low, 'Committing stats to server:', updated);
                  commitStatsToServer(updated);
                  return updated;
                });
              } else {
                debugLog(DEBUG_LEVELS.low, 'Failed to parse usage stats');
              }
            } else {
              debugLog(DEBUG_LEVELS.low, 'No usage data in response.done event');
            }
            setWhoIsSpeaking('user');
            break;
          }
        case 'error':
          {
            var _msg$error;
            // Handle error messages from the API
            console.error('Realtime API error:', msg);
            // Don't show error for "no active response" when canceling - this is expected in hold-to-talk mode
            if ((_msg$error = msg.error) !== null && _msg$error !== void 0 && _msg$error.message && !msg.error.message.includes('no active response')) {
              setError(`API Error: ${msg.error.message}`);
            }
            // Clear any upload/processing states on error
            setUploadingImage(false);
            setProcessingImage(false);
            setUploadProgress(0);
            break;
          }
        default:
          // Log unrecognized events for debugging
          if (msg.type && !msg.type.startsWith('response.audio') && !msg.type.startsWith('input_audio')) {
            console.log('Unhandled Realtime event:', msg.type, msg);
          }
          break;
      }
    });
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    // Use the realtime URL from the server, or fallback to OpenAI default
    const baseUrl = realtimeUrl || 'https://api.openai.com/v1/realtime';
    const chosenModel = model || 'gpt-4o-preview-2024-12-17';

    // For Azure, the deployment is already in the URL, so we don't append model
    const fetchUrl = realtimeUrl ? baseUrl : `${baseUrl}?model=${chosenModel}`;
    const sdpResponse = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${clientSecret}`,
        'Content-Type': 'application/sdp'
      },
      body: offer.sdp
    });
    if (!sdpResponse.ok) {
      console.error('SDP exchange failed.', sdpResponse);
      setIsConnecting(false);

      // Show error to user
      setError(__('Failed to establish connection with OpenAI servers. Please try again.'));

      // Also emit error event if event logs are enabled
      if (eventLogs && eventEmitterRef.current) {
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.ERROR, __('Failed to establish connection with OpenAI servers. Please try again.'), {
          visibility: 'visible',
          error: true
        });
      }
      return;
    }
    const answerSDP = await sdpResponse.text();
    await pc.setRemoteDescription({
      type: 'answer',
      sdp: answerSDP
    });
    debugLog(DEBUG_LEVELS.low, 'Realtime connection established.');
    setIsConnecting(false);
    setIsSessionActive(true);
    setIsPaused(false);
    setWhoIsSpeaking('user');
  }, [enableAudioTranscription, handleFunctionCall, commitStatsToServer, eventLogs]);

  /**
   * Stop the Realtime connection.
   */
  const stopRealtimeConnection = useCallback(() => {
    // Clear model when stopping
    setCurrentModel(null);

    // Emit session ending event
    if (eventLogs && eventEmitterRef.current) {
      eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS, 'Ending realtime session...', {
        visibility: 'visible'
      });
    }
    try {
      if (pcRef.current) {
        pcRef.current.close();
        pcRef.current = null;
      }
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
        localStreamRef.current = null;
      }
      dataChannelRef.current = null;
      setIsConnecting(false);
      setIsSessionActive(false);
      setIsPaused(false);
      setWhoIsSpeaking(null);

      // Commit messages
      onCommitDiscussions(messages);

      // Reset states
      setMessages([]);
      setStatistics({
        text_input_tokens: 0,
        audio_input_tokens: 0,
        text_output_tokens: 0,
        audio_output_tokens: 0,
        text_cached_tokens: 0,
        audio_cached_tokens: 0
      });
      debugLog(DEBUG_LEVELS.low, 'Stopped Realtime connection.');
    } catch (err) {
      console.error('Error stopping connection.', err);
    }
  }, [messages, statistics, onCommitDiscussions]);

  // Update the ref when the function changes
  useEffect(() => {
    stopRealtimeConnectionRef.current = stopRealtimeConnection;
  }, [stopRealtimeConnection]);

  /**
   * Toggle microphone (pause/unpause).
   */
  const togglePause = useCallback(() => {
    if (!localStreamRef.current) return;
    const tracks = localStreamRef.current.getAudioTracks();
    if (!tracks.length) return;
    if (isPaused) {
      tracks.forEach(track => {
        track.enabled = true;
      });
      debugLog(DEBUG_LEVELS.low, 'Resumed microphone.');
      setIsPaused(false);
    } else {
      tracks.forEach(track => {
        track.enabled = false;
      });
      debugLog(DEBUG_LEVELS.low, 'Paused microphone.');
      setIsPaused(true);
    }
  }, [isPaused]);

  /**
   * Push-to-talk handlers for hold-to-talk mode
   */
  const startPushToTalk = useCallback(() => {
    var _dataChannelRef$curre2;
    if (talkMode !== 'hold-to-talk' || !isSessionActive) return;
    if (!localStreamRef.current) return;
    const tracks = localStreamRef.current.getAudioTracks();
    if (!tracks.length) return;

    // Clear the last response audio when starting to talk again
    setLastResponseAudio(null);

    // Cancel any ongoing AI response when user starts talking
    if (((_dataChannelRef$curre2 = dataChannelRef.current) === null || _dataChannelRef$curre2 === void 0 ? void 0 : _dataChannelRef$curre2.readyState) === 'open') {
      debugLog(DEBUG_LEVELS.low, 'Canceling AI response for push-to-talk');
      dataChannelRef.current.send(JSON.stringify({
        type: 'response.cancel'
      }));
    }
    tracks.forEach(track => {
      track.enabled = true;
    });
    setIsPushingToTalk(true);
    setIsPaused(false);
    debugLog(DEBUG_LEVELS.low, 'Push-to-talk started.');
  }, [talkMode, isSessionActive]);
  const stopPushToTalk = useCallback(() => {
    if (talkMode !== 'hold-to-talk' || !isSessionActive) return;
    if (!localStreamRef.current) return;
    const tracks = localStreamRef.current.getAudioTracks();
    if (!tracks.length) return;
    tracks.forEach(track => {
      track.enabled = false;
    });
    setIsPushingToTalk(false);
    setIsPaused(true);
    debugLog(DEBUG_LEVELS.low, 'Push-to-talk stopped.');

    // VAD will handle response triggering automatically
    // No need for manual response.create
  }, [talkMode, isSessionActive]);

  // Track if this is the initial mount
  const isInitialMount = useRef(true);

  // Stop session when talk mode changes
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // When talk mode changes and session is active, stop it
    if (isSessionActive && !isConnecting) {
      console.log('Talk mode changed to', talkMode, '- stopping current session');
      handleStop();
    }
  }, [talkMode]);

  // Handle space key for push-to-talk
  useEffect(() => {
    if (talkMode !== 'hold-to-talk' || !isSessionActive) return;
    const handleKeyDown = e => {
      // Only respond to space if we're not in an input field
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        startPushToTalk();
      }
    };
    const handleKeyUp = e => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        stopPushToTalk();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [talkMode, isSessionActive, startPushToTalk, stopPushToTalk]);

  /**
   * Initiate the Realtime session on the server, then connect.
   */
  /**
   * Resize image to reduce size - more aggressive compression
   */
  const resizeImage = useCallback((base64Data, maxWidth = 800, maxHeight = 800, quality = 0.6) => {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        // Calculate new dimensions
        let width = img.width;
        let height = img.height;
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        // Create canvas and resize
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to base64 with JPEG compression - lower quality for smaller size
        const resizedBase64 = canvas.toDataURL('image/jpeg', quality);
        resolve(resizedBase64);
      };
      img.src = base64Data;
    });
  }, []);

  /**
   * Process image file
   */
  const processImageFile = useCallback(async file => {
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      setError(__('Please select an image file.'));
      return;
    }

    // Check file size (max 20MB for base64 encoding)
    const maxSize = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSize) {
      setError(__('Image file size must be less than 20MB.'));
      return;
    }
    setUploadingImage(true);
    setUploadProgress(0);
    try {
      // Convert image to base64
      const reader = new FileReader();

      // Track upload progress
      reader.onprogress = e => {
        if (e.lengthComputable) {
          const progress = e.loaded / e.total * 100;
          setUploadProgress(progress);
        }
      };
      reader.onload = async e => {
        var _dataChannelRef$curre3;
        let base64Data = e.target.result;

        // Check if we need to resize the image
        const base64Size = base64Data.length;
        const maxBase64Size = 150 * 1024; // 150KB limit for base64 string (more conservative for final message size)

        if (base64Size > maxBase64Size) {
          console.log(`Image too large (${(base64Size / 1024).toFixed(0)}KB), resizing...`);
          setUploadProgress(30);

          // Try progressively lower quality until we get under the limit
          let quality = 0.7;
          let maxDimension = 800;
          let resizedData = await resizeImage(base64Data, maxDimension, maxDimension, quality);
          while (resizedData.length > maxBase64Size && quality > 0.2) {
            quality -= 0.1;
            maxDimension = Math.max(300, maxDimension - 100);
            console.log(`Still too large (${(resizedData.length / 1024).toFixed(0)}KB), trying quality ${quality.toFixed(1)} and size ${maxDimension}...`);
            resizedData = await resizeImage(base64Data, maxDimension, maxDimension, quality);
          }
          base64Data = resizedData;
          console.log(`Image resized to ${(base64Data.length / 1024).toFixed(0)}KB`);
        }

        // Send image to the model via data channel
        if (((_dataChannelRef$curre3 = dataChannelRef.current) === null || _dataChannelRef$curre3 === void 0 ? void 0 : _dataChannelRef$curre3.readyState) === 'open') {
          // Emit status event
          if (eventLogs && eventEmitterRef.current) {
            eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.STATUS, 'Sending image...', {
              visibility: 'visible'
            });
          }

          // Simulate sending progress (since we can't track WebRTC send progress)
          setUploadProgress(50);

          // Log image details for debugging
          console.log('Image details:', {
            totalLength: base64Data.length,
            hasDataPrefix: base64Data.includes('data:'),
            mimeType: base64Data.substring(5, base64Data.indexOf(';')),
            sizeKB: (base64Data.length / 1024).toFixed(0) + 'KB'
          });

          // Create conversation item with image using input_image type
          // The Realtime API expects image_url with a data URL format
          const messagePayload = {
            type: 'conversation.item.create',
            item: {
              type: 'message',
              role: 'user',
              content: [{
                type: 'input_text',
                text: 'I\'ve uploaded an image for you to analyze.'
              }, {
                type: 'input_image',
                image_url: base64Data // Send the full data URL including the prefix
              }]
            }
          };
          const messageString = JSON.stringify(messagePayload);
          console.log('Sending image message to Realtime API...', {
            messageType: messagePayload.type,
            contentTypes: messagePayload.item.content.map(c => c.type),
            totalSize: messageString.length,
            sizeKB: (messageString.length / 1024).toFixed(0) + 'KB'
          });

          // Final safety check - if still too large, show error
          if (messageString.length > 250 * 1024) {
            // 250KB absolute max for the full message
            const sizeKB = (messageString.length / 1024).toFixed(0);
            setError(__(`Image too large (${sizeKB}KB). Please try a smaller image.`));
            setUploadingImage(false);
            setUploadProgress(0);
            console.error(`Image message too large: ${sizeKB}KB`);
            return;
          }
          try {
            // Check if data channel is in correct state
            if (dataChannelRef.current.readyState !== 'open') {
              throw new Error('Data channel is not open. State: ' + dataChannelRef.current.readyState);
            }

            // Check buffered amount before sending
            const bufferedBefore = dataChannelRef.current.bufferedAmount;
            console.log('Data channel buffered amount before send:', bufferedBefore);

            // Wait a moment if buffer is not empty
            if (bufferedBefore > 0) {
              console.log('Waiting for buffer to clear...');
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            dataChannelRef.current.send(messageString);
            const bufferedAfter = dataChannelRef.current.bufferedAmount;
            console.log('Data channel buffered amount after send:', bufferedAfter);
            console.log('Image message queued for sending');

            // Complete upload progress to 100% then switch to processing
            setUploadProgress(100);
            setTimeout(() => {
              // Switch from upload to processing mode
              setUploadingImage(false);
              setProcessingImage(true);
              setUploadProgress(0);
              console.log('Processing image with AI...');
            }, 300);
            console.log('Waiting for AI response to image...');
          } catch (sendError) {
            console.error('Failed to send image message:', sendError);
            setError(__('Failed to send image. Please try again.'));
            setUploadingImage(false);
            setUploadProgress(0);
            return;
          }

          // Add a message to show image was sent
          setMessages(prev => [...prev, {
            id: `img-${Date.now()}`,
            role: 'user',
            content: '[Image uploaded - processing...]'
          }]);

          // Clear the file input
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }

          // Don't automatically reset - wait for API confirmation
          // The uploadingImage state will be reset when we receive:
          // 1. conversation.item.created event
          // 2. response.done event  
          // 3. error event
        } else {
          setError(__('Please start a session before uploading images.'));
          setUploadingImage(false);
          setUploadProgress(0);
        }
      };
      reader.onerror = () => {
        setError(__('Failed to read image file.'));
        setUploadingImage(false);
        setUploadProgress(0);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(__('Failed to upload image.'));
      setUploadingImage(false);
      setUploadProgress(0);
    }
  }, [dataChannelRef, eventLogs, resizeImage]);

  /**
   * Handle image upload from file input
   */
  const handleImageUpload = useCallback(async event => {
    const file = event.target.files[0];
    if (!file) return;
    processImageFile(file);
  }, [processImageFile]);

  /**
   * Handle drag events
   */
  const handleDragOver = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    if (!uploadingImage && !processingImage && !busy && !locked && isSessionActive) {
      // Check if the dragged item is an image
      const items = e.dataTransfer.items;
      if (items && items.length > 0) {
        const item = items[0];
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          setIsDragging(true);
        }
      }
    }
  }, [uploadingImage, processingImage, busy, locked, isSessionActive]);
  const handleDragLeave = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    // Check if we're leaving the button element
    if (uploadButtonRef.current && !uploadButtonRef.current.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  }, []);
  const handleDrop = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (uploadingImage || processingImage || busy || locked || !isSessionActive) {
      return;
    }
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processImageFile(files[0]);
    }
  }, [uploadingImage, processingImage, busy, locked, isSessionActive, processImageFile]);
  const handlePlay = useCallback(async () => {
    setIsConnecting(true);
    setError(null); // Clear any previous errors
    try {
      const data = await onStartRealtimeSession(talkMode);
      if (!(data !== null && data !== void 0 && data.success)) {
        console.error('Could not start realtime session.', data);
        setIsConnecting(false);
        // Show error to user
        const errorMessage = (data === null || data === void 0 ? void 0 : data.message) || __('Could not start realtime session.');
        setError(errorMessage);

        // Also emit error event if event logs are enabled
        if (eventLogs && eventEmitterRef.current) {
          eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.ERROR, errorMessage, {
            visibility: 'visible',
            error: true
          });
        }
        return;
      }
      functionCallbacksRef.current = data.function_callbacks || [];
      setSessionId(data.session_id);
      setCurrentModel(data.model);

      // Debug vision support
      console.log('Vision support from server:', data.supports_vision);
      setHasVision(data.supports_vision === true);
      await startRealtimeConnection(data.client_secret, data.model, data.realtime_url);
    } catch (err) {
      console.error('Error in handlePlay.', err);
      setIsConnecting(false);
      // Show error to user
      const errorMessage = err.message || __('An error occurred while starting the realtime session.');
      setError(errorMessage);

      // Also emit error event if event logs are enabled
      if (eventLogs && eventEmitterRef.current) {
        eventEmitterRef.current.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_4__.STREAM_TYPES.ERROR, errorMessage, {
          visibility: 'visible',
          error: true
        });
      }
    }
  }, [onStartRealtimeSession, startRealtimeConnection, eventLogs, talkMode]);
  const handleStop = useCallback(() => stopRealtimeConnection(), [stopRealtimeConnection]);

  // Toggles
  const toggleUsers = useCallback(() => setShowUsers(p => !p), []);
  const toggleStatistics = useCallback(() => setShowStatistics(p => !p), []);
  const toggleCaptions = useCallback(() => setShowCaptions(p => !p), []);

  // Class for Pause button
  const pauseButtonClass = useMemo(() => isPaused ? 'mwai-pause mwai-active' : 'mwai-pause', [isPaused]);
  const latestAssistantMessage = useMemo(() => {
    const reversed = [...messages].reverse();
    const last = reversed.find(m => m.role === 'assistant');
    if (!last) return '...';
    return last.content;
  }, [messages]);
  const usersOptionClasses = useMemo(() => showUsers ? 'mwai-option mwai-option-users mwai-active' : 'mwai-option mwai-option-users', [showUsers]);
  const captionsOptionClasses = useMemo(() => showCaptions ? 'mwai-option mwai-option-captions mwai-active' : 'mwai-option mwai-option-captions', [showCaptions]);
  const statisticsOptionClasses = useMemo(() => showStatistics ? 'mwai-option mwai-option-statistics mwai-active' : 'mwai-option mwai-option-statistics', [showStatistics]);

  // Execute block scripts when blocks change
  useEffect(() => {
    if (blocks && blocks.length > 0) {
      blocks.forEach(block => {
        var _block$data;
        if (block.type === 'content' && (_block$data = block.data) !== null && _block$data !== void 0 && _block$data.script) {
          try {
            // Execute the script
            const scriptElement = document.createElement('script');
            scriptElement.textContent = block.data.script;
            document.body.appendChild(scriptElement);
            // Clean up the script element after execution
            setTimeout(() => {
              if (scriptElement.parentNode) {
                scriptElement.parentNode.removeChild(scriptElement);
              }
            }, 0);
          } catch (error) {
            console.error('Error executing block script:', error);
          }
        }
      });
    }
  }, [blocks]);

  /**
   * Replay the last assistant audio response
   */
  const replayLastResponse = useCallback(() => {
    if (!lastResponseAudio || isReplaying) return;
    setIsReplaying(true);
    const audioUrl = URL.createObjectURL(lastResponseAudio);
    const audio = new Audio(audioUrl);
    audio.onended = () => {
      setIsReplaying(false);
      URL.revokeObjectURL(audioUrl);
    };
    audio.onerror = err => {
      console.error('Error playing replay audio:', err);
      setIsReplaying(false);
      URL.revokeObjectURL(audioUrl);
    };
    audio.play().catch(err => {
      console.error('Failed to play replay audio:', err);
      setIsReplaying(false);
      URL.revokeObjectURL(audioUrl);
    });
  }, [lastResponseAudio, isReplaying]);

  // Render blocks (for GDPR consent, etc.)
  const jsxBlocks = useMemo(() => {
    if (!blocks || blocks.length === 0) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "mwai-blocks"
    }, blocks.map((block, index) => {
      const {
        type,
        data
      } = block;
      if (type !== 'content') {
        console.warn(`Block type ${type} is not supported.`);
        return null;
      }
      const {
        html,
        variant
      } = data;
      const baseClasses = ['mwai-block'];
      if (variant === 'success') baseClasses.push('mwai-success');
      if (variant === 'danger') baseClasses.push('mwai-danger');
      if (variant === 'warning') baseClasses.push('mwai-warning');
      if (variant === 'info') baseClasses.push('mwai-info');
      return /*#__PURE__*/React.createElement("div", {
        className: baseClasses.join(' '),
        key: block.id || index,
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }));
  }, [blocks]);
  return /*#__PURE__*/React.createElement("div", null, jsxBlocks, error && /*#__PURE__*/React.createElement("div", {
    className: "mwai-error",
    style: {
      padding: '10px',
      margin: '10px 0',
      backgroundColor: '#fee',
      border: '1px solid #fcc',
      borderRadius: '5px',
      color: '#c00',
      textAlign: 'center'
    }
  }, error), /*#__PURE__*/React.createElement("audio", {
    id: "mwai-audio",
    autoPlay: true
  }), showUsers && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(_AudioVisualizer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    assistantStream: assistantStream,
    userUI: userUI,
    assistantUI: assistantUI,
    userStream: localStreamRef.current
  })), /*#__PURE__*/React.createElement("div", {
    className: "mwai-controls"
  }, !isSessionActive && !isConnecting && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: handlePlay,
    className: "mwai-play",
    disabled: busy || locked,
    "aria-label": "Play"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 16
  })), visionEnabled && /*#__PURE__*/React.createElement("button", {
    className: "mwai-upload",
    disabled: true,
    "aria-label": "Upload Image (Start session first)",
    style: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    title: __('Start session to upload images')
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 16
  }))), isConnecting && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "mwai-play",
    disabled: true
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 16,
    style: {
      animation: 'spin 0.8s linear infinite'
    }
  })), visionEnabled && /*#__PURE__*/React.createElement("button", {
    className: "mwai-upload",
    disabled: true,
    "aria-label": "Upload Image (Connecting...)",
    style: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 16
  }))), isSessionActive && !isConnecting && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: handleStop,
    className: "mwai-stop",
    disabled: busy || locked,
    "aria-label": "Stop"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 16
  })), talkMode === 'hands-free' && /*#__PURE__*/React.createElement("button", {
    onClick: togglePause,
    className: pauseButtonClass,
    disabled: busy || locked,
    "aria-label": "Pause"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: 16
  })), (hasVision || visionEnabled) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: handleImageUpload
  }), /*#__PURE__*/React.createElement("button", {
    ref: uploadButtonRef,
    onClick: () => {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    className: `mwai-upload ${isDragging ? 'mwai-dragging' : ''} ${processingImage ? 'mwai-processing' : ''} ${showSuccess ? 'mwai-success' : ''}`,
    disabled: busy || locked || uploadingImage || processingImage || showSuccess,
    "aria-label": "Upload Image",
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    style: {
      position: 'relative',
      overflow: 'visible',
      cursor: uploadingImage || processingImage ? 'wait' : showSuccess ? 'default' : 'pointer',
      transition: 'all 0.3s ease',
      ...(isDragging ? {
        transform: 'scale(1.1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgb(34, 197, 94)'
      } : showSuccess ? {
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderColor: 'rgb(34, 197, 94)'
      } : {})
    }
  }, (uploadingImage || processingImage) && /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      width: 'calc(100% + 4px)',
      height: 'calc(100% + 4px)',
      transform: 'rotate(-90deg)',
      pointerEvents: 'none',
      animation: processingImage ? 'spin 1s linear infinite' : 'none'
    }
  }, processingImage ?
  /*#__PURE__*/
  // Spinning dashed circle for processing
  React.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: "calc(50% - 2px)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeDasharray: "20 10" // Dashed pattern
    ,
    strokeLinecap: "round",
    style: {
      opacity: 0.8
    }
  }) :
  /*#__PURE__*/
  // Progress circle for uploading
  React.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: "calc(50% - 2px)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeDasharray: `${uploadProgress * 1.26} 126` // Circumference ≈ 126 for r=20
    ,
    strokeLinecap: "round",
    style: {
      transition: 'stroke-dasharray 0.3s ease',
      opacity: 0.8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 16,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: showSuccess ? 0 : uploadingImage || processingImage ? 0.5 : 1,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      transform: showSuccess ? 'scale(0.8)' : 'scale(1)',
      transformOrigin: 'center'
    }
  }), /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 16,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: showSuccess ? 1 : 0,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      transform: showSuccess ? 'scale(1)' : 'scale(0.8)',
      transformOrigin: 'center',
      color: 'rgb(34, 197, 94)'
    }
  })))), talkMode === 'hold-to-talk' && lastResponseAudio && /*#__PURE__*/React.createElement("button", {
    onClick: replayLastResponse,
    className: `mwai-replay ${isReplaying ? 'mwai-replaying' : ''}`,
    disabled: busy || locked || isReplaying,
    "aria-label": "Replay last response",
    title: "Replay last response"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: 16
  })))), talkMode === 'hold-to-talk' && isSessionActive && !isConnecting && /*#__PURE__*/React.createElement("div", {
    className: "mwai-controls mwai-hold-to-talk-mode"
  }, /*#__PURE__*/React.createElement("button", {
    onMouseDown: startPushToTalk,
    onMouseUp: stopPushToTalk,
    onMouseLeave: stopPushToTalk,
    onTouchStart: startPushToTalk,
    onTouchEnd: stopPushToTalk,
    className: `mwai-push-to-talk ${isPushingToTalk ? 'mwai-active' : ''}`,
    disabled: busy || locked,
    "aria-label": "Hold to Talk (or press Space)"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "mwai-button-text"
  }, isPushingToTalk ? __('Release to Send') : __('Hold to Talk'))), /*#__PURE__*/React.createElement("div", {
    className: "mwai-talk-hint"
  }, __('Press Space to talk'))), showCaptions && latestAssistantMessage && latestAssistantMessage.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mwai-last-transcript"
  }, latestAssistantMessage), showStatistics && /*#__PURE__*/React.createElement("div", {
    className: "mwai-statistics"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Text In"), /*#__PURE__*/React.createElement("span", null, statistics.text_input_tokens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Text Out"), /*#__PURE__*/React.createElement("span", null, statistics.text_output_tokens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Text Cached"), /*#__PURE__*/React.createElement("span", null, statistics.text_cached_tokens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Audio In"), /*#__PURE__*/React.createElement("span", null, statistics.audio_input_tokens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Audio Out"), /*#__PURE__*/React.createElement("span", null, statistics.audio_output_tokens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Audio Cached"), /*#__PURE__*/React.createElement("span", null, statistics.audio_cached_tokens))), showOptions && /*#__PURE__*/React.createElement("div", {
    className: "mwai-options"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
    size: 13,
    title: "Show Users",
    className: usersOptionClasses,
    onClick: toggleUsers
  }), /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 18,
    title: "Show Captions",
    className: captionsOptionClasses,
    onClick: toggleCaptions
  }), /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
    size: 14,
    title: "Show Statistics",
    className: statisticsOptionClasses,
    onClick: toggleStatistics
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotRealtime);

/***/ }),

/***/ "./app/js/chatbot/ChatbotReply.js":
/*!****************************************!*\
  !*** ./app/js/chatbot/ChatbotReply.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _app_chatbot_ChatbotSpinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/ChatbotSpinners */ "./app/js/chatbot/ChatbotSpinners.js");
/* harmony import */ var _app_components_ReplyActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/ReplyActions */ "./app/js/components/ReplyActions.js");
/* harmony import */ var _ErrorReplyActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorReplyActions */ "./app/js/chatbot/ErrorReplyActions.js");
/* harmony import */ var _ChatbotName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatbotName */ "./app/js/chatbot/ChatbotName.js");
/* harmony import */ var _ChatbotContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatbotContent */ "./app/js/chatbot/ChatbotContent.js");
// React & Vendor Libs
const {
  useState,
  useMemo,
  useEffect,
  useRef
} = wp.element;


// AI Engine









// AI Engine (Used by TypedMessage)
//import Typed from 'typed.js';
//import { useInterval } from '@app/chatbot/helpers';
//import { applyFilters } from '@app/chatbot/MwaiAPI';

// If isUser, we render the content as-is, otherwise we render it as markdown.
const RawMessage = ({
  message,
  onRendered = () => {}
}) => {
  const {
    state
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    copyButton,
    debugMode
  } = state;
  const [isLongProcess] = useState(message.isQuerying || message.isStreaming);
  const isQuerying = message.isQuerying;
  const isStreaming = message.isStreaming;
  useEffect(() => {
    if (!isLongProcess) {
      onRendered();
    } else if (isLongProcess && !isQuerying && !isStreaming) {
      onRendered();
    }
  }, [isLongProcess, isQuerying, isStreaming]);

  // For non-streaming queries, show bouncing dots
  if (isQuerying) {
    return /*#__PURE__*/React.createElement(_app_chatbot_ChatbotSpinners__WEBPACK_IMPORTED_MODULE_1__.BouncingDots, null);
  }

  // Use ErrorReplyActions for error messages
  const isError = message.isError || message.role === 'error';
  const ActionsComponent = isError ? _ErrorReplyActions__WEBPACK_IMPORTED_MODULE_2__["default"] : _app_components_ReplyActions__WEBPACK_IMPORTED_MODULE_3__["default"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ChatbotName__WEBPACK_IMPORTED_MODULE_4__["default"], {
    role: message.role
  }), /*#__PURE__*/React.createElement(ActionsComponent, {
    content: message.content,
    enabled: copyButton,
    className: "mwai-text",
    message: message
  }, /*#__PURE__*/React.createElement(_ChatbotContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message
  })));
};
const ImagesMessage = ({
  message,
  onRendered = () => {}
}) => {
  const {
    state
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    copyButton
  } = state;
  const [images, setImages] = useState(message === null || message === void 0 ? void 0 : message.images);
  useEffect(() => {
    onRendered();
  });
  const handleImageError = index => {
    const placeholderImage = "https://placehold.co/600x200?text=Expired+Image";
    setImages(prevImages => prevImages.map((img, i) => i === index ? placeholderImage : img));
  };
  if (message.isQuerying) {
    return /*#__PURE__*/React.createElement(_app_chatbot_ChatbotSpinners__WEBPACK_IMPORTED_MODULE_1__.BouncingDots, null);
  }

  // Create a message object with current images for ReplyActions
  const messageWithImages = {
    ...message,
    images
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ChatbotName__WEBPACK_IMPORTED_MODULE_4__["default"], {
    role: message.role
  }), /*#__PURE__*/React.createElement(_app_components_ReplyActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "",
    enabled: false,
    className: "mwai-text",
    message: messageWithImages
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-gallery"
  }, images === null || images === void 0 ? void 0 : images.map((image, index) => /*#__PURE__*/React.createElement("a", {
    key: index,
    href: image,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    key: index,
    src: image,
    onError: () => handleImageError(index)
  }))))));
};

// const TypedMessage = ({ message, conversationRef, onRendered = () => {} }) => {
//   const typedElement = useRef(null);
//   const [ dynamic ] = useState(message.isQuerying);
//   const [ ready, setReady ] = useState(!message.isQuerying);
//   const content = message.content;

//   useEffect(() => {
//     console.warn("Do not use the Typewriter Effect. Use Streaming instead.");
//   }, []);

//   useInterval(200, () => {
//     if (!conversationRef?.current) {
//       return;
//     }
//   }, !ready);

//   useEffect(() => {
//     if (!dynamic) {
//       onRendered();
//       return;
//     }

//     if (!typedElement.current) {
//       return;
//     }

//     const options = {
//       strings: [content],
//       typeSpeed: applyFilters('typewriter.speed', 15),
//       showCursor: false,
//       onComplete: (self) => {
//         if (self.cursor) {
//           self.cursor.remove();
//         }
//         onRendered();
//         setReady(() => true);
//       },
//     };

//     const typed = new Typed(typedElement.current, options);
//     return () => { typed.destroy(); };
//   }, [message, message.isQuerying]);

//   const renderedContent = useMemo(() => {
//     let out = "";
//     try {
//       out = compiler(content);
//     }
//     catch (e) {
//       console.error("Crash in markdown-to-jsx! Reverting to plain text.", { e, content });
//       out = content;
//     }
//     return out;
//   }, [content]);

//   return (
//     <>
//       {message.isQuerying && <BouncingDots />}
//       {!message.isQuerying && dynamic && <>
//         <ChatbotName role={message.role} />
//         <span className="mwai-text" ref={typedElement} />
//       </>}
//       {!message.isQuerying && !dynamic && <>
//         <ChatbotName role={message.role} />
//         <span className="mwai-text">
//           {renderedContent}
//         </span>
//       </>}
//     </>
//   );
// };

const ChatbotReply = ({
  message,
  conversationRef
}) => {
  var _message$images;
  const {
    state,
    actions
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    typewriter
  } = state;
  const {
    setMessages,
    retryLastQuery
  } = actions;
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_6__.useClasses)();
  const mainElement = useRef();
  const classes = css('mwai-reply', {
    'mwai-ai': message.role === 'assistant',
    'mwai-user': message.role === 'user',
    'mwai-system': message.role === 'system',
    'mwai-error': message.role === 'error' || message.isError
  });
  const isImages = (message === null || message === void 0 || (_message$images = message.images) === null || _message$images === void 0 ? void 0 : _message$images.length) > 0;
  const isError = message.role === 'error' || message.isError;
  const onRendered = () => {
    if (!mainElement.current) {
      return;
    }
    if (message.isQuerying) {
      return;
    }
    if (mainElement.current.classList.contains('mwai-rendered')) {
      return;
    }
    if (typeof hljs !== 'undefined') {
      mainElement.current.classList.add('mwai-rendered');
      const selector = mainElement.current.querySelectorAll('pre code');
      selector.forEach(el => {
        // eslint-disable-next-line no-undef
        hljs.highlightElement(el);
      });
    }
  };
  const output = useMemo(() => {
    if (message.role === 'user') {
      return /*#__PURE__*/React.createElement("div", {
        ref: mainElement,
        className: classes
      }, /*#__PURE__*/React.createElement(RawMessage, {
        message: message
      }));
    }
    if (message.role === 'assistant') {
      if (isImages) {
        return /*#__PURE__*/React.createElement("div", {
          ref: mainElement,
          className: classes
        }, /*#__PURE__*/React.createElement(ImagesMessage, {
          message: message,
          conversationRef: conversationRef,
          onRendered: onRendered
        }));
      }
      // else if (typewriter && !message.isStreaming) {
      //   console.warn("The Typewriter effect is deprecated. Use Streaming instead.");
      //   return <div ref={mainElement} className={classes}>
      //     <TypedMessage message={message} conversationRef={conversationRef} onRendered={onRendered} />
      //   </div>;
      // }
      return /*#__PURE__*/React.createElement("div", {
        ref: mainElement,
        className: classes
      }, /*#__PURE__*/React.createElement(RawMessage, {
        message: message,
        conversationRef: conversationRef,
        onRendered: onRendered
      }));
    }
    if (message.role === 'system' && !isError) {
      return /*#__PURE__*/React.createElement("div", {
        ref: mainElement,
        className: classes
      }, /*#__PURE__*/React.createElement(RawMessage, {
        message: message,
        conversationRef: conversationRef,
        onRendered: onRendered
      }));
    }
    if (isError) {
      // Make error messages look like AI messages
      const errorMessage = {
        ...message,
        role: 'assistant'
      };
      return /*#__PURE__*/React.createElement("div", {
        ref: mainElement,
        className: classes
      }, /*#__PURE__*/React.createElement(RawMessage, {
        message: errorMessage,
        conversationRef: conversationRef,
        onRendered: onRendered
      }));
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", null, "Unhandled role."));
  }, [message, conversationRef, isImages, typewriter]);
  return output;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotReply);

/***/ }),

/***/ "./app/js/chatbot/ChatbotSpinners.js":
/*!*******************************************!*\
  !*** ./app/js/chatbot/ChatbotSpinners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BouncingDots: () => (/* binding */ BouncingDots)
/* harmony export */ });
const BouncingDots = () => {
  const bouncingLoaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 26
  };
  const bouncingDotStyles = {
    width: 9,
    height: 9,
    margin: '5px 0px 0px 5px',
    borderRadius: '50%',
    backgroundColor: '#a3a1a1',
    opacity: 1,
    animation: 'bouncing-loader 0.4s infinite alternate'
  };
  const animationDelays = ['0.1s', '0.2s', '0.3s'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
          @keyframes bouncing-loader {
            to {
              opacity: 0.6;
              transform: translateY(-10px);
            }
          }
        `), /*#__PURE__*/React.createElement("div", {
    style: bouncingLoaderStyles
  }, animationDelays.map((delay, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    style: {
      ...bouncingDotStyles,
      animationDelay: delay
    }
  }))));
};


/***/ }),

/***/ "./app/js/chatbot/ChatbotSubmit.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/ChatbotSubmit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/eraser.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/send-horizontal.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/send.js");
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
// React & Vendor Libs
const {
  useMemo,
  useCallback
} = wp.element;


const ChatbotSubmit = () => {
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    onClear,
    onSubmitAction,
    setIsListening
  } = actions;
  const {
    textClear,
    textSend,
    uploadedFile,
    inputText,
    messages,
    isListening,
    timeElapsed,
    busy,
    submitButtonConf,
    locked
  } = state;
  const isFileUploading = !!(uploadedFile !== null && uploadedFile !== void 0 && uploadedFile.uploadProgress);
  const hasFileUploaded = !!(uploadedFile !== null && uploadedFile !== void 0 && uploadedFile.uploadedId);
  const clearMode = !hasFileUploaded && inputText.length < 1 && (messages === null || messages === void 0 ? void 0 : messages.length) > 1;
  const buttonContent = useMemo(() => {
    if (busy) {
      return timeElapsed ? /*#__PURE__*/React.createElement("div", {
        className: "mwai-timer"
      }, timeElapsed) : null;
    }
    // Prefer Lucide icons for themes that request it (e.g., Timeless)
    if (submitButtonConf !== null && submitButtonConf !== void 0 && submitButtonConf.useLucide) {
      if (clearMode) return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: "20"
      });
      return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "20"
      });
    }
    // If there are image assets configured, use them
    if (submitButtonConf !== null && submitButtonConf !== void 0 && submitButtonConf.imageSend && submitButtonConf !== null && submitButtonConf !== void 0 && submitButtonConf.imageClear) {
      return /*#__PURE__*/React.createElement("img", {
        src: clearMode ? submitButtonConf.imageClear : submitButtonConf.imageSend,
        alt: clearMode ? textClear : textSend
      });
    }
    // If there are no text or images, use the default send icon
    if (!clearMode && !textSend) {
      return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "20"
      });
    }
    if (clearMode && !textClear) {
      return /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: "20"
      });
    }
    return /*#__PURE__*/React.createElement("span", null, clearMode ? textClear : textSend);
  }, [busy, timeElapsed, clearMode, textClear, textSend, submitButtonConf]);
  const buttonClassName = useMemo(() => {
    return `mwai-input-submit ${busy ? 'mwai-busy' : ''}`;
  }, [busy]);
  const onSubmitClick = useCallback(() => {
    if (isListening) {
      setIsListening(false);
    }
    if (clearMode) {
      onClear();
    } else {
      onSubmitAction();
    }
  }, [clearMode, isListening, onClear, onSubmitAction, setIsListening]);
  const handleClick = useCallback(() => {
    if (!busy) {
      onSubmitClick();
    }
  }, [busy, onSubmitClick]);
  return /*#__PURE__*/React.createElement("button", {
    className: buttonClassName,
    disabled: busy || isFileUploading || locked,
    onClick: handleClick
  }, buttonContent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotSubmit);

/***/ }),

/***/ "./app/js/chatbot/ChatbotSystem.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/ChatbotSystem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _app_chatbot_ChatbotUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/ChatbotUI */ "./app/js/chatbot/ChatbotUI.js");


const ChatbotSystem = props => {
  return /*#__PURE__*/React.createElement(_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.ChatbotContextProvider, props, /*#__PURE__*/React.createElement(_app_chatbot_ChatbotUI__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotSystem);

/***/ }),

/***/ "./app/js/chatbot/ChatbotTrigger.js":
/*!******************************************!*\
  !*** ./app/js/chatbot/ChatbotTrigger.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./app/js/helpers.js");
// React & Vendor Libs
const {
  useMemo,
  useEffect
} = wp.element;



const ChatbotTrigger = () => {
  const {
    state,
    actions
  } = (0,_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    isWindow,
    iconText,
    showIconMessage,
    iconAlt,
    iconUrl,
    open,
    opening,
    windowAnimation
  } = state;
  const {
    setShowIconMessage,
    setOpen,
    setOpening
  } = actions;

  // Animation durations aligned with SASS mixins
  const ANIM_DUR = {
    zoom: {
      open: 200
    },
    slide: {
      open: 250
    },
    fade: {
      open: 220
    }
  };
  useEffect(() => {
    if (open && showIconMessage) {
      setShowIconMessage(false);
    }
  }, [open, setShowIconMessage, showIconMessage]);
  const triggerContent = useMemo(() => {
    if (!isWindow) {
      return null;
    }
    const renderIcon = () => {
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isEmoji)(iconUrl)) {
        return /*#__PURE__*/React.createElement("div", {
          className: "mwai-icon mwai-emoji",
          style: {
            fontSize: '48px',
            lineHeight: '64px',
            width: '64px',
            height: '64px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }, iconUrl);
      } else {
        return /*#__PURE__*/React.createElement("img", {
          className: "mwai-icon",
          width: "64",
          height: "64",
          alt: iconAlt,
          src: iconUrl
        });
      }
    };

    // Click handler with opening animation support
    const handleOpen = () => {
      if (open || opening) {
        return;
      }
      if (showIconMessage) {
        setShowIconMessage(false);
      }

      // If no animation, open immediately
      if (!windowAnimation || windowAnimation === 'none') {
        setOpen(true);
        return;
      }

      // With animation, handle the timing
      // Step 1: set opening to render body at initial scale/offset
      setOpening(true);
      // Step 2: next frame, set open to animate to final scale/position
      requestAnimationFrame(() => {
        setOpen(true);
        // Keep opening briefly so trigger can fade while body animates
        const openDur = ANIM_DUR[windowAnimation] && ANIM_DUR[windowAnimation].open || 200;
        setTimeout(() => {
          setOpening(false);
        }, openDur);
      });
    };

    // TODO: Let's remove mwai-open-button at some point.
    return /*#__PURE__*/React.createElement("div", {
      className: "mwai-trigger mwai-open-button"
    }, /*#__PURE__*/React.createElement(_helpers__WEBPACK_IMPORTED_MODULE_2__.TransitionBlock, {
      className: "mwai-icon-text-container",
      if: iconText && showIconMessage,
      disableTransition: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwai-icon-text-close",
      role: "button",
      "aria-label": "Close tip",
      onClick: e => {
        e.stopPropagation();
        setShowIconMessage(false);
      },
      onMouseDown: e => e.preventDefault()
    }, "\u2715"), /*#__PURE__*/React.createElement("div", {
      className: "mwai-icon-text",
      onClick: handleOpen
    }, iconText)), /*#__PURE__*/React.createElement("div", {
      className: "mwai-icon-container",
      onClick: handleOpen
    }, renderIcon()));
  }, [isWindow, iconText, showIconMessage, iconAlt, iconUrl, setShowIconMessage, setOpen, setOpening, open, opening, windowAnimation]);

  // (debug logs removed)

  return /*#__PURE__*/React.createElement(React.Fragment, null, triggerContent);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotTrigger);

/***/ }),

/***/ "./app/js/chatbot/ChatbotUI.js":
/*!*************************************!*\
  !*** ./app/js/chatbot/ChatbotUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _app_helpers_scrollLockManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/helpers/scrollLockManager */ "./app/js/helpers/scrollLockManager.js");
/* harmony import */ var _ChatbotHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatbotHeader */ "./app/js/chatbot/ChatbotHeader.js");
/* harmony import */ var _ChatbotTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatbotTrigger */ "./app/js/chatbot/ChatbotTrigger.js");
/* harmony import */ var _ChatbotBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatbotBody */ "./app/js/chatbot/ChatbotBody.js");
// React & Vendor Libs
const {
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  useEffect,
  useRef
} = wp.element;








/**
 * Helper functions for file type detection
 */
const isImage = file => file.type.startsWith('image/');
const isDocument = file => {
  const allowedDocumentTypes = ['text/x-c', 'text/x-csharp', 'text/x-c++', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/html', 'text/x-java', 'application/json', 'text/markdown', 'application/pdf', 'text/x-php', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'text/x-python', 'text/x-script.python', 'text/x-ruby', 'text/x-tex', 'text/plain', 'text/css', 'text/javascript', 'application/x-sh', 'application/typescript'];
  return allowedDocumentTypes.includes(file.type);
};

/**
 * Check if file matches allowed mime types
 */
const isAllowedFileType = (file, allowedMimeTypes) => {
  if (!allowedMimeTypes || allowedMimeTypes.trim() === '') {
    // No restrictions - use default behavior
    return isImage(file) || isDocument(file);
  }

  // Parse comma-separated mime types and trim whitespace
  const allowedTypes = allowedMimeTypes.split(',').map(type => type.trim());

  // Check if file type matches any of the allowed types
  return allowedTypes.some(allowedType => {
    // Support wildcards like "image/*"
    if (allowedType.endsWith('/*')) {
      const prefix = allowedType.slice(0, -2);
      return file.type.startsWith(prefix + '/');
    }
    // Exact match
    return file.type === allowedType;
  });
};

/**
 * ChatbotUI Component
 * 
 * Main chatbot UI component that renders the chat interface.
 * Supports different container styles (standard, osx, terminal) via CSS classes.
 * Header, content, and footer can be customized through the UI Builder settings.
 */
const ChatbotUI = props => {
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const {
    style,
    isAdminPreview
  } = props;
  const [autoScroll, setAutoScroll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const {
    state,
    actions
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__.useChatbotContext)();
  const {
    theme,
    botId,
    customId,
    messages,
    textCompliance,
    isWindow,
    fullscreen,
    iconPosition,
    centerOpen,
    width,
    openDelay,
    iconBubble,
    windowAnimation,
    shortcuts,
    blocks,
    fileSearch,
    fileUpload,
    multiUpload,
    draggingType,
    isBlocked,
    allowedMimeTypes,
    windowed,
    cssVariables,
    conversationRef,
    open,
    opening,
    closing,
    busy,
    uploadIconPosition,
    containerType,
    headerType,
    messagesType,
    inputType,
    footerType,
    popupTitle,
    aiName
  } = state;
  const {
    onSubmit,
    setIsBlocked,
    setDraggingType,
    onUploadFile,
    onMultiFileUpload,
    setOpen,
    setClosing
  } = actions;
  const themeStyle = useMemo(() => {
    // For custom themes (type: 'css'), use the style property
    if ((theme === null || theme === void 0 ? void 0 : theme.type) === 'css') {
      return (theme === null || theme === void 0 ? void 0 : theme.style) || null;
    }
    // For internal themes, use customCSS if available
    if (theme !== null && theme !== void 0 && theme.customCSS) {
      return theme.customCSS;
    }
    return null;
  }, [theme]);
  const needTools = fileSearch || fileUpload;
  // Only show footer if footerType is not 'none' AND there's actually content to show
  // Check textCompliance is not just an empty string
  const needsFooter = footerType !== 'none' && (needTools || textCompliance && textCompliance.trim());
  const timeoutRef = useRef(null);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate a unique ID for this chatbot instance for scroll lock management
  const scrollLockId = useMemo(() => {
    return `chatbot-${botId || customId || Math.random().toString(36).substr(2, 9)}`;
  }, [botId, customId]);

  // Body scroll lock - only for mobile or actual fullscreen
  useEffect(() => {
    // ⚠️ CRITICAL: Understanding these variables prevents scroll bugs!
    // 
    // VARIABLE MEANINGS:
    // - isWindow: true = chatbot is a popup window (not inline/embedded in page)
    // - open: true = popup window is currently visible to user
    // - fullscreen: true = fullscreen mode is enabled in settings
    // - windowed: true = currently in windowed/minimized state (NOT fullscreen)
    // - isMobile: true = viewport width <= 760px
    // 
    // FULLSCREEN LOGIC:
    // - Actual fullscreen = fullscreen && !windowed
    // - Just having fullscreen=true doesn't mean it's fullscreen NOW
    // - User can minimize fullscreen mode, setting windowed=true
    // 
    // SCROLL LOCK RULES:
    // 1. Mobile + popup open = LOCK (better UX on small screens)
    // 2. Desktop + popup open = NO LOCK (users need to scroll the page)
    // 3. Desktop + actual fullscreen = LOCK (chatbot takes whole screen)
    // 
    // COMMON MISTAKES TO AVOID:
    // ❌ Don't lock on desktop just because isWindow && open
    // ❌ Don't lock just because fullscreen=true (check windowed too!)
    // ❌ Don't forget to clear overflow when conditions change

    // Determine if we should lock scroll
    let shouldLockScroll = false;
    if (fullscreen && !windowed) {
      // We're in fullscreen mode (either popup or non-popup)
      if (isWindow) {
        // Popup fullscreen - only lock if open
        shouldLockScroll = open;
      } else {
        // Non-popup fullscreen - always lock
        shouldLockScroll = true;
      }
    } else if (isMobile && isWindow && open) {
      // Mobile popup (not fullscreen) - lock when open
      shouldLockScroll = true;
    }

    // Use the scroll lock manager to coordinate with other chatbot instances
    _app_helpers_scrollLockManager__WEBPACK_IMPORTED_MODULE_2__["default"].updateLock(scrollLockId, shouldLockScroll);

    // Cleanup function - remove this component's lock request
    return () => {
      _app_helpers_scrollLockManager__WEBPACK_IMPORTED_MODULE_2__["default"].removeLock(scrollLockId);
    };
  }, [open, fullscreen, windowed, isMobile, isWindow, scrollLockId]);

  // #region Dragging
  const handleDrag = useCallback((event, isDragging) => {
    event.preventDefault();
    if (!fileUpload) {
      return;
    }

    // If dragging has ended (dragleave), reset the states
    if (!isDragging) {
      setIsBlocked(false);
      setDraggingType(false);
      return;
    }

    // Check what type of files are being dragged
    const items = event.dataTransfer.items;
    let hasImage = false;
    let hasDocument = false;

    // Try to detect file types from the drag event
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === 'file') {
          // Try to get the file type from the item's type property
          const type = item.type;
          if (type) {
            // Create a fake file object for type checking
            const fakeFile = {
              type: type
            };
            if (isAllowedFileType(fakeFile, allowedMimeTypes)) {
              if (type.startsWith('image/')) {
                hasImage = true;
              } else {
                hasDocument = true;
              }
            }
          } else {
            // If we can't determine the type, assume it's acceptable if upload is enabled and no restrictions
            if (fileUpload && (!allowedMimeTypes || allowedMimeTypes.trim() === '')) {
              hasDocument = true;
            }
          }
        }
      }
    }
    const hasAcceptableFile = hasImage || hasDocument;
    setIsBlocked(!hasAcceptableFile);
    setDraggingType(hasAcceptableFile ? hasImage ? 'image' : 'document' : false);
  }, [fileUpload, allowedMimeTypes, setDraggingType, setIsBlocked]);
  const handleDrop = useCallback(event => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (multiUpload) {
      const allowedFiles = Array.from(files).filter(file => fileUpload && isAllowedFileType(file, allowedMimeTypes));
      if (allowedFiles.length > 0) {
        allowedFiles.forEach(file => onMultiFileUpload(file));
      }
    } else {
      const allowedFile = Array.from(files).find(file => fileUpload && isAllowedFileType(file, allowedMimeTypes));
      if (allowedFile) {
        onUploadFile(allowedFile);
      }
    }
    setDraggingType(false);
    setIsBlocked(false);
  }, [fileUpload, allowedMimeTypes, multiUpload, onUploadFile, onMultiFileUpload, setDraggingType, setIsBlocked]);
  // #endregion

  // #region Open Delay
  const hasTriggeredOpenRef = useRef(false);
  useEffect(() => {
    // Only trigger once, and only if we have a window with a delay
    if (!hasTriggeredOpenRef.current && isWindow && openDelay && openDelay > 0 && !open) {
      hasTriggeredOpenRef.current = true;
      const timer = setTimeout(() => {
        setOpen(true);
      }, openDelay * 1000);
      timeoutRef.current = timer;
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [isWindow, openDelay, open, setOpen]);
  // #endregion
  // #region Auto Scroll
  useLayoutEffect(() => {
    if (autoScroll && conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages, autoScroll, conversationRef, busy]);
  const onScroll = () => {
    if (conversationRef.current) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = conversationRef.current;
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 1; // Allowing a small margin
      setAutoScroll(isAtBottom);
    }
  };
  // #endregion
  // eslint-disable-next-line no-undef
  const inputClassNames = css('mwai-input', {
    'mwai-active': !busy
  });
  // Window dragging (desktop only): allow moving the open popup by dragging header
  const [dragWindow, setDragWindow] = useState(false);
  const [dragPos, setDragPos] = useState(null); // { top, left }
  const isDesktop = typeof window !== 'undefined' ? window.matchMedia('(min-width: 761px)').matches : true;
  const onHeaderDragStart = useCallback(e => {
    if (!isWindow || !open || fullscreen && !windowed || !isDesktop || isAdminPreview) return;
    // Ignore clicks on buttons inside header
    const target = e.target;
    if (target.closest && (target.closest('.mwai-close-button') || target.closest('.mwai-resize-button') || target.closest('button'))) {
      return;
    }
    const el = document.getElementById(`mwai-chatbot-${customId || botId}`);
    if (!el) return;
    // Prevent text selection behind the chatbot while dragging
    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startTop = rect.top;
    const startLeft = rect.left;
    setDragWindow(true);
    setDragPos({
      top: startTop,
      left: startLeft
    });
    // Force move cursor and prevent text selection during drag
    const prevBodyCursor = document.body.style.cursor;
    const prevBodyUserSelect = document.body.style.userSelect;
    document.body.style.cursor = 'move';
    document.body.style.userSelect = 'none';
    const onMove = ev => {
      const top = startTop + (ev.clientY - startY);
      const left = startLeft + (ev.clientX - startX);
      setDragPos({
        top,
        left
      });
    };
    const onUp = () => {
      setDragWindow(false);
      document.body.style.cursor = prevBodyCursor || '';
      document.body.style.userSelect = prevBodyUserSelect || '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [isWindow, open, fullscreen, windowed, isDesktop, customId, botId, isAdminPreview]);
  const dragStyle = useMemo(() => {
    if (!dragPos) return {};
    return {
      top: `${Math.max(0, dragPos.top)}px`,
      left: `${Math.max(0, dragPos.left)}px`,
      right: 'auto',
      bottom: 'auto',
      transform: 'none'
    };
  }, [dragPos]);

  // Reset drag position once closing fully completes (avoid trigger jumping)
  useEffect(() => {
    if (!open && !closing && dragPos) {
      setDragPos(null);
    }
  }, [open, closing, dragPos]);
  const customStyle = useMemo(() => ({
    ...style,
    ...cssVariables,
    // In fullscreen, let CSS handle 100% width via mixin to avoid gaps
    maxWidth: fullscreen ? null : width,
    maxHeight: !fullscreen ? 'calc(100% - 20px)' : null,
    ...(dragPos ? dragStyle : {})
  }), [style, cssVariables, fullscreen, width, dragPos, dragStyle]);
  const allowedAnimations = new Set(['zoom', 'slide', 'fade']);
  const sanitizedWindowAnimation = windowAnimation && allowedAnimations.has(windowAnimation) ? windowAnimation : 'none';
  const customClasses = css('mwai-chat', {
    [`mwai-${iconPosition}`]: isWindow,
    'mwai-window': isWindow,
    'mwai-center-open': isWindow && centerOpen,
    'mwai-bubble': (iconBubble === true || iconBubble === 1 || iconBubble === '1' || iconBubble === 'true') && isWindow,
    'mwai-open': open || !isWindow && fullscreen,
    // Non-popup fullscreen should always be "open"
    'mwai-opening': opening,
    'mwai-closing': closing,
    'mwai-top-left': iconPosition === 'top-left',
    'mwai-top-right': iconPosition === 'top-right',
    'mwai-fullscreen': fullscreen && !windowed,
    'mwai-bottom-left': iconPosition === 'bottom-left',
    'mwai-bottom-right': iconPosition === 'bottom-right',
    [`mwai-animation-${sanitizedWindowAnimation}`]: isWindow && sanitizedWindowAnimation && sanitizedWindowAnimation !== 'none'
  });
  const baseClasses = css(customClasses, {
    'mwai-dragging': draggingType,
    'mwai-blocked': isBlocked,
    'mwai-window-dragging': dragWindow,
    [`mwai-${theme === null || theme === void 0 ? void 0 : theme.themeId}-theme`]: true,
    [`mwai-container-${containerType}`]: containerType && containerType !== 'standard'
  });
  // #region Process messages
  // Message processing is now handled by the Messages components

  const jsxShortcuts = useMemo(() => {
    if (!shortcuts || shortcuts.length === 0) {
      return null;
    }
    const iconIsURL = icon => {
      return icon && (icon.startsWith('http://') || icon.startsWith('https://'));
    };
    const iconIsEmoji = icon => {
      if (!icon) {
        return false;
      }
      const emojiRegex = /^[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{00A9}\u{00AE}\u{2122}\u{2139}\u{23E9}-\u{23F3}\u{24C2}\u{23F8}-\u{23FA}\u{231A}-\u{231B}\u{2328}\u{23CF}\u{2388}\u{23E9}-\u{23F0}\u{23F3}\u{23F8}-\u{23FA}]+$/u;
      return emojiRegex.test(icon);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "mwai-shortcuts"
    }, shortcuts.map((action, index) => {
      const {
        type,
        data
      } = action;
      // Common extraction (label, variant, icon, etc.)
      // This part can be repeated or factored out depending on your preference.
      const {
        label,
        variant,
        icon,
        className
      } = data ?? {};
      // Base button classes
      let baseClasses = css('mwai-shortcut', {
        'mwai-success': variant === 'success',
        'mwai-danger': variant === 'danger',
        'mwai-warning': variant === 'warning',
        'mwai-info': variant === 'info'
      });
      if (className) {
        baseClasses += ` ${className}`;
      }
      switch (type) {
        case 'action':
          {
            const {
              action,
              message
            } = data ?? {};
            const onClick = () => {
              if (action === 'clear') {
                actions.onClear();
              } else if (action === 'message' && message) {
                onSubmit(message);
              } else {
                console.warn(`This action is not supported: ${action}.`);
              }
            };
            return /*#__PURE__*/React.createElement("button", {
              className: baseClasses,
              key: index,
              onClick: onClick
            }, (iconIsURL(icon) || iconIsEmoji(icon)) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
              className: "mwai-icon"
            }, iconIsURL(icon) && /*#__PURE__*/React.createElement("img", {
              src: icon,
              alt: label || "AI Shortcut"
            }), iconIsEmoji(icon) && /*#__PURE__*/React.createElement("span", {
              role: "img",
              "aria-label": "AI Shortcut"
            }, icon)), /*#__PURE__*/React.createElement("div", {
              style: {
                flex: 'auto'
              }
            })), /*#__PURE__*/React.createElement("div", {
              className: "mwai-label"
            }, label || "N/A"));
          }
        case 'callback':
          {
            // For 'callback' type, call the function in data.onClick
            const {
              onClick: customOnClick
            } = data;
            const onClickHandler = () => {
              if (typeof customOnClick === 'function') {
                customOnClick();
              } else if (typeof customOnClick === 'string') {
                // If it's a string, you might want to evaluate it.
                // Be cautious with eval and ensure it's safe.
                const replacedOnClick = customOnClick.replace(/actions\.([\w]+)/g, 'actions.$1').replace(/state\.([\w]+)/g, 'state.$1');
                const parsedFunction = new Function(`return (${replacedOnClick});`)();
                data.onClick = parsedFunction;
                parsedFunction();
              } else {
                console.warn('No valid callback function provided in data.onClick.');
              }
            };
            return /*#__PURE__*/React.createElement("button", {
              className: baseClasses,
              key: index,
              onClick: onClickHandler
            }, (iconIsURL(icon) || iconIsEmoji(icon)) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
              className: "mwai-icon"
            }, iconIsURL(icon) && /*#__PURE__*/React.createElement("img", {
              src: icon,
              alt: label || "AI Shortcut"
            }), iconIsEmoji(icon) && /*#__PURE__*/React.createElement("span", {
              role: "img",
              "aria-label": "AI Shortcut"
            }, icon)), /*#__PURE__*/React.createElement("div", {
              style: {
                flex: 'auto'
              }
            })), /*#__PURE__*/React.createElement("div", {
              className: "mwai-label"
            }, label || "N/A"));
          }
        case 'message':
          {
            // For 'message' type, directly submit the message
            const {
              message
            } = data ?? {};
            const onClick = () => {
              if (message) {
                onSubmit(message);
              } else {
                console.warn('No message provided for message shortcut.');
              }
            };
            return /*#__PURE__*/React.createElement("button", {
              className: baseClasses,
              key: index,
              onClick: onClick
            }, (iconIsURL(icon) || iconIsEmoji(icon)) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
              className: "mwai-icon"
            }, iconIsURL(icon) && /*#__PURE__*/React.createElement("img", {
              src: icon,
              alt: label || "AI Shortcut"
            }), iconIsEmoji(icon) && /*#__PURE__*/React.createElement("span", {
              role: "img",
              "aria-label": "AI Shortcut"
            }, icon)), /*#__PURE__*/React.createElement("div", {
              style: {
                flex: 'auto'
              }
            })), /*#__PURE__*/React.createElement("div", {
              className: "mwai-label"
            }, label || "N/A"));
          }
        default:
          {
            console.warn(`This shortcut type is not supported: ${type}.`);
            return null;
          }
      }
    }));
  }, [shortcuts, actions, css, onSubmit]);

  // Execute block scripts when blocks change
  useEffect(() => {
    if (blocks && blocks.length > 0) {
      blocks.forEach(block => {
        var _block$data;
        if (block.type === 'content' && (_block$data = block.data) !== null && _block$data !== void 0 && _block$data.script) {
          try {
            // Execute the script
            const scriptElement = document.createElement('script');
            scriptElement.textContent = block.data.script;
            document.body.appendChild(scriptElement);
            // Clean up the script element after execution
            setTimeout(() => {
              if (scriptElement.parentNode) {
                scriptElement.parentNode.removeChild(scriptElement);
              }
            }, 0);
          } catch (error) {
            console.error('Error executing block script:', error);
          }
        }
      });
    }
  }, [blocks]);
  const jsxBlocks = useMemo(() => {
    if (!blocks || blocks.length === 0) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "mwai-blocks"
    }, blocks.map((block, index) => {
      const {
        type,
        data
      } = block;
      const {
        html
      } = data ?? {};
      switch (type) {
        case 'content':
          {
            return /*#__PURE__*/React.createElement("div", {
              key: index,
              dangerouslySetInnerHTML: {
                __html: html
              }
            });
          }
        default:
          {
            console.warn(`This block type is not supported: ${type}.`);
            return null;
          }
      }
    }));
  }, [blocks]);
  // #endregion

  return /*#__PURE__*/React.createElement(_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.TransitionBlock, {
    dir: "auto",
    id: `mwai-chatbot-${customId || botId}`,
    className: baseClasses,
    style: customStyle,
    if: true,
    disableTransition: !isWindow
  }, themeStyle && /*#__PURE__*/React.createElement("style", null, themeStyle), isWindow && sanitizedWindowAnimation && sanitizedWindowAnimation !== 'none' && /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 760px) {
          .mwai-chat.mwai-window.mwai-animation-${sanitizedWindowAnimation} .mwai-header {
            display: none !important;
          }
          /* Also hide during opening state */
          .mwai-chat.mwai-window.mwai-animation-${sanitizedWindowAnimation}.mwai-opening .mwai-header {
            display: none !important;
          }
        }
      `), containerType === 'osx' && /*#__PURE__*/React.createElement("style", null, `
        /* MacOS Container Styles - apply to window-box for proper animation */
        .mwai-chat.mwai-container-osx .mwai-window-box {
          border-radius: 10px !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
          overflow: hidden !important;
          border: 1px solid var(--mwai-borderColor) !important;
        }
        
        /* Remove container-level styles to prevent border remnants */
        .mwai-chat.mwai-container-osx {
          border: none !important;
          box-shadow: none !important;
          background: transparent !important;
        }

        /* Fix visibility when minimized */
        .mwai-chat.mwai-window:not(.mwai-open) {
          display: flex !important;
        }
        .mwai-chat.mwai-window:not(.mwai-open) .mwai-header,
        .mwai-chat.mwai-window:not(.mwai-open) .mwai-body {
          display: none !important;
        }

        /* Timeless: keep overflow contained in window-box */
        .mwai-timeless-theme.mwai-chat.mwai-container-osx .mwai-window-box { overflow: hidden !important; }
        .mwai-timeless-theme.mwai-chat.mwai-container-osx.mwai-open:not(.mwai-fullscreen) .mwai-input-submit { position: relative !important; z-index: 2 !important; }
      `), headerType === 'osx' && /*#__PURE__*/React.createElement("style", null, `
        /* MacOS Header Styles */
        .mwai-chat .mwai-header.mwai-header-osx {
          display: flex !important; flex-direction: column !important; align-items: stretch !important; justify-content: flex-start !important;
          padding: 0 !important;
          background: var(--mwai-backgroundHeaderColor) !important;
          border-radius: 10px 10px 0 0 !important; position: relative !important;
        }

        /* Hide header and body when minimized (standard container + macOS header) */
        .mwai-chat.mwai-window:not(.mwai-open) { display: flex !important; }
        .mwai-chat.mwai-window:not(.mwai-open) .mwai-header,
        .mwai-chat.mwai-window:not(.mwai-open) .mwai-body { display: none !important; }

        /* Top bar: traffic lights with centered title */
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-bar {
          display: flex !important; align-items: center !important; justify-content: flex-start !important;
          position: relative !important; padding: 8px 12px !important;
          background: #0000001c;
        }

        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls { display: flex !important; align-items: center !important; gap: 8px !important; z-index: 1 !important; }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls button {
          all: unset !important; display: flex !important; justify-content: center !important; align-items: center !important;
          width: 14px !important; height: 14px !important; min-width: 14px !important; min-height: 14px !important; border-radius: 50% !important;
          position: relative !important; cursor: pointer !important; border: none !important; padding: 0 !important; margin: 0 !important; box-shadow: none !important; transition: opacity 0.2s !important;
        }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls button:hover { background-color: initial !important; }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls button.mwai-osx-close { background-color: #ec6a5e !important; }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls button.mwai-osx-minimize { background-color: #f4be4f !important; }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls button.mwai-osx-maximize { background-color: #61c554 !important; }

        /* Icons inside buttons */
        .mwai-chat .mwai-header.mwai-header-osx .mwai-lucide-icon { width: 9px !important; height: 9px !important; stroke: rgba(0,0,0,0.5) !important; stroke-width: 2.5 !important; opacity: 0 !important; transition: none !important; }
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-controls:hover .mwai-lucide-icon { opacity: 1 !important; }

        /* Centered title, like macOS */
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-bar .mwai-osx-title {
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          margin: 0 !important; padding: 0 !important; text-align: center !important;
          white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important;
          max-width: calc(100% - 160px) !important; z-index: 0 !important; font-weight: 500 !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
          font-size: 13px !important;
          color: var(--mwai-headerColor) !important;
        }

        /* Optional merged content area for Timeless */
        .mwai-chat .mwai-header.mwai-header-osx .mwai-osx-content { padding: var(--mwai-spacing) !important; display: flex !important; align-items: center !important; }

        /* Timeless: let header height be dynamic under macOS */
        .mwai-timeless-theme.mwai-window .mwai-header.mwai-header-osx { height: auto !important; }

        /* ChatGPT dark adjustments */
        .mwai-chatgpt-theme .mwai-header.mwai-header-osx .mwai-osx-title { color: #d1d1d1 !important; }
        .mwai-chatgpt-theme .mwai-header.mwai-header-osx .mwai-lucide-icon { stroke: rgba(77,77,77,0.8) !important; }

        /* Hide standard buttons for MacOS header */
        .mwai-chat .mwai-header.mwai-header-osx .mwai-buttons { display: none !important; }

        /* Indicate draggable header on macOS style only when open and not transitioning */
        .mwai-chat.mwai-window.mwai-open:not(.mwai-opening):not(.mwai-closing) .mwai-header.mwai-header-osx .mwai-osx-bar { cursor: move; }
      `), /*#__PURE__*/React.createElement("style", null, `
        .mwai-chat.mwai-window.mwai-open:not(.mwai-opening):not(.mwai-closing) .mwai-header:not(.mwai-header-osx) {
          cursor: move;
        }
      `), /*#__PURE__*/React.createElement(_ChatbotTrigger__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "mwai-window-box"
  }, isMobile && isWindow && open && /*#__PURE__*/React.createElement("div", {
    className: "mwai-mobile-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-mobile-header-title"
  }, popupTitle || aiName || "AI Engine"), /*#__PURE__*/React.createElement("button", {
    className: "mwai-mobile-header-close",
    onClick: () => {
      // Handle close with animation (same as ChatbotHeader)
      if (closing || !open) return;

      // If no animation, close immediately
      if (!windowAnimation || windowAnimation === 'none') {
        setOpen(false);
        return;
      }

      // With animation, handle the timing
      setClosing(true);
      // First let the window shrink
      setTimeout(() => {
        setOpen(false);
        // Keep closing state a bit longer for trigger to finish animating
        setTimeout(() => {
          setClosing(false);
        }, 150);
      }, 180); // Match the window shrink duration
    },
    "aria-label": "Close chatbot",
    type: "button"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), !(isMobile && isWindow && open) && /*#__PURE__*/React.createElement(_ChatbotHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDragStart: onHeaderDragStart
  }), /*#__PURE__*/React.createElement(_ChatbotBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    conversationRef: conversationRef,
    onScroll: onScroll,
    jsxShortcuts: jsxShortcuts,
    jsxBlocks: jsxBlocks,
    inputClassNames: inputClassNames,
    handleDrop: handleDrop,
    handleDrag: handleDrag,
    needsFooter: needsFooter,
    needTools: needTools,
    uploadIconPosition: uploadIconPosition
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotUI);

/***/ }),

/***/ "./app/js/chatbot/DiscussionsContext.js":
/*!**********************************************!*\
  !*** ./app/js/chatbot/DiscussionsContext.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscussionsContextProvider: () => (/* binding */ DiscussionsContextProvider),
/* harmony export */   useDiscussionsContext: () => (/* binding */ useDiscussionsContext)
/* harmony export */ });
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/helpers/tokenManager */ "./app/js/helpers/tokenManager.js");
// React & Vendor Libs
const {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef
} = wp.element;


const DiscussionsContext = createContext();
const useDiscussionsContext = () => {
  const context = useContext(DiscussionsContext);
  if (!context) {
    throw new Error('useDiscussionsContext must be used within a DiscussionsContextProvider');
  }
  return context;
};
const DiscussionsContextProvider = ({
  children,
  ...rest
}) => {
  const {
    system,
    theme
  } = rest;
  const [discussions, setDiscussions] = useState([]);
  const [discussion, setDiscussion] = useState(null);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [busy, setBusy] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [paginationBusy, setPaginationBusy] = useState(false);
  const isRefreshing = useRef(false);
  const shortcodeStyles = useMemo(() => (theme === null || theme === void 0 ? void 0 : theme.settings) || {}, [theme]);

  // System Parameters
  const botId = system.botId;
  const customId = system.customId;
  const [restNonce, setRestNonce] = useState(system.restNonce || _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].getToken());
  const restNonceRef = useRef(system.restNonce || _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].getToken());

  // Subscribe to global token updates
  useEffect(() => {
    const unsubscribe = _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(newToken => {
      setRestNonce(newToken);
      restNonceRef.current = newToken;
    });
    return unsubscribe;
  }, []);
  const pluginUrl = system.pluginUrl;
  const restUrl = system.restUrl;
  const debugMode = system.debugMode;

  // UI Parameters
  const cssVariables = useMemo(() => {
    const cssVariables = Object.keys(shortcodeStyles).reduce((acc, key) => {
      acc[`--mwai-${key}`] = shortcodeStyles[key];
      return acc;
    }, {});
    return cssVariables;
  }, [shortcodeStyles]);
  const hasEmptyDiscussion = useMemo(() => {
    return discussions.some(discussion => discussion.messages.length === 0);
  }, [discussions]);

  // Get the chatbot's stored chatId from localStorage on initial load
  const getStoredChatId = useCallback(() => {
    const chatbot = MwaiAPI.getChatbot(botId);
    const localStorageKey = chatbot === null || chatbot === void 0 ? void 0 : chatbot.localStorageKey;
    if (localStorageKey) {
      try {
        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          return parsedData.chatId;
        } else {}
      } catch (e) {
        console.error('[DISCUSSIONS] Error reading chatbot storage:', e);
      }
    }
    return null;
  }, [botId]);
  const refresh = useCallback(async (silentRefresh = false, page = currentPage, isPagination = false) => {
    // Prevent concurrent requests
    if (isRefreshing.current) {
      return;
    }
    isRefreshing.current = true;
    let startTime;
    try {
      if (!silentRefresh) {
        startTime = Date.now();
        if (isPagination) {
          setPaginationBusy(true);
        } else {
          setBusy(true);
        }
      }
      const paging = (system === null || system === void 0 ? void 0 : system.paging) || 0;
      const limit = paging > 0 ? paging : undefined;
      const offset = paging > 0 ? page * paging : 0;
      const body = {
        botId: botId && botId !== '' ? botId : customId,
        ...(limit && {
          limit,
          offset
        })
      };
      if (debugMode) {}
      const handleTokenUpdate = newToken => {
        setRestNonce(newToken);
        restNonceRef.current = newToken;
        _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(newToken); // Update globally
      };
      const response = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiFetch)(`${restUrl}/mwai-ui/v1/discussions/list`, body, restNonceRef.current, false, undefined, handleTokenUpdate);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiHandleRes)(response, null, debugMode ? "DISCUSSIONS" : null, handleTokenUpdate, debugMode);
      if (!data.success) {
        throw new Error(`Could not retrieve the discussions: ${data.message}`);
      }
      if (debugMode) {}
      const conversations = data.chats.map(conversation => {
        const messages = JSON.parse(conversation.messages);
        const extra = JSON.parse(conversation.extra);
        return {
          ...conversation,
          messages,
          extra,
          metadata_display: conversation.metadata_display
        };
      });

      // Update total count for pagination
      if (data.total !== undefined) {
        setTotalCount(data.total);
      }

      // Handle pagination: replace or merge based on page and paging setting
      setDiscussions(prevDiscussions => {
        const paging = (system === null || system === void 0 ? void 0 : system.paging) || 0;
        if (paging > 0) {
          // With pagination enabled, always replace discussions
          return conversations;
        } else {
          // No pagination, merge with local discussions for real-time updates
          const discussionMap = new Map();

          // Add local discussions to the map
          prevDiscussions.forEach(disc => {
            discussionMap.set(disc.chatId, disc);
          });

          // Update or add server discussions
          conversations.forEach(serverDisc => {
            discussionMap.set(serverDisc.chatId, serverDisc);
          });
          const newDiscussions = Array.from(discussionMap.values());

          // Update the selected discussion if necessary
          if (discussion) {
            const updatedDiscussion = newDiscussions.find(disc => disc.chatId === discussion.chatId);
            if (updatedDiscussion && updatedDiscussion !== discussion) {
              setDiscussion(updatedDiscussion);
            }
          }
          return newDiscussions;
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      isRefreshing.current = false;
      if (!silentRefresh && startTime) {
        // Ensure minimum 500ms display time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, 200 - elapsedTime);
        setTimeout(() => {
          if (isPagination) {
            setPaginationBusy(false);
          } else {
            setBusy(false);
          }
        }, remainingTime);
      }
    }
  }, [discussion, currentPage, system === null || system === void 0 ? void 0 : system.paging]); // Include dependencies

  const refreshInterval = (system === null || system === void 0 ? void 0 : system.refreshInterval) || 5000;
  useEffect(() => {
    // On initial load, check if chatbot has a stored chatId
    const storedChatId = getStoredChatId();
    if (storedChatId && !currentChatId) {
      setCurrentChatId(storedChatId);
    }
    refresh();
    // Only set up interval if refresh is enabled
    if (refreshInterval > 0) {
      const interval = setInterval(() => {
        refresh(true);
      }, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval, currentPage]);
  useEffect(() => {
    // If we have a currentChatId but no discussion selected, find and select it
    if (currentChatId && !discussion) {
      const foundDiscussion = discussions.find(disc => disc.chatId === currentChatId);
      if (foundDiscussion) {
        setDiscussion(foundDiscussion);
        // Also sync with chatbot when auto-selecting a discussion
        try {
          var _foundDiscussion$extr;
          const chatbot = getChatbot(botId);
          const previousResponseId = ((_foundDiscussion$extr = foundDiscussion.extra) === null || _foundDiscussion$extr === void 0 ? void 0 : _foundDiscussion$extr.previousResponseId) || null;
          chatbot.setContext({
            chatId: foundDiscussion.chatId,
            messages: foundDiscussion.messages,
            previousResponseId
          });
        } catch (error) {
          // Chatbot might not be ready yet, that's ok
          console.debug('Chatbot not ready for auto-selected discussion', error);
        }
      }
    }
    // Update the discussion if it exists in the list
    else if (discussion) {
      const updatedDiscussion = discussions.find(disc => disc.chatId === discussion.chatId);
      if (updatedDiscussion && updatedDiscussion !== discussion) {
        setDiscussion(updatedDiscussion);
      }
    }
  }, [discussions, currentChatId, botId]);
  const getChatbot = botId => {
    const chatbot = MwaiAPI.getChatbot(botId);
    if (!chatbot) {
      throw new Error(`Chatbot not found.`, {
        botId,
        chatbots: MwaiAPI.chatbots
      });
    }
    return chatbot;
  };
  const onDiscussionClick = async chatId => {
    var _selectedDiscussion$e;
    const selectedDiscussion = discussions.find(x => x.chatId === chatId);
    if (!selectedDiscussion) {
      console.error(`Discussion not found.`, {
        chatId,
        discussions
      });
      return;
    }
    const chatbot = getChatbot(botId);

    // Extract previousResponseId from discussion extra data
    const previousResponseId = ((_selectedDiscussion$e = selectedDiscussion.extra) === null || _selectedDiscussion$e === void 0 ? void 0 : _selectedDiscussion$e.previousResponseId) || null;
    chatbot.setConversation({
      chatId,
      messages: selectedDiscussion.messages,
      previousResponseId
    });
    setDiscussion(selectedDiscussion);
    setCurrentChatId(chatId);
  };
  const onEditDiscussion = async discussionToEdit => {
    const newTitle = prompt('Enter a new title for the discussion:', discussionToEdit.title || '');
    if (newTitle === null) {
      // User cancelled the prompt
      return;
    }
    const trimmedTitle = newTitle.trim();
    if (trimmedTitle === '') {
      alert('Title cannot be empty.');
      return;
    }
    try {
      setBusy(true);
      const body = {
        chatId: discussionToEdit.chatId,
        title: trimmedTitle
      };
      const handleTokenUpdate = newToken => {
        setRestNonce(newToken);
        restNonceRef.current = newToken;
        _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(newToken); // Update globally
      };
      const response = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiFetch)(`${restUrl}/mwai-ui/v1/discussions/edit`, body, restNonceRef.current, false, undefined, handleTokenUpdate);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiHandleRes)(response, null, debugMode ? "DISCUSSIONS" : null, handleTokenUpdate, debugMode);
      if (!data.success) {
        throw new Error(`Could not update the discussion: ${data.message}`);
      }

      // Update the discussions state
      setDiscussions(prevDiscussions => prevDiscussions.map(disc => disc.chatId === discussionToEdit.chatId ? {
        ...disc,
        title: trimmedTitle
      } : disc));
    } catch (err) {
      console.error(err);
      alert('An error occurred while updating the discussion.');
    } finally {
      setBusy(false);
    }
  };
  const onDeleteDiscussion = async discussionToDelete => {
    const confirmed = confirm('Are you sure you want to delete this discussion?');
    if (!confirmed) {
      return;
    }
    try {
      setBusy(true);
      const body = {
        chatIds: [discussionToDelete.chatId]
      };
      const handleTokenUpdate = newToken => {
        setRestNonce(newToken);
        restNonceRef.current = newToken;
        _app_helpers_tokenManager__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(newToken); // Update globally
      };
      const response = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiFetch)(`${restUrl}/mwai-ui/v1/discussions/delete`, body, restNonceRef.current, false, undefined, handleTokenUpdate);
      const data = await (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.mwaiHandleRes)(response, null, debugMode ? "DISCUSSIONS" : null, handleTokenUpdate, debugMode);
      if (!data.success) {
        throw new Error(`Could not delete the discussion: ${data.message}`);
      }

      // Update the discussions state
      setDiscussions(prevDiscussions => prevDiscussions.filter(disc => disc.chatId !== discussionToDelete.chatId));

      // If the deleted discussion was selected, deselect it
      if ((discussion === null || discussion === void 0 ? void 0 : discussion.chatId) === discussionToDelete.chatId) {
        setDiscussion(null);
        setCurrentChatId(null);
      }

      // Check if this was the last item on the current page
      if (discussions.length === 1 && currentPage > 0) {
        // Go back to previous page
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        refresh(false, newPage, true);
      } else {
        // Refresh current page to update the list
        refresh(false, currentPage, true);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while deleting the discussion.');
    } finally {
      setBusy(false);
    }
  };
  const onNewChatClick = async () => {
    // Don't add the new chat to the discussions list
    // Just clear the current discussion and let it be created when the first message is sent
    const chatbot = getChatbot(botId);
    const newChatId = (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.randomStr)();
    chatbot.clear({
      chatId: newChatId
    });

    // Set discussion to null but track the chatId
    setDiscussion(null);
    setCurrentChatId(newChatId);
  };
  const actions = {
    onDiscussionClick,
    onNewChatClick,
    onEditDiscussion,
    onDeleteDiscussion,
    refresh,
    setCurrentPage
  };
  const state = {
    botId,
    pluginUrl,
    busy,
    setBusy,
    cssVariables,
    discussions,
    discussion,
    theme,
    hasEmptyDiscussion,
    currentPage,
    totalCount,
    system,
    paginationBusy
  };
  return /*#__PURE__*/React.createElement(DiscussionsContext.Provider, {
    value: {
      state,
      actions
    }
  }, children);
};

/***/ }),

/***/ "./app/js/chatbot/DiscussionsSystem.js":
/*!*********************************************!*\
  !*** ./app/js/chatbot/DiscussionsSystem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_DiscussionsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/DiscussionsContext */ "./app/js/chatbot/DiscussionsContext.js");
/* harmony import */ var _app_chatbot_DiscussionsUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/DiscussionsUI */ "./app/js/chatbot/DiscussionsUI.js");


const DiscussionsSystem = props => {
  return /*#__PURE__*/React.createElement(_app_chatbot_DiscussionsContext__WEBPACK_IMPORTED_MODULE_0__.DiscussionsContextProvider, props, /*#__PURE__*/React.createElement(_app_chatbot_DiscussionsUI__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscussionsSystem);

/***/ }),

/***/ "./app/js/chatbot/DiscussionsUI.js":
/*!*****************************************!*\
  !*** ./app/js/chatbot/DiscussionsUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/clock.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/message-square.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _app_chatbot_DiscussionsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/chatbot/DiscussionsContext */ "./app/js/chatbot/DiscussionsContext.js");
/* harmony import */ var _app_components_ContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/ContextMenu */ "./app/js/components/ContextMenu.js");
/* harmony import */ var _app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/chatbot/MwaiAPI */ "./app/js/chatbot/MwaiAPI.js");
// React & Vendor Libs
const {
  useMemo,
  useEffect,
  useState,
  useCallback,
  useRef
} = wp.element;






// Translatable strings - fallback for when wp.i18n is not available (frontend)
const __ = text => {
  // If wp.i18n is available (admin context), use it
  if (typeof wp !== 'undefined' && wp.i18n && wp.i18n.__) {
    return wp.i18n.__(text, 'ai-engine');
  }
  // Otherwise return the default English text
  return text;
};
const discussionStrings = {
  NEW_CHAT: __('New Chat'),
  NO_MESSAGES_YET: __('No messages yet'),
  RENAME: __('Rename'),
  DELETE: __('Delete')
};
const Discussion = ({
  discussion,
  onClick = () => {},
  selected = false,
  onEdit = () => {},
  onDelete = () => {},
  theme,
  system
}) => {
  var _system$metadata, _discussion$metadata_, _discussion$metadata_2, _discussion$metadata_3;
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const messages = discussion.messages;
  const message = messages[messages.length - 1];
  const preview = useMemo(() => {
    if (discussion.title) {
      return discussion.title;
    }
    const messageText = (message === null || message === void 0 ? void 0 : message.content.length) > 64 ? message.content.substring(0, 64) + '...' : message.content;
    return messageText || discussionStrings.NO_MESSAGES_YET;
  }, [discussion, message]);
  const baseClasses = css('mwai-discussion', {
    'mwai-active': selected
  });
  const onMenuClick = useCallback(e => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  }, [menuOpen]);
  const onRenameClick = useCallback(() => {
    setMenuOpen(false);
    onEdit(discussion);
  }, [discussion, onEdit]);
  const onDeleteClick = useCallback(() => {
    setMenuOpen(false);
    onDelete(discussion);
  }, [discussion, onDelete]);

  // Don't memoize menuItems so filters are applied on every menu open
  const menuItems = (() => {
    const defaultItems = [{
      id: 'rename',
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"],
      label: discussionStrings.RENAME,
      onClick: onRenameClick,
      className: 'mwai-menu-item'
    }, {
      id: 'delete',
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
      label: discussionStrings.DELETE,
      onClick: onDeleteClick,
      className: 'mwai-menu-item mwai-danger'
    }];
    return (0,_app_chatbot_MwaiAPI__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('mwai_discussion_menu_items', defaultItems, discussion);
  })();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    className: baseClasses,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: css('mwai-discussion-content')
  }, /*#__PURE__*/React.createElement("span", {
    className: css('mwai-discussion-title')
  }, preview), (system === null || system === void 0 || (_system$metadata = system.metadata) === null || _system$metadata === void 0 ? void 0 : _system$metadata.enabled) && /*#__PURE__*/React.createElement("div", {
    className: css('mwai-discussion-info')
  }, system.metadata.startDate && /*#__PURE__*/React.createElement("span", {
    className: css('mwai-info-item')
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, ((_discussion$metadata_ = discussion.metadata_display) === null || _discussion$metadata_ === void 0 ? void 0 : _discussion$metadata_.start_date) || discussion.created)), system.metadata.lastUpdate && /*#__PURE__*/React.createElement("span", {
    className: css('mwai-info-item')
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, ((_discussion$metadata_2 = discussion.metadata_display) === null || _discussion$metadata_2 === void 0 ? void 0 : _discussion$metadata_2.last_update) || discussion.updated)), system.metadata.messageCount && /*#__PURE__*/React.createElement("span", {
    className: css('mwai-info-item')
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, ((_discussion$metadata_3 = discussion.metadata_display) === null || _discussion$metadata_3 === void 0 ? void 0 : _discussion$metadata_3.message_count) || messages.length)))), /*#__PURE__*/React.createElement("div", {
    className: css('mwai-discussion-actions')
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuButtonRef,
    className: css('mwai-menu-icon'),
    onClick: onMenuClick
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 18
  })))), /*#__PURE__*/React.createElement(_app_components_ContextMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: menuOpen,
    anchorEl: menuButtonRef.current,
    onClose: () => setMenuOpen(false),
    menuItems: menuItems,
    theme: theme,
    context: discussion
  }));
};
const DiscussionsUI = props => {
  const {
    theme,
    style,
    params
  } = props;
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const themeStyle = useMemo(() => {
    // For custom themes (type: 'css'), use the style property
    if ((theme === null || theme === void 0 ? void 0 : theme.type) === 'css') {
      return (theme === null || theme === void 0 ? void 0 : theme.style) || null;
    }
    // For internal themes, use customCSS if available
    if (theme !== null && theme !== void 0 && theme.customCSS) {
      return theme.customCSS;
    }
    return null;
  }, [theme]);
  const {
    state,
    actions
  } = (0,_app_chatbot_DiscussionsContext__WEBPACK_IMPORTED_MODULE_9__.useDiscussionsContext)();
  const {
    botId,
    cssVariables,
    discussions,
    discussion,
    busy,
    hasEmptyDiscussion,
    currentPage,
    totalCount,
    system,
    paginationBusy
  } = state;
  const {
    onDiscussionClick,
    onNewChatClick,
    onEditDiscussion,
    onDeleteDiscussion,
    refresh,
    setCurrentPage
  } = actions;
  const {
    textNewChat
  } = params;
  useEffect(() => {
    // Prepare the API
    // mwaiAPI.open = () => setOpen(true);
    // mwaiAPI.close = () => setOpen(false);
    // mwaiAPI.toggle = () => setOpen(!open);
  });
  const baseClasses = css('mwai-discussions', {
    [`mwai-${theme === null || theme === void 0 ? void 0 : theme.themeId}-theme`]: true
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: `mwai-discussions-${botId}`,
    className: baseClasses,
    style: {
      ...cssVariables,
      ...style
    }
  }, themeStyle && /*#__PURE__*/React.createElement("style", null, themeStyle), /*#__PURE__*/React.createElement("div", {
    className: css('mwai-header')
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNewChatClick(),
    disabled: busy || hasEmptyDiscussion
  }, /*#__PURE__*/React.createElement("span", null, textNewChat ?? discussionStrings.NEW_CHAT)), (system === null || system === void 0 ? void 0 : system.refreshInterval) === -1 && /*#__PURE__*/React.createElement("button", {
    className: css('mwai-refresh-btn'),
    onClick: () => refresh(),
    disabled: busy
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: css('mwai-content'),
    style: {
      position: 'relative'
    }
  }, paginationBusy && /*#__PURE__*/React.createElement("div", {
    className: css('mwai-loading-overlay')
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: 24,
    className: css('mwai-spinner')
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, discussions.map(x => /*#__PURE__*/React.createElement(Discussion, {
    key: x.id,
    discussion: x,
    selected: (discussion === null || discussion === void 0 ? void 0 : discussion.id) === x.id,
    onClick: () => onDiscussionClick(x.chatId),
    onEdit: onEditDiscussion,
    onDelete: onDeleteDiscussion,
    theme: theme,
    system: system
  })))), (system === null || system === void 0 ? void 0 : system.paging) > 0 && totalCount > system.paging && /*#__PURE__*/React.createElement("div", {
    className: css('mwai-pagination')
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      refresh(false, newPage, true);
    },
    disabled: currentPage === 0 || busy || paginationBusy
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: css('mwai-page-indicator')
  }, `Page ${currentPage + 1} of ${Math.ceil(totalCount / system.paging)}`), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      refresh(false, newPage, true);
    },
    disabled: currentPage >= Math.ceil(totalCount / system.paging) - 1 || busy || paginationBusy
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: 16
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscussionsUI);

/***/ }),

/***/ "./app/js/chatbot/ErrorReplyActions.js":
/*!*********************************************!*\
  !*** ./app/js/chatbot/ErrorReplyActions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");


const {
  useState
} = wp.element;
const svgPathCopy = '<path d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" />';
const svgPathSuccess = '<path d="M10.7673 18C10.3106 18 9.86749 17.8046 9.54432 17.4555L5.50694 13.1222C4.83102 12.3968 4.83102 11.2208 5.50694 10.4954C6.18287 9.76997 7.27871 9.76997 7.95505 10.4954L10.6794 13.4196L16.9621 5.63976C17.5874 4.86495 18.6832 4.78289 19.4031 5.45388C20.125 6.12487 20.2036 7.29638 19.5759 8.07391L12.0778 17.3589C11.7639 17.7475 11.3119 17.9801 10.8319 18C10.8087 18 10.788 18 10.7673 18Z" />';
const svgPathError = '<path d="M17.7623 17.7626C17.0831 18.4418 15.9549 18.416 15.244 17.705L5.79906 8.26012C5.08811 7.54917 5.0623 6.42098 5.74145 5.74183C6.4206 5.06267 7.54879 5.08849 8.25975 5.79944L17.7047 15.2443C18.4156 15.9553 18.4414 17.0835 17.7623 17.7626Z" /><path d="M17.5508 8.52848L8.52842 17.5509C7.84927 18.23 6.72108 18.2042 6.01012 17.4933C5.29917 16.7823 5.27336 15.6541 5.95251 14.975L14.9749 5.95257C15.6541 5.27342 16.7823 5.29923 17.4932 6.01019C18.2042 6.72114 18.23 7.84933 17.5508 8.52848Z" />';
const svgPathRetry = '<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>';
const svgPathDelete = '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>';
const ErrorReplyActions = ({
  enabled,
  content,
  children,
  className,
  message,
  ...rest
}) => {
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const {
    actions,
    state
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_1__.useChatbotContext)();
  const {
    setMessages,
    saveMessages,
    retryLastQuery
  } = actions;
  const {
    messages
  } = state;
  const [copyStatus, setCopyStatus] = useState('idle');

  // Check if this error is the last message
  const isLastMessage = messages.length > 0 && messages[messages.length - 1].id === message.id;
  const onCopy = () => {
    try {
      navigator.clipboard.writeText(content);
      setCopyStatus('success');
    } catch (err) {
      setCopyStatus('error');
      console.warn('Not allowed to copy to clipboard. Make sure your website uses HTTPS.', {
        content
      });
    } finally {
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    }
  };
  const onDelete = () => {
    setMessages(prevMessages => {
      // Find the index of the error message
      const errorIndex = prevMessages.findIndex(msg => msg.id === message.id);
      let updatedMessages;
      if (errorIndex > 0) {
        // Remove both the error and the previous message (which caused the error)
        updatedMessages = prevMessages.filter((msg, index) => index !== errorIndex && index !== errorIndex - 1);
      } else {
        // If error is first message or not found, just remove the error
        updatedMessages = prevMessages.filter(msg => msg.id !== message.id);
      }
      // Save to localStorage
      saveMessages(updatedMessages);
      return updatedMessages;
    });
  };
  const onRetry = () => {
    if (message.failedQuery && retryLastQuery) {
      setMessages(prevMessages => {
        // Find the index of the error message
        const errorIndex = prevMessages.findIndex(msg => msg.id === message.id);
        let updatedMessages;
        if (errorIndex > 0) {
          // Remove both the error and the previous message
          updatedMessages = prevMessages.filter((msg, index) => index !== errorIndex && index !== errorIndex - 1);
        } else {
          // If error is first message or not found, just remove the error
          updatedMessages = prevMessages.filter(msg => msg.id !== message.id);
        }
        // Save to localStorage
        saveMessages(updatedMessages);
        return updatedMessages;
      });

      // Now retry the query
      retryLastQuery();
    }
  };
  const svgPath = copyStatus === 'success' ? svgPathSuccess : copyStatus === 'error' ? svgPathError : svgPathCopy;
  return /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement("span", {
    className: className
  }, children), /*#__PURE__*/React.createElement("div", {
    className: css('mwai-reply-actions')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwai-copy-button",
    onClick: onCopy,
    title: "Copy"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    dangerouslySetInnerHTML: {
      __html: svgPath
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mwai-action-button",
    onClick: onDelete,
    title: "Delete"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    dangerouslySetInnerHTML: {
      __html: svgPathDelete
    }
  })), message.failedQuery && isLastMessage && /*#__PURE__*/React.createElement("div", {
    className: "mwai-action-button",
    onClick: onRetry,
    title: "Retry"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    dangerouslySetInnerHTML: {
      __html: svgPathRetry
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorReplyActions);

/***/ }),

/***/ "./app/js/chatbot/MwaiAPI.js":
/*!***********************************!*\
  !*** ./app/js/chatbot/MwaiAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAction: () => (/* binding */ addAction),
/* harmony export */   addFilter: () => (/* binding */ addFilter),
/* harmony export */   applyFilters: () => (/* binding */ applyFilters),
/* harmony export */   doAction: () => (/* binding */ doAction),
/* harmony export */   mwaiAPI: () => (/* binding */ mwaiAPI)
/* harmony export */ });
class MwaiAPI {
  constructor() {
    if (typeof window !== 'undefined' && window.MwaiAPI) {
      return window.MwaiAPI;
    }
    this.chatbots = [];
    this.forms = [];
    this.filters = {};
    this.actions = {};
    if (typeof window !== 'undefined') {
      window.MwaiAPI = this;
    }
  }
  getChatbot(botId = null) {
    if (!botId) {
      return this.chatbots[0];
    }
    return this.chatbots.find(x => x.botId === botId || x.customId === botId);
  }
  getForm(formId = null) {
    if (!formId) {
      return this.forms[0];
    }
    return this.forms.find(f => f.formId === formId);
  }
  addFilter(tag, callback, priority = 10) {
    if (!this.filters[tag]) {
      this.filters[tag] = [];
    }
    this.filters[tag].push({
      callback,
      priority
    });
    this.filters[tag].sort((a, b) => a.priority - b.priority);
  }
  applyFilters(tag, value, ...args) {
    if (!this.filters[tag]) {
      return value;
    }
    return this.filters[tag].reduce((acc, filter) => {
      return filter.callback(acc, ...args);
    }, value);
  }
  addAction(tag, callback, priority = 10) {
    if (!this.actions[tag]) {
      this.actions[tag] = [];
    }
    this.actions[tag].push({
      callback,
      priority
    });
    this.actions[tag].sort((a, b) => a.priority - b.priority);
  }
  doAction(tag, ...args) {
    if (!this.actions[tag]) {
      return;
    }
    this.actions[tag].forEach(action => {
      action.callback(...args);
    });
  }
  clearCookies() {
    // Clear GDPR cookie
    document.cookie = "mwai_gdpr_accepted=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Clear any other AI Engine cookies
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const [name] = cookie.trim().split('=');
      if (name.startsWith('mwai_')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      }
    });
  }
}

// Ensure the class is only initialized once
const getInstance = () => {
  if (typeof window !== 'undefined' && window.MwaiAPI) {
    return window.MwaiAPI;
  }
  const instance = new MwaiAPI();
  if (typeof window !== 'undefined') {
    window.MwaiAPI = instance;
  }
  return instance;
};
const mwaiAPI = getInstance();
const addFilter = (tag, callback, priority = 10) => {
  mwaiAPI.addFilter(tag, callback, priority);
};
const applyFilters = (tag, value, ...args) => {
  return mwaiAPI.applyFilters(tag, value, ...args);
};
const addAction = (tag, callback, priority = 10) => {
  mwaiAPI.addAction(tag, callback, priority);
};
const doAction = (tag, ...args) => {
  mwaiAPI.doAction(tag, ...args);
};


/***/ }),

/***/ "./app/js/chatbot/MwaiFiles.js":
/*!*************************************!*\
  !*** ./app/js/chatbot/MwaiFiles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
const {
  useMemo
} = wp.element;


const MwaiFiles = () => {
  const {
    state,
    actions
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    uploadedFiles,
    multiUpload
  } = state;
  const {
    removeUploadedFile
  } = actions;

  // Don't render if multiUpload is disabled or no files uploaded
  if (!multiUpload || uploadedFiles.length === 0) {
    return null;
  }
  const renderFilePreview = (file, index) => {
    var _file$localFile, _file$localFile2, _file$localFile3;
    const isImage = (_file$localFile = file.localFile) === null || _file$localFile === void 0 || (_file$localFile = _file$localFile.type) === null || _file$localFile === void 0 ? void 0 : _file$localFile.startsWith('image/');
    const fileName = ((_file$localFile2 = file.localFile) === null || _file$localFile2 === void 0 ? void 0 : _file$localFile2.name) || 'Unknown file';
    const fileSize = (_file$localFile3 = file.localFile) !== null && _file$localFile3 !== void 0 && _file$localFile3.size ? `${Math.round(file.localFile.size / 1024)}KB` : '';
    return /*#__PURE__*/React.createElement("div", {
      key: file.tempId || index,
      className: "mwai-file-preview"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-content"
    }, isImage && file.uploadedUrl ? /*#__PURE__*/React.createElement("img", {
      src: file.uploadedUrl,
      alt: fileName,
      className: "mwai-file-thumbnail"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-icon"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-name"
    }, fileName), fileSize && /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-size"
    }, fileSize)), file.uploadProgress !== null && file.uploadProgress < 100 ? /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-progress"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwai-file-progress-bar",
      style: {
        width: `${file.uploadProgress}%`
      }
    })) : /*#__PURE__*/React.createElement("button", {
      className: "mwai-file-remove",
      onClick: () => removeUploadedFile(index),
      "aria-label": "Remove file"
    }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: 20
    }))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mwai-files"
  }, uploadedFiles.map((file, index) => renderFilePreview(file, index)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MwaiFiles);

/***/ }),

/***/ "./app/js/chatbot/components/ComponentRegistry.js":
/*!********************************************************!*\
  !*** ./app/js/chatbot/components/ComponentRegistry.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentRegistry: () => (/* binding */ ComponentRegistry),
/* harmony export */   componentPresets: () => (/* binding */ componentPresets),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var _headers_StandardHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers/StandardHeader */ "./app/js/chatbot/components/headers/StandardHeader.js");
/* harmony import */ var _headers_OSXHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headers/OSXHeader */ "./app/js/chatbot/components/headers/OSXHeader.js");
/* harmony import */ var _messages_StandardMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/StandardMessages */ "./app/js/chatbot/components/messages/StandardMessages.js");
/* harmony import */ var _messages_TerminalMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/TerminalMessages */ "./app/js/chatbot/components/messages/TerminalMessages.js");
/* harmony import */ var _input_StandardInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/StandardInput */ "./app/js/chatbot/components/input/StandardInput.js");
/**
 * Component Registry
 * 
 * This file manages the modular components for the chatbot UI.
 * Containers are handled via CSS classes, while headers, messages, and input are React components.
 */

// Header Components



// Messages Components



// Input Components


// Component Registry
const ComponentRegistry = {
  headers: {
    standard: _headers_StandardHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    osx: _headers_OSXHeader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  messages: {
    standard: _messages_StandardMessages__WEBPACK_IMPORTED_MODULE_2__["default"],
    terminal: _messages_TerminalMessages__WEBPACK_IMPORTED_MODULE_3__["default"] // (Beta)
  },
  input: {
    standard: _input_StandardInput__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
  // footers will be added here when implemented
};

// Component Presets for UI Builder
const componentPresets = {
  'Standard': {
    container: 'standard',
    header: 'standard',
    messages: 'standard',
    input: 'standard',
    footer: 'standard'
  },
  'MacOS': {
    container: 'osx',
    header: 'osx',
    messages: 'standard',
    input: 'standard',
    footer: 'standard'
  }
};

/**
 * Get a component from the registry
 * @param {string} type - Component type (headers, content, footers)
 * @param {string} name - Component name (standard, osx, terminal)
 * @returns {React.Component|null} The component or null if not found
 */
const getComponent = (type, name) => {
  if (!ComponentRegistry[type] || !ComponentRegistry[type][name]) {
    console.warn(`Component ${type}/${name} not found`);
    return null;
  }
  return ComponentRegistry[type][name];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentRegistry);

/***/ }),

/***/ "./app/js/chatbot/components/headers/OSXHeader.js":
/*!********************************************************!*\
  !*** ./app/js/chatbot/components/headers/OSXHeader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * OSXHeader Component
 * 
 * MacOS-style header with traffic light buttons (red, yellow, green).
 * - Red (close) and Yellow (minimize) both close/minimize the chatbot
 * - Green (maximize) toggles between windowed and fullscreen when chatbot is open
 * Visual: compact bar intended to sit above theme headers (e.g., Timeless big header).
 * Maintenance: if the macOS header visuals change, also update the injected CSS
 * in ChatbotUI for `.mwai-header-osx` so behavior and documentation stay aligned.
 */

const OSXHeader = ({
  title,
  onClose,
  onMinimize,
  onMaximize,
  theme,
  showResize,
  children,
  onDragStart
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-header mwai-header-osx",
    role: "toolbar",
    "aria-label": "Chat header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-osx-bar",
    onMouseDown: onDragStart
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-osx-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mwai-osx-close",
    onClick: onClose,
    "aria-label": "Close",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "mwai-lucide-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 6l12 12"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mwai-osx-minimize",
    onClick: onMinimize || onClose,
    "aria-label": "Minimize",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "mwai-lucide-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M5 12h14"
  }))), showResize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mwai-osx-maximize",
    onClick: onMaximize,
    "aria-label": "Maximize",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "mwai-lucide-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 21H3v-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21 3l-7 7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M3 21l7-7"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-osx-title"
  }, title)), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-osx-content"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OSXHeader);

/***/ }),

/***/ "./app/js/chatbot/components/headers/StandardHeader.js":
/*!*************************************************************!*\
  !*** ./app/js/chatbot/components/headers/StandardHeader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/**
 * StandardHeader Component
 *
 * Visual: simple title row with action buttons on the right.
 * Used when `headerType === 'standard'`.
 * In Timeless, the theme also renders a larger header section below/around this.
 * Maintenance: if the design or sizing of headers changes, update this description
 * and ensure styles remain consistent with theme expectations.
 */


const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  .mwai-standard-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: var(--mwai-backgroundPrimaryColor);
    border-bottom: 1px solid var(--mwai-borderColor);
    
    .mwai-buttons {
      display: flex;
      gap: 8px;
      margin-left: auto;
      
      .mwai-resize-button,
      .mwai-close-button {
        width: 20px;
        height: 20px;
        cursor: pointer;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.6;
        transition: opacity 0.2s;
        
        &:hover {
          opacity: 1;
        }
      }
      
      .mwai-resize-button {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>');
      }
      
      .mwai-close-button {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>');
      }
    }
  }
`;
const StandardHeader = ({
  title,
  onResize,
  onClose,
  showResize = false
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-modular-header mwai-standard-header"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-buttons"
  }, showResize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-resize-button",
    onClick: onResize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mwai-close-button",
    onClick: onClose
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardHeader);

/***/ }),

/***/ "./app/js/chatbot/components/input/StandardInput.js":
/*!**********************************************************!*\
  !*** ./app/js/chatbot/components/input/StandardInput.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ChatbotInput */ "./app/js/chatbot/ChatbotInput.js");
/* harmony import */ var _ChatbotSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ChatbotSubmit */ "./app/js/chatbot/ChatbotSubmit.js");
/**
 * StandardInput Component
 *
 * Visual: text area with tools and a submit button on the right.
 * Used when `inputType === 'standard'`. Button may be an icon or text per theme.
 * Maintenance: if input layout or button behavior changes, update this note and
 * check theme CSS (e.g., Timeless protruding button) for alignment.
 */


const StandardInput = ({
  inputClassNames,
  chatbotInputRef,
  handleDrop,
  handleDrag
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: inputClassNames,
    onClick: () => {
      var _chatbotInputRef$curr;
      return (_chatbotInputRef$curr = chatbotInputRef.current) === null || _chatbotInputRef$curr === void 0 ? void 0 : _chatbotInputRef$curr.focusInput();
    },
    onDrop: handleDrop,
    onDragEnter: event => handleDrag(event, true),
    onDragLeave: event => handleDrag(event, false),
    onDragOver: event => handleDrag(event, true)
  }, /*#__PURE__*/React.createElement(_ChatbotInput__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_ChatbotSubmit__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardInput);

/***/ }),

/***/ "./app/js/chatbot/components/messages/StandardMessages.js":
/*!****************************************************************!*\
  !*** ./app/js/chatbot/components/messages/StandardMessages.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatbotReply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ChatbotReply */ "./app/js/chatbot/ChatbotReply.js");
/**
 * StandardMessages Component
 *
 * Visual: scrollable message list with optional shortcuts and blocks inside the scroll area.
 * Used when `messagesType === 'standard'`.
 * Maintenance: if the messages container styling changes, ensure theme CSS
 * for `.mwai-conversation` and scrollbar tweaks are kept in sync.
 */
const {
  useRef,
  useEffect
} = wp.element;

const StandardMessages = ({
  messages,
  conversationRef,
  onScroll,
  shortcuts,
  blocks
}) => {
  // Process messages
  const messageList = messages.map((message, index) => {
    return /*#__PURE__*/React.createElement(_ChatbotReply__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: index,
      message: message,
      conversationRef: conversationRef
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: conversationRef,
    className: "mwai-conversation",
    onScroll: onScroll
  }, messageList, shortcuts, blocks);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardMessages);

/***/ }),

/***/ "./app/js/chatbot/components/messages/TerminalMessages.js":
/*!****************************************************************!*\
  !*** ./app/js/chatbot/components/messages/TerminalMessages.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotContext */ "./app/js/chatbot/ChatbotContext.js");
/* harmony import */ var _ChatbotContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ChatbotContent */ "./app/js/chatbot/ChatbotContent.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/**
 * TerminalMessages Component
 *
 * Visual: terminal-like, left-aligned lines with a prompt for user input.
 * Used when `messagesType === 'terminal'` (Beta).
 */
const {
  useMemo,
  useRef,
  useEffect,
  useImperativeHandle,
  useCallback,
  useState
} = wp.element;



const TerminalLine = ({
  children,
  role = 'assistant'
}) => {
  const roleClass = role === 'user' ? 'mwai-terminal-user' : role === 'system' ? 'mwai-terminal-system' : 'mwai-terminal-assistant';
  return /*#__PURE__*/React.createElement("div", {
    className: `mwai-terminal-line ${roleClass}`
  }, children);
};
const TerminalMessages = ({
  messages,
  conversationRef,
  onScroll /* shortcuts, blocks intentionally hidden for terminal */
}) => {
  const {
    state,
    actions
  } = (0,_app_chatbot_ChatbotContext__WEBPACK_IMPORTED_MODULE_0__.useChatbotContext)();
  const {
    inputText,
    textInputMaxLength,
    busy,
    locked,
    chatbotInputRef
  } = state;
  const {
    setInputText,
    onSubmitAction
  } = actions;
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);

  // Allow external focus calls to focus the conversation container (optional)
  useImperativeHandle(chatbotInputRef, () => ({
    focusInput: () => {
      var _conversationRef$curr, _conversationRef$curr2;
      conversationRef === null || conversationRef === void 0 || (_conversationRef$curr = conversationRef.current) === null || _conversationRef$curr === void 0 || (_conversationRef$curr2 = _conversationRef$curr.focus) === null || _conversationRef$curr2 === void 0 || _conversationRef$curr2.call(_conversationRef$curr);
    },
    currentElement: () => conversationRef === null || conversationRef === void 0 ? void 0 : conversationRef.current
  }));
  useEffect(() => {
    // Keep scroll at bottom
    if (conversationRef !== null && conversationRef !== void 0 && conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);
  const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1] : null;
  const isAssistantThinking = !!(lastMessage && lastMessage.role === 'assistant' && (lastMessage.isStreaming || lastMessage.isQuerying));
  const canType = !busy && !locked && !isAssistantThinking;
  const handleKeyDown = useCallback(event => {
    if (busy || locked || isAssistantThinking) {
      return; // ignore input when busy/locked
    }
    const isPrintable = event.key && event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;

    // Track typing activity for any input-related key
    if (isPrintable || event.key === 'Backspace' || event.key === 'Tab') {
      setIsTyping(true);

      // Clear existing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set new timeout to stop typing state after 250ms
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 250);
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmitAction();
      setIsTyping(false); // Stop typing immediately on submit
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      return;
    }
    if (event.key === 'Backspace') {
      event.preventDefault();
      setInputText(prev => prev ? prev.slice(0, -1) : '');
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      setInputText(prev => (prev || '') + '\t');
      return;
    }
    if (isPrintable) {
      event.preventDefault();
      setInputText(prev => {
        const next = (prev || '') + event.key;
        return textInputMaxLength ? next.slice(0, textInputMaxLength) : next;
      });
      return;
    }
    // Let navigation keys (arrows, home/end, page up/down) through for scrolling
  }, [busy, locked, isAssistantThinking, setInputText, onSubmitAction, textInputMaxLength]);
  const handlePaste = useCallback(event => {
    var _event$clipboardData;
    if (busy || locked) {
      return;
    }
    const text = ((_event$clipboardData = event.clipboardData) === null || _event$clipboardData === void 0 ? void 0 : _event$clipboardData.getData('text')) || '';
    if (text) {
      event.preventDefault();
      setInputText(prev => {
        const next = (prev || '') + text;
        return textInputMaxLength ? next.slice(0, textInputMaxLength) : next;
      });

      // Track typing for paste as well
      setIsTyping(true);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 250);
    }
  }, [busy, locked, setInputText, textInputMaxLength]);
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  // Remove this line as we'll use icons directly

  const rendered = useMemo(() => {
    return messages.map((msg, index) => {
      if (msg.role === 'user') {
        return /*#__PURE__*/React.createElement(TerminalLine, {
          key: index,
          role: "user"
        }, /*#__PURE__*/React.createElement("span", {
          className: "mwai-terminal-prompt"
        }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          size: 16
        })), /*#__PURE__*/React.createElement("span", {
          className: "mwai-terminal-text"
        }, msg.content));
      }
      if (msg.role === 'system') {
        return /*#__PURE__*/React.createElement(TerminalLine, {
          key: index,
          role: "system"
        }, /*#__PURE__*/React.createElement("span", {
          className: "mwai-terminal-text"
        }, "# ", msg.content));
      }

      // Assistant (default) — no icon, just the text
      return /*#__PURE__*/React.createElement(TerminalLine, {
        key: index,
        role: "assistant"
      }, /*#__PURE__*/React.createElement("span", {
        className: "mwai-terminal-text"
      }, /*#__PURE__*/React.createElement(_ChatbotContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: msg
      })));
    });
  }, [messages]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: conversationRef,
    className: "mwai-conversation mwai-terminal",
    tabIndex: 0,
    role: "textbox",
    "aria-label": "Terminal input",
    onKeyDown: handleKeyDown,
    onPaste: handlePaste,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: () => {
      var _conversationRef$curr3;
      return conversationRef === null || conversationRef === void 0 || (_conversationRef$curr3 = conversationRef.current) === null || _conversationRef$curr3 === void 0 ? void 0 : _conversationRef$curr3.focus();
    },
    onScroll: onScroll
  }, rendered, !isAssistantThinking && /*#__PURE__*/React.createElement("div", {
    className: "mwai-terminal-line mwai-terminal-user-typing"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mwai-terminal-prompt"
  }, /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "mwai-terminal-input-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mwai-terminal-typed"
  }, inputText), /*#__PURE__*/React.createElement("span", {
    className: `mwai-terminal-cursor ${isFocused && canType ? isTyping ? 'mwai-terminal-cursor-typing' : 'mwai-terminal-cursor-active' : 'mwai-terminal-cursor-inactive'}`
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TerminalMessages);

/***/ }),

/***/ "./app/js/chatbot/helpers.js":
/*!***********************************!*\
  !*** ./app/js/chatbot/helpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Microphone: () => (/* binding */ Microphone),
/* harmony export */   TransitionBlock: () => (/* binding */ TransitionBlock),
/* harmony export */   doPlaceholders: () => (/* binding */ doPlaceholders),
/* harmony export */   isURL: () => (/* binding */ isURL),
/* harmony export */   processParameters: () => (/* binding */ processParameters),
/* harmony export */   useChrono: () => (/* binding */ useChrono),
/* harmony export */   useClasses: () => (/* binding */ useClasses),
/* harmony export */   useInterval: () => (/* binding */ useInterval),
/* harmony export */   useSpeechRecognition: () => (/* binding */ useSpeechRecognition)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mic.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// React & Vendor Libs
const {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback
} = wp.element;

const Microphone = ({
  active,
  disabled,
  ...rest
}) => {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/no-unknown-property
    React.createElement("div", _extends({
      active: active ? "true" : "false",
      disabled: disabled
    }, rest), /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
      size: "24"
    }))
  );
};
function useInterval(delay, callback, enabled = true) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && enabled) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, enabled]);
}
const useClasses = () => {
  return useMemo(() => {
    return (classNames, conditionalClasses) => {
      if (!Array.isArray(classNames)) {
        classNames = [classNames];
      }
      if (conditionalClasses) {
        Object.entries(conditionalClasses).forEach(([className, condition]) => {
          if (condition) {
            classNames.push(className);
          }
        });
      }
      return classNames.join(' ');
    };
  }, []);
};
function isURL(url) {
  if (!url || typeof url !== 'string') return false;
  return url.indexOf('http') === 0;
}
function useChrono() {
  const [timeElapsed, setTimeElapsed] = useState(null);
  const intervalIdRef = useRef(null);
  function startChrono() {
    if (intervalIdRef.current !== null) return;
    const startTime = Date.now();
    // Show an immediate 0:00 on start to avoid initial blank state
    setTimeElapsed(formatTime(0));
    intervalIdRef.current = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      setTimeElapsed(formatTime(elapsedSeconds));
    }, 500);
  }
  function stopChrono() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTimeElapsed(null);
  }
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);
  return {
    timeElapsed,
    startChrono,
    stopChrono
  };
}
const doPlaceholders = (text, placeholders) => {
  if (typeof text !== 'string' || !placeholders) {
    return text;
  }
  Object.entries(placeholders).forEach(([key, value]) => {
    text = text.replace(new RegExp(`{${key}}`, 'g'), value);
  });
  return text;
};
const processParameters = (params, placeholders = []) => {
  var _params$guestName, _params$textSend, _params$textClear, _params$textInputPlac, _params$textComplianc, _params$icon, _params$iconText, _params$iconAlt, _params$iconPosition, _params$width, _params$windowAnimati, _params$aiName, _params$userName, _params$aiAvatarUrl, _params$userAvatarUrl, _params$guestAvatarUr, _params$allowedMimeTy, _params$mode;
  const guestName = ((_params$guestName = params.guestName) === null || _params$guestName === void 0 ? void 0 : _params$guestName.trim()) ?? "";
  const textSend = ((_params$textSend = params.textSend) === null || _params$textSend === void 0 ? void 0 : _params$textSend.trim()) ?? "";
  const textClear = ((_params$textClear = params.textClear) === null || _params$textClear === void 0 ? void 0 : _params$textClear.trim()) ?? "";
  const textInputMaxLength = parseInt(params.textInputMaxLength);
  const textInputPlaceholder = ((_params$textInputPlac = params.textInputPlaceholder) === null || _params$textInputPlac === void 0 ? void 0 : _params$textInputPlac.trim()) ?? "";
  let textCompliance = ((_params$textComplianc = params.textCompliance) === null || _params$textComplianc === void 0 ? void 0 : _params$textComplianc.trim()) ?? "";
  let headerSubtitle = "";
  let popupTitle = "";
  const window = Boolean(params.window);
  const copyButton = Boolean(params.copyButton);
  const fullscreen = Boolean(params.fullscreen);
  const icon = ((_params$icon = params.icon) === null || _params$icon === void 0 ? void 0 : _params$icon.trim()) ?? "";
  let iconText = ((_params$iconText = params.iconText) === null || _params$iconText === void 0 ? void 0 : _params$iconText.trim()) ?? "";
  const iconTextDelay = parseInt(params.iconTextDelay || 1);
  const iconAlt = ((_params$iconAlt = params.iconAlt) === null || _params$iconAlt === void 0 ? void 0 : _params$iconAlt.trim()) ?? "";
  const iconPosition = ((_params$iconPosition = params.iconPosition) === null || _params$iconPosition === void 0 ? void 0 : _params$iconPosition.trim()) ?? "";
  const centerOpen = Boolean(params.centerOpen);
  const width = ((_params$width = params.width) === null || _params$width === void 0 ? void 0 : _params$width.trim()) ?? "";
  const openDelay = params.openDelay ? parseInt(params.openDelay) : null;
  const iconBubble = Boolean(params.iconBubble);
  const windowAnimation = ((_params$windowAnimati = params.windowAnimation) === null || _params$windowAnimati === void 0 ? void 0 : _params$windowAnimati.trim()) ?? "zoom";
  const aiName = ((_params$aiName = params.aiName) === null || _params$aiName === void 0 ? void 0 : _params$aiName.trim()) ?? "";
  const userName = ((_params$userName = params.userName) === null || _params$userName === void 0 ? void 0 : _params$userName.trim()) ?? "";
  const aiAvatar = Boolean(params === null || params === void 0 ? void 0 : params.aiAvatar);
  const userAvatar = Boolean(params === null || params === void 0 ? void 0 : params.userAvatar);
  const guestAvatar = Boolean(params === null || params === void 0 ? void 0 : params.guestAvatar);
  const aiAvatarUrl = aiAvatar ? (params === null || params === void 0 || (_params$aiAvatarUrl = params.aiAvatarUrl) === null || _params$aiAvatarUrl === void 0 ? void 0 : _params$aiAvatarUrl.trim()) ?? "" : null;
  const userAvatarUrl = userAvatar ? (params === null || params === void 0 || (_params$userAvatarUrl = params.userAvatarUrl) === null || _params$userAvatarUrl === void 0 ? void 0 : _params$userAvatarUrl.trim()) ?? "" : null;
  const guestAvatarUrl = guestAvatar ? (params === null || params === void 0 || (_params$guestAvatarUr = params.guestAvatarUrl) === null || _params$guestAvatarUr === void 0 ? void 0 : _params$guestAvatarUr.trim()) ?? "" : null;
  const localMemory = Boolean(params.localMemory);
  const fileUpload = Boolean(params.fileUpload || params.imageUpload); // Keep imageUpload for backward compatibility
  const multiUpload = Boolean(params.multiUpload);
  const maxUploads = params.maxUploads ? parseInt(params.maxUploads) : 1;
  const fileSearch = Boolean(params.fileSearch);
  const allowedMimeTypes = ((_params$allowedMimeTy = params.allowedMimeTypes) === null || _params$allowedMimeTy === void 0 ? void 0 : _params$allowedMimeTy.trim()) ?? "";
  const mode = ((_params$mode = params.mode) === null || _params$mode === void 0 ? void 0 : _params$mode.trim()) ?? "chat";
  if (params.headerSubtitle === null || params.headerSubtitle === undefined) {
    headerSubtitle = "Discuss with";
  } else {
    var _params$headerSubtitl;
    headerSubtitle = ((_params$headerSubtitl = params.headerSubtitle) === null || _params$headerSubtitl === void 0 ? void 0 : _params$headerSubtitl.trim()) ?? "";
  }

  // Popup title default
  if (params.popupTitle === null || params.popupTitle === undefined) {
    popupTitle = "AI Engine";
  } else {
    var _params$popupTitle;
    popupTitle = ((_params$popupTitle = params.popupTitle) === null || _params$popupTitle === void 0 ? void 0 : _params$popupTitle.trim()) ?? "";
  }

  // This is also executed on the PHP-side, but having this here allows for easier testing in the WP Admin
  if (placeholders) {
    textCompliance = doPlaceholders(textCompliance, placeholders);
    iconText = doPlaceholders(iconText, placeholders);
  }
  return {
    textSend,
    textClear,
    textInputMaxLength,
    textInputPlaceholder,
    textCompliance,
    mode,
    window,
    copyButton,
    fullscreen,
    localMemory,
    fileUpload,
    multiUpload,
    maxUploads,
    fileSearch,
    allowedMimeTypes,
    icon,
    iconText,
    iconTextDelay,
    iconAlt,
    iconPosition,
    centerOpen,
    width,
    openDelay,
    iconBubble,
    windowAnimation,
    headerSubtitle,
    popupTitle,
    aiName,
    userName,
    guestName,
    aiAvatar,
    userAvatar,
    guestAvatar,
    aiAvatarUrl,
    userAvatarUrl,
    guestAvatarUrl
  };
};
const isAndroid = () => {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
};
const useSpeechRecognition = onResult => {
  const [isListening, setIsListening] = useState(false);
  const [speechRecognitionAvailable, setSpeechRecognitionAvailable] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setSpeechRecognitionAvailable(true);
    }
  }, []);
  useEffect(() => {
    if (!speechRecognitionAvailable) {
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    let handleResult = null;
    if (!isAndroid()) {
      recognition.interimResults = true;
      recognition.continuous = true;
      handleResult = event => {
        const transcript = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
        onResult(transcript);
      };
    } else {
      recognition.interimResults = false;
      recognition.continuous = false;
      handleResult = event => {
        const finalTranscript = Array.from(event.results).filter(result => result.isFinal).map(result => result[0].transcript).join('');
        onResult(finalTranscript);
        setIsListening(false);
      };
    }
    if (isListening) {
      recognition.addEventListener('result', handleResult);
      recognition.start();
    } else {
      recognition.removeEventListener('result', handleResult);
      recognition.abort();
    }
    return () => {
      recognition.abort();
    };
  }, [isListening, speechRecognitionAvailable]);
  return {
    isListening,
    setIsListening,
    speechRecognitionAvailable
  };
};
const TransitionBlock = ({
  if: condition,
  className,
  disableTransition = false,
  children,
  ...rest
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('mwai-transition');
  useEffect(() => {
    if (disableTransition) {
      setShouldRender(condition);
    } else {
      if (condition) {
        setShouldRender(true);
        setTimeout(() => {
          setAnimationClass('mwai-transition mwai-transition-visible');
        }, 150);
      } else {
        setAnimationClass('mwai-transition');
      }
    }
  }, [condition, disableTransition]);
  const handleTransitionEnd = () => {
    if (animationClass === 'mwai-transition' && !disableTransition) {
      setShouldRender(false);
    }
  };
  return !shouldRender ? null : /*#__PURE__*/React.createElement("div", _extends({
    className: `${className} ${disableTransition ? '' : animationClass}`,
    onTransitionEnd: handleTransitionEnd
  }, rest), children);
};


/***/ }),

/***/ "./app/js/components/ContextMenu.js":
/*!******************************************!*\
  !*** ./app/js/components/ContextMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
// React & Vendor Libs
const {
  useEffect,
  useRef,
  useState
} = wp.element;


const ContextMenu = ({
  isOpen,
  anchorEl,
  onClose,
  menuItems = [],
  className = '',
  theme,
  context
}) => {
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_1__.useClasses)();
  const menuRef = useRef(null);
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  });
  useEffect(() => {
    if (isOpen && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      const menuWidth = 120; // Approximate menu width
      const menuHeight = 80; // Approximate menu height

      // Calculate position
      let top = rect.bottom + 4;
      let left = rect.right - menuWidth;

      // Adjust if menu would go off screen
      if (left < 0) left = rect.left;
      if (top + menuHeight > window.innerHeight) {
        top = rect.top - menuHeight - 4;
      }
      setPosition({
        top,
        left
      });
    }
  }, [isOpen, anchorEl]);
  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target) && anchorEl && !anchorEl.contains(event.target)) {
        onClose();
      }
    };
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose, anchorEl]);
  if (!isOpen) return null;
  const menuContent = /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    className: css('mwai-context-menu-portal', {
      [`mwai-${theme === null || theme === void 0 ? void 0 : theme.themeId}-theme`]: theme === null || theme === void 0 ? void 0 : theme.themeId
    }),
    style: {
      position: 'fixed',
      top: `${position.top}px`,
      left: `${position.left}px`,
      zIndex: 999999
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: css('mwai-context-menu'),
    style: {
      minWidth: '120px',
      overflow: 'hidden'
    }
  }, menuItems.map((item, index) => {
    // Handle separator
    if (item.type === 'separator') {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id || `separator-${index}`,
        className: css('mwai-menu-separator'),
        style: {
          height: '1px',
          margin: '4px 0',
          background: 'var(--mwai-backgroundPrimaryColor, rgba(0,0,0,0.1))'
        }
      });
    }

    // Handle title/header
    if (item.type === 'title') {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id || `title-${index}`,
        className: css('mwai-menu-title'),
        style: {
          padding: '8px 12px',
          fontSize: '11px',
          fontWeight: 'bold',
          opacity: 0.7,
          textTransform: 'uppercase'
        },
        dangerouslySetInnerHTML: item.html ? {
          __html: item.html
        } : undefined
      }, !item.html && item.label);
    }

    // Handle regular menu item
    if (item.html) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.id,
        className: css(item.className || 'mwai-menu-item'),
        onClick: () => {
          if (item.onClick) {
            item.onClick(context);
            onClose();
          }
        },
        style: item.style,
        dangerouslySetInnerHTML: {
          __html: item.html
        }
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: css(item.className || 'mwai-menu-item'),
      onClick: () => {
        if (item.onClick) {
          item.onClick(context);
          onClose();
        }
      },
      style: item.style
    }, item.icon && (() => {
      const IconComponent = item.icon;
      return /*#__PURE__*/React.createElement(IconComponent, {
        size: 14
      });
    })(), /*#__PURE__*/React.createElement("span", null, item.label));
  })));

  // Create portal to render at document body level
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(menuContent, document.body);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);

/***/ }),

/***/ "./app/js/components/ReplyActions.js":
/*!*******************************************!*\
  !*** ./app/js/components/ReplyActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/helpers */ "./app/js/chatbot/helpers.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  useState,
  useEffect,
  useRef,
  useCallback
} = wp.element;
const svgPathDefault = '<path d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" />';
const svgPathSuccess = '<path d="M10.7673 18C10.3106 18 9.86749 17.8046 9.54432 17.4555L5.50694 13.1222C4.83102 12.3968 4.83102 11.2208 5.50694 10.4954C6.18287 9.76997 7.27871 9.76997 7.95505 10.4954L10.6794 13.4196L16.9621 5.63976C17.5874 4.86495 18.6832 4.78289 19.4031 5.45388C20.125 6.12487 20.2036 7.29638 19.5759 8.07391L12.0778 17.3589C11.7639 17.7475 11.3119 17.9801 10.8319 18C10.8087 18 10.788 18 10.7673 18Z" />';
const svgPathError = '<path d="M17.7623 17.7626C17.0831 18.4418 15.9549 18.416 15.244 17.705L5.79906 8.26012C5.08811 7.54917 5.0623 6.42098 5.74145 5.74183C6.4206 5.06267 7.54879 5.08849 8.25975 5.79944L17.7047 15.2443C18.4156 15.9553 18.4414 17.0835 17.7623 17.7626Z" /><path d="M17.5508 8.52848L8.52842 17.5509C7.84927 18.23 6.72108 18.2042 6.01012 17.4933C5.29917 16.7823 5.27336 15.6541 5.95251 14.975L14.9749 5.95257C15.6541 5.27342 16.7823 5.29923 17.4932 6.01019C18.2042 6.72114 18.23 7.84933 17.5508 8.52848Z" />';
const svgPathDownload = '<path d="M12 2C11.4477 2 11 2.44772 11 3V12.5858L8.70711 10.2929C8.31658 9.90237 7.68342 9.90237 7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L16.7071 11.7071C17.0976 11.3166 17.0976 10.6834 16.7071 10.2929C16.3166 9.90237 15.6834 9.90237 15.2929 10.2929L13 12.5858V3C13 2.44772 12.5523 2 12 2Z"/><path d="M5 17C4.44772 17 4 17.4477 4 18V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V18C20 17.4477 19.5523 17 19 17C18.4477 17 18 17.4477 18 18V19H6V18C6 17.4477 5.55228 17 5 17Z"/>';

// message is intentionally captured but unused to avoid leaking it as a DOM attribute via {...rest}
const ReplyActions = ({
  enabled,
  content,
  children,
  className,
  message,
  ...rest
}) => {
  var _message$images;
  const css = (0,_app_chatbot_helpers__WEBPACK_IMPORTED_MODULE_0__.useClasses)();
  const [copyStatus, setCopyStatus] = useState('idle');
  const [hidden, setHidden] = useState(true);
  const [embeddedImages, setEmbeddedImages] = useState([]);
  const timeoutRef = useRef(null);
  const hasEnteredRef = useRef(false);
  const containerRef = useRef(null);

  // Filter out expired images from message.images if present
  const validMessageImages = (message === null || message === void 0 || (_message$images = message.images) === null || _message$images === void 0 ? void 0 : _message$images.filter(src => src && !src.includes('placehold.co') && !src.includes('Expired+Image'))) || [];

  // Check if message has images array or embedded images in content
  const hasImagesArray = validMessageImages.length > 0;
  const hasEmbeddedImages = embeddedImages.length > 0;
  const hasImages = hasImagesArray || hasEmbeddedImages;

  // Look for embedded images in the content when component mounts or content changes
  useEffect(() => {
    const checkForImages = () => {
      if (containerRef.current) {
        const images = containerRef.current.querySelectorAll('img.mwai-image, img');
        const imageUrls = Array.from(images).map(img => img.src).filter(src => {
          // Filter out data URLs and placeholder/expired images
          return src && !src.includes('data:image') && !src.includes('placehold.co') && !src.includes('Expired+Image');
        });
        if (imageUrls.length > 0) {
          setEmbeddedImages(imageUrls);
        } else {
          setEmbeddedImages([]); // Clear if no valid images
        }
      }
    };

    // Check immediately
    checkForImages();

    // Also check after a short delay in case images are being loaded
    const timeout = setTimeout(checkForImages, 100);
    return () => clearTimeout(timeout);
  }, [children]);
  const onCopy = () => {
    try {
      navigator.clipboard.writeText(content);
      setCopyStatus('success');
    } catch (err) {
      setCopyStatus('error');
      console.warn('Not allowed to copy to clipboard. Make sure your website uses HTTPS.', {
        content
      });
    } finally {
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    }
  };
  const onDownload = async () => {
    if (!hasImages) return;

    // Combine images from both sources (already filtered for expired images)
    const allImages = hasImagesArray ? validMessageImages : embeddedImages;
    for (let i = 0; i < allImages.length; i++) {
      const imageUrl = allImages[i];
      try {
        // Fetch the image
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Extract filename from URL or use a default name
        let filename = `ai-image-${i + 1}.png`;
        try {
          const urlParts = imageUrl.split('/');
          const lastPart = urlParts[urlParts.length - 1];
          if (lastPart && !lastPart.includes('?')) {
            filename = lastPart;
          }
        } catch (e) {
          // Use default filename
        }
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        // Add a small delay between downloads if multiple images
        if (i < message.images.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      } catch (err) {
        console.error('Failed to download image:', err);
      }
    }
  };
  const handleMouseEnter = useCallback(() => {
    if (!hasEnteredRef.current) {
      hasEnteredRef.current = true;
      timeoutRef.current = setTimeout(() => {
        setHidden(false);
      }, 500);
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHidden(true);
    hasEnteredRef.current = false;
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const svgPath = copyStatus === 'success' ? svgPathSuccess : copyStatus === 'error' ? svgPathError : svgPathDefault;
  const hasActions = !!enabled || hasImages; // Show actions if copy is enabled or if there are images

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: containerRef,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    onMouseOver: handleMouseEnter
  }), /*#__PURE__*/React.createElement("span", {
    className: className
  }, children), hasActions && /*#__PURE__*/React.createElement("div", {
    className: css('mwai-reply-actions', {
      'mwai-hidden': hidden
    })
  }, enabled && /*#__PURE__*/React.createElement("div", {
    className: "mwai-copy-button",
    onClick: onCopy
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    dangerouslySetInnerHTML: {
      __html: svgPath
    }
  })), hasImages && /*#__PURE__*/React.createElement("div", {
    className: "mwai-download-button",
    onClick: onDownload
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    dangerouslySetInnerHTML: {
      __html: svgPathDownload
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplyActions);

/***/ }),

/***/ "./app/js/constants/streamTypes.js":
/*!*****************************************!*\
  !*** ./app/js/constants/streamTypes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STREAM_TYPES: () => (/* binding */ STREAM_TYPES),
/* harmony export */   STREAM_VISIBILITY: () => (/* binding */ STREAM_VISIBILITY),
/* harmony export */   getDefaultVisibility: () => (/* binding */ getDefaultVisibility)
/* harmony export */ });
// Define streaming message types (matching PHP constants)
const STREAM_TYPES = {
  // Content types
  CONTENT: 'content',
  // Regular assistant message content
  THINKING: 'thinking',
  // AI reasoning/thinking process
  CODE: 'code',
  // Code block content

  // Tool/Function types
  TOOL_CALL: 'tool_call',
  // Starting a tool/function call
  TOOL_ARGS: 'tool_args',
  // Tool arguments (usually hidden)
  TOOL_RESULT: 'tool_result',
  // Tool execution result
  MCP_DISCOVERY: 'mcp_discovery',
  // MCP tools being discovered

  // Search/Generation types
  WEB_SEARCH: 'web_search',
  // Web search in progress
  FILE_SEARCH: 'file_search',
  // File search in progress
  IMAGE_GEN: 'image_gen',
  // Image generation in progress
  EMBEDDINGS: 'embeddings',
  // Embeddings operation

  // System types
  DEBUG: 'debug',
  // Debug information
  STATUS: 'status',
  // Status updates (queued, processing, etc.)
  ERROR: 'error',
  // Error messages
  WARNING: 'warning',
  // Warning messages
  TRANSCRIPT: 'transcript',
  // Audio transcriptions

  // Control types
  START: 'start',
  // Stream started
  END: 'end',
  // Stream completed
  HEARTBEAT: 'heartbeat' // Keep-alive ping
};

// Message visibility settings
const STREAM_VISIBILITY = {
  VISIBLE: 'visible',
  // Show to user
  HIDDEN: 'hidden',
  // Hide from user (debug only)
  COLLAPSED: 'collapsed' // Show collapsed/summary view
};

// Helper to determine default visibility for each type
const getDefaultVisibility = type => {
  const hiddenTypes = [STREAM_TYPES.TOOL_ARGS, STREAM_TYPES.DEBUG, STREAM_TYPES.HEARTBEAT];
  const collapsedTypes = [STREAM_TYPES.THINKING, STREAM_TYPES.MCP_DISCOVERY, STREAM_TYPES.STATUS];
  if (hiddenTypes.includes(type)) return STREAM_VISIBILITY.HIDDEN;
  if (collapsedTypes.includes(type)) return STREAM_VISIBILITY.COLLAPSED;
  return STREAM_VISIBILITY.VISIBLE;
};

/***/ }),

/***/ "./app/js/helpers.js":
/*!***************************!*\
  !*** ./app/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlinkingCursor: () => (/* binding */ BlinkingCursor),
/* harmony export */   OutputHandler: () => (/* binding */ OutputHandler),
/* harmony export */   isEmoji: () => (/* binding */ isEmoji),
/* harmony export */   mwaiFetch: () => (/* binding */ mwaiFetch),
/* harmony export */   mwaiFetchUpload: () => (/* binding */ mwaiFetchUpload),
/* harmony export */   mwaiHandleRes: () => (/* binding */ mwaiHandleRes),
/* harmony export */   nekoStringify: () => (/* binding */ nekoStringify),
/* harmony export */   randomStr: () => (/* binding */ randomStr)
/* harmony export */ });
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/index.modern.js");
// React & Vendor Libs
const {
  useMemo,
  useEffect,
  useState
} = wp.element;


// Import i18n at the top since we can't access it dynamically
// We'll conditionally import only if we're in a context where @root/i18n is available
let i18n = null;
try {
  i18n = (__webpack_require__(/*! @root/i18n */ "./app/i18n.js")["default"]);
} catch (e) {
  // Fallback for contexts where i18n isn't available
  i18n = {
    ERRORS: {
      COULD_NOT_PARSE_ERROR_STREAM: "Could not parse the 'error' stream.",
      COULD_NOT_PARSE_END_STREAM: "Could not parse the 'end' stream.",
      SESSION_EXPIRED: 'Your session has expired. Please refresh the page to continue using AI Engine.'
    }
  };
}

// Those helpers don't used any external libraries except Markdown.
// They should be as light as possible.

// Can be used this way:
// const streamCallback = !stream ? null : (content) => {
// // The whole content !
// };
// const res = await mwaiFetch(`${restUrl}/mwai-ui/v1/chats/submit`, body, restNonce, stream);
// const data = await mwaiHandleRes(res, streamCallback, debugMode ? "CHATBOT" : null);
// // data contains { success: true, reply } or { success: false, message }

function nekoStringify(obj, space = null, ignoreCircular = true) {
  const cache = [];
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.includes(value)) {
        if (!ignoreCircular) {
          console.warn('Circular reference found.', {
            key,
            value,
            cache,
            cacheIndex: cache.indexOf(value)
          });
          throw new Error('Circular reference found. Cancelled.');
        }
        return;
      }
      cache.push(value);
    }
    return value;
  }, space);
}
async function mwaiHandleRes(fetchRes, onStream, debugName = null, onTokenUpdate = null, debugMode = false) {
  // Regular
  if (!onStream) {
    try {
      const data = await fetchRes.json();
      if (debugName) {
        console.log(`[${debugName}] IN: `, data);
      }

      // Check for new token in response
      if (data.new_token) {
        // Log token update if debug mode is enabled
        if (debugMode) {
          console.log('[MWAI] Token refreshed!');
        }
        if (onTokenUpdate) {
          onTokenUpdate(data.new_token);
        }
      }
      return data;
    } catch (err) {
      console.error("Could not parse the regular response.", {
        err,
        data
      });
      return {
        success: false,
        message: "Could not parse the regular response."
      };
    }
  }

  // Stream
  const reader = fetchRes.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let decodedContent = '';
  while (true) {
    const {
      value,
      done
    } = await reader.read();
    buffer += decoder.decode(value, {
      stream: true
    });
    if (done) break;
    const lines = buffer.split('\n');
    for (let i = 0; i < lines.length - 1; i++) {
      if (lines[i].indexOf('data: ') !== 0) {
        continue;
      }
      const data = JSON.parse(lines[i].replace('data: ', ''));
      if (data['type'] === 'live') {
        if (debugName) {
          console.log(`[${debugName} STREAM] LIVE: `, data);
        }
        // Handle enhanced stream messages
        if (data.subtype) {
          // New enhanced message format - pass full data object
          onStream && onStream(decodedContent, data);
          // Only accumulate content for actual content messages
          if (data.subtype === 'content') {
            decodedContent += data.data;
          }
        } else {
          // Legacy format - accumulate and pass raw data
          decodedContent += data.data;
          onStream && onStream(decodedContent, data.data);
        }
      } else if (data['type'] === 'error') {
        try {
          if (debugName) {
            console.error(`[${debugName} STREAM] ERROR: `, data.data);
          }
          return {
            success: false,
            message: data.data
          };
        } catch (err) {
          console.error("Could not parse the 'error' stream.", {
            err,
            data
          });
          return {
            success: false,
            message: i18n.ERRORS.COULD_NOT_PARSE_ERROR_STREAM
          };
        }
      } else if (data['type'] === 'end') {
        try {
          const finalData = JSON.parse(data.data);
          if (debugName) {
            console.log(`[${debugName} STREAM] END: `, finalData);
          }

          // Check for new token in streaming response
          if (finalData.new_token) {
            // Log token update if debug mode is enabled
            if (debugMode) {
              console.log('[MWAI] Token refreshed!');
            }
            if (onTokenUpdate) {
              onTokenUpdate(finalData.new_token);
            }
          }
          return finalData;
        } catch (err) {
          console.error("Could not parse the 'end' stream.", {
            err,
            data
          });
          return {
            success: false,
            message: i18n.ERRORS.COULD_NOT_PARSE_END_STREAM
          };
        }
      }
    }
    buffer = lines[lines.length - 1];
  }
  try {
    const finalData = JSON.parse(buffer);
    if (debugName) {
      console.log(`[${debugName} STREAM] IN: `, finalData);
    }
    return finalData;
  } catch (err) {
    console.error("Could not parse the buffer.", {
      err,
      buffer
    });
    return {
      success: false,
      message: "Could not parse the buffer."
    };
  }
}
async function mwaiFetch(url, body, restNonce, isStream, signal = undefined, onTokenUpdate = null) {
  const headers = {
    'Content-Type': 'application/json'
  };
  if (restNonce) {
    headers['X-WP-Nonce'] = restNonce;
  }
  if (isStream) {
    headers['Accept'] = 'text/event-stream';
  }
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers,
    body: nekoStringify(body),
    credentials: 'same-origin',
    signal
  });

  // Check for authentication errors
  if (response.status === 403 || response.status === 401) {
    try {
      const errorData = await response.clone().json();
      if (errorData.code === 'rest_cookie_invalid_nonce' || errorData.code === 'rest_forbidden') {
        // Token has expired - user needs to refresh the page
        console.error('[MWAI] Authentication token has expired. Please refresh the page to continue.');
        throw new Error(i18n.ERRORS.SESSION_EXPIRED);
      }
    } catch (e) {
      // If it's not our error format, continue with the original error
      if (e.message && e.message.includes('session has expired')) {
        throw e;
      }
    }
  }

  // For non-streaming responses, check for new token immediately
  if (!isStream && response.ok) {
    try {
      const clonedResponse = response.clone();
      const data = await clonedResponse.json();
      if (data.new_token && onTokenUpdate) {
        onTokenUpdate(data.new_token);
      }
    } catch (e) {
      // If parsing fails, continue normally
    }
  }
  return response;
}
async function mwaiFetchUpload(url, file, restNonce, onProgress, params = {}) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value);
    }
    const xhr = new XMLHttpRequest();

    // Set up any headers here
    xhr.open('POST', url, true);
    if (restNonce) {
      xhr.setRequestHeader('X-WP-Nonce', restNonce);
    }

    // Handle progress events
    xhr.upload.onprogress = function (event) {
      if (event.lengthComputable && onProgress) {
        const percentComplete = event.loaded / event.total * 100;
        onProgress(percentComplete); // Call the onProgress callback
      }
    };
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const jsonResponse = JSON.parse(xhr.responseText);
          resolve(jsonResponse);
        } catch (error) {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
            error: 'The server response is not valid JSON'
          });
        }
      } else {
        // Actually, the server might have returned the error message in JSON format, with a success and a message.
        // So we try to parse it.
        try {
          const jsonResponse = JSON.parse(xhr.responseText);
          reject({
            status: xhr.status,
            message: jsonResponse.message
          });
          return;
        } catch (error) {
          // Not a JSON, so we continue.
        }
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    xhr.send(formData);
  });
}
function randomStr() {
  return Math.random().toString(36).substring(2);
}

/**
 * Simulates a blinking cursor.
 *
 * @component
 * @returns {JSX.Element} A styled span element that represents the cursor.
 */
const BlinkingCursor = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setVisible(v => !v);
      }, 500);
      return () => clearInterval(timer); // Clean up on component unmount
    }, 200);
    return () => clearTimeout(timeout);
  }, []);
  const cursorStyle = {
    opacity: visible ? 1 : 0,
    width: '1px',
    height: '1em',
    borderLeft: '8px solid',
    marginLeft: '2px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: cursorStyle
  });
};

/**
 * Handle the output from the AI, and display it in a proper way (markdown, streaming, etc).
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {string} props.content - Markdown content to be processed.
 * @param {string} props.error - Error messages, if any.
 * @param {boolean} props.isStreaming - A flag indicating if the content is streaming.
 * @param {string} props.baseClass - The base CSS class for styling the component, defaults to "mwai-output-handler".
 *
 * @returns {JSX.Element} A Markdown element with processed content and appropriate classes.
 */
const OutputHandler = props => {
  const {
    content,
    error,
    isStreaming,
    baseClass = "mwai-output-handler"
  } = props;
  const isError = !!error;
  let data = (isError ? error : content) ?? "";

  // Ensure this is encloded markdown
  const matches = (data.match(/```/g) || []).length;
  if (matches % 2 !== 0) {
    // if count is odd
    data += "\n```"; // add ``` at the end
  } else if (isStreaming) {
    data += "<BlinkingCursor />";
  }
  const classes = useMemo(() => {
    const freshClasses = [baseClass];
    if (error) {
      freshClasses.push('mwai-error');
    }
    return freshClasses;
  }, [error]);
  const markdownOptions = useMemo(() => {
    const options = {
      wrapper: 'div',
      forceWrapper: true,
      overrides: {
        BlinkingCursor: {
          component: BlinkingCursor
        },
        a: {
          props: {
            target: "_blank"
          }
        }
      }
    };
    return options;
  }, []);
  return /*#__PURE__*/React.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
    options: markdownOptions,
    className: classes.join(' '),
    children: data
  });
};
const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDFFF]|[\uFE00-\uFE0F]|[\u1F100-\u1F1FF]|[\u1F200-\u1F2FF]|[\u1F300-\u1F5FF]|[\u1F600-\u1F64F]|[\u1F680-\u1F6FF]|[\u1F700-\u1F77F]|[\u1F780-\u1F7FF]|[\u1F800-\u1F8FF]|[\u1F900-\u1F9FF]|[\u1FA00-\u1FA6F])/;
function isEmoji(str) {
  return str && str.length === 2 && emojiRegex.test(str);
}


/***/ }),

/***/ "./app/js/helpers/RealtimeEventEmitter.js":
/*!************************************************!*\
  !*** ./app/js/helpers/RealtimeEventEmitter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/streamTypes */ "./app/js/constants/streamTypes.js");


/**
 * RealtimeEventEmitter - A clean helper for emitting stream events in the Realtime API
 * 
 * This class provides a simple interface for emitting stream events that are
 * compatible with the existing stream event system used in text-based chats.
 */
class RealtimeEventEmitter {
  constructor(onEvent, eventLogsEnabled = false) {
    this.onEvent = onEvent;
    this.eventLogsEnabled = eventLogsEnabled;
    this.sessionStartTime = null;
  }

  /**
   * Emit a stream event if event logs are enabled and callback is available
   */
  emit(subtype, data, metadata = {}) {
    if (!this.eventLogsEnabled || !this.onEvent) return;
    const event = {
      type: 'event',
      subtype,
      data,
      timestamp: new Date().getTime(),
      ...metadata
    };
    this.onEvent('', event);
  }

  // Session lifecycle events
  sessionStarting() {
    this.sessionStartTime = new Date().getTime();
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'Starting realtime session...');
  }
  sessionConnected() {
    const duration = this.sessionStartTime ? new Date().getTime() - this.sessionStartTime : 0;
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, `Realtime session connected in ${duration}ms.`);
  }
  sessionEnding() {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'Ending realtime session...');
  }
  sessionError(error) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.ERROR, `Realtime session error: ${error}`);
  }

  // Audio events
  userStartedSpeaking() {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'User speaking...', {
      visibility: 'collapsed'
    });
  }
  userStoppedSpeaking() {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'User finished speaking.', {
      visibility: 'collapsed'
    });
  }
  assistantStartedSpeaking() {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'Assistant speaking...', {
      visibility: 'collapsed'
    });
  }
  assistantStoppedSpeaking() {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, 'Assistant finished speaking.', {
      visibility: 'collapsed'
    });
  }

  // Function calling events
  functionCalling(name, args) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.TOOL_CALL, `Calling ${name}...`, {
      metadata: {
        tool_name: name,
        arguments: args
      }
    });
  }
  functionResult(name, result) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.TOOL_RESULT, `Got result from ${name}.`, {
      metadata: {
        tool_name: name,
        result
      }
    });
  }
  functionError(name, error) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.ERROR, `Function ${name} failed: ${error}`, {
      metadata: {
        tool_name: name
      }
    });
  }

  // Transcription events
  userTranscribed(text) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, `User: "${text}"`, {
      visibility: 'collapsed'
    });
  }
  assistantTranscribed(text) {
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, `Assistant: "${text}"`, {
      visibility: 'collapsed'
    });
  }

  // Statistics event
  usageUpdated(stats) {
    const {
      text_input_tokens,
      audio_input_tokens,
      text_output_tokens,
      audio_output_tokens
    } = stats;
    const total = text_input_tokens + audio_input_tokens + text_output_tokens + audio_output_tokens;
    this.emit(_constants_streamTypes__WEBPACK_IMPORTED_MODULE_0__.STREAM_TYPES.STATUS, `Tokens used: ${total} (Text: ${text_input_tokens}/${text_output_tokens}, Audio: ${audio_input_tokens}/${audio_output_tokens})`, {
      visibility: 'collapsed',
      metadata: {
        usage: stats
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealtimeEventEmitter);

/***/ }),

/***/ "./app/js/helpers/scrollLockManager.js":
/*!*********************************************!*\
  !*** ./app/js/helpers/scrollLockManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Global scroll lock manager to coordinate scroll locking between multiple chatbot instances.
 * This prevents conflicts when multiple chatbots are on the same page.
 */
class ScrollLockManager {
  constructor() {
    this.locks = new Map(); // Map of component IDs to their lock status
    this.originalOverflow = null;
    this.isInAdmin = this.detectAdminEnvironment();
    this.hasCheckedAdmin = false;

    // Re-check admin status when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.isInAdmin = this.detectAdminEnvironment();
        this.hasCheckedAdmin = true;
      });
    } else {
      this.hasCheckedAdmin = true;
    }
  }

  /**
   * Detect if we're in the WordPress admin area
   */
  detectAdminEnvironment() {
    // If document or body is not ready yet, defer detection
    if (!document || !document.body) {
      return false; // Assume not admin if we can't check yet
    }

    // Check multiple indicators for admin environment
    const isAdmin = !!(
    // Check for WordPress admin body class
    document.body && document.body.classList && document.body.classList.contains('wp-admin') ||
    // Check for admin-specific elements
    document.getElementById('wpcontent') || document.getElementById('adminmenu') ||
    // Check URL path
    window.location.pathname.includes('/wp-admin/') ||
    // Check for AI Engine admin specific elements
    document.querySelector('.mwai-admin-container') || document.querySelector('#mwai-admin'));
    return isAdmin;
  }

  /**
   * Request a scroll lock for a specific component
   * @param {string} componentId - Unique identifier for the component
   * @param {boolean} shouldLock - Whether this component wants to lock scroll
   */
  updateLock(componentId, shouldLock) {
    // Re-check admin status if we haven't done a proper check yet
    if (!this.hasCheckedAdmin && document.body) {
      this.isInAdmin = this.detectAdminEnvironment();
      this.hasCheckedAdmin = true;
    }

    // Never lock scroll in admin area
    if (this.isInAdmin) {
      return;
    }
    if (shouldLock) {
      this.locks.set(componentId, true);
    } else {
      this.locks.delete(componentId);
    }
    this.applyLockState();
  }

  /**
   * Remove a component's lock request (e.g., on unmount)
   * @param {string} componentId - Unique identifier for the component
   */
  removeLock(componentId) {
    // Skip if in admin area
    if (this.isInAdmin) {
      return;
    }
    this.locks.delete(componentId);
    this.applyLockState();
  }

  /**
   * Apply the appropriate lock state based on all components' requests
   */
  applyLockState() {
    // Never apply locks in admin area
    if (this.isInAdmin) {
      if (document.body.style.overflow === 'hidden' && this.originalOverflow !== null) {
        // Clean up any existing lock when in admin
        document.body.style.overflow = this.originalOverflow || '';
        this.originalOverflow = null;
      }
      return;
    }
    const shouldLock = this.locks.size > 0;
    if (shouldLock && document.body.style.overflow !== 'hidden') {
      // Store the original overflow value before first lock
      if (this.originalOverflow === null) {
        this.originalOverflow = document.body.style.overflow || '';
      }
      document.body.style.overflow = 'hidden';
    } else if (!shouldLock && document.body.style.overflow === 'hidden') {
      // Restore original overflow when no locks remain
      document.body.style.overflow = this.originalOverflow || '';
      this.originalOverflow = null;
    }
  }

  /**
   * Get debug information about current lock state
   */
  getDebugInfo() {
    return {
      isInAdmin: this.isInAdmin,
      activeLocks: Array.from(this.locks.keys()),
      lockCount: this.locks.size,
      bodyOverflow: document.body.style.overflow,
      originalOverflow: this.originalOverflow
    };
  }
}

// Create singleton instance
const scrollLockManager = new ScrollLockManager();

// Expose for debugging in console
if (typeof window !== 'undefined') {
  window.mwaiScrollLockManager = scrollLockManager;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollLockManager);

/***/ }),

/***/ "./app/js/helpers/tokenManager.js":
/*!****************************************!*\
  !*** ./app/js/helpers/tokenManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Global token manager to share REST nonce across all components
class TokenManager {
  constructor() {
    this.token = null;
    this.listeners = new Set();
  }
  setToken(token) {
    if (this.token !== token) {
      this.token = token;
      this.notifyListeners();
    }
  }
  getToken() {
    return this.token;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.token));
  }
}

// Create a singleton instance
const tokenManager = new TokenManager();

// Initialize with the global token if available
if (typeof window !== 'undefined' && window.mwai && window.mwai.rest_nonce) {
  tokenManager.setToken(window.mwai.rest_nonce);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenManager);

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "svg",
      {
        ref,
        ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(`lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/activity.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/activity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activity)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Activity = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);


//# sourceMappingURL=activity.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/brain.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/brain.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brain)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Brain = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);


//# sourceMappingURL=brain.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/bug.js":
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/bug.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bug)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Bug = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
]);


//# sourceMappingURL=bug.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/calendar.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/calendar.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Calendar = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);


//# sourceMappingURL=calendar.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/captions.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/captions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Captions)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Captions = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Captions", [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
]);


//# sourceMappingURL=captions.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/check.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-down.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);


//# sourceMappingURL=chevron-down.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-left.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-left.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);


//# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-right.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);


//# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-alert.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CircleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);


//# sourceMappingURL=circle-alert.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/clock.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/clock.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Clock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);


//# sourceMappingURL=clock.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/ellipsis.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);


//# sourceMappingURL=ellipsis.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/eraser.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/eraser.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Eraser)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Eraser = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);


//# sourceMappingURL=eraser.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/image.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/image.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Image = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);


//# sourceMappingURL=image.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/loader-circle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);


//# sourceMappingURL=loader-circle.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/loader.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/loader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Loader = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);


//# sourceMappingURL=loader.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/maximize-2.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/maximize-2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Maximize2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Maximize2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);


//# sourceMappingURL=maximize-2.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/message-square.js":
/*!********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/message-square.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageSquare)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const MessageSquare = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);


//# sourceMappingURL=message-square.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/mic.js":
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/mic.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mic)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Mic = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);


//# sourceMappingURL=mic.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/minimize-2.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/minimize-2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Minimize2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Minimize2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);


//# sourceMappingURL=minimize-2.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/paperclip.js":
/*!***************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/paperclip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paperclip)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Paperclip = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);


//# sourceMappingURL=paperclip.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/pause.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/pause.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pause)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Pause = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);


//# sourceMappingURL=pause.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/pencil.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/pencil.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pencil)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Pencil = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);


//# sourceMappingURL=pencil.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/play.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/play.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Play)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Play = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);


//# sourceMappingURL=play.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/refresh-cw.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RefreshCw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const RefreshCw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);


//# sourceMappingURL=refresh-cw.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RotateCcw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const RotateCcw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);


//# sourceMappingURL=rotate-ccw.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/search.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/search.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);


//# sourceMappingURL=search.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/send-horizontal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/send-horizontal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SendHorizontal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const SendHorizontal = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("SendHorizontal", [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);


//# sourceMappingURL=send-horizontal.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/send.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/send.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Send)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Send = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);


//# sourceMappingURL=send.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/square.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/square.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Square = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);


//# sourceMappingURL=square.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/trash-2.js":
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/trash-2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trash2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Trash2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);


//# sourceMappingURL=trash-2.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/trash.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/trash.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trash)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Trash = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);


//# sourceMappingURL=trash.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/users.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/users.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Users = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);


//# sourceMappingURL=users.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/wrench.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/wrench.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wrench)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Wrench = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);


//# sourceMappingURL=wrench.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/x.js":
/*!*******************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/x.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)
/* harmony export */ });
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-latest */ "./node_modules/use-latest/dist/use-latest.esm.js");
/* harmony import */ var use_composed_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-composed-ref */ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js");






var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};
var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;

// TODO: use labelled tuples once they are avaiable:
//   export type CalculatedNodeHeights = [height: number, rowHeight: number];
// https://github.com/microsoft/TypeScript/issues/28259

var hiddenTextarea = null;
var getHeight = function getHeight(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  }

  // remove padding, since height = content
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize,
    borderSize = sizingData.borderSize,
    sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function (_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  // Double set and calc due to Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1795904
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);

  // measure height of a textarea with a single row
  hiddenTextarea.value = 'x';
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}

var noop = function noop() {};
var pick = function pick(props, obj) {
  return props.reduce(function (acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};

var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
// non-standard
'tabSize', 'textIndent',
// non-standard
'textRendering', 'textTransform', 'width', 'wordBreak'];
var isIE = !!document.documentElement.currentStyle ;
var getSizingData = function getSizingData(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;

  // probably node is detached from DOM, can't read computed dimensions
  if (boxSizing === '') {
    return null;
  }

  // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths
  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize
  };
};
var getSizingData$1 = getSizingData;

function useListener(target, type, listener) {
  var latestListener = (0,use_latest__WEBPACK_IMPORTED_MODULE_3__["default"])(listener);
  react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(function () {
    var handler = function handler(ev) {
      return latestListener.current(ev);
    };

    // might happen if document.fonts is not defined, for instance
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function () {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener(listener) {
  useListener(window, 'resize', listener);
};
var useFontsLoadedListener = function useFontsLoadedListener(listener) {
  useListener(document.fonts, 'loadingdone', listener);
};

var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements,
    maxRows = _ref.maxRows,
    minRows = _ref.minRows,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
    _ref$onHeightChange = _ref.onHeightChange,
    onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange,
    props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  if (props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }
    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }
  var isControlled = props.value !== undefined;
  var libRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var ref = (0,use_composed_ref__WEBPACK_IMPORTED_MODULE_4__["default"])(libRef, userRef);
  var heightRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(0);
  var measurementsCacheRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var resizeTextarea = function resizeTextarea() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
      height = _calculateNodeHeight[0],
      rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', height + "px", 'important');
      onHeightChange(height, {
        rowHeight: rowHeight
      });
    }
  };
  var handleChange = function handleChange(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onChange: handleChange,
      ref: ref
    }));
  }
};
var index = /* #__PURE__ */react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(TextareaAutosize);




/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: () => (/* binding */ vt),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ Be),
/* harmony export */   StyleSheetContext: () => (/* binding */ $e),
/* harmony export */   StyleSheetManager: () => (/* binding */ Ye),
/* harmony export */   ThemeConsumer: () => (/* binding */ tt),
/* harmony export */   ThemeContext: () => (/* binding */ et),
/* harmony export */   ThemeProvider: () => (/* binding */ ot),
/* harmony export */   __PRIVATE__: () => (/* binding */ gt),
/* harmony export */   createGlobalStyle: () => (/* binding */ ft),
/* harmony export */   css: () => (/* binding */ lt),
/* harmony export */   "default": () => (/* binding */ dt),
/* harmony export */   isStyledComponent: () => (/* binding */ se),
/* harmony export */   keyframes: () => (/* binding */ mt),
/* harmony export */   styled: () => (/* binding */ dt),
/* harmony export */   useTheme: () => (/* binding */ nt),
/* harmony export */   version: () => (/* binding */ v),
/* harmony export */   withTheme: () => (/* binding */ yt)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/styled-components/node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.12",g="/*!sc*/\n",S="undefined"!=typeof window&&"HTMLElement"in window,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),b={},E=/invalid hook call/i,N=new Set,P=function(t,n){if(true){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),a&&!N.has(s)&&(console.warn(s),N.add(s))}catch(e){E.test(e.message)&&N.delete(s)}finally{console.error=i}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return(j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,M=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z=function(e){return M(F,e)};function $(e){return x(z(e)>>>0)}function B(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function L(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var G="function"==typeof Symbol&&Symbol.for,Y=G?Symbol.for("react.memo"):60115,W=G?Symbol.for("react.forward_ref"):60112,q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[W]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(e){return("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:q;var t}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(e,t,n){if("string"!=typeof t){if(ne){var o=te(t);o&&o!==ne&&oe(e,o,n)}var r=K(t);Q&&(r=r.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<r.length;++a){var c=r[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l)}catch(e){}}}}return e}function re(e){return"function"==typeof e}function se(e){return"object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=!1),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=le(e[o],t[o]);else if(ce(t))for(var o in t)e[o]=le(e[o],t[o]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t})}var pe= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:0;function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function he(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return false?0:new Error(de.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([pe[t]],n,!1)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if( true&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e)},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o)},Pe=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},_e=function(e){for(var t=document.querySelectorAll(be),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(f)!==m&&(Pe(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Ce(){return true?__webpack_require__.nc:0}var Ie=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,m),o.setAttribute(y,v);var i=Ce();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},Ae=function(){function e(e){this.element=Ie(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw he(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oe=function(){function e(e){this.element=Ie(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),De=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function e(e,n,o){void 0===e&&(e=C),void 0===n&&(n={});var r=this;this.options=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},Te),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&S&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return ve.get(e)}(n);if(void 0===r)return"continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return"continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g)},s=0;s<n;s++)r(s);return o}(r)})}return e.registerId=function(e){return Se(e)},e.prototype.rehydrate=function(){!this.server&&S&&_e(this)},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new De(n):t?new Ae(n):new Oe(n)}(this.options),new fe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ve(e.children,t)),e})}function Fe(e){var t,n,o,r=void 0===e?C:e,s=r.options,i=void 0===s?C:s,a=r.plugins,c=void 0===a?_:a,l=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(je,n).replace(o,l))}),i.prefix&&u.push(stylis__WEBPACK_IMPORTED_MODULE_6__.prefixer),u.push(stylis__WEBPACK_IMPORTED_MODULE_7__.stringify);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xe,""),l=stylis__WEBPACK_IMPORTED_MODULE_8__.compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Ve(l,i.namespace));var p=[];return stylis__WEBPACK_IMPORTED_MODULE_7__.serialize(l,stylis__WEBPACK_IMPORTED_MODULE_6__.middleware(u.concat(stylis__WEBPACK_IMPORTED_MODULE_6__.rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),M(e,t.name)},F).toString():"",p}var Me=new ke,ze=Fe(),$e=react__WEBPACK_IMPORTED_MODULE_1___default().createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze}),Be=$e.Consumer,Le=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0);function Ge(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)($e)}function Ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],r=t[1],c=Ge().styleSheet,l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,c]),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return Fe({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:l,stylis:u}},[e.shouldForwardProp,l,u]);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement($e.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Le.Provider,{value:u},e.children))}var We=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ze);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=ze),this.name+e.hash},e}(),qe=function(e){return e>="A"&&e<="Z"};function He(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;qe(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Ue=function(e){return null==e||!1===e||""===e},Je=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ue(i)&&(Array.isArray(i)&&i.isCss||re(i)?r.push("".concat(He(s),":"),i,";"):ce(i)?r.push.apply(r,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)(["".concat(s," {")],Je(i),!1),["}"],!1)):r.push("".concat(He(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"]||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Xe(e,t,n,o){if(Ue(e))return[];if(se(e))return[".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var r=e(t);return false||"object"!=typeof r||Array.isArray(r)||r instanceof We||ce(r)||null===r||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Xe(r,t,n,o)}var s;return e instanceof We?n?(e.inject(n,o),[e.getName(o)]):[e]:ce(e)?Je(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Xe(e,t,n,o)})):[e.toString()]}function Ze(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!se(n))return!1}return!0}var Ke=z(v),Qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=M(Ke,t),this.baseStyle=n,ke.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else{var r=ae(Xe(this.rules,e,t,n)),s=x(M(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}o=ie(o,s),this.staticRulesId=s}else{for(var a=M(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u, true&&(a=M(a,u));else if(u){var p=ae(Xe(u,e,t,n));a=M(a,p+l),c+=p}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=ie(o,d)}}return o},e}(),et=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0),tt=et.Consumer;function nt(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(et);if(!e)throw he(18);return e}function ot(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return function(e,n){if(!e)throw he(14);if(re(e)){var o=e(n);if( true&&(null===o||Array.isArray(o)||"object"!=typeof o))throw he(7);return o}if(Array.isArray(e)||"object"!=typeof e)throw he(8);return n?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),e):e}(e.theme,n)},[e.theme,n]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(et.Provider,{value:r},e.children):null}var rt={},st=new Set;function it(e,r,s){var i=se(e),a=e,c=!L(e),p=r.attrs,d=void 0===p?_:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);rt[n]=(rt[n]||0)+1;var o="".concat(n,"-").concat($(v+n+rt[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return L(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=r.displayName&&r.componentId?"".concat(R(r.displayName),"-").concat(r.componentId):r.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=r.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)}}else w=b}var N=new Qe(s,g,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),m=Ge(),y=e.shouldForwardProp||m.shouldForwardProp; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(d);var v=I(r,f,c)||C,g=function(e,n,o){for(var r,s=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=re(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s[c]),a[c]):a[c]}return n.className&&(s.className=ie(s.className,n.className)),s}(i,r,v),S=g.as||h,w={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!=="development"||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"])(b)||st.has(b)||!A.has(S)||(st.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Ge(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(o),o}(a,g); true&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[L(S)&&!A.has(S)?"class":"className"]=N,w.ref=s,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(S,w)}(D,e,r)}O.displayName=y;var D=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)le(e,r[o],!0);return e}({},a.defaultProps,e):e}}), true&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={}}}}(y,g)),ue(D,function(){return".".concat(D.styledComponentId)}),c&&oe(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function at(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var ct=function(e){return Object.assign(e,{isCss:!0})};function lt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(re(t)||ce(t))return ct(Xe(at(_,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!0))));var r=t;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Xe(r):ct(Xe(at(r,n)))}function ut(n,o,r){if(void 0===r&&(r=C),!o)throw he(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],s,!1)))};return s.attrs=function(e){return ut(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ut(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),e))},s}var pt=function(e){return ut(it,e)},dt=pt;A.forEach(function(e){dt[e]=pt(e)});var ht=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ze(e),ke.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,o){var r=o(ae(Xe(this.rules,t,n,o)),""),s=this.componentId+e;n.insertRules(s,s,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,o){e>2&&ke.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)},e}();function ft(n){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var i=lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([n],r,!1)),a="sc-global-".concat($(JSON.stringify(i))),c=new ht(i,a); true&&P(a);var l=function(e){var t=Ge(),n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),r=react__WEBPACK_IMPORTED_MODULE_1___default().useRef(t.styleSheet.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component ".concat(a," was given child JSX. createGlobalStyle does not render children.")), true&&i.some(function(e){return"string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&u(r,e,t.styleSheet,n,t.stylis),react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(function(){if(!t.styleSheet.server)return u(r,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function u(e,n,o,r,s){if(c.isStatic)c.renderStyles(e,b,o,s);else{var i=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{theme:I(n,r,l.defaultProps)});c.renderStyles(e,i,o,s)}}return react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function mt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o]; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=ae(lt.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))),s=$(r);return new We(s,r)}function yt(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function(n,r){var s=I(n,react__WEBPACK_IMPORTED_MODULE_1___default().useContext(et),e.defaultProps);return true&&void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e),'"')),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n,{theme:s,ref:r}))});return n.displayName="WithTheme(".concat(B(e),")"),oe(n,e)}var vt=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ce(),o=ae([n&&'nonce="'.concat(n,'"'),"".concat(f,'="true"'),"".concat(y,'="').concat(v,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw he(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw he(2);var r=e.instance.toString();if(!r)return[];var s=((n={})[f]="",n[y]=v,n.dangerouslySetInnerHTML={__html:r},n),i=Ce();return i&&(s.nonce=i),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ke({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw he(2);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ye,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw he(3)},e}(),gt={StyleSheet:ke,mainSheet:Me}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var St="__sc-".concat(f,"__"); true&&"undefined"!=typeof window&&(window[St]||(window[St]=0),1===window[St]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[St]+=1);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var updateRef = function updateRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  ref.current = value;
};

var useComposedRef = function useComposedRef(libRef, userRef) {
  var prevUserRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (instance) {
    libRef.current = instance;

    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }

    prevUserRef.current = userRef;

    if (!userRef) {
      return;
    }

    updateRef(userRef, instance);
  }, [userRef]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useComposedRef);


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index =  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect ;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/use-latest/dist/use-latest.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLatest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");



var useLatest = function useLatest(value) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
  (0,use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    ref.current = value;
  });
  return ref;
};




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "./node_modules/markdown-to-jsx/dist/index.modern.js":
/*!***********************************************************!*\
  !*** ./node_modules/markdown-to-jsx/dist/index.modern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleType: () => (/* binding */ r),
/* harmony export */   compiler: () => (/* binding */ Ze),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sanitizer: () => (/* binding */ Ue),
/* harmony export */   slugify: () => (/* binding */ Ce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}const n=["children","options"],r={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var i;!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(i||(i={}));const l=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),a={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},o=["style","script"],c=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,s=/mailto:/i,d=/\n{2,}$/,u=/^(\s*>[\s\S]*?)(?=\n{2,})/,p=/^ *> ?/gm,f=/^ {2,}\n/,h=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,m=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,g=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,x=/\r\n?/g,b=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,v=/^\[\^([^\]]+)]/,S=/\f/g,E=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,$=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,C=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,z=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,A=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,T=/^<!--[\s\S]*?(?:-->)/,O=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,B=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,D=/-([a-z])?/gi,j=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,N=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,F=/^\[([^\]]*)\] ?\[([^\]]*)\]/,P=/(\[|\])/g,_=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,G=/(^ *\||\| *$)/g,Z=/^ *:-+: *$/,q=/^ *:-+ *$/,Q=/^ *-+: *$/,V="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",X=new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`),J=new RegExp(`^([*_])${V}\\1(?!\\1|\\w)`),K=new RegExp(`^==${V}==`),Y=new RegExp(`^~~${V}~~`),ee=/^\\([^0-9A-Za-z\s])/,te=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ne=/^\n+/,re=/^([ \t]*)/,ie=/\\([^\\])/g,le=/ *\n+$/,ae=/(?:^|\n)( *)$/,oe="(?:\\d+\\.)",ce="(?:[*+-])";function se(e){return"( *)("+(1===e?oe:ce)+") +"}const de=se(1),ue=se(2);function pe(e){return new RegExp("^"+(1===e?de:ue))}const fe=pe(1),he=pe(2);function me(e){return new RegExp("^"+(1===e?de:ue)+"[^\\n]*(?:\\n(?!\\1"+(1===e?oe:ce)+" )[^\\n]*)*(\\n|$)","gm")}const ge=me(1),ye=me(2);function ke(e){const t=1===e?oe:ce;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const xe=ke(1),be=ke(2);function ve(e,t){const n=1===t,i=n?xe:be,l=n?ge:ye,a=n?fe:he;return{match(e,t,n){const r=ae.exec(n);return r&&(t.list||!t.inline&&!t.simple)?i.exec(e=r[1]+e):null},order:1,parse(e,t,r){const i=n?+e[2]:void 0,o=e[0].replace(d,"\n").match(l);let c=!1;return{items:o.map(function(e,n){const i=a.exec(e)[0].length,l=new RegExp("^ {1,"+i+"}","gm"),s=e.replace(l,"").replace(a,""),d=n===o.length-1,u=-1!==s.indexOf("\n\n")||d&&c;c=u;const p=r.inline,f=r.list;let h;r.list=!0,u?(r.inline=!1,h=s.replace(le,"\n\n")):(r.inline=!0,h=s.replace(le,""));const m=t(h,r);return r.inline=p,r.list=f,m}),ordered:n,start:i}},render:(t,n,i)=>e(t.ordered?"ol":"ul",{key:i.key,start:t.type===r.orderedList?t.start:void 0},t.items.map(function(t,r){return e("li",{key:r},n(t,i))}))}}const Se=new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),Ee=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,$e=[u,m,g,w,z,C,T,j,ge,xe,ye,be],we=[...$e,/^[^\n]+(?:  \n|\n{2,})/,L,B];function Ce(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ze(e){return Q.test(e)?"right":Z.test(e)?"center":q.test(e)?"left":null}function Le(e,t,n,i){const l=n.inTable;n.inTable=!0;let a=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e,l)=>("|"===l.trim()?e.push(i?{type:r.tableSeparator}:{type:r.text,text:l}):""!==l&&e.push.apply(e,t(l,n)),e),[]);n.inTable=l;let o=[[]];return a.forEach(function(e,t){e.type===r.tableSeparator?0!==t&&t!==a.length-1&&o.push([]):(e.type!==r.text||null!=a[t+1]&&a[t+1].type!==r.tableSeparator||(e.text=e.text.trimEnd()),o[o.length-1].push(e))}),o}function Ae(e,t,n){n.inline=!0;const i=e[2]?e[2].replace(G,"").split("|").map(ze):[],l=e[3]?function(e,t,n){return e.trim().split("\n").map(function(e){return Le(e,t,n,!0)})}(e[3],t,n):[],a=Le(e[1],t,n,!!l.length);return n.inline=!1,l.length?{align:i,cells:l,header:a,type:r.table}:{children:a,type:r.paragraph}}function Te(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Oe(e){return function(t,n){return n.inline?e.exec(t):null}}function Be(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Me(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Re(e){return function(t){return e.exec(t)}}function Ie(e,t,n){if(t.inline||t.simple)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every(e=>!$e.some(t=>t.test(e))&&(r+=e+"\n",e.trim()));const i=r.trimEnd();return""==i?null:[r,i]}function Ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function De(e){return e.replace(ie,"$1")}function je(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function Ne(e,t,n){const r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;const l=e(t,n);return n.inline=r,n.simple=i,l}function He(e,t,n){const r=n.inline||!1;n.inline=!1;const i=e(t,n);return n.inline=r,i}const Fe=(e,t,n)=>({children:je(t,e[1],n)});function Pe(){return{}}function _e(){return null}function We(...e){return e.filter(Boolean).join(" ")}function Ge(e,t,n){let r=e;const i=t.split(".");for(;i.length&&(r=r[i[0]],void 0!==r);)i.shift();return r||n}function Ze(n="",i={}){function d(e,n,...r){const l=Ge(i.overrides,`${e}.props`,{});return i.createElement(function(e,t){const n=Ge(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Ge(t,`${e}.component`,e):e}(e,i.overrides),t({},n,l,{className:We(null==n?void 0:n.className,l.className)||void 0}),...r)}function G(t){t=t.replace(E,"");let n=!1;i.forceInline?n=!0:i.forceBlock||(n=!1===_.test(t));const r=le(ie(n?t:`${t.trimEnd().replace(ne,"")}\n\n`,{inline:n}));for(;"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===i.wrapper)return r;const l=i.wrapper||(n?"span":"div");let a;if(r.length>1||i.forceWrapper)a=r;else{if(1===r.length)return a=r[0],"string"==typeof a?d("span",{key:"outer"},a):a;a=null}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(l,{key:"outer"},a)}function Z(t,n){const r=n.match(c);return r?r.reduce(function(n,r,a){const o=r.indexOf("=");if(-1!==o){const c=function(e){return-1!==e.indexOf("-")&&null===e.match(O)&&(e=e.replace(D,function(e,t){return t.toUpperCase()})),e}(r.slice(0,o)).trim(),s=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(r.slice(o+1).trim()),d=l[c]||c,u=n[d]=function(e,t,n,r){return"style"===t?n.split(/;\s?/).reduce(function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.trim().replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(n.length+1).trim(),e},{}):"href"===t||"src"===t?r(n,e,t):(n.match(M)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(t,c,s,i.sanitizer);"string"==typeof u&&(L.test(u)||B.test(u))&&(n[d]=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(G(u.trim()),{key:a}))}else"style"!==r&&(n[l[r]||r]=!0);return n},{}):null}i.overrides=i.overrides||{},i.sanitizer=i.sanitizer||Ue,i.slugify=i.slugify||Ce,i.namedCodesToUnicode=i.namedCodesToUnicode?t({},a,i.namedCodesToUnicode):a,i.createElement=i.createElement||react__WEBPACK_IMPORTED_MODULE_0__.createElement;const q=[],Q={},V={[r.blockQuote]:{match:Me(u),order:1,parse:(e,t,n)=>({children:t(e[0].replace(p,""),n)}),render:(e,t,n)=>d("blockquote",{key:n.key},t(e.children,n))},[r.breakLine]:{match:Re(f),order:1,parse:Pe,render:(e,t,n)=>d("br",{key:n.key})},[r.breakThematic]:{match:Me(h),order:1,parse:Pe,render:(e,t,n)=>d("hr",{key:n.key})},[r.codeBlock]:{match:Me(g),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,n,r)=>d("pre",{key:r.key},d("code",t({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[r.codeFenced]:{match:Me(m),order:0,parse:e=>({attrs:Z("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:r.codeBlock})},[r.codeInline]:{match:Be(y),order:3,parse:e=>({text:e[2]}),render:(e,t,n)=>d("code",{key:n.key},e.text)},[r.footnote]:{match:Me(b),order:0,parse:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),render:_e},[r.footnoteReference]:{match:Oe(v),order:1,parse:e=>({target:`#${i.slugify(e[1],Ce)}`,text:e[1]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href")},d("sup",{key:n.key},e.text))},[r.gfmTask]:{match:Oe($),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,n)=>d("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})},[r.heading]:{match:Me(i.enforceAtxHeadings?C:w),order:1,parse:(e,t,n)=>({children:je(t,e[2],n),id:i.slugify(e[2],Ce),level:e[1].length}),render:(e,t,n)=>d(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n))},[r.headingSetext]:{match:Me(z),order:0,parse:(e,t,n)=>({children:je(t,e[1],n),level:"="===e[2]?1:2,type:r.heading})},[r.htmlBlock]:{match:Re(L),order:1,parse(e,t,n){const[,r]=e[3].match(re),i=new RegExp(`^${r}`,"gm"),l=e[3].replace(i,""),a=(c=l,we.some(e=>e.test(c))?He:je);var c;const s=e[1].toLowerCase(),d=-1!==o.indexOf(s),u=(d?s:e[1]).trim(),p={attrs:Z(u,e[2]),noInnerParse:d,tag:u};return n.inAnchor=n.inAnchor||"a"===s,d?p.text=e[3]:p.children=a(t,l,n),n.inAnchor=!1,p},render:(e,n,r)=>d(e.tag,t({key:r.key},e.attrs),e.text||n(e.children,r))},[r.htmlSelfClosing]:{match:Re(B),order:1,parse(e){const t=e[1].trim();return{attrs:Z(t,e[2]||""),tag:t}},render:(e,n,r)=>d(e.tag,t({},e.attrs,{key:r.key}))},[r.htmlComment]:{match:Re(T),order:1,parse:()=>({}),render:_e},[r.image]:{match:Be(Ee),order:1,parse:e=>({alt:e[1],target:De(e[2]),title:e[3]}),render:(e,t,n)=>d("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:i.sanitizer(e.target,"img","src")})},[r.link]:{match:Oe(Se),order:3,parse:(e,t,n)=>({children:Ne(t,e[1],n),target:De(e[2]),title:e[3]}),render:(e,t,n)=>d("a",{key:n.key,href:i.sanitizer(e.target,"a","href"),title:e.title},t(e.children,n))},[r.linkAngleBraceStyleDetector]:{match:Oe(U),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],type:r.link})},[r.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:Oe(R)(e,t),order:0,parse:e=>({children:[{text:e[1],type:r.text}],target:e[1],title:void 0,type:r.link})},[r.linkMailtoDetector]:{match:Oe(I),order:0,parse(e){let t=e[1],n=e[1];return s.test(n)||(n="mailto:"+n),{children:[{text:t.replace("mailto:",""),type:r.text}],target:n,type:r.link}}},[r.orderedList]:ve(d,1),[r.unorderedList]:ve(d,2),[r.newlineCoalescer]:{match:Me(k),order:3,parse:Pe,render:()=>"\n"},[r.paragraph]:{match:Ie,order:3,parse:Fe,render:(e,t,n)=>d("p",{key:n.key},t(e.children,n))},[r.ref]:{match:Oe(N),order:0,parse:e=>(Q[e[1]]={target:e[2],title:e[4]},{}),render:_e},[r.refImage]:{match:Be(H),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("img",{key:n.key,alt:e.alt,src:i.sanitizer(Q[e.ref].target,"img","src"),title:Q[e.ref].title}):null},[r.refLink]:{match:Oe(F),order:0,parse:(e,t,n)=>({children:t(e[1],n),fallbackChildren:t(e[0].replace(P,"\\$1"),n),ref:e[2]}),render:(e,t,n)=>Q[e.ref]?d("a",{key:n.key,href:i.sanitizer(Q[e.ref].target,"a","href"),title:Q[e.ref].title},t(e.children,n)):d("span",{key:n.key},t(e.fallbackChildren,n))},[r.table]:{match:Me(j),order:1,parse:Ae,render(e,t,n){const r=e;return d("table",{key:n.key},d("thead",null,d("tr",null,r.header.map(function(e,i){return d("th",{key:i,style:Te(r,i)},t(e,n))}))),d("tbody",null,r.cells.map(function(e,i){return d("tr",{key:i},e.map(function(e,i){return d("td",{key:i,style:Te(r,i)},t(e,n))}))})))}},[r.text]:{match:Re(te),order:4,parse:e=>({text:e[0].replace(A,(e,t)=>i.namedCodesToUnicode[t]?i.namedCodesToUnicode[t]:e)}),render:e=>e.text},[r.textBolded]:{match:Be(X),order:2,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("strong",{key:n.key},t(e.children,n))},[r.textEmphasized]:{match:Be(J),order:3,parse:(e,t,n)=>({children:t(e[2],n)}),render:(e,t,n)=>d("em",{key:n.key},t(e.children,n))},[r.textEscaped]:{match:Be(ee),order:1,parse:e=>({text:e[1],type:r.text})},[r.textMarked]:{match:Be(K),order:3,parse:Fe,render:(e,t,n)=>d("mark",{key:n.key},t(e.children,n))},[r.textStrikethroughed]:{match:Be(Y),order:3,parse:Fe,render:(e,t,n)=>d("del",{key:n.key},t(e.children,n))}};!0===i.disableParsingRawHTML&&(delete V[r.htmlBlock],delete V[r.htmlSelfClosing]);const ie=function(e){let t=Object.keys(e);function n(r,i){let l=[],a="";for(;r;){let o=0;for(;o<t.length;){const c=t[o],s=e[c],d=s.match(r,i,a);if(d){const e=d[0];r=r.substring(e.length);const t=s.parse(d,n,i);null==t.type&&(t.type=c),l.push(t),a=e;break}o++}}return l}return t.sort(function(t,n){let r=e[t].order,i=e[n].order;return r!==i?r-i:t<n?-1:1}),function(e,t){return n(function(e){return e.replace(x,"\n").replace(S,"").replace(W,"    ")}(e),t)}}(V),le=(ae=function(e,t){return function(n,r,i){const l=e[n.type].render;return t?t(()=>l(n,r,i),n,r,i):l(n,r,i)}}(V,i.renderRule),function e(t,n={}){if(Array.isArray(t)){const r=n.key,i=[];let l=!1;for(let r=0;r<t.length;r++){n.key=r;const a=e(t[r],n),o="string"==typeof a;o&&l?i[i.length-1]+=a:null!==a&&i.push(a),l=o}return n.key=r,i}return ae(t,e,n)});var ae;const oe=G(n);return q.length?d("div",null,oe,d("footer",{key:"footer"},q.map(function(e){return d("div",{id:i.slugify(e.identifier,Ce),key:e.identifier},e.identifier,le(ie(e.footnote,{inline:!0})))}))):oe}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t=>{let{children:r="",options:i}=t,l=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(i[n]=e[n]);return i}(t,n);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(Ze(r,i),l)});
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Enum.js":
/*!************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Enum.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SCOPE: () => (/* binding */ SCOPE),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'
var SCOPE = '@scope'


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Middleware.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Middleware.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(children = element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Parser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Parser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f', (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(index ? points[index - 1] : 0)) != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent, declarations), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Prefixer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Prefixer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span', 0) ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span', 0) ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch', 0) ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Serializer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Serializer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/styled-components/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Tokenizer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/styled-components/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/styled-components/node_modules/stylis/src/Utility.js":
/*!***************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/stylis/src/Utility.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./app/js/chatbot.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_chatbot_ChatbotSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/chatbot/ChatbotSystem */ "./app/js/chatbot/ChatbotSystem.js");
/* harmony import */ var _app_chatbot_DiscussionsSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/chatbot/DiscussionsSystem */ "./app/js/chatbot/DiscussionsSystem.js");
const {
  render
} = wp.element;


function decodeHtmlEntities(encodedStr) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = encodedStr;
  return textarea.value;
}

// Main initialization function
function initializeMwai() {
  function processContainers(containers, component) {
    containers.forEach(container => {
      // Skip if already initialized
      if (container.hasAttribute('data-mwai-initialized')) {
        return;
      }
      const paramsAttr = container.getAttribute('data-params');
      const systemAttr = container.getAttribute('data-system');
      const themeAttr = container.getAttribute('data-theme');

      // Check if attributes exist before parsing
      if (!paramsAttr || !systemAttr || !themeAttr) {
        console.warn('MWAI: Missing required attributes for initialization', container);
        return;
      }
      const params = JSON.parse(decodeHtmlEntities(paramsAttr));
      const system = JSON.parse(decodeHtmlEntities(systemAttr));
      const theme = JSON.parse(decodeHtmlEntities(themeAttr));

      // Mark as initialized before removing attributes
      container.setAttribute('data-mwai-initialized', 'true');
      container.removeAttribute('data-params');
      container.removeAttribute('data-system');
      container.removeAttribute('data-theme');
      render(component({
        system,
        params,
        theme
      }), container);
    });
  }
  const chatbotContainers = document.querySelectorAll('.mwai-chatbot-container');
  processContainers(chatbotContainers, _app_chatbot_ChatbotSystem__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const discussionsContainers = document.querySelectorAll('.mwai-discussions-container');
  processContainers(discussionsContainers, _app_chatbot_DiscussionsSystem__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
document.addEventListener('DOMContentLoaded', initializeMwai);

// If the user wants to initialize manually, well, he can do it.
window.mwaiInitialize = initializeMwai;
})();

/******/ })()
;
//# sourceMappingURL=chatbot.js.map