import React from "react";

function InputForm({
    inputType, tokenValue, textValue, handleTokenChange, handleTextChange, handleRadioChange,
}) {
    return (
        <form>
            <div>
                <input
                    type="radio"
                    data-testid="radio-number"
                    name="inputType"
                    value="number"
                    checked={inputType === "number"}
                    onChange={() => handleRadioChange("number")} />
                <label data-testid="user-input-number-label" htmlFor="number">
                    Input Token:{" "}
                </label>
                <input
                    data-testid="user-input-number"
                    type="number"
                    value={tokenValue}
                    min="1"
                    onChange={handleTokenChange}
                    disabled={inputType === "text"}
                    placeholder="Enter token count"
                    style={{ textAlign: "right" }} />
            </div>
            <div>
                <input
                    type="radio"
                    data-testid="radio-text"
                    name="inputType"
                    value="text"
                    checked={inputType === "text"}
                    onChange={() => handleRadioChange("text")} />
                <label data-testid="user-input-text-label" htmlFor="text">
                    Input Text:{" "}
                </label>
                <textarea
                    data-testid="user-input-text"
                    style={{ width: "100%", height: "50px" }}
                    value={textValue}
                    onChange={handleTextChange}
                    disabled={inputType === "number"}
                    placeholder="Enter text content" />
            </div>
        </form>
    );
}

export default InputForm
