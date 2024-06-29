// https://developer.wordpress.org/block-editor/how-to-guides/internationalization/

const { __ } = wp.i18n;

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
  CHATBOT_HELP: __( 'Highly customizable chatbot.', 'ai-engine' ),
  STATISTICS: __( 'Statistics', 'ai-engine' ),
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
  CONTEXT: __( 'Context', 'ai-engine' ),
  IMAGES_NUMBER: __( 'Number of Images', 'ai-engine' ),
  AVATAR: __( 'Avatar', 'ai-engine' ),
  AI_NAME: __( 'AI Name', 'ai-engine' ),
  USER_NAME: __( 'User Name', 'ai-engine' ),
  PLACEHOLDER: __( 'Placeholder', 'ai-engine' ),
  START_SENTENCE: __( 'Start Sentence', 'ai-engine' ),
  SEND: __( 'Send', 'ai-engine' ),
  CLEAR: __( 'Clear', 'ai-engine' ),
  SYSTEM_NAME: __( 'System Name', 'ai-engine' ),
  ID: __( 'ID', 'ai-engine' ),
  POPUP: __( 'Popup', 'ai-engine' ),
  POSITION: __( 'Position', 'ai-engine' ),
  ICON_TEXT: __( 'Icon Text', 'ai-engine' ),
  ICON_TEXT_DELAY: __( 'Icon Text Delay', 'ai-engine' ),
  FULL_SCREEN: __( 'Full Screen', 'ai-engine' ),
  CASUALLY_FINE_TUNED: __( 'Casually Fine-Tuned', 'ai-engine' ),
  CONTENT_AWARE: __( 'Content Aware', 'ai-engine' ),
  SPACING: __( 'Spacing', 'ai-engine' ),
  BORDER_RADIUS: __( 'Border Radius', 'ai-engine' ),
  FONT_SIZE: __( 'Font Size', 'ai-engine' ),
  FONT_COLOR: __( 'Font Color', 'ai-engine' ),
  BACK_PRIMARY_COLOR: __( 'Back Primary Color', 'ai-engine' ),
  BACK_SECONDARY_COLOR: __( 'Back 2nd Color', 'ai-engine' ),
  HEADER_BUTTONS_COLOR: __( 'Header Buttons Color', 'ai-engine' ),
  HEADER_BACKGROUND_COLOR: __( 'Header Back Color', 'ai-engine' ),
  BUBBLE_COLOR: __( 'Bubble Color', 'ai-engine' ),
  BACK_USER_COLOR: __( 'Back User Color', 'ai-engine' ),
  BACK_AI_COLOR: __( 'Back AI Color', 'ai-engine' ),
  BACK_AI_SECONDARY_COLOR: __( 'Back AI 2nd Color', 'ai-engine' ),
  AVATAR_MESSAGE_BACKGROUND_COLOR: __( 'Message Background', 'ai-engine' ),
  AVATAR_MESSAGE_FONT_COLOR: __( 'Message Color', 'ai-engine' ),
  POPUP_ICON: __( 'Popup Icon', 'ai-engine' ),
  CUSTOM_ICON_URL: __( 'Custom Icon URL', 'ai-engine' ),
  FEATURES: __( 'Features', 'ai-engine' ),
  TIMEFRAME: __( 'Timeframe', 'ai-engine' ),
  ABSOLUTE: __( 'Absolute', 'ai-engine' ),
  NONE: __( 'None', 'ai-engine' ),
  EDITORS_ADMINS: __( 'Editors & Admins', 'ai-engine' ),
  ADMINS_ONLY: __( 'Admins Only', 'ai-engine' ),
  CREDITS: __( 'Credits', 'ai-engine' ),
  TYPE: __( 'Type', 'ai-engine' ),
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
  CONTENT_GENERATOR_HELP: __( 'Generate articles. Support templates.', 'ai-engine' ),
  IMAGES_GENERATOR: __( 'Images Generator', 'ai-engine' ),
  IMAGES_GENERATOR_HELP: __( 'Generate images. Support templates.', 'ai-engine' ),
  PLAYGROUND: __( 'Playground', 'ai-engine' ),
  PLAYGROUND_HELP: __( 'Play with AI or let it perform various tasks for you. Support templates.', 'ai-engine' ),
  FORMS: __( 'Forms', 'ai-engine' ),
  FORMS_HELP: __( 'Build AI forms. Based on fields, users will be given answers or suggestions.', 'ai-engine' ),
  STATISTICS: __( 'Statistics', 'ai-engine' ),
  STATISTICS_HELP: __( 'Track AI interactions, check statistics, set limits, and more!', 'ai-engine' ),
  CLIENT_DEBUG: __( 'Client Debug', 'ai-engine' ),
  CLIENT_DEBUG_HELP: __( 'Debugging information will be displayed in the console.', 'ai-engine' ),
  SERVER_DEBUG: __( 'Server Debug', 'ai-engine' ),
  SERVER_DEBUG_HELP: __( 'Debugging information from your server will be displayed in a console on this tab.', 'ai-engine' ),
  LOGS: __( 'Logs', 'ai-engine' ),
  CLEAR_LOGS: __( 'Clear Logs', 'ai-engine' ),
  REFRESH_LOGS: __( 'Refresh Logs', 'ai-engine' ),
  API_KEY: __( 'API Key', 'ai-engine' ),
  USAGE_HELP: __( 'Those values are for information only. They are not accurate and should not be used for billing purposes. The calculation of the number of tokens and the cost is very different from one service to another, and AI Engine does its best to estimate it. For the exact amounts, please check your accounts at the respective services. For OpenAI, you can check your <a href="https://platform.openai.com/usage" target="_blank">OpenAI account</a>.', 'ai-engine' ),
  USAGE_PRO_HELP: __( 'If you would like to have better control on the amounts, add conditions or set limits to the usage of the AI, consider <a href="https://meowapps.com/ai-engine/" target="_blank">AI Engine Pro</a>.', 'ai-engine' ),
  LANGUAGE: __( 'Language', 'ai-engine' ),
  HIDE: __( 'Hide', 'ai-engine' ),
  SHOW: __( 'Show', 'ai-engine' ),
  CONTENT: __( 'Content', 'ai-engine' ),
  IMAGES: __( 'Images', 'ai-engine' ),
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
  CODE: __( 'Code', 'ai-engine' ),
  EMBEDDINGS: __( 'Embeddings', 'ai-engine' ),
  EMBEDDINGS_HELP: __( 'Create searchable data that can be reused to feed the chatbot and other AI or UI elements.', 'ai-engine' ),
  OTHERS: __( 'Others', 'ai-engine' ),
  PINECONE_APIKEY_HELP: __( 'You can get your API Keys in your <a href="https://app.pinecone.io/organizations/keys" target="_blank">Pinecone Account</a>.', 'ai-engine' ),
  QDRANT_APIKEY_HELP: __( 'You can get your API Keys in your <a href="https://cloud.qdrant.io/accounts/" target="_blank">Qdrant Account</a>.', 'ai-engine' ),
  SERVER: __( 'Server', 'ai-engine' ),
  PINECONE_SERVER_HELP: __( 'The URL of your host (check your Indexes).', 'ai-engine' ),
  PINECONE_NAMESPACE_HELP: __( 'The namespace is used to separate the data from other data. This allows you to use the same server/index on more than one website. This is optional.', 'ai-engine' ),
  QDRANT_SERVER_HELP: __( 'The URL of your cluster (known as Cluster URL).', 'ai-engine' ),
  QDRANT_COLLECTION_HELP: __( 'The collection keeps data apart so you can use one cluster for many websites. If there\'s no collection, Qdrant makes one with 1536 dimensions and uses cosine similarity.', 'ai-engine' ),
  COST: __( 'Cost', 'ai-engine' ),
  USAGE: __( 'Usage', 'ai-engine' ),
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
  ROWS: __( 'Rows', 'ai-engine' ),
  POST_TYPE: __( 'Post Type', 'ai-engine' ),
  GENERATE_CONTENT: __( 'Generate Content', 'ai-engine' ),
  GENERATE_IMAGES: __( 'Generate Images', 'ai-engine' ),
  ADMIN_BAR: __( 'Admin Bar', 'ai-engine' ),
  ADMIN_TOOLS: __( 'Admin Tools', 'ai-engine' ),
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
  BANNED_IPS: __( 'Banned IPs', 'ai-engine' ),
  SECURITY: __( 'Security', 'ai-engine' ),
  POST_TYPES: __( 'Post Types', 'ai-engine' ),
  COPY_BUTTON: __( 'Copy Button', 'ai-engine' ),
  POPUP: __( 'Popup', 'ai-engine' ),
  AI_AVATAR: __( 'Avatar', 'ai-engine' ),
  SITE_WIDE_CHATBOT: __( 'Site-Wide Chatbot', 'ai-engine' ),
  QUERIES_DATA: __( 'Queries Data', 'ai-engine' ),
  QUERIES_FORMS_DATA: __( 'Queries Form Data', 'ai-engine' ),
  WEBSPEECH_API: __( 'Web Speech API', 'ai-engine' ),
  SPEECH_RECOGNITION: __( 'Speech Recognition', 'ai-engine' ),
  SPEECH_SYNTHESIS: __( 'Speech Synthesis', 'ai-engine' ),
  QUERY: __( 'Query', 'ai-engine' ),
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
  SHORTCODE: __( 'Shortcodes', 'ai-engine' ),
  STREAMING: __( 'Streaming', 'ai-engine' ),
  SYNTAX_HIGHLIGHT: __( 'Syntax Highlight', 'ai-engine' ),
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
  REFRESH_MODELS: __( 'Refresh Models', 'ai-engine' ),
  AUDIO: __( 'Audio', 'ai-engine' ),
  JSON: __( 'JSON', 'ai-engine' ),
  FILES: __( 'Files', 'ai-engine' ),
  AI_ENVIRONMENT: __( 'AI Environment', 'ai-engine' ),
  OVERRIDE_DEFAULTS: __( 'Override Defaults', 'ai-engine' ),
  REGION: __( 'Region', 'ai-engine' ),
  PROJECT_ID: __( 'Project ID', 'ai-engine' ),
  BEARER_TOKEN: __( 'Bearer Token', 'ai-engine' ),
  DIMENSIONS: __( 'Dimensions', 'ai-engine' ),
  MIN_SCORE: __( 'Min Score', 'ai-engine' ),
  MAX_SELECT: __( 'Max Results', 'ai-engine' ),
  QDRANT_COLLECTION: __( 'Collection', 'ai-engine' ),
  INSTRUCTIONS: __( 'Instructions', 'ai-engine' ),
  FUNCTIONS: __( 'Functions', 'ai-engine' ),
  BUBBLE: __( 'Bubble', 'ai-engine' ),
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
  AZURE_DEPLOYMENTS: __( 'Add your deployments below and define what kind of model they are.', 'ai-engine' ),
  BANNED_WORDS: __( 'Reject queries containing these words; separate with commas.', 'ai-engine' ),
  BANNED_IPS: __( 'Block access from specified IP addresses or ranges using CIDR notation; separate with commas.', 'ai-engine' ),
  POST_TYPES: __( 'Enable for these post types; separate with commas.', 'ai-engine' ),
  POST_STATUS: __( 'Enable for these post statuses (publish, draft, future, private, etc); separate with commas.', 'ai-engine' ),
  POST_CATEGORIES: __( 'Enable for these categories (slugs); separate with commas. If none, it will be enabled for all.', 'ai-engine' ),
  CONTEXT_MAX_LENGTH: __( 'Truncate the context (Content-Aware, Embeddings, etc) to make sure it is below this number of characters.', 'ai-engine' ),
  MAX_MESSAGES: __( 'Maximum number of historical messages that is sent to the AI model.', 'ai-engine' ),
  INPUT_MAX_LENGTH: __( 'Maximum number of characters that can be input by the user.', 'ai-engine' ),
  STATISTICS: __( ' In the Queries tab, you can browse through all your users\' activity. Contextual data is excluded unless you activate the options below. Make sure your users are aware of this.', 'ai-engine' ),
  QUERIES_DATA: __( 'Record the queries and their replies.', 'ai-engine' ),
  QUERIES_FORMS_DATA: __( 'Capture form data neatly for simple reuse.', 'ai-engine' ),
  SPEECH_RECOGNITION: __( 'Enable speech-to-text. Depends on the browser and OS used by the user.', 'ai-engine' ),
  SPEECH_SYNTHESIS: __( 'Enable text-to-speech.', 'ai-engine' ),
  CUSTOM_SHORTCODE: __( 'Prefer the above version. If you need many chatbots, you can custom shortcodes, like the one below. Custom shortcodes are based on the default chatbot, and their attributes override the default ones.', 'ai-engine' ),
  USER_FILTER: __( 'Type an User ID, or an IP.', 'ai-engine' ),
  STREAMING: __( 'The AI\'s response will appear as it\'s being created. Be cautious: this feature\'s ability to manage statistics, limits, and filters is still in its beta phase.', 'ai-engine' ),
  SYNTAX_HIGHLIGHT: __( 'Enable syntax highlighting for the code blocks.', 'ai-engine' ),
  DEV_TOOLS: __( 'Enable a new tab with debugging tools. For developers only.', 'ai-engine' ),
  PUBLIC_API: __( 'Enable the Public REST API.', 'ai-engine' ),
  INTRO_MESSAGE: __( 'Enable the introduction text at the top of this page.', 'ai-engine' ),
  ADDONS: __( 'Enable the AI Addons section under the Meow Apps menu.', 'ai-engine' ),
  OPENAI_API_KEY: __( 'You can get your API Keys in your <a href="https://beta.openai.com/account/api-keys" target="_blank">OpenAI Account</a>.', 'ai-engine' ),
  OPENAI_ORGANIZATION_ID: __( 'You can link this environment to an <a href="https://platform.openai.com/account/organization" target="_blank">Organization</a>. This is optional.', 'ai-engine' ),
  AZURE_API_KEY: __( 'You can get your API Keys in your <a href="https://oai.azure.com/portal" target="_blank">Azure Account</a>.', 'ai-engine' ),
  ANTHROPIC_API_KEY: __( 'You can get your API Keys in your <a href="https://console.anthropic.com/settings/keys" target="_blank">Anthropic Account</a>.', 'ai-engine' ),
  OPENROUTER_API_KEY: __( 'You can get your API Keys in your <a href="https://openrouter.ai/keys" target="_blank">OpenRouter Account</a>.', 'ai-engine' ),
  QDRANT: __( 'Use the code <b>#AIENGINE5</b> when you <a href="https://qdrant.to/cloud" target="_blank">Create a Qdrant Account</a>. You will get 5% off.', 'ai-engine' ),
  ASSISTANTS: __( 'The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks.', 'ai-engine' ),
  ASSISTANTS_INTRO: __( 'The Assistants API is designed to help developers build powerful AI assistants capable of performing a variety of tasks. To create them, head to the <a href="https://beta.openai.com/assistants" target="_blank">OpenAI Assistants</a> dashboard, then <b>Refresh Assistants</b> here. You can use an assistant in your chatbots by switching the <b>Mode</b> to <b>Assistant</b>.', 'ai-engine' ),
  ASSISTANTS_WARNINGS: __( 'Assistants are also <a href="https://platform.openai.com/docs/api-reference/assistants" target="_blank">in beta</a>, both for OpenAI and AI Engine. OpenAI did not add streaming support for them yet. Pricing is still quite unclear and <a href="https://openai.com/pricing" target="_blank">tricky</a>. AI Engine can only perform an estimation. If you want to discuss assistants with other users, visit the <a href="https://discord.gg/bHDGh38" target="_blank">Meow Apps Discord Server</a>.', 'ai-engine' ),
  BEARER_TOKEN: __( 'The Public API will be usable by using this Bearer Token. If not set, you will need to <a href="https://meowapps.com/ai-engine/api/#public-rest-api" target="_blank">build your own authentication</a> by using the <i>mwai_allow_public_api</i> filter.', 'ai-engine' ),
  NO_EMBEDDINGS_RESULTS: __( 'No results for this search. Make sure the Minimum Score is not too high.', 'ai-engine' ),
  NO_EMBEDDINGS_ROWS: __( 'No embeddings yet in this environment.', 'ai-engine' ),
  MIN_SCORE: __( 'The minimum score the embeddings need to have to be returned. Between 0 and 100 and defaults to 35.', 'ai-engine' ),
  MAX_SELECT: __( 'The maximum number of embeddings to return and to use as context. Between 1 and 100 and defaults to 10.', 'ai-engine' ),
  FUNCTIONS: __( 'Select the functions to make available for the AI model\'s choice. It will use them to enhance responses and perform specific actions. This feature is known as Function Calling or Tools.', 'ai-engine' ),
  FUNCTIONS_UNAVAILABLE: __( 'There are no functions available. Please use <a href="https://wordpress.org/plugins/snippet-vault/" target="_blank">Snippet Vault</a> to add some. The Pro Version of AI Engine is also required for this feature.', 'ai-engine' ),
  ADVISOR: __( 'In your Dashboard will be displayed daily recommendations tailored to your WordPress setup. Admins only.', 'ai-engine' ),
  BUBBLE: __( 'The popup will be displayed as a bubble.', 'ai-engine' ),
  ICON_TEXT: __( 'If set, this text will appear next to the icon/bubble.', 'ai-engine' ),
  ICON_TEXT_DELAY: __( 'The delay before the text appears.', 'ai-engine' ),
};

