import React from "react";

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
        <label
          htmlFor="radio-number"
          onClick={() => handleRadioChange("number")}
        >
          <input
            id="radio-number"
            type="radio"
            data-testid="radio-number"
            name="inputType"
            value="number"
            checked={inputType === "number"}
            readOnly
          />
          <span data-testid="user-input-number-label">Input Token:</span>
        </label>
        <input
          data-testid="user-input-number"
          type="number"
          value={tokenValue}
          min="1"
          onChange={handleTokenChange}
          disabled={inputType === "text"}
          placeholder="Enter token count"
          style={{ textAlign: "right" }}
        />
      </div>
      <div>
        <label htmlFor="radio-text" onClick={() => handleRadioChange("text")}>
          <input
            id="radio-text"
            type="radio"
            data-testid="radio-text"
            name="inputType"
            value="text"
            checked={inputType === "text"}
            readOnly
          />
          <span data-testid="user-input-text-label">Input Text:</span>
        </label>
        <textarea
          data-testid="user-input-text"
          style={{ width: "100%", height: "50px" }}
          value={textValue}
          onChange={handleTextChange}
          disabled={inputType === "number"}
          placeholder="Enter text content"
        />
      </div>
    </form>
  );
}

export default InputForm;
