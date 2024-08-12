function Table({ models }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Provider</th>
          <th>Model</th>
          <th>Input</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        {models.map((model, index) => (
          <tr key={index}>
            <td>{model.provider}</td>
            <td>
              {model.modelName} {model.note ? `(${model.note})` : ''}
            </td>
            <td className="align-right">
              {Number(model.input).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </td>
            <td className="align-right">
              {Number(model.output).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
