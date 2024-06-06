import {
  CHARS_PER_TOKEN,
  WORDS_PER_A4_PAGE,
  WORDS_PER_A5_BOOK,
} from '../constants';

const LINK_OPENAI_TOKENS_ARTICLE =
  'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them';
const LINK_TOKENIZER = 'https://platform.openai.com/tokenizer';

const CONVERSION_RATES = {
  fields: [
    {
      name: 'Measure',
    },
    {
      name: 'Value',
      alignRight: true,
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
          <b>4 characters</b> or <b>¾ words</b> (Source:{' '}
          <a href={LINK_OPENAI_TOKENS_ARTICLE}>OpenAI Help Center</a>
          ). The calculated word count is not so useful to show here on this
          page, but it is necessary for internal use so that number of pages and
          books can be calculated. See below. <br /> If you are interested a{' '}
          <b>precise</b> value for the number of tokens and words in a piece of
          text, check out OpenAI's tokenizer tool{' '}
          <a href={LINK_TOKENIZER}>here</a>. For programmitic use, they
          recommend using the <code>tiktoken</code> package.
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
        'For novels (assuming A5 format), the word count ranges from 70,000 to 120,000 words, with a minimum of 50,000 words and a typical range of 80,000 words. This is based on search result various sources. This tool uses the latter value as the standard.',
    },
  ],
};

function Table({ tableData }) {
  return (
    <table>
      <thead>
        <tr>
          {tableData.fields.map((field) => (
            <th key={field.name}>{field.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row) => (
          <tr key={Math.random()}>
            {Object.values(row).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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

        <Table tableData={CONVERSION_RATES} />
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

        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google</td>
              <td>
                <a href="https://ai.google.dev/gemini-api/docs/models/gemini">
                  Google's Gemini API documentation
                </a>
              </td>
            </tr>
            <tr>
              <td>OpenAI</td>
              <td>
                <a href="https://platform.openai.com/docs/models">
                  OpenAI Platform documentation
                </a>
              </td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>
                <a href="https://ollama.com/blog/llama3">Ollama blog</a>,{' '}
                <a href="https://ollama.com/library/phi3">Phi model</a> page,{' '}
                <a href="https://ollama.com/library/mixtral">Mixtral model</a>{' '}
                page.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 id="api-pricing">API pricing</h3>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>
                <a href="https://openai.com/api/pricing/">
                  https://openai.com/api/pricing/
                </a>
              </td>
            </tr>
            <tr>
              <td>Gemini</td>
              <td>
                <a href="https://ai.google.dev/pricing">
                  https://ai.google.dev/pricing
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
