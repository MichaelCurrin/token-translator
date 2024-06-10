function InputForm({
  inputType,
  tokenValue,
  textValue,
  handleTokenChange,
  handleTextChange,
  handleRadioChange,
}) {
  return (
    <form>
      <div>
        <label htmlFor="radio-number">
          <input
            id="radio-number"
            type="radio"
            data-testid="radio-number"
            name="inputType"
            value="number"
            checked={inputType === 'number'}
            onClick={() => handleRadioChange('number')}
            readOnly
          />
          <span data-testid="user-input-number-label">Tokens: </span>
        </label>
        <input
          className="numeric-input"
          data-testid="user-input-number"
          type="number"
          value={tokenValue}
          min="1"
          onChange={handleTokenChange}
          disabled={inputType === 'text'}
          placeholder="Enter token count"
        />
      </div>
      <div>
        <label htmlFor="radio-text">
          <input
            id="radio-text"
            type="radio"
            data-testid="radio-text"
            name="inputType"
            value="text"
            checked={inputType === 'text'}
            onClick={() => handleRadioChange('text')}
            readOnly
          />
          <span data-testid="user-input-text-label">Text content: </span>
        </label>
        <textarea
          data-testid="user-input-text"
          style={{ width: '100%', height: '50px' }}
          value={textValue}
          onChange={handleTextChange}
          disabled={inputType === 'number'}
          placeholder="Enter text content"
        />
      </div>
    </form>
  );
}

export default InputForm;
