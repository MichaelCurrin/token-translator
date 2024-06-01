import { useState } from 'react';
import { MODEL_INPUT_LIMITS } from '../../constants';
import { addCounts } from '../../lib';
import SortingButtons from './SortingButtons';
import Table from './Table';

function Models() {
  const [sortedModels, setSortedModels] = useState(
    MODEL_INPUT_LIMITS.map(addCounts),
  );
  const [sortBy, setSoryBy] = useState('providerAndModel');

  const sortModels = (key) => {
    let sortedArray = [...sortedModels];

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

    setSortedModels(sortedArray);
    setSoryBy(key);
  };

  return (
    <div>
      <SortingButtons
        sortBy={sortBy}
        onSort={sortModels}
        className="sorting-buttons"
      />
      <Table models={sortedModels} />
    </div>
  );
}

export default Models;
