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
            <Link to={"/" + favorite.idDrink}>
              <img src={favorite.strDrinkThumb + "/preview"} alt="drink" />
              <h3>{favorite.strDrink}</h3>
            </Link>
            <button
              onClick={() => {
                removeFromFavorites(favorite.idDrink);
              }}
            >
              Remove Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
