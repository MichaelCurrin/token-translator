import { React, useState } from "react";
import { MODELS } from "../../constants";
import { addCounts } from "../../lib";
import ModelsTable from "./ModelsTable";
import SortingButtons from "./SortingButtons";


function Models() {
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
    <div>
      <SortingButtons
        sortOption={sortConfig}
        onSort={sortModels}
        className="sorting-buttons"
      />
      <ModelsTable models={sortedModels} />
    </div>
  );
}

export default Models;
