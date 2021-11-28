import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fair_640 from "../src/images/fair_640.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="amigo-img" src={fair_640} alt="carnival" height={400}></img>
        <p>Carnival Coming Soon.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
