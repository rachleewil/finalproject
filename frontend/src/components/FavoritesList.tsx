import { Favorites } from "../context/FavoritesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function FavoritesList() {
  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  console.log(favoritesList);
  return (
    <div>
      <h2>Your Favorite Drinks</h2>
      <ul>
        {favoritesList.map((favorite, index) => (
          <li key={index}>
            {/* <Link to={"/" + favorite.idDrink}> */}
            <a
              target="_blank"
              href={"https://www.thecocktaildb.com/drink/" + favorite.idDrink}
              rel="noreferrer"
            >
              <img src={favorite.strDrinkThumb + "/preview"} alt="drink" />
            </a>
            <h3>{favorite.strDrink}</h3>
            {/* </Link> */}
            <button
              onClick={() => {
                removeFromFavorites(favorite.idDrink);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
