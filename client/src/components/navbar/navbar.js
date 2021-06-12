import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <ul className="navList">
        <li className="navItem navLogo">Logo</li>
        <li className="navItem navMenu">Home</li>
        <li className="navItem navMenu">Events</li>
        <li className="navItem navMenu">Log In</li>
      </ul>
    </div>
  );
};

export default Navbar;
