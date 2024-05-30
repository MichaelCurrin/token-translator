function Notes() {
  return (
    <div>
      <p>
        How the calculations are performed and where the source data comes from.
      </p>

      <p>
        For detailed constants, refer to{" "}
        <a href="https://github.com/MichaelCurrin/token-translator/blob/main/src/constants.js">
          <code>constants.js</code>
        </a>
        .
      </p>

      <h3>Token Conversions</h3>

      <ul>
        <li>
          The "Tokens" and "Words" values are roughly estimated, they are
          only give general meaning to inputs or to compare model power.
        </li>
        <li>
          According to OpenAI's approximation, 1 token is approximately equal to
          4 characters or ¾ words. (Source:{" "}
          <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">
            OpenAI Help Center
          </a>
          )
        </li>
        <li>
          For precise values, consider using OpenAI's user-friendly tokenizer
          tool available at{" "}
          <a href="https://platform.openai.com/tokenizer">OpenAI Platform</a>.
          They also recommend integrating <code>tiktoken</code> package into
          your application for accurate tokenization.
        </li>
      </ul>

      <h3>Page and Book Formats</h3>

      <ul>
        <li>
          An A4 page typically contains 400-500 words, averaging around 450
          words based on various sources.
        </li>
        <li>
          For novels (assuming A5 format), the word count ranges from 70,000 to
          120,000 words, with a minimum of 50,000 words and a typical range of
          80,000 words. This application uses the latter as the standard.
        </li>
      </ul>

      <h3>Models</h3>

      <p>
        The sources outline model constraints in two ways: through a "context
        window" token limit, which considers a history of interactions, or "IN"
        and "OUT" token limits. This tool focuses on the input you can provide
        to a model, so we opt for either "context window" or "IN" alone
        (excluding OUT) to maintain simplicity.
      </p>

      <ul>
        <li>
          <b>Gemini</b> models' "IN" values sourced from{" "}
          <a href="https://ai.google.dev/gemini-api/docs/models/gemini">
            Google's Gemini API documentation
          </a>
          .
        </li>
        <li>
          <b>OpenAI</b> models' context windows obtained from{" "}
          <a href="https://platform.openai.com/docs/models">
            OpenAI Platform documentation
          </a>
          .
        </li>
        <li>
          <b>Meta</b> models' "IN" values referenced from the{" "}
          <a href="https://ollama.com/blog/llama3">Ollama blog</a>, the{" "}
          <a href="https://ollama.com/library/phi3">Phi model</a> page, and the{" "}
          <a href="https://ollama.com/library/mixtral">Mixtral model</a> page. .
        </li>
      </ul>
    </div>
  );
}

export default Notes;
