import { useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import Table from './Table';

const INITIAL_SORT_KEY = 'providerAndModel';

/**
 * Flatten a model, handling models with a range and models without a range.
 */
function flattenModelWithRange(model) {
  if (!model.range) {
    const singleModel = {
      ...model,
      input: model.input,
      output: model.output,
      note: '',
    };
    return [singleModel];
  }

  const { threshold, low, high } = model.range;

  const lowModel = {
    ...model,
    input: low.input,
    output: low.output,
    note: `<${threshold} tokens`,
  };

  const highModel = {
    ...model,
    input: high.input,
    output: high.output,
    note: `>${threshold} tokens`,
  };

  return [lowModel, highModel];
}

/**
 * Sort an array of models based on the specified key.
 *
 * @param {string} key The key to sort the models by.
 * @param {Array} models The array of models to be sorted.
 *
 * @return {Array} The sorted array of models.
 */
export function sortModels(key, models) {
  let sortedArray = [...models];

  if (key === 'providerAndModel') {
    sortedArray.sort((a, b) => {
      if (a.provider === b.provider) {
        return a.modelName.localeCompare(b.modelName);
      }
      return a.provider.localeCompare(b.provider);
    });
  } else if (key === 'input' || key === 'output') {
    sortedArray.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      return bValue - aValue;
    });
  }

  return sortedArray;
}

function Pricing() {
  const [sortBy, setSortBy] = useState(INITIAL_SORT_KEY);
  const [sortedModels, setSortedModels] = useState(
    sortModels(sortBy, PRICE_PER_MILLION_TOKENS.flatMap(flattenModelWithRange)),
  );

  const handleOnSortBy = (event) => {
    const value = event.target.value;

    setSortBy(value);
    setSortedModels(sortModels(value, sortedModels));
  };

  return (
    <div>
      <p>
        Prices are shown here if a model is accessible through a paid API
        subscription. The prices are quoted as cost per 1 million tokens, as
        taken from the sources under <a href="#api-pricing">API Pricing</a>.
      </p>
      <blockquote>
        <p>
          💡 Tip: enter <code>1000000</code> (one million) in the form above to
          calculate how many pages or novels that would be.
        </p>
      </blockquote>
      <div>
        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" value={sortBy} onChange={handleOnSortBy}>
          <option value="providerAndModel">Name</option>
          <option value="input">Price (descending)</option>
        </select>
      </div>
      <br />
      <Table models={sortedModels} />
    </div>
  );
}

export default Pricing;
