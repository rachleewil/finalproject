import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"; {/* added Link */}


function NavBar() {
  return (
    <>
        <nav>
          <div className="NavBar">
            <div>
              <h1 className="NavIcon">AFTER HOURS CARNIVAL</h1>
            </div>
            <div className="NavBarLinks">
              <a><Link to="/favorites">Favorites</Link></a>
              <a><Link to="/addfortune">Add Fortune</Link></a>
              <a><Link to="/">Sign Out</Link></a>
            </div>
          </div>     
        </nav>
    </>
  );
}

export default NavBar;
