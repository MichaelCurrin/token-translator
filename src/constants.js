export const CHARS_PER_TOKEN = 4;
export const WORDS_PER_TOKEN = 0.75;
export const WORDS_PER_A4_PAGE = 450;
export const WORDS_PER_A5_BOOK = 80000;

export const MODEL_INPUT_LIMITS = [
  { provider: 'Google', modelName: 'Gemini 1.5 Pro', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.5 Flash', tokens: 1048576 },
  { provider: 'Google', modelName: 'Gemini 1.0 Pro', tokens: 30720 },
  { provider: 'OpenAI', modelName: 'GPT-4o', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-4 Turbo', tokens: 128000 },
  { provider: 'OpenAI', modelName: 'GPT-3.5 Turbo', tokens: 16385 },
  { provider: 'Meta', modelName: 'Llama 3', tokens: 16000 },
  { provider: 'Meta', modelName: 'Llama 2', tokens: 8000 },
  { provider: 'Meta', modelName: 'Phi-3', tokens: 128000 },
  { provider: 'Meta', modelName: 'Mixtral', tokens: 64000 },
];

export const PRICE_PER_MILLION_TOKENS =
  [
    {
      provider: "OpenAI",
      model: "GPT-4o",
      input: "$5.00",
      output: "$15.00"
    },
    {
      provider: "OpenAI",
      model: "GPT-3.5 Turbo",
      input: "$0.50",
      output: "$1.50"
    },
    {
      provider: "Google",
      model: "Gemini 1.5 Flash (<128k tokens)",
      input: "$0.35",
      output: "$1.05"
    },
    {
      provider: "Google",
      model: "Gemini 1.5 Flash (>128k tokens)",
      input: "$0.70",
      output: "$2.10"
    },
    {
      provider: "Google",
      model: "Gemini 1.5 Pro (<128k tokens)",
      input: "$3.50",
      output: "$10.50"
    },
    {
      provider: "Google",
      model: "Gemini 1.5 Flash (<128k tokens)",
      input: "$7.00",
      output: "$21.00"
    },
    {
      provider: "Google",
      model: "Gemini 1.0 Pro",
      input: "$0.50",
      output: "$1.50"
    }
  ]
