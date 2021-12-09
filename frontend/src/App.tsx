import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import ViewFortunes from "./components/FortuneTeller";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ViewDrinks from "./components/Drinks";
import FavoritesList from "./components/FavoriteDrinks";
import FavoritesProvider from "./context/FavoritesContext";
import AddFortuneFormRoute from "./components/AllFortunes";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <FavoritesProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fortunes" element={<ViewFortunes />} />
            <Route path="/drinks" element={<ViewDrinks />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="*" element={<Navigate to="home/" />} />
            <Route path="/createfortune" element={<AddFortuneFormRoute />} />
          </Routes>
        </FavoritesProvider>
      </Router>
    </div>
  );
}

export default App;
