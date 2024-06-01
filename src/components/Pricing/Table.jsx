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
                        <td>{model.model}</td>
                        <td className="align-right">{model.input}</td>
                        <td className="align-right">{model.output}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
