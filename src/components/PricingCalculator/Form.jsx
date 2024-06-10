export const TOKEN_SIZE_OPTIONS = [
  { value: '20', label: '20 tokens - a line' },
  { value: '50', label: '50 tokens - a paragraph' },
  { value: '600', label: '600 tokens - an A4 page' },
  { value: '750', label: '750 tokens - 100 lines of JS code' },
  { value: '16000', label: '16K tokens' },
  { value: '100000', label: '100K tokens - a novel' },
  { value: '128000', label: '128K tokens' },
  { value: '200000', label: '200K tokens' },
  { value: '1000000', label: '1M tokens' },
  { value: 'custom', label: 'Custom...' },
];

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
          {modelChoices.map((model, index) => (
            <option key={index} value={model.modelName}>
              {model.provider} - {model.modelName}
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
        <label htmlFor="querySize">Prompt input size: </label>
        <select
          id="querySize"
          name="querySize"
          min="1"
          value={querySize}
          onChange={(e) => setQuerySize(e.target.value)}
        >
          {TOKEN_SIZE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
            style={{ marginLeft: '10px' }}
          />
        )}
      </div>

      <div>
        <label htmlFor="resultSize">Prompt output size: </label>
        <select
          id="resultSize"
          name="resultSize"
          min="1"
          value={resultSize}
          onChange={(e) => setResultSize(e.target.value)}
        >
          {TOKEN_SIZE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {resultSize === 'custom' && (
          <>
            <input
              id="customResultSize"
              name="customResultSize"
              className="numeric-input"
              type="number"
              placeholder="Enter custom token size"
              value={customResultSize}
              onChange={(e) => setCustomResultSize(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </>
        )}
      </div>
    </form>
  );
}

export default Form;
