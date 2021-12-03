import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewFortunes from "./components/Carnival";
import LoginForm from "./components/LoginForm";
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/login" element={<LoginForm /> } />
          <Route path="/Home" element={<Home /> } />
          <Route path="/fortunes" element={<ViewFortunes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
