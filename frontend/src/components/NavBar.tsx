import React from 'react';
import { Link } from "react-router-dom"; {/* added Link */}

function NavBar() {
  return (
    <>
        <nav>
          <div className="NavBar">
            <div>
              <h1>Website Title</h1>
            </div>
            <div className="NavBarLinks">
              <a><Link to="/favorites">Favorites</Link></a>
              <a><Link to="/profile"> My Profile</Link></a>
              <a><Link to="/">Sign Out</Link></a>
            </div>
          </div>     
        </nav>
    </>
  );
}

export default NavBar;
