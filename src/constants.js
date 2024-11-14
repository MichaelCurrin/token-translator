export const CHARS_PER_TOKEN = 4;
export const WORDS_PER_TOKEN = 0.75;
export const WORDS_PER_A4_PAGE = 450;
export const WORDS_PER_A5_BOOK = 80000;

export const MODEL_INPUT_LIMITS = [
  { provider: 'Google', modelName: 'Gemini 1.5 Pro', tokens: 2097152 },
  { provider: 'Google', modelName: 'Gemini 1.5 Flash', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.5 Flash-8B', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.0 Pro', tokens: 30720 },
  { provider: 'OpenAI', modelName: 'GPT-4o', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-4o mini', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-4 Turbo', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-4', tokens: 8192 },
  { provider: 'OpenAI', modelName: 'GPT-3.5 Turbo', tokens: 16385 },
  { provider: 'Meta', modelName: 'Llama 3.2', tokens: 128000 },
  { provider: 'Meta', modelName: 'Llama 3.1', tokens: 128000 },
  { provider: 'Meta', modelName: 'Llama 3', tokens: 16000 },
  { provider: 'Meta', modelName: 'Llama 2', tokens: 8000 },
  { provider: 'Meta', modelName: 'Phi-3.5-mini', tokens: 128000 }, // https://huggingface.co/microsoft/Phi-3.5-mini-instruct
  { provider: 'Meta', modelName: 'Phi-3', tokens: 128000 },
  { provider: 'Meta', modelName: 'Phi-3-mini-128K', tokens: 128000 }, // https://huggingface.co/microsoft/Phi-3-mini-128k-instruct
  { provider: 'Meta', modelName: 'Phi-3-mini-4K', tokens: 4096 }, // https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
  { provider: 'Meta', modelName: 'Phi-2', tokens: 2048 },
  { provider: 'Meta', modelName: 'Mixtral', tokens: 64000 },
  { provider: 'Anthropic', modelName: 'Claude 3.5', tokens: 200000 },
  { provider: 'Anthropic', modelName: 'Claude 3.0', tokens: 200000 },
  { provider: 'Anthropic', modelName: 'Claude 2.1', tokens: 200000 },
];

export const PRICE_PER_MILLION_TOKENS = [
  {
    provider: 'OpenAI',
    modelName: 'GPT-4o mini',
    input: 0.15,
    output: 0.6,
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-4o',
    input: 5.0,
    output: 15.0,
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-3.5 Turbo',
    input: 0.5,
    output: 1.5,
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.5 Flash',
    range: {
      threshold: 128000,
      low: {
        input: 0.075,
        output: 0.3,
      },
      high: {
        input: 0.15,
        output: 0.6,
      },
    },
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.5 Flash-8B',
    range: {
      threshold: 128000,
      low: {
        input: 0.0375,
        output: 0.15,
      },
      high: {
        input: 0.075,
        output: 0.3,
      },
    },
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.5 Pro',
    range: {
      threshold: 128000,
      low: {
        input: 3.5,
        output: 10.5,
      },
      high: {
        input: 7.0,
        output: 21.0,
      },
    },
  },
  {
    provider: 'Google',
    modelName: 'Gemini 1.0 Pro',
    input: 0.5,
    output: 1.5,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.5 - Sonnet',
    input: 3.0,
    output: 15.0,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.5 - Haiku',
    input: 1.00,
    output: 5.00,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Haiku',
    input: 0.25,
    output: 1.25,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Sonnet',
    input: 3.0,
    output: 15.0,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.0 - Opus',
    input: 15.0,
    output: 75.0,
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 2.1',
    input: 8.0,
    output: 24.0,
  },
];
