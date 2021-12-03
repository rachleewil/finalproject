import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewFortunes from "./components/Carnival";
import LoginForm from "./components/LoginForm";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ViewDrinks from './components/Drinks'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/fortunes" element={<ViewFortunes />} />
          <Route path="/drinks" element={<ViewDrinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
