import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";
// import { FavoritesContext, useFavoritesContext } from "../context/DrinkFavorites";
import { Favorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

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
    <div>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <div>
        <h2>Tipsy Time</h2>
        {drinks.map((cocktail) => (
          <ol>
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
            {thisCocktailIsAFavorite ? (
              <button
                className="addButton"
                onClick={() => removeFromFavorites(cocktail?.idDrink!)}
              >
                Remove Favorite
              </button>
            ) : (
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
            )}
          </ol>
        ))}
      </div>
    </div>
  );
}
