import React, { useEffect, useState } from "react";
import "./AllFortuneRoutes.css";
import AddFortuneForm from "../AddFortuneForm";
import FortuneList from "../FortuneList";
import FortuneCookie from "../../models/Fortune";
import { fetchFortunes } from "../../services/Fortunes";
import { Link } from "react-router-dom";
import Counter from "../Tokens";

function AddFortuneFormRoute() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  useEffect(loadFortunes, []);

  function loadFortunes() {
    fetchFortunes().then(setFortunes);
  }

  return (
    <div className="AllShoutOutsRoute">
      <nav id="Create-Fortune-Nav">
        <Link id="Home" to="/Home">
          Home
        </Link>
        <Link id="Fort" to="/Fortunes">
          Get Your Fortune
        </Link>
      </nav>
      <AddFortuneForm onAdd={loadFortunes} />
      <div id="fortunelist">
        <h2 id="listheading">Complete List of Fortunes</h2>
        <FortuneList shoutOuts={fortunes} />
      </div>
    </div>
  );
}

export default AddFortuneFormRoute;
