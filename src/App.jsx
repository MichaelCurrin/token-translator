import Header from "./components/Header";
import Notes from "./components/Notes";
import ConvertInput from "./components/custom/ConvertInput";
import Models from "./components/models";

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <h2>Popular models</h2>
        <Models />
      </div>
      <div>
        <h2>Custom input</h2>
        <ConvertInput />
      </div>
      <div>
        <h2>Notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default App;
