import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <div className="NavBar">
          <div>
            <a>
              <Link to="/home"><img src="tent.png" id="NavIcon" width="60" height="60"/></Link>
            </a>
            <h1 id="websitetitle">AFTER HOURS CARNIVAL</h1>
          </div>
          <div className="NavBarLinks">
            <a>
              <Link to="/home">Carnival</Link>
            </a>
            <a>
              <Link to="/favorites">Favorite Drinks</Link>
            </a>
            <a>
              <Link to="/addfortune">Create Fortune</Link>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

