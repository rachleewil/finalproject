import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fair_640 from "../src/images/fair_640.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewFortunes from "./components/Carnival";
import LoginForm from "./components/LoginForm";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/login" element={<LoginForm /> } />
          <Route path="/fortunes" element={<ViewFortunes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