i18n.SETTINGS = {
  AI_ENV_SETUP: __( 'To leverage the functionalities of AI Engine, it needs to be connected directly to AI services. We recommend starting with OpenAI. Create an account and generate an API Key by visiting the <a href="https://beta.openai.com/account/api-keys" target="_blank">OpenAI</a> website. Once obtained, navigate to the <b>Settings</b> tab and input your OpenAI API Key in the "Environments for AI" section.', 'ai-engine' ),
  PINECONE_SETUP: __( 'You choose to use Embeddings. To use them, you need to a Pinecone account. Visit the <a href="https://app.pinecone.io" target="_blank">Pinecone</a> website to create an account, then insert your Pinecone API Key in the <b>Settings</b> tab.', 'ai-engine' ),
  INTRO: __( 'Boost your WordPress with AI! Please visit AI Engine\'s <a href="https://meowapps.com/ai-engine/" target="_blank">website</a> for more information. The documentation is available <a href="https://docs.meowapps.com/" target="_blank">here</a>. Also make sure you read the <a href="https://meowapps.com/ai-engine/disclaimer/" target="_blank">disclaimer</a>. Have fun! 🎵', 'ai-engine' ),
  MODULES_INTRO: __( 'To avoid cluttering the UI and your WP, only enable the features you need.', 'ai-engine' ),
  ALERT_INJECT_BUT_NO_POPUP: __( 'You choose to inject the chatbot in your website. You probably also want to use the chatbot in a Popup.', 'ai-engine' ),
  ALERT_CASUALLY_BUT_NO_FINETUNE: __( 'Normally, you should not check the Casually Fine Tuned option with a non-finetuned model. Make sure that\'s what you want.', 'ai-engine' ),
  ALERT_CONTENTAWARE_BUT_NO_CONTENT: __( 'Content Aware requires your Context to use the {CONTENT} placeholder. It will be replaced by the content of page the chatbot is on. More info <a href="https://meowapps.com/ai-engine/tutorial/#contextualization" target="_blank">here</a>.', 'ai-engine' ),
  SET_AS_DEFAULT_PARAMETERS: __( 'Set as Default Parameters', 'ai-engine' ),
  SET_AS_DEFAULT_PARAMETERS_HELP: __( 'Set the parameters above as the default parameters for the chatbot. You can then use the shortcode [mwai_chat] anywhere on your website.', 'ai-engine' ),
  INJECT_DEFAULT_CHATBOT: __( 'Inject Default Chatbot in Entire Website', 'ai-engine' ),
  INJECT_DEFAULT_CHATBOT_HELP: __( 'Inject the chatbot [mwai_chat] in the entire website.', 'ai-engine' ),
  CHATGPT_STYLE_INTRO: __( 'Keep in mind that you can also style the chatbot (or a specific chatbot, if you use many) by injecting CSS. Have a look <a target="_blank" href="https://meowapps.com/ai-engine/tutorial/#apply-custom-style-to-the-chatbot">here</a>. More information in the <a target="_blank" href="https://meowapps.com/ai-engine/faq">FAQ</a>.', 'ai-engine' ),
  TYPEWRITER_EFFECT: __( 'Typewriter Effect', 'ai-engine' ),
  TYPEWRITER_EFFECT_HELP: __( 'The reply from AI will be typewrited. This delays the final output! Absolutely not recommended. Please use <b>Streaming</b> instead.', 'ai-engine' ),
  CHATBOT_MODERATION_HELP: __( 'If the conversation seems offensive, the chatbot will reject it.', 'ai-engine' ),
  CUSTOM_URL: __( 'Custom URL', 'ai-engine' ),
  ASSISTANT_NO_FILE_SEARCH: __( 'This assistant does not support File Search. You can activate it on the <a href="https://platform.openai.com/assistants" target="_blank">OpenAI Assistants</a> dashboard. Then, use the Refresh button in the Assistants tab.', 'ai-engine' ),
  ASSISTANT_FILE_SEARCH: __( 'File Search will be used when the users upload documents. If the user uploads images, those will be handled by AI Vision if the model supports it and if it is enabled.', 'ai-engine' ),
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
  INTRO: __( 'The Content Generator is a powerful tool that can generate content for you. It can be used to generate articles, emails, or even code. It can also be used to generate content for your chatbot. <b>Let me know if there are any new features you would like to see!</b> Have fun 🥳', 'ai-engine' ),
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
  CUSTOM_LANGUAGE_HELP: __( 'All the languages are <i>somehow</i> supported by AI. <a href="https://meowapps.com/ai-engine/faq/#languages" target="_blank">Learn more</a>.', 'ai-engine' ),
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
  SECTIONS: __( 'Sections', 'ai-engine' ),
  TOPICS_HELP: __( 'Write or paste your topics below. Each line will be used as a topic. The same <b>Params</b> and <b>Prompts</b> will be used as with the <b>Single Generate</b>, so make sure you get satisfying results with it first. This <b>takes time</b>, so relax and enjoy some coffee ☕️ and tea 🍵 :)', 'ai-engine' ),
  GENERATED_POSTS: __( 'Generated Posts', 'ai-engine' ),
  GENERATE_ALL: __( 'Generate All', 'ai-engine' ),
  EDIT_POST: __( 'Edit Post', 'ai-engine' ),
  CREATE_POST: __( 'Create Post', 'ai-engine' ),
  TITLE_TOO_SHORT: __( 'The title is too short. It should be at least 3 words.', 'ai-engine' ),
  TITLE_TOO_SHORT_2: __( 'The title is too short.  It should be at least 40 characters.', 'ai-engine' ),
  TITLE_TOO_LONG: __( 'The title is too long. It should be less than 8 words.', 'ai-engine' ),
  TITLE_TOO_LONG_2: __( 'The title is too long. It should be less than 70 characters.', 'ai-engine' ),
};

