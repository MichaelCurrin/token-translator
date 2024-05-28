import React, { useState } from 'react';
import { MODELS } from './constants';
import { addCounts } from './lib';

function App() {
  const [sortedModels, setSortedModels] = useState(MODELS.map(addCounts));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // sorting not really nedd if there's some other visual way to show size across columns
  // or sort by Provider OR count only with buttons
  function sortBy(key) {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedArray = sortedModels.sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setSortedModels(sortedArray);
    setSortConfig({ key, direction });
  }



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortBy('provider')}>Provider</th>
            <th onClick={() => sortBy('modelName')}>Model Name</th>
            <th onClick={() => sortBy('tokens')}>Tokens</th>
            <th onClick={() => sortBy('wordCount')}>Word Count</th>
            <th onClick={() => sortBy('a4PageCount')}>A4 Pages</th>
            <th onClick={() => sortBy('a5NovelCount')}>A5 Novels</th>
          </tr>
        </thead>
        <tbody>
          {sortedModels.map((model, index) => (
            <tr key={index}>
              <td>{model.provider}</td>
              <td>{model.modelName}</td>
              <td className="numeric">{model.tokens}</td>
              <td className="numeric">{model.wordCount.toFixed(1)}</td>
              <td className="numeric">{model.a4PageCount.toFixed(1)}</td>
              <td className="numeric">{model.a5NovelCount.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
