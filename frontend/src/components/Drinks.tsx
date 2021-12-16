import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";
// import { FavoritesContext, useFavoritesContext } from "../context/DrinkFavorites";
import { Favorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import "./Drinks.css";


export default function ViewDrinks() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  //   const [to, setTo] = useState("");
  //   const [from, setFrom] = useState("");
  //   const [message, setMsg] = useState("");
  const [cocktail, setCocktail] = useState<Drink>();

  function getDrink() {
    fetchRandomDrink().then((data) => {
      setDrinks(data);
    });
  }

  useEffect(() => {
    getDrink();
  }, []);

  const handleClick = () => {
    getDrink();
  };
  //   function handleSubmit(e: FormEvent) {
  //     e.preventDefault();
  //     sendLove({ to, from, message });
  //   }

  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  const thisCocktailIsAFavorite: boolean = favoritesList.some(
    (favorite) => favorite.idDrink === cocktail?.idDrink
  );
  return (
    <>
      <div>
        <div>
          <h2 id="pagetitle">Welcome to Tipsy Time!</h2>
          <p>Select drink image for full recipe.</p>
          {drinks.map((cocktail) => (
            <div>
              <p style={{ fontWeight: "bold" }}>Enjoy a {cocktail.strDrink}!</p>
              <a
                target="_blank"
                href={"https://www.thecocktaildb.com/drink/" + cocktail.idDrink}
                rel="noreferrer"
              >
                <img
                  className="drinkImg"
                  src={cocktail.strDrinkThumb + "/preview"}
                  alt="cocktail"
                />
              </a>
              <br></br>
           
                <button
                  onClick={() => {
                    console.log(cocktail);
                    if (cocktail?.idDrink) {
                      addToFavorites(cocktail);
                      console.log(favoritesList);
                    }
                  }}
                >
                  Add to Favorites
                </button>
            </div>
          ))}
        </div>
        <button id="anotherdrink" onClick={handleClick}>Barkeep <br></br> Another Drink!</button>
      </div>
    </>
  );
}
