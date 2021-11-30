import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fair_640 from "../src/images/fair_640.jpg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewFortunes from "./components/Carnival";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<ViewFortunes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
