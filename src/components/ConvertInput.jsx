import React, { useCallback, useEffect, useState } from "react";
import { tokenCountToWordCount, wordCountToPageCounts } from "../lib";
import "./ConvertInput.css";

const DEFAULT_TOKEN_COUNT = 10000;
const DEFAULT_TEXT =
  "Paste as much text as you like here and have the token count and other values estimated.";

function ConvertInput() {
  const [inputType, setInputType] = useState("number");
  const [tokenValue, setTokenValue] = useState(DEFAULT_TOKEN_COUNT);
  const [textValue, setTextValue] = useState(DEFAULT_TEXT);

  const [result, setResult] = useState({
    tokens: 0,
    wordCount: 0,
    a4PageCount: 0,
    a5NovelCount: 0,
  });

  const handleTokenChange = (e) => {
    setTokenValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleRadioChange = (type) => {
    setInputType(type);

    setResult({});
  };

  const handleTokenSubmit = useCallback(() => {
    if (!tokenValue) {
      return;
    }

    const tokenCount = parseInt(tokenValue, 10);
    const wordCount = tokenCountToWordCount(tokenCount);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    setResult({
      tokens: tokenCount,
      wordCount,
      a4PageCount: a4PageCount.toFixed(1),
      a5NovelCount: a5NovelCount.toFixed(1),
    });
  }, [tokenValue]);

  const handleTextSubmit = useCallback(() => {
    if (!textValue) {
      return;
    }

    const tokenCount = Math.ceil(textValue.length / 4);
    const wordCount = tokenCountToWordCount(tokenCount);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

    setResult({
      tokens: tokenCount,
      wordCount,
      a4PageCount: a4PageCount.toFixed(1),
      a5NovelCount: a5NovelCount.toFixed(1),
    });
  }, [textValue]);

  useEffect(() => {
    if (inputType === "number" && tokenValue) {
      handleTokenSubmit();
    } else if (inputType === "text" && textValue) {
      handleTextSubmit();
    } else {
      setResult({
        tokens: 0,
        wordCount: 0,
        a4PageCount: 0,
        a5NovelCount: 0,
      });
    }
  }, [tokenValue, textValue, inputType, handleTokenSubmit, handleTextSubmit]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tokens</th>
            <th>Word Count</th>
            <th>A4 Pages</th>
            <th>A5 Novels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.tokens}</td>
            <td>{result.wordCount}</td>
            <td>{result.a4PageCount}</td>
            <td>{result.a5NovelCount}</td>
          </tr>
        </tbody>
      </table>

      <form>
        <div>
          <input
            type="radio"
            id="number"
            name="inputType"
            value="number"
            checked={inputType === "number"}
            onChange={() => handleRadioChange("number")}
          />
          <label htmlFor="number">Input Token: </label>
          <input
            type="number"
            value={tokenValue}
            onChange={handleTokenChange}
            disabled={inputType === "text"}
            placeholder="Enter token count"
          />
          <input type="text" hidden />
        </div>
        <div>
          <input
            type="radio"
            id="text"
            name="inputType"
            value="text"
            checked={inputType === "text"}
            onChange={() => handleRadioChange("text")}
          />
          <label htmlFor="text">Input Text: </label>
          <textarea
            style={{ width: "100%", height: "200px" }}
            value={textValue}
            onChange={handleTextChange}
            disabled={inputType === "number"}
            placeholder="Enter text content"
          />
        </div>
      </form>
    </div >
  );
}

export default ConvertInput;
