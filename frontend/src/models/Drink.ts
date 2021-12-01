export interface Drink {
  results: any;
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
}

export interface DrinkList {
  drinks: Drink[];
}
