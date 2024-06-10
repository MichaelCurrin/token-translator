function Form({
  modelChoices,
  modelName,
  setModelName,
  queries,
  setQueries,
  querySize,
  setQuerySize,
  customQuerySize,
  setCustomQuerySize,
  resultSize,
  setResultSize,
  customResultSize,
  setCustomResultSize,
}) {
  return (
    <form>
      <div>
        <label htmlFor="model">Model: </label>
        <select
          id="model"
          name="model"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        >
          {modelChoices.map((m, index) => (
            <option key={index} value={m.modelName}>
              {m.provider} - {m.modelName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="queries">Total queries: </label>
        <input
          className="numeric-input"
          id="queries"
          type="number"
          name="queries"
          min="1"
          value={queries}
          onChange={(e) => setQueries(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="querySize">Query input size: </label>
        <select
          id="querySize"
          name="querySize"
          min="1"
          value={querySize}
          onChange={(e) => setQuerySize(e.target.value)}
        >
          <option value="50">1x line (≈50 tokens)</option>
          <option value="200">1x paragraph (≈200 tokens)</option>
          <option value="600">1x A4 page (≈600 tokens)</option>
          <option value="100000">1x novel (≈100k tokens)</option>
          <option value="128000">128K tokens</option>
          <option value="1000000">1M tokens</option>
          <option value="custom">Custom</option>
        </select>
        {querySize === 'custom' && (
          <input
            id="customQuerySize"
            name="customQuerySize"
            className="numeric-input"
            type="number"
            placeholder="Enter custom token size"
            min="1"
            value={customQuerySize}
            onChange={(e) => setCustomQuerySize(e.target.value)}
          />
        )}
      </div>

      <div>
        <label htmlFor="resultSize">Query output size: </label>
        <select
          id="resultSize"
          name="resultSize"
          min="1"
          value={resultSize}
          onChange={(e) => setResultSize(e.target.value)}
        >
          <option value="50">1x line (≈50 tokens)</option>
          <option value="200">1x paragraph (≈200 tokens)</option>
          <option value="600">1x A4 page (≈600 tokens)</option>
          <option value="100000">1x novel (≈100k tokens)</option>
          <option value="128000">128K tokens</option>
          <option value="1000000">1M tokens</option>
          <option value="custom">Custom</option>
        </select>
        {resultSize === 'custom' && (
          <input
            id="customResultSize"
            name="customResultSize"
            className="numeric-input"
            type="number"
            placeholder="Enter custom token size"
            value={customResultSize}
            onChange={(e) => setCustomResultSize(e.target.value)}
          />
        )}
      </div>
    </form>
  );
}

export default Form;
