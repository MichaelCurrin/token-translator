export const CHARS_PER_TOKEN = 4;
export const WORDS_PER_TOKEN = 0.75;
export const WORDS_PER_A4_PAGE = 450;
export const WORDS_PER_A5_BOOK = 80000;

export const MODEL_INPUT_LIMITS = [
  {
    provider: 'DeekSeek',
    modelName: 'deepseek-chat',
    tokens: 64000,
  },
  {
    provider: 'DeekSeek',
    modelName: 'deepseek-reasoner',
    tokens: 64000,
  },
  {
    provider: 'Google',
    modelName: 'Gemini 2.5 Pro Experimental',
    tokens: 1048576,
  },
  {
    provider: 'Google',
    modelName: 'Gemini 2.0 Flash',
    tokens: 1048576,
  },
  { provider: 'Google', modelName: 'Gemini 1.5 Pro', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.5 Flash', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.0 Pro', tokens: 30720 },
  { provider: 'OpenAI', modelName: 'GPT-4o', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-4 Turbo', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-3.5 Turbo', tokens: 16385 },
  { provider: 'Meta', modelName: 'Llama 4 Scout', tokens: 10 * 10 ** 6 },
  { provider: 'Meta', modelName: 'Llama 3', tokens: 16000 },
  { provider: 'Meta', modelName: 'Llama 2', tokens: 8000 },
  { provider: 'Meta', modelName: 'Phi-3', tokens: 128000 },
  { provider: 'Meta', modelName: 'Mixtral', tokens: 64000 },
  { provider: 'Anthropic', modelName: 'Claude 3.7', tokens: 200000 },
  { provider: 'Anthropic', modelName: 'Claude 3.5', tokens: 200000 },
  { provider: 'Anthropic', modelName: 'Claude 3.0', tokens: 200000 },
  { provider: 'Anthropic', modelName: 'Claude 2.1', tokens: 200000 },
  { provider: 'MiniMaxAI', modelName: 'MiniMax-Text-01', tokens: 4 * 10 ** 6 },
];

// Assume price is in Dollars. Better to keep as string not number, as readable
// currency.
export const PRICE_PER_MILLION_TOKENS = [
  {
    provider: 'DeepSeek',
    modelName: 'deepseek-chat',
    input: '0.14',
    output: '0.28',
  },
  {
    provider: 'DeepSeek',
    modelName: 'deepseek-reasoner',
    input: '0.55',
    output: '2.19',
  },
  {
    provider: 'Google',
    modelName: 'Gemini 2.5 Pro Experimental',
    input: '0.50',
    output: '1.50',
  },
  {
    provider: 'OpenAI',
    modelName: 'o1',
    input: '15.00',
    output: '7.50',
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-4o mini',
    input: '0.150',
    output: '0.075',
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-4o',
    input: '2.50',
    output: '1.25',
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-3.5 Turbo',
    input: '0.50',
    output: '1.50',
  },
  {
    provider: 'Google',
    modelName: 'Gemini 2.0 Flash',
    input: '0.10',
    output: '0.40',
  },
  {
    provider: 'Google',
    modelName: 'Gemini 2.0 Flash-Lite',
    input: '0.075',
    output: '0.30',
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.5 Flash',
    range: {
      threshold: 128000,
      low: {
        input: '0.35',
        output: '1.05',
      },
      high: {
        input: '0.70',
        output: '2.10',
      },
    },
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.5 Pro',
    range: {
      threshold: 128000,
      low: {
        input: '3.50',
        output: '10.50',
      },
      high: {
        input: '7.00',
        output: '21.00',
      },
    },
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.0 Pro',
    input: '0.50',
    output: '1.50',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.7 - Sonnet', // same as 3.5
    input: '3.00',
    output: '15.00',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.5 - Sonnet',
    input: '3.00',
    output: '15.00',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.5 - Haiku',
    input: '0.80',
    output: '4.00',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Haiku',
    input: '0.25',
    output: '1.25',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Sonnet',
    input: '3.00',
    output: '15.00',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Opus',
    input: '15.00',
    output: '75.00',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 2.1',
    input: '8.00',
    output: '24.00',
  },
];
