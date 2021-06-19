import React from "react";
import "./navbar.css";
import { Button } from "../button/button2";
import { FaHome, FaRegCalendarAlt, FaBell } from "react-icons/fa";
import { GiSpinningSword } from "react-icons/gi";

const Navbar = ({ isLoggedin = true }) => {
  return (
    <div className="navWrapper">
      <ul className="navList">
        <li className="navItem navLogo">
          <Button primary dark className="navLogoItem">
            <GiSpinningSword />
          </Button>
        </li>
        <li className="navItem navTitle">
          <h3>Bout-time</h3>
        </li>
        <li className="navItem navMenu">
          <Button primary dark>
            <FaHome />
          </Button>
        </li>
        <li className="navItem navMenu">
          <Button primary dark>
            <FaRegCalendarAlt className="fa-icon" />
          </Button>
        </li>
        {isLoggedin ? (
          <li className="navItem navMenu">
            <Button primary dark>
              <FaBell />
            </Button>
          </li>
        ) : (
          <li className="navItem navMenu">
            <Button primary dark>
              Log In
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
