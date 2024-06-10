import { useEffect, useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from "../../constants";

const PricingCalculator = () => {
  const modelNames = PRICE_PER_MILLION_TOKENS.map(modelData => `${modelData.provider} - ${modelData.modelName}`).sort((a, b) => a.localeCompare(b));

  const [model, setModel] = useState(modelNames[0]);
  const [queries, setQueries] = useState(1);
  const [querySize, setQuerySize] = useState('50');
  const [customQuerySize, setCustomQuerySize] = useState(600);
  const [resultSize, setResultSize] = useState('50');
  const [customResultSize, setCustomResultSize] = useState(600);
  const [totalInputTokens, setTotalInputTokens] = useState(0);
  const [totalOutputTokens, setTotalOutputTokens] = useState(0);
  const [totalTokens, setTotalTokens] = useState(totalInputTokens + totalOutputTokens);
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const queryTokens =
      querySize === 'custom' ? customQuerySize : parseInt(querySize, 10);
    const resultTokens =
      resultSize === 'custom' ? customResultSize : parseInt(resultSize, 10);
    const tokensPerQuery = queryTokens + resultTokens;

    setTotalInputTokens(queries * queryTokens);
    setTotalOutputTokens(queries * resultTokens);
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
        If you to use an LLM through a paid API subscriptions, you probably want to estimate the Dollar cost for a typical query so you can budget well and choose a suitable model.
      </p>
      <p>Enter how many tokens you expect to send and receive and then get the cost out.</p>
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
            {modelNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="queries">Total queries: </label>
          <input
            className="numeric-input"
            id="queries"
            type="number"
            name="queries"
            min="1"
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="querySize">Query input size: </label>
          <select
            id="querySize"
            name="querySize"
            min="1"
            value={querySize}
            onChange={(e) => setQuerySize(e.target.value)}
          >
            <option value="50">One line (≈50 tokens)</option>
            <option value="200">Paragraph (≈200 tokens)</option>
            <option value="600">Page (≈600 tokens)</option>
            <option value="custom">Custom</option>
          </select>
          {querySize === 'custom' && (
            <input
              id="customQuerySize"
              name="customQuerySize"
              className="numeric-input"
              type="number"
              placeholder="Enter custom token size"
              min="1"
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
            min="1"
            value={resultSize}
            onChange={(e) => setResultSize(e.target.value)}
          >
            <option value="50">One line (≈50 tokens)</option>
            <option value="200">Paragraph (≈200 tokens)</option>
            <option value="600">Page (≈600 tokens)</option>
            <option value="custom">Custom</option>
          </select>
          {resultSize === 'custom' && (
            <input
              id="customResultSize"
              name="customResultSize"
              className="numeric-input"
              type="number"
              placeholder="Enter custom token size"
              value={customResultSize}
              onChange={(e) => setCustomResultSize(e.target.value)}
            />
          )}
        </div>
      </form>

      <div>
        <h3>Estimated results</h3>
        <p>Total input tokens: {totalInputTokens.toLocaleString()}</p>
        <p>Total output tokens: {totalOutputTokens.toLocaleString()}</p>
        <p>Total tokens: {totalTokens.toLocaleString()}</p>
        <p>Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default PricingCalculator;
