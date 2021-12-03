import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function Home() {
  return (
        <div>
            <h2>Drinks</h2>
            <Link to="/drinks"><img className="drinks" src="neondrink.jpg" width="300" height="200"/></Link>

            <h2>Fortunes</h2>
            <Link to="/fortunes"><img className="drinks" src="fortuneteller.jpg" width="300" height="200"/></Link>
        </div>
  );
}

export default Home;



