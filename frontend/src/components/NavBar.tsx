import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul id="navParent">
          <li>
            <div id="navTent">
              <a>
                <Link to="/home">
                  <img src="tent.png" width="400px" height="60px" />
                </Link>
              </a>
            </div>
          </li>

          <div id="navlinks">
            <a id="mobileTent">
              <Link to="/home">
                <img id="imgTent" src="tent.png" width="400px" height="60px" />
              </Link>
            </a>
            <li>
              <a id="carnivalLink">
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
                <Link to="/createfortune">Create Fortune</Link>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
