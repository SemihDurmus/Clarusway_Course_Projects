import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CLARUSWAY</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card name="Hasan" />
      <Box name="John" />
    </div>
  );
}

export default App;
