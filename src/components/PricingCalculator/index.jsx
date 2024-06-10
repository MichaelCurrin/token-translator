import { useEffect, useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import { parsePriceString, sortModels } from '../Pricing';

const ONE_MILLION_TOKENS = 1000000;

function PricingCalculator() {
  const modelChoices = sortModels('providerAndModel', PRICE_PER_MILLION_TOKENS);

  const [modelName, setModelName] = useState(modelChoices[0].modelName);
  const [queries, setQueries] = useState(1);

  const [querySize, setQuerySize] = useState('50');
  const [customQuerySize, setCustomQuerySize] = useState(1000000);
  const [resultSize, setResultSize] = useState('50');
  const [customResultSize, setCustomResultSize] = useState(1000000);

  const [totalInputTokens, setTotalInputTokens] = useState(0);
  const [totalOutputTokens, setTotalOutputTokens] = useState(0);
  const [totalTokens, setTotalTokens] = useState(
    totalInputTokens + totalOutputTokens,
  );

  const [totalInputCost, setTotalInputCost] = useState(0);
  const [totalOutputCost, setTotalOutputCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const calculateTokens = (inTokens, outTokens) => {
    const calculatedTotalInputTokens = inTokens * queries;

    const calculatedTotalOutputTokens = outTokens * queries;
    return { calculatedTotalInputTokens, calculatedTotalOutputTokens };
  };
  const calculateCosts = (
    inTokens,
    outTokens,
    calculatedTotalInputTokens,
    calculatedTotalOutputTokens,
  ) => {
    const selectedModel = modelChoices.find(
      (model) => model.modelName === modelName,
    );

    const queryRange = selectedModel.range;
    const inputCostRate = parsePriceString(
      selectedModel.input ||
        (inTokens >= queryRange.threshold
          ? queryRange.high.input
          : queryRange.low.input),
    );
    const outputCostRate = parsePriceString(
      selectedModel.output ||
        (outTokens >= queryRange.threshold
          ? queryRange.high.output
          : queryRange.low.output),
    );

    const calculatedTotalInputCost =
      (calculatedTotalInputTokens * inputCostRate) / ONE_MILLION_TOKENS;
    const calculatedTotalOutputCost =
      (calculatedTotalOutputTokens * outputCostRate) / ONE_MILLION_TOKENS;

    return { calculatedTotalInputCost, calculatedTotalOutputCost };
  };

  useEffect(() => {
    const inTokens =
      querySize === 'custom' ? customQuerySize : parseInt(querySize, 10);
    const outTokens =
      resultSize === 'custom' ? customResultSize : parseInt(resultSize, 10);

    const { calculatedTotalInputTokens, calculatedTotalOutputTokens } =
      calculateTokens(inTokens, outTokens);
    const { calculatedTotalInputCost, calculatedTotalOutputCost } =
      calculateCosts(
        inTokens,
        outTokens,
        calculatedTotalInputTokens,
        calculatedTotalOutputTokens,
      );

    setTotalInputTokens(calculatedTotalInputTokens);
    setTotalOutputTokens(calculatedTotalOutputTokens);
    setTotalTokens(calculatedTotalInputTokens + calculatedTotalOutputTokens);

    setTotalInputCost(calculatedTotalInputCost);
    setTotalOutputCost(calculatedTotalOutputCost);
    setTotalCost(calculatedTotalInputCost + calculatedTotalOutputCost);
  }, [
    modelName,
    queries,
    querySize,
    customQuerySize,
    resultSize,
    customResultSize,
  ]);

  return (
    <div>
      <p>
        If you to use an LLM through a paid API subscriptions, you probably want
        to estimate the Dollar cost for a typical query so you can budget well
        and choose a suitable model.
      </p>
      <p>
        Enter how many tokens you expect to send and receive and then get the
        cost out.
      </p>
      <h3>Estimated usage</h3>
      <blockquote>
        <p>
          ℹ️ Recommended - if you're running your app as a service, set "Total
          queries" based on the number of expected queries per day, month, etc.
        </p>
      </blockquote>
      <form>
        <div>
          <label htmlFor="model">Model: </label>
          <select
            id="model"
            name="model"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          >
            {modelChoices.map((m, index) => (
              <option key={index} value={m.modelName}>
                {m.provider} - {m.modelName}
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
            <option value="50">1x line (≈50 tokens)</option>
            <option value="200">1x paragraph (≈200 tokens)</option>
            <option value="600">1x A4 page (≈600 tokens)</option>
            <option value="100000">1x novel (≈100k tokens)</option>
            <option value="128000">128K tokens</option>
            <option value="1000000">1M tokens</option>
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
            <option value="50">1x line (≈50 tokens)</option>
            <option value="200">1x paragraph (≈200 tokens)</option>
            <option value="600">1x A4 page (≈600 tokens)</option>
            <option value="100000">1x novel (≈100k tokens)</option>
            <option value="128000">128K tokens</option>
            <option value="1000000">1M tokens</option>
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

        <p>
          Total input cost: $
          {totalInputCost.toLocaleString(undefined, {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
          })}
        </p>
        <p>
          Total output cost: $
          {totalOutputCost.toLocaleString(undefined, {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
          })}
        </p>
        <p>
          Total cost:{' '}
          <b>
            $
            {totalCost.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })}
          </b>
        </p>
      </div>
    </div>
  );
}

export default PricingCalculator;