i18n.TEMPLATES = {
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
  ONLY_SUPPORTS_FILES: __( 'This only supports JSON, JSONL, and CSV files.', 'ai-engine' ),
  EMPTY_LINES_DATASET: __( 'Some lines were empty. Make sure the CSV has a header row and that the columns are named \'prompt\' and \'completion\'. For debugging, an empty line was logged to the console.', 'ai-engine' ),
  EMPTY_LINES_EMBEDDINGS: __( 'Some lines were empty. Make sure the CSV has a header row and that the columns are named \'title\' and \'content\'. For debugging, an empty line was logged to the console.', 'ai-engine' ),
  ARE_YOU_SURE: __( 'Are you sure?', 'ai-engine' ),
};

i18n.FINETUNING = {
  MODELS_INTRO: __( 'The AI models you have fine-tuned. To create more, visit <b>Files</b>.', 'ai-engine' ),
  LEGACY_MODELS_INTRO: __( 'The AI models you have fine-tuned. <b>Do not use legacy fine-tuning anymore (based on models prior to GPT 3.5). Their deprecation has been <a href="https://platform.openai.com/docs/guides/legacy-fine-tuning" target="_blank">announced by OpenAI</a> for January 4th, 2024.</b><br />', 'ai-engine' ),
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

i18n.EMBEDDINGS = {
  EDIT: __( 'EDIT', 'ai-engine' ),
  AI_SEARCH: __( 'AI SEARCH', 'ai-engine' ),
  SYNC_POSTS: __( 'Sync Posts', 'ai-engine' ),
  AUTO_SYNC_POSTS: __( 'Auto-Sync Posts', 'ai-engine' ),
  AUTO_SYNC_POSTS_DESCRIPTION: __( 'Embeddings will be created, updated or removed based on the activity related to your posts.', 'ai-engine' ),
  REWRITE_CONTENT: __( 'Rewrite Content', 'ai-engine' ),
  REWRITE_CONTENT_DESCRIPTION: __( 'Shorten and improve the content for your embedding using the default model.', 'ai-engine' ),
  FORCE_RECREATE: __( 'Force Recreate', 'ai-engine' ),
  FORCE_RECREATE_DESCRIPTION: __( 'Recreate embeddings on sync even if the content has not changed.', 'ai-engine' ),
  REWRITE_PROMPT_DESCRIPTION: __( 'Prompt for the rewrite. Supports {CONTENT}, {TITLE}, {URL}, {EXCERPT}, {LANGUAGE}, {ID}.', 'ai-engine' ),
  SYNC_ALL: __( 'Sync All', 'ai-engine' ),
  SYNC_ONE: __( 'Sync One', 'ai-engine' ),
  ADD_INDEX: __( 'Add Index', 'ai-engine' ),
  ADD_INDEX_DESCRIPTION: __( 'An index is like a database, and contains embeddings. You can have many indexes and switch between them. The indexes are hosted on Pinecone.', 'ai-engine' ),
  NO_NAMESPACE_SUPPORT: __( 'Note: This server does not support namespaces.', 'ai-engine' ),
};

i18n.ERROR = {
  UPDATING_OPTIONS: __( 'An error occured while updating the options.' ),
  GETTING_OPTIONS: __( 'An error occured while getting the options.' ),
  CHECK_YOUR_CONSOLE: __( 'For more information, check <a target="_blank" href="https://meowapps.com/tutorial-network-activity-dev-tools/">your console</a>. You might also want to check your <a target="_blank" href="https://meowapps.com/tutorial-php-error-logs/">PHP Error Logs</a>.', 'ai-engine' ),
};

export default i18n;
