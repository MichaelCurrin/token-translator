import { React, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import ConvertInput from "./components/custom/ConvertInput";
import ModelsTable from "./components/models/ModelsTable";
import SortingButtons from "./components/models/SortingButtons";
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
      <div>
        <h2>Notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default App;
