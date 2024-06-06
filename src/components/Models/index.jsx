import { useState } from 'react';
import { MODEL_INPUT_LIMITS } from '../../constants';
import { addCounts } from '../../lib';
import SortingButtons from './SortingButtons';
import Table from './Table';

function sortModelsByKey(key, models) {
  let sortedArray = [...models];

  if (key === 'providerAndModel') {
    sortedArray.sort((a, b) => {
      if (a.provider === b.provider) {
        return a.modelName.localeCompare(b.modelName);
      }
      return a.provider.localeCompare(b.provider);
    });
  } else if (key === 'tokens') {
    sortedArray.sort((a, b) => b.tokens - a.tokens);
  }

  return sortedArray;
}

function Models() {
  const initialSortKey = 'providerAndModel';

  const [sortedModels, setSortedModels] = useState(
    sortModelsByKey(initialSortKey, MODEL_INPUT_LIMITS.map(addCounts))
  );
  const [sortBy, setSortBy] = useState(initialSortKey);

  const handleOnSortBy = (key) => {
    setSortBy(key);
    setSortedModels(sortModelsByKey(key, sortedModels));
  };

  return (
    <div>
      <SortingButtons
        sortBy={sortBy}
        handleOnSortBy={handleOnSortBy}
        className="sorting-buttons"
      />
      <Table models={sortedModels} />
    </div>
  );
}

export default Models;
