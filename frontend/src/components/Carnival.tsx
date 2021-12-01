import React, { FormEvent, useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes } from "../services/Fortunes";
import { Link } from "react-router-dom";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";

export default function ViewFortunes() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  //   const [to, setTo] = useState("");
  //   const [from, setFrom] = useState("");
  //   const [message, setMsg] = useState("");

  function getFortune() {
    fetchFortunes().then((data) => {
      setFortunes(data);
    });
  }
  useEffect(() => {
    getFortune();
  }, []);

  function getDrink() {
    fetchRandomDrink().then((data) => {
      setDrinks(data);
    });
  }

  useEffect(() => {
    getDrink();
  }, []);

  //   function handleSubmit(e: FormEvent) {
  //     e.preventDefault();
  //     sendLove({ to, from, message });
  //   }

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        {fortunes.map((fortune) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>
              Your Fortune is {fortune.fortune}
            </p>
            <p>color: {fortune.color}</p>
            <p>number: {fortune.number}</p>
          </ol>
        ))}
      </div>
      <div>
        <h2>Tipsy Time</h2>
        {drinks.map((drink) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>Enjoy a {drink.strDrink}</p>
            <a href={"https://www.thecocktaildb.com/drink/" + drink.idDrink}>
              <img
                className="movieImg"
                src={drink.strDrinkThumb + "/preview"}
                alt="cocktail"
              />
            </a>
          </ol>
        ))}
      </div>
    </div>
  );
}
