import axios from "axios";
import { Drink, DrinkList } from "../models/Drink";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

/* export async function fetchRandomDrinks(): Promise<Drink[]> {
  //hit our /topicsFortuneCookie
  const res = await axios.get(`${baseUrl}`);
  return res.data;
  // return the promise with the topics
} */

export function fetchRandomDrink(): Promise<Drink[]> {
  return axios.get<DrinkList>(`${baseUrl}`).then((response) => {
    return response.data.drinks;
  });
}
