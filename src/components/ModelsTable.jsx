import React from "react";
import "./ModelsTable.css";

function ModelsTable({ models }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Provider</th>
          <th>Model</th>
          <th>Tokens</th>
          <th>Words</th>
          <th>A4 pages</th>
          <th>Novels</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model, index) => (
          <tr key={index}>
            <td>{model.provider}</td>
            <td>{model.modelName}</td>
            <td className="numeric">{model.tokens.toLocaleString()}</td>
            <td className="numeric">
              {model.wordCount.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </td>
            <td className="numeric">
              {model.a4PageCount.toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
            </td>
            <td className="numeric">
              {model.a5NovelCount.toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ModelsTable;
