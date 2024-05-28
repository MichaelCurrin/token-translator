import { React, useState } from 'react';
import ModelsTable from './components/ModelsTable';
import SortingButtons from './components/SortingButtons';
import { MODELS } from './constants';
import { addCounts } from './lib';

function App() {
  const [sortedModels, setSortedModels] = useState(MODELS.map(addCounts));
  const [sortConfig, setSortConfig] = useState('providerAndModel');

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
      sortedArray.sort((a, b) => a.tokens - b.tokens);
    }
    setSortedModels(sortedArray);
    setSortConfig(key);
  };

  return (
    <div className="container">
      <h1>Token Translator</h1>
      <SortingButtons sortOption={sortConfig} onSort={sortModels} className="sorting-buttons" />
      <ModelsTable models={sortedModels} />
    </div>
  );
}

export default App;
