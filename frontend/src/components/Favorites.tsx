//children: JSX.Element,
import React, { useContext } from "react";
import { ReactNode } from "react";
import { useParams } from "react-router";
import {
  FavoritesContext,
  useFavoritesContext,
} from "../context/DrinkFavorites";
import { Drink, DrinkList } from "../models/Drink";

interface Props {
  favs?: Drink[];
  children?: ReactNode;
}

//function Favorites({children}: {children: ReactNode}) {
function Favorites({ favs, children }: Props) {
  const { favorites, deleteFavorite } = useFavoritesContext();

  console.log("favorites array is");
  console.log(favorites);
  return (
    <>
      <div className="RecipeFavorites">
        <h2 id="title">Favorite Drinks</h2>
        <div className="grid">
          {favorites.map((item) => (
            <div className="recipeCard" key={item.strDrink}>
              <div className="recipeResults">
                <h2 id="recipeResultsName">{item.strDrink}</h2>
                <img src={item.strDrinkThumb + "/preview"} alt="drink" />
                <button
                  className="deleteButton"
                  onClick={() => deleteFavorite(item.strDrink)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Favorites list page of Recipes
// Details button
// Remove recipes from favorites list
// Back button

export default Favorites;
