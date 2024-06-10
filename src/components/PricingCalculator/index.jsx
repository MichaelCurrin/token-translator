import { useEffect, useState } from 'react';

const PricingCalculator = () => {
  const [model, setModel] = useState('gpt-3.5');
  const [queries, setQueries] = useState(1);
  const [querySize, setQuerySize] = useState('10');
  const [customQuerySize, setCustomQuerySize] = useState(0);
  const [resultSize, setResultSize] = useState('10');
  const [customResultSize, setCustomResultSize] = useState(0);
  const [totalTokens, setTotalTokens] = useState(0);

  useEffect(() => {
    const queryTokens =
      querySize === 'custom' ? customQuerySize : parseInt(querySize, 10);
    const resultTokens =
      resultSize === 'custom' ? customResultSize : parseInt(resultSize, 10);
    const tokensPerQuery = queryTokens + resultTokens;

    setTotalTokens(queries * tokensPerQuery);
  }, [
    model,
    queries,
    querySize,
    customQuerySize,
    resultSize,
    customResultSize,
  ]);

  return (
    <div>
      <p>
        If you to use an LLM through a paid API subscriptions, you probably want to estimate the Dollar cost for a typical query so you can budget well and choose a suitable model. Enter how many tokens you expect to send and receive and then get the cost out below.
      </p>
      <h3>Estimated usage</h3>
      <form>
        <div>
          <label htmlFor="model">Model: </label>
          <select
            id="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="gpt-3.5">GPT-3.5</option>
            <option value="gpt-4">GPT-4</option>
          </select>
        </div>

        <div>
          <label htmlFor="queries">Total queries: </label>
          <input
            class="numeric-input"
            id="queries"
            type="number"
            name="queries"
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="querySize">Query input size: </label>
          <select
            id="querySize"
            name="querySize"
            value={querySize}
            onChange={(e) => setQuerySize(e.target.value)}
          >
            <option value="10">One line (≈10 tokens)</option>
            <option value="50">Paragraph (≈50 tokens)</option>
            <option value="250">Page (≈250 tokens)</option>
            <option value="custom">Custom</option>
          </select>
          {querySize === 'custom' && (
            <input
              type="number"
              id="customQuerySize"
              name="customQuerySize"
              placeholder="Enter custom token size"
              value={customQuerySize}
              onChange={(e) => setCustomQuerySize(e.target.value)}
            />
          )}
        </div>

        <div>
          <label htmlFor="resultSize">Query output size: </label>
          <select
            id="resultSize"
            name="resultSize"
            value={resultSize}
            onChange={(e) => setResultSize(e.target.value)}
          >
            <option value="10">One line (≈10 tokens)</option>
            <option value="50">Paragraph (≈50 tokens)</option>
            <option value="250">Page (≈250 tokens)</option>
            <option value="custom">Custom</option>
          </select>
          {resultSize === 'custom' && (
            <input
              type="number"
              id="customResultSize"
              name="customResultSize"
              placeholder="Enter custom token size"
              value={customResultSize}
              onChange={(e) => setCustomResultSize(e.target.value)}
            />
          )}
        </div>
      </form>

      <div>
        <h3>Estimated results</h3>
        <p>Tokens {totalTokens}</p>
        <p>Cost {0}</p>
      </div>
    </div>
  );
};

export default PricingCalculator;
