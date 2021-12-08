import React, { useEffect, useState } from "react";
import "./FortuneTeller.css";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes } from "../services/Fortunes";
import { Link } from "react-router-dom";
import { Drink, DrinkList } from "../models/Drink";
import { fetchRandomDrink } from "../services/Drinks";

export default function ViewFortunes() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [randomFortune, setRandomFortune] = useState<FortuneCookie>();
  const [onePost, setOnePost] = useState(""); //one more hook for storing current random post
  const [clicks, setClicks] = useState(5);
  const [disabled, setDisabled] = useState(false);

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
    let buttonsubmit = document.getElementById("crystal-ball");
    if (clicks === 1) {
      setClicks(0);
      setDisabled(true);
    } else {
      setClicks(clicks - 1);
    }
  };

  const duckClick = () => {
    let buttonsubmit = document.getElementById("duck-bullseye");
    if (clicks === 0) {
      setClicks(5);
      setDisabled(false);
    } else {
      setClicks(clicks);
    }
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
    <>
      <div className="navigation">
        <h2 id="pagetitle">Welcome to the Fortune Teller!</h2>
        <p>Click below to learn your fate. </p>

        <div className="tokensection">
          <img alt="token" src="normToken.png" width="170"/>
          <p id="tokens"><b>Tokens Left:</b> <br></br>
          <div id="clicks">{clicks}</div></p>
        </div>

        <div id="fortune-container">
          <div id="RandomFortunesOnDemand">
            {/* <button onClick={handleClick}>Get Fortune</button> */}
            <p>
              <span style={{ fontWeight: "bold" }}>Fortune: </span>{" "}
              {randomFortune?.fortune}{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Lucky Color: </span>{" "}
              {randomFortune?.color}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Message: </span>{" "}
              {randomFortune?.message}
            </p>
          </div>
          <input
            id="crystal-ball"
            type="image"
            alt="cyrstalball"
            src="crystalball.png"
            width="600"
            height="600"
            name="ballBtn"
            onClick={handleClick}
            disabled={disabled}
          ></input>
        </div>
      </div>
      <div id="moretokens">
        <span>Hit the bullseye for 5 more Tokens! <em>(You must be at 0 Tokens)</em></span>

        <input
          type="image"
          id="duckbullseye"
          className="duck"
          alt="duck-target"
          src="duck.png"
          width="100"
          onClick={duckClick}
        />
      </div>
    </>
  );
}
