import React from 'react';
import "./ModelsTable.css";

function ModelsTable({ models }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Provider</th>
          <th>Model</th>
          <th>Tokens</th>
          <th>Word count</th>
          <th>A4 pages</th>
          <th>A5 novels</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model, index) => (
          <tr key={index}>
            <td>{model.provider}</td>
            <td>{model.modelName}</td>
            <td className="numeric">{model.tokens}</td>
            <td className="numeric">{model.wordCount.toFixed(1)}</td>
            <td className="numeric">{model.a4PageCount.toFixed(1)}</td>
            <td className="numeric">{model.a5NovelCount.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ModelsTable;
