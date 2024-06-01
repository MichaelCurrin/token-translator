import { useState } from 'react';
import { PRICE_PER_MILLION_TOKENS } from '../../constants';
import Table from './Table';

/**
 * Parse a price string and return the numeric value.
 *
 * @param {string} priceString - The price string to be parsed.
 *
 * @return {number} The numeric value of the price string.
 */
function parsePriceString(priceString) {
  return Number(priceString.replace(/[^0-9.-]/g, ''));
}

/**
 * Sort an array of models based on the specified key.
 *
 * @param {string} key The key to sort the models by.
 * @param {Array} models The array of models to be sorted.
 * @return {Array} The sorted array of models.
 */
function sortModels(key, models) {
  let sortedArray = [...models];

  if (key === 'providerAndModel') {
    sortedArray.sort((a, b) => {
      console.log(a.provider, a.modelName);
      if (a.provider === b.provider) {
        return a.modelName.localeCompare(b.modelName);
      }
      return a.provider.localeCompare(b.provider);
    });
  } else if (key === 'input' || key === 'output') {
    sortedArray.sort((a, b) => {
      const aPrice = parsePriceString(a[key]);
      const bPrice = parsePriceString(b[key]);
      console.log(aPrice, bPrice);
      return bPrice - aPrice;
    });
  }

  return sortedArray;
}

function Pricing() {
  const [sortedModels, setSortedModels] = useState(PRICE_PER_MILLION_TOKENS);

  const [sortBy, setSortBy] = useState('providerAndModel');

  const handleOnSortBy = (event) => {
    const value = event.target.value;
    setSortBy(value);
    const x = sortModels(value, sortedModels);
    setSortedModels(x);
  };

  return (
    <div>
      <p>
        Prices for using each model through an API. The prices are for 1 million
        tokens (as given by the sources under{' '}
        <a href="#api-pricing">API Pricing</a>). Tip: enter <code>1000000</code>{' '}
        in the form above to see how many pages or novels that is.
      </p>
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
