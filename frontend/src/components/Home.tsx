import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function Home() {
  return (
    <>
        <div>
            <h3>Drinks</h3>
            <img className="drinks" src="fair_640.jpg" width="60" height="60"/>
        </div>
    </>
  );
}

export default Home;


