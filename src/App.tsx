import { StringCalculator } from "./components/StringCalculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>String Calculator</h1>
        <p>Enter numbers separated by commas, newlines, or custom delimiters</p>
      </header>

      <main>
        <StringCalculator />
      </main>
    </div>
  );
}

export default App;
