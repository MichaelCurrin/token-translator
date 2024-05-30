
function ResultTable({ result }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tokens</th>
          <th>Words</th>
          <th>A4 pages</th>
          <th>Novels</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="numeric" data-testid="user-table-tokens">
            {result.tokens.toLocaleString()}
          </td>
          <td className="numeric" data-testid="user-table-word-count">
            {result.wordCount.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </td>
          <td className="numeric" data-testid="user-table-page-count">
            {result.a4PageCount.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </td>
          <td className="numeric" data-testid="user-table-novel-count">
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
