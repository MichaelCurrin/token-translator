import ConvertInput from './components/Custom';
import Header from './components/Header';
import Models from './components/Models';
import Notes from './components/Notes';
import Pricing from './components/Pricing';
import PricingCalculator from './components/PricingCalculator';

function App() {
  return (
    <div className="container">
      <Header />
      <h2>About</h2>
      <p>
        Language models like GPT-4 or Llama can process a lot of text, but the
        amount of text they can handle is not always easy to visualize.
        Especially since the limit of a model is quoted not in characters or
        words in "tokens", which you can think of as pieces of words.
      </p>
      <p>
        This tool helps you translate token counts into real-world measures so
        you can decide which models are suitable for your needs and how much
        you're likely to pay if using an API subscription.
      </p>
      <blockquote>
        <p>
          ℹ️ This tool is open sourced on GitHub, if you'd like to suggest or
          contribute changes
        </p>
      </blockquote>
      <div>
        <h2>Popular models</h2>
        <Models />
      </div>
      <div>
        <h2>Custom input</h2>
        <ConvertInput />
      </div>
      <div>
        <h2>Pricing overview</h2>
        <Pricing />
      </div>
      <div>
        <h2>Cost calculator</h2>
        <PricingCalculator />
      </div>
      <div>
        <h2>Notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default App;
