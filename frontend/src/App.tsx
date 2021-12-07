import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewFortunes from "./components/Carnival";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ViewDrinks from "./components/Drinks";
import Favorites from "./components/Favorites";
import PostFortunes from "./components/PostFortune";
<<<<<<< HEAD
import FavoritesList from "./components/FavoritesList";
import FavoritesProvider from "./context/FavoritesContext";
=======
import AddFortuneFormRoute from "./components/routes/AllFortunesRoutes";
>>>>>>> f240386c8057c1e4f5e3ae7ab9744d2f4dc99b51

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
<<<<<<< HEAD
        <FavoritesProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fortunes" element={<ViewFortunes />} />
            <Route path="/drinks" element={<ViewDrinks />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/createFortunes" element={<PostFortunes />} />
          </Routes>
        </FavoritesProvider>
=======
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fortunes" element={<ViewFortunes />} />
          <Route path="/drinks" element={<ViewDrinks />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/createfortune" element={<PostFortunes />} />
          <Route path="/addfortune" element={<AddFortuneFormRoute />} />
        </Routes>
>>>>>>> f240386c8057c1e4f5e3ae7ab9744d2f4dc99b51
      </Router>
    </div>
  );
}

export default App;
