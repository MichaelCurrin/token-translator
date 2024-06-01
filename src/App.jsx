import ConvertInput from './components/Custom';
import Header from './components/Header';
import Models from './components/Models';
import Notes from './components/Notes';
import Pricing from './components/Pricing';

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
        <h2>Pricing</h2>
        <Pricing />
      </div>
      <div>
        <h2>Notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default App;
