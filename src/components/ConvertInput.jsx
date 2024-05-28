import React, { useState } from 'react';
import { tokenCountToWordCount, wordCountToPageCounts } from '../lib';

function ConvertInput() {
  const [inputType, setInputType] = useState('number');
  const [inputValue, setInputValue] = useState('');
  const [presets] = useState(['1k', '10k', '1M']);
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRadioChange = (type) => {
    setInputType(type);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputType === 'number') {
      handleNumberSubmit();
    } else {
      handleTextSubmit();
    }
  };

  const handleNumberSubmit = () => {
    if (!inputValue) return;
    const tokenCount = parseInt(inputValue, 10);
    const wordCount = tokenCountToWordCount(tokenCount);
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);
    setResult({
      tokens: tokenCount,
      wordCount,
      a4PageCount: a4PageCount.toFixed(1),
      a5NovelCount: a5NovelCount.toFixed(1)
    });
  };

  const handleTextSubmit = () => {
    if (!inputValue) return;
    const wordCount = inputValue.trim().split(/\s+/).length;
    const tokenCount = wordCount / 0.75;
    const { a4PageCount, a5NovelCount } = wordCountToPageCounts(wordCount);
    setResult({
      tokens: tokenCount.toFixed(0),
      wordCount,
      a4PageCount: a4PageCount.toFixed(1),
      a5NovelCount: a5NovelCount.toFixed(1)
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            id="number"
            name="inputType"
            value="number"
            checked={inputType === 'number'}
            onChange={() => handleRadioChange('number')}
          />
          <label htmlFor="number">Input Number:</label>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            disabled={inputType === 'text'}
          />
          {presets.map((preset, index) => (
            <button key={index} onClick={() => setInputValue(preset)}>
              {preset}
            </button>
          ))}
        </div>
        <div>
          <input
            type="radio"
            id="text"
            name="inputType"
            value="text"
            checked={inputType === 'text'}
            onChange={() => handleRadioChange('text')}
          />
          <label htmlFor="text">Input Text:</label>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            disabled={inputType === 'number'}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result && (
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
      )}
    </div>
  );
}

export default ConvertInput;
