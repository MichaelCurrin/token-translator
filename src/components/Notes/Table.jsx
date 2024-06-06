function Table({ tableData }) {
  return (
    <table>
      <thead>
        <tr>
          {tableData.fields.map((field) => (
            <th key={field.name}>{field.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row) => (
          <tr key={Math.random()}>
            {Object.values(row).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
