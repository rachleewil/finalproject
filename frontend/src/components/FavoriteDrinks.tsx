import { Favorites } from "../context/FavoritesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./FavoriteDrinks.css";

export default function FavoritesList() {
  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  console.log(favoritesList);
  return (
    <div>
      <h2 id="pagetitle">Your Favorite Drinks</h2>
      <p id="content">Below are your favorite drinks. If you would like to favorite a new drink go to the bar.</p>
      <div>
        {favoritesList.map((favorite, index) => (
          <div key={index}>
            <a
              target="_blank"
              href={"https://www.thecocktaildb.com/drink/" + favorite.idDrink}
              rel="noreferrer"
            >
              <img src={favorite.strDrinkThumb + "/preview"} alt="drink" />
            </a>
            <h3>{favorite.strDrink}</h3>
            
            <button id="removebutton"
              onClick={() => {
                removeFromFavorites(favorite.idDrink);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
