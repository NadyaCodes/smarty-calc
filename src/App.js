import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="bounce bounce-left">🤓</div>
        <h1>Smarty Calc</h1>
        <div className="bounce bounce-right">🤓</div>
      </div>

      <Calculator />
    </div>
  );
}

export default App;
