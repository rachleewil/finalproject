import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a>
              <Link to="/home"><img src="tent.png" width="400px" height="60px"/></Link>
            </a>
          </li>
          <div id="navlinks">
            <li>
              <a>
                <Link to="/home">Carnival</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/favorites">Favorite Drinks</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/addfortune">Create Fortune</Link>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}




export default NavBar;

