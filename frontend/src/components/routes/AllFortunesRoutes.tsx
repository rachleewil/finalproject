import React, { useEffect, useState } from "react";
import "./AllFortuneRoutes.css";
import AddFortuneForm from "../AddFortuneForm";
import FortuneList from "../FortuneList";
import FortuneCookie from "../../models/Fortune";
import { fetchFortunes } from "../../services/Fortunes";
import { Link } from "react-router-dom";

function AddFortuneFormRoute() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  useEffect(loadFortunes, []);

  function loadFortunes() {
    fetchFortunes().then(setFortunes);
  }

  return (
    <div className="AllShoutOutsRoute">
      <h2>Create a Fortune</h2>
      <p>Someone's fate is in your hands. You are in control now.</p>
      <nav id="Create-Fortune-Nav">
        <Link id="Home" to="/Home">
          Home
        </Link>
        <Link id="Fort" to="/Fortunes">
          Get Your Fortune
        </Link>
      </nav>
      <AddFortuneForm onAdd={loadFortunes} />
      <FortuneList shoutOuts={fortunes} />
    </div>
  );
}

export default AddFortuneFormRoute;
