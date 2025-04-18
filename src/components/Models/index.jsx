import { useState } from 'react';
import { MODEL_INPUT_LIMITS } from '../../constants';
import { addCounts } from '../../lib';
import Chart from './Chart';
import SortingButtons from './SortingButtons';
import Table from './Table';

const INITIAL_SORT_KEY = 'providerAndModel';

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
  const [sortedModels, setSortedModels] = useState(
    sortModelsByKey(INITIAL_SORT_KEY, MODEL_INPUT_LIMITS.map(addCounts)),
  );
  const [sortBy, setSortBy] = useState(INITIAL_SORT_KEY);

  const handleOnSortBy = (key) => {
    setSortBy(key);
    setSortedModels(sortModelsByKey(key, sortedModels));
  };

  const chartData = sortedModels.map((item) => ({
    name: item.modelName,
    value: item.tokens,
  }));

  return (
    <div>
      <p>
        The "Tokens" value is the maximum input or the maximum context length.
        Each value is also converted to a more human-relatable metric, based on
        rough conversation rates. See <a href="#notes">Notes</a> for sources of
        information. See{' '}
        <a href="https://artificialanalysis.ai/leaderboards/models">
          LLM leaderboard
        </a>{' '}
        for a wider range of models and stats.
      </p>
      <SortingButtons
        sortBy={sortBy}
        handleOnSortBy={handleOnSortBy}
        className="sorting-buttons"
      />
      <Chart xAxisLabel="Provider" yAxisLabel="Tokens" chartData={chartData} />
      <Table models={sortedModels} />
    </div>
  );
}

export default Models;
