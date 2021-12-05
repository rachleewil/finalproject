import React, { useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes } from "../services/Fortunes";
import { Link } from "react-router-dom";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";
import "./Carnival.css";

export default function ViewFortunes() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [randomFortune, setRandomFortune] = useState<FortuneCookie>();
  const [onePost, setOnePost] = useState(""); //one more hook for storing current random post

  //testing

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchingPosts = await fetch(
          "http://localhost:5001/carnival-app-b84f4/us-central1/api/fortunecookie/"
        );
        const fortunes = await fetchingPosts.json();

        setFortunes(fortunes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const handleClick = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setRandomFortune(random); //value assigned here
  };
  console.log();

  //finish testing

  function getFortune() {
    fetchFortunes().then((data) => {
      setFortunes(data);
    });
  }
  useEffect(() => {
    getFortune();
  }, []);

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
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
      <div id="fortune-container">
        <div id="RandomFortunesOnDemand">
          {/* <button onClick={handleClick}>Get Fortune</button> */}
          <p>
            <span style={{ fontWeight: "bold" }}>Fortune:</span>{" "}
            {randomFortune?.fortune}{" "}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Lucky Color:</span>{" "}
            {randomFortune?.color}
          </p>
          <p>{randomFortune?.message}</p>
        </div>
        <input
          id="crystal-ball"
          type="image"
          alt="click me"
          src="crystalball.png"
          width="600"
          height="600"
          name="ballBtn"
          onClick={handleClick}
        ></input>
        <div id="make-a-fortune">
          <img
            className="ball"
            alt="crystal-ball"
            src="smallcrystal.png"
            width="100"
          />
        </div>
        {/*  <img
          className="ball"
          alt="crystal-ball"
          src="crystalball.png"
          width="600"
          height="600"
        /> */}
      </div>
      {/*  <div id="all fortunes">
        {fortunes.map((fortune) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>
              Your Fortune is {fortune.fortune}
            </p>
            <p>color: {fortune.color}</p>
            <p>number: {fortune.number}</p>
          </ol>
        ))}
      </div> */}
      {/*   <div id="fortune-drink">
        <h2>Your Lucky Drink:</h2>
        {drinks.map((drink) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>{drink.strDrink}!</p>
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
      </div> */}
    </div>
  );
}
