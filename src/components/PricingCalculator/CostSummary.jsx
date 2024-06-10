export function CostSummary(props) {
  return (
    <>
      <p>Total input tokens: {props.totalInputTokens.toLocaleString()}</p>
      <p>Total output tokens: {props.totalOutputTokens.toLocaleString()}</p>
      <p>Combined tokens: {props.totalTokens.toLocaleString()}</p>

      <p>
        Total input cost: $
        {props.totalInputCost.toLocaleString(undefined, {
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
        })}
      </p>
      <p>
        Total output cost: $
        {props.totalOutputCost.toLocaleString(undefined, {
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
        })}
      </p>
      <p>
        Combined cost (rounded):{' '}
        <b>
          $
          {props.totalCost.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </b>
      </p>
    </>
  );
}
