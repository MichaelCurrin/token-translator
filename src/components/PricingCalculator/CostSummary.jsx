export function CostSummary(props) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Description</th>
          <th style={{ width: '20%' }}>Input</th>
          <th style={{ width: '20%' }}>Output</th>
          <th style={{ width: '20%' }}>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tokens</td>
          <td className="align-right">
            {props.totalInputTokens.toLocaleString()}
          </td>
          <td className="align-right">
            {props.totalOutputTokens.toLocaleString()}
          </td>
          <td className="align-right">{props.totalTokens.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Costs</td>
          <td className="align-right">
            $
            {props.totalInputCost.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </td>
          <td className="align-right">
            $
            {props.totalOutputCost.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </td>
          <td className="align-right">
            <b>
              $
              {props.totalCost.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table >
  );
}
