import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          JS Counter:
        </p>
        <Counter myValue="103" />

      </header>
    </div >
  );
}

export default App;
