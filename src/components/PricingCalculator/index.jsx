import { useEffect, useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import { parsePriceString, sortModels } from '../Pricing';
import { CostSummary } from './CostSummary';
import Form from './Form';

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

  useEffect(() => {
    const calculateTokens = (inTokens, outTokens) => {
      const calculatedTotalInputTokens = inTokens * queries;
      const calculatedTotalOutputTokens = outTokens * queries;

      setTotalInputTokens(calculatedTotalInputTokens);
      setTotalOutputTokens(calculatedTotalOutputTokens);
      setTotalTokens(calculatedTotalInputTokens + calculatedTotalOutputTokens);
    };

    const calculateCosts = (inTokens, outTokens) => {
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
        (totalInputTokens * inputCostRate) / ONE_MILLION_TOKENS;
      const calculatedTotalOutputCost =
        (totalOutputTokens * outputCostRate) / ONE_MILLION_TOKENS;

      setTotalInputCost(calculatedTotalInputCost);
      setTotalOutputCost(calculatedTotalOutputCost);
      setTotalCost(calculatedTotalInputCost + calculatedTotalOutputCost);
    };

    const inTokens =
      querySize === 'custom' ? customQuerySize : parseInt(querySize, 10);
    const outTokens =
      resultSize === 'custom' ? customResultSize : parseInt(resultSize, 10);

    calculateTokens(inTokens, outTokens);
    calculateCosts(inTokens, outTokens);
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
      <Form
        modelChoices={modelChoices}
        modelName={modelName}
        setModelName={setModelName}
        queries={queries}
        setQueries={setQueries}
        querySize={querySize}
        setQuerySize={setQuerySize}
        customQuerySize={customQuerySize}
        setCustomQuerySize={setCustomQuerySize}
        resultSize={resultSize}
        setResultSize={setResultSize}
        customResultSize={customResultSize}
        setCustomResultSize={setCustomResultSize}
      />
      <div>
        <h3>Estimated results</h3>
        <CostSummary
          totalInputTokens={totalInputTokens}
          totalOutputTokens={totalOutputTokens}
          totalTokens={totalTokens}
          totalInputCost={totalInputCost}
          totalOutputCost={totalOutputCost}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
}

export default PricingCalculator;
