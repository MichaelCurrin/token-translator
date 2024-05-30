import React, { useCallback, useEffect, useState } from "react";
import {
  textToTokenCount,
  tokenCountToWordCount,
  wordCountToPageCounts,
} from "../../lib";
import "./ConvertInput.css";
import InputForm from "./InputForm";
import ResultTable from "./ResultTable";

const DEFAULT_TOKEN_COUNT = 10000;
const DEFAULT_TEXT =
  "Paste as much text as you like here and have the token count and other values estimated.";

function calculateFromToken(tokenValue, setResult) {
  const tokenCount = parseInt(tokenValue, 10);
  const wordCount = tokenCountToWordCount(tokenCount);
  const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

  setResult({
    tokens: tokenCount,
    wordCount,
    a4PageCount: a4PageCount.toFixed(1),
    a5NovelCount: a5NovelCount.toFixed(1),
  });
}

function calculateFromText(textValue, setResult) {
  const tokenCount = textToTokenCount(textValue);
  const wordCount = tokenCountToWordCount(tokenCount);
  const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);

  setResult({
    tokens: tokenCount.toLocaleString(),
    wordCount: wordCount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
    a4PageCount: a4PageCount.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }),
    a5NovelCount: a5NovelCount.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }),
  });
}

function resetResult(setResult) {
  setResult({
    tokens: 0,
    wordCount: 0,
    a4PageCount: 0,
    a5NovelCount: 0,
  });
}

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

  function handleTokenChange(e) {
    setTokenValue(e.target.value);
  }

  function handleTextChange(e) {
    setTextValue(e.target.value);
  }

  function handleRadioChange(type) {
    setInputType(type);
    setResult({
      tokens: 0,
      wordCount: 0,
      a4PageCount: 0,
      a5NovelCount: 0,
    });
  }

  const handleTokenSubmit = useCallback(() => {
    if (!tokenValue) return;
    calculateFromToken(tokenValue, setResult);
  }, [tokenValue]);

  const handleTextSubmit = useCallback(() => {
    if (!textValue) return;
    calculateFromText(textValue, setResult);
  }, [textValue]);

  useEffect(() => {
    if (inputType === "number" && tokenValue) {
      handleTokenSubmit();
    } else if (inputType === "text" && textValue) {
      handleTextSubmit();
    } else {
      resetResult(setResult);
    }
  }, [tokenValue, textValue, inputType, handleTokenSubmit, handleTextSubmit]);

  return (
    <div >
      <ResultTable result={result} />
      <p><i>Choose your own token number or paste text content and get the token count estimated for you.</i></p>
      <InputForm
        inputType={inputType}
        tokenValue={tokenValue}
        textValue={textValue}
        handleTokenChange={handleTokenChange}
        handleTextChange={handleTextChange}
        handleRadioChange={handleRadioChange}
      />
    </div>
  );
}

export default ConvertInput;
