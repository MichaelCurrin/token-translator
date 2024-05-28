import { React, useState } from "react";
import ConvertInput from "./components/ConvertInput";
import Header from "./components/Header";
import ModelsTable from "./components/ModelsTable";
import SortingButtons from "./components/SortingButtons";
import { MODELS } from "./constants";
import { addCounts } from "./lib";

function App() {
  const [sortedModels, setSortedModels] = useState(MODELS.map(addCounts));
  const [sortConfig, setSortConfig] = useState("providerAndModel");

  const sortModels = (key) => {
    let sortedArray = [...sortedModels];

    if (key === "providerAndModel") {
      sortedArray.sort((a, b) => {
        if (a.provider === b.provider) {
          return a.modelName.localeCompare(b.modelName);
        }
        return a.provider.localeCompare(b.provider);
      });
    } else if (key === "tokens") {
      sortedArray.sort((a, b) => b.tokens - a.tokens);
    }

    setSortedModels(sortedArray);
    setSortConfig(key);
  };

  return (
    <div className="container">
      <Header />
      <div>
        <h2>Popular models</h2>
        <SortingButtons
          sortOption={sortConfig}
          onSort={sortModels}
          className="sorting-buttons"
        />
        <ModelsTable models={sortedModels} />
      </div>
      <div>
        <h2>Custom input</h2>
        <ConvertInput />
      </div>
    </div>
  );
}

export default App;
