import React, { ReactNode, useState } from "react";
import { Drink } from "../models/Drink";

interface FavoritesProps {
  addToFavorites: (cocktail: Drink) => void;
  removeFromFavorites: (idDrink: string) => void;
  favoritesList: Drink[];
}
const defaultValues: FavoritesProps = {
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  favoritesList: [],
};

export const Favorites = React.createContext<FavoritesProps>(defaultValues);

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoritesList, setFavoritesList] = useState<Drink[]>([]);
  function addToFavorites(cocktail: Drink): void {
    // copy then modify
    console.log(cocktail);
    let newFavoritesList = [...favoritesList];
    newFavoritesList.push(cocktail);
    setFavoritesList(newFavoritesList);
    console.log("favorites list: ", favoritesList);
  }

  function removeFromFavorites(idDrink: string): void {
    // copy then modify
    let newFavoritesList = [...favoritesList];
    let foundIndex = newFavoritesList.findIndex(
      (cocktail) => cocktail.idDrink === idDrink
    );
    newFavoritesList.splice(foundIndex, 1);
    setFavoritesList(newFavoritesList);
  }

  return (
    <Favorites.Provider
      value={{ addToFavorites, removeFromFavorites, favoritesList }}
    >
      {children}
    </Favorites.Provider>
  );
}
