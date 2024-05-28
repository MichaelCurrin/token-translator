export const WORDS_PER_TOKEN = 0.75;
export const WORDS_PER_A4_PAGE = 450;
export const WORDS_PER_A5_BOOK = 80000;

export const MODELS = [
    { provider: "Google", modelName: "Gemini 1.5 Pro", tokens: 1048576 },
    { provider: "Google", modelName: "Gemini 1.5 Flash", tokens: 1048576 },
    { provider: "Google", modelName: "Gemini 1.0 Pro", tokens: 30720 },
    { provider: "OpenAI", modelName: "GPT-4o", tokens: 128000 },
    { provider: "OpenAI", modelName: "GPT-4 Turbo", tokens: 128000 },
    { provider: "OpenAI", modelName: "GPT-3.5 Turbo", tokens: 16385 },
    { provider: "Meta", modelName: "Llama 3", tokens: 16000 },
    { provider: "Meta", modelName: "Llama 2", tokens: 8000 },
    { provider: "Meta", modelName: "Phi-3", tokens: 128000 },
    { provider: "Meta", modelName: "Mixtral", tokens: 64000 }
];
