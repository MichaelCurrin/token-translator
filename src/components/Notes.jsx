import {
  CHARS_PER_TOKEN,
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
  WORDS_PER_TOKEN,
} from '../constants';
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
        'An A4 page typically contains 400-500 words, averaging around 450 words, based on search result various sources.',
    },
    {
      measure: 'Words per A5 novel',
      value: WORDS_PER_A5_BOOK.toLocaleString(),
      comment:
        'For novels (assuming A5 format), info was from mixed sources says a word count ranges from 70,000 to 120,000 words, or a minimum of 50,000 words and a typical range of 80,000 words.',
    },
  ],
};

const TABLE_DATA_PROVIDERS = {
  fields: [{ name: 'Provider' }, { name: 'Source' }],
  rows: [
    {
      provider: 'Google',
      source: (
        <a href="https://ai.google.dev/gemini-api/docs/models/gemini">
          Google's Gemini API documentation
        </a>
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
      provider: 'Meta',
      source: (
        <>
          <a href="https://ollama.com/blog/llama3">Ollama blog</a> page,{' '}
          <a href="https://ollama.com/library/phi3">Phi model</a> page,{' '}
          <a href="https://ollama.com/library/mixtral">Mixtral model</a>{' '}
        </>
      ),
    },
  ],
};

const TABLE_DATA_PRICING = {
  fields: [{ name: 'Provider' }, { name: 'Source' }],
  rows: [
    {
      provider: 'OpenAI',
      source: (
        <a href="https://openai.com/api/pricing/">
          https://openai.com/api/pricing/
        </a>
      ),
    },
    {
      provider: 'Gemini',
      source: (
        <a href="https://ai.google.dev/pricing">
          https://ai.google.dev/pricing
        </a>
      ),
    },
  ],
};

function Notes() {
  return (
    <div>
      <p>
        How the calculations are performed and where the source data comes from.
      </p>

      <p>
        For detailed constants, refer to{' '}
        <a href="https://github.com/MichaelCurrin/token-translator/blob/main/src/constants.js">
          <code>constants.js</code>
        </a>
        .
      </p>

      <div>
        <h3>Conversion rates used</h3>

        <Table tableData={TABLE_DATA_CONVERSION_RATES} />
      </div>

      <div>
        <h3>Model input limits</h3>

        <p>
          Models limits are sourced from the links below. They are presented
          either as "context window" token limit (which considers a history of
          interactions) or "IN" and "OUT" token limits (for a single
          interaction). This tool focuses on the input you can provide to a
          model, so ignores the "OUT" portion.
        </p>
        <Table tableData={TABLE_DATA_PROVIDERS} />
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
