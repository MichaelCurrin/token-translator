import {
  CHARS_PER_TOKEN,
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN,
} from '../../constants';
import Table from './Table';

const LINK_OPENAI_TOKENS_ARTICLE =
  'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them';
const LINK_TOKENIZER = 'https://platform.openai.com/tokenizer';

const TABLE_DATA_CONVERSION_RATES = {
  fields: [
    {
      name: 'Measure',
    },
    {
      name: 'Value',
    },
    {
      name: 'Comment',
    },
  ],
  rows: [
    {
      measure: 'Characters per token',
      value: CHARS_PER_TOKEN,
      comment: (
        <span>
          According to OpenAI's approximation, 1 token is approximately equal to{' '}
          <b>4 characters</b> or <b>¾ words</b> (source:{' '}
          <a href={LINK_OPENAI_TOKENS_ARTICLE}>OpenAI Help Center</a>
          ).
        </span>
      ),
    },
    {
      measure: 'Words per token',
      value: WORDS_PER_TOKEN,
      comment: (
        <span>
          Same source as above. This measure is used when entering custom text
          as a rough calculation. But, if you are interested a <b>precise</b>{' '}
          value for the number of tokens and words in a piece of text, check out
          OpenAI's tokenizer tool <a href={LINK_TOKENIZER}>here</a>. For
          programmitic use, they recommend using the <code>tiktoken</code>{' '}
          package.
        </span>
      ),
    },
    {
      measure: 'Words per A4 page',
      value: WORDS_PER_A4_PAGE.toLocaleString(),
      comment:
        'An A4 page typically contains 400-500 words, averaging around 450 words, based on various sources.',
    },
    {
      measure: 'Words per A5 novel',
      value: WORDS_PER_A5_BOOK.toLocaleString(),
      comment:
        'For novels (assuming A5 format), info was found from a few sources which said a word count ranges from about 70K to 120K words, the minimum is 50K words, and a typical count is 80K words.',
    },
  ],
};

const TABLE_DATA_PROVIDERS = {
  fields: [{ name: 'Provider' }, { name: 'Source' }],
  rows: [
    {
      provider: 'Anthropic',
      source: (
        <>
          <a href="https://www.anthropic.com/api">Anthropic API</a> page{' '}
          <a href="https://www.anthropic.com/claude/haiku">Haiku</a> page
        </>
      ),
    },
    {
      provider: 'Google',
      source: (
        <a href="https://ai.google.dev/gemini-api/docs/models/gemini">
          Gemini API documentation
        </a>
      ),
    },
    {
      provider: 'Meta',
      source: (
        <>
          <a href="https://ollama.com/library/llama3.1">Llama 3.1 blog post</a>,{' '}
          <a href="https://ollama.com/blog/llama3">Llama 3 blog post</a> on
          Ollama, <a href="https://ollama.com/library/phi3">Phi-3 model</a> page
          on Ollama,{' '}
          <a href="https://huggingface.co/microsoft/phi-2">Phi-2 model</a> page
          on HuggingFace,{' '}
          <a href="https://ollama.com/library/mixtral">Mixtral model</a> page on
          Ollama
        </>
      ),
    },
    {
      provider: 'OpenAI',
      source: (
        <a href="https://platform.openai.com/docs/models">
          OpenAI Platform documentation
        </a>
      ),
    },
    {
      provider: 'MiniMaxAI',
      source: (
        <a href="https://huggingface.co/MiniMaxAI/MiniMax-Text-01">
          MiniMax-Text-01 model page
        </a>
      ),
    },
    {
      provider: 'DeepSeek',
      source: (
        <span>
          DeepSeek API docs{' '}
          <a href="https://api-docs.deepseek.com/quick_start/pricing/">
            Models & Pricing
          </a>
        </span>
      ),
    },
  ],
};

const TABLE_DATA_PRICING = {
  fields: [{ name: 'Provider' }, { name: 'Source' }],
  rows: [
    {
      provider: 'Anthropic',
      source: (
        <>
          <a href="https://docs.anthropic.com/en/docs/about-claude/models">
            Models documentation page
          </a>{' '}
          or{' '}
          <a href="https://www.anthropic.com/pricing#anthropic-api">
            Pricing page
          </a>
        </>
      ),
    },
    {
      provider: 'Google',
      source: (
        <a href="https://ai.google.dev/pricing">Google AI pricing page</a>
      ),
    },
    {
      provider: 'OpenAI',
      source: <a href="https://openai.com/api/pricing/">API pricing page</a>,
    },
  ],
};

function Notes() {
  return (
    <div>
      <p>
        How the calculations are performed and where the source data comes from.
      </p>

      <div>
        <h3>Conversion rates used</h3>

        <Table tableData={TABLE_DATA_CONVERSION_RATES} />
      </div>

      <div>
        <h3>Model input limits</h3>

        <p>Models limits are sourced from the links below.</p>
        <Table tableData={TABLE_DATA_PROVIDERS} />
        <blockquote>
          <p>
            ℹ️ In the sources, limits are presented either as "context window"
            token limit (which considers a history of interactions) or as "IN"
            and "OUT" token limits (limits for a single interaction). This tool
            uses whatever is available, but ignores the "OUT" portion, since the
            focus of this tool is on inputting text.
          </p>
        </blockquote>
      </div>

      <div>
        <h3 id="api-pricing">API pricing</h3>
        <Table tableData={TABLE_DATA_PRICING} />
      </div>

      <div>
        <h3>Artwork</h3>
        <p>
          Cover image generated by AI using{' '}
          <a href="https://www.bing.com/images/create/cute-ai-chatbot-holding-a-stack-of-books-and-pages/1-665870ad5607457bab4d54a5a9e9dda8?FORM=GUH2CR">
            Bing Designer
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Notes;
