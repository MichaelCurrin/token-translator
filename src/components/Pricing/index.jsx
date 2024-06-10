import { useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import Table from './Table';

const INITIAL_SORT_KEY = 'providerAndModel';

/**
 * Parse a price string and return the numeric value.
 *
 * @param {string} priceString - The price string to be parsed.
 *
 * @return {number} The numeric value of the price string.
 */
export function parsePriceString(priceString) {
  return Number(priceString.replace(/[^0-9.-]/g, ''));
}

/**
 * Flatten a model, handling models with a range and models without a range.
 */
function flattenModelWithRange(model) {
  if (!model.range) {
    return {
      ...model,
      input: model.input,
      output: model.output,
      note: '',
    };
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
      const aPrice = parsePriceString(a[key]);
      const bPrice = parsePriceString(b[key]);
      return bPrice - aPrice;
    });
  }

  return sortedArray;
}

function Pricing() {
  const [sortedModels, setSortedModels] = useState(
    sortModels(INITIAL_SORT_KEY, PRICE_PER_MILLION_TOKENS).flatMap(
      flattenModelWithRange,
    ),
  );
  const [sortBy, setSortBy] = useState('providerAndModel');

  const handleOnSortBy = (event) => {
    const value = event.target.value;
    setSortBy(value);
    setSortedModels(
      sortModels(value, sortedModels).flatMap(flattenModelWithRange),
    );
  };

  return (
    <div>
      <p>
        Prices are shown if a model is accessible through a paid API
        subscription. A price is for 1 million tokens (as given by the sources
        under <a href="#api-pricing">API Pricing</a>).
      </p>
      <blockquote>
        <p>
          💡 Tip: enter <code>1000000</code> in the form above to see how many
          pages or novels that would be.
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
