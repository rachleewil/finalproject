import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";

export default function ViewDrinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  //   const [to, setTo] = useState("");
  //   const [from, setFrom] = useState("");
  //   const [message, setMsg] = useState("");

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
    <div>
      <nav>
          <Link to="/home">Home</Link>
      </nav>
      <div>
        <h2>Tipsy Time</h2>
        {drinks.map((drink) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>Enjoy a {drink.strDrink}!</p>
            <a
              target="_blank"
              href={"https://www.thecocktaildb.com/drink/" + drink.idDrink}
              rel="noreferrer"
            >
              <img
                className="drinkImg"
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
