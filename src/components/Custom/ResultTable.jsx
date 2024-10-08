function ResultTable({ result }) {
  return (
    <table id="result-table">
      <thead>
        <tr>
          <th>Tokens</th>
          <th>A4 pages</th>
          <th>Novels</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="td--align-right" data-testid="user-table-tokens">
            {result.tokens.toLocaleString()}
          </td>
          <td className="td--align-right" data-testid="user-table-page-count">
            {result.a4PageCount.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </td>
          <td className="td--align-right" data-testid="user-table-novel-count">
            {result.a5NovelCount.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultTable;
