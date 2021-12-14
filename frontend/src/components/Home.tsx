import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to the Carnival!</h1> 

      <div id="drinksection">
        <h2 >Let's Drink!</h2>
        <p>Go ahead and enjoy a delicious cocktail beverage at the bar.</p>
        <Link to="/drinks">
          <img
            className="drinks"
            src="neondrink.jpg"
            alt="bar"
          />
        </Link>
      </div>

      <div id="fortunesection">
        <h2>Let's get Lucky!</h2>
        <p>Don't let fate slip through your fingers. Find out your fortune now.</p>
        <Link to="/fortunes">
          <img
            className="fortunes"
            src="fortuneteller.jpg"
            alt="fortune-teller"
          />
        </Link>
      </div>

      <div>
          <img
            className="background"
            src="carnival.png"
            alt="carnival background image"
          />
      </div>
    </div>
  );
}

export default Home;
