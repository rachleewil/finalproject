import React, { useEffect, useState } from "react";
import AddFortuneForm from "../AddFortuneForm";
import FortuneList from "../FortuneList";
import FortuneCookie from "../../models/Fortune";
import { fetchFortunes } from "../../services/Fortunes";
import { Link } from "react-router-dom";
import "./AllFortuneRoutes.css";

function AddFortuneFormRoute() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  useEffect(loadFortunes, []);

  function loadFortunes() {
    fetchFortunes().then(setFortunes);
  }

  return (
    <div className="AllShoutOutsRoute">
      <h2>All Fortunes</h2>
      <nav id="Create-Fortune-Nav">
        <Link id="Home" to="/Home">
          Home
        </Link>
        <Link id="Fort" to="/Fortunes">
          Get Your Fortune
        </Link>
      </nav>
      <FortuneList shoutOuts={fortunes} />
      <AddFortuneForm onAdd={loadFortunes} />
    </div>
  );
}

export default AddFortuneFormRoute;
