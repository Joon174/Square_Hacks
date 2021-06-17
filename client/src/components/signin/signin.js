import React from "react";
import { ColorButton, useStyles } from "../button/button";
import swordLogo from "./sword.png";
import squareLogo from "./square.png";
import "./signin.css";

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className="signInWrapper">
      <div className="signInContainer">
        <ul className="signInList">
          <li className="signInItem">
            <img src={swordLogo} />
          </li>
          <li className="signInItem">
            <h2>General Sign Up Page </h2>
          </li>
          <li className="signInItem inputBox">
            <h5>Email</h5>
            <input
              className="signInInput"
              placeholder="Enter Email"
              type="text"
              required
            ></input>
          </li>
          <li className="signInItem inputBox">
            <h5>UserName</h5>
            <input
              className="signInInput"
              placeholder="Enter Username"
              type="text"
              required
            ></input>
          </li>
          <li className="signInItem inputBox">
            <h5>Password</h5>
            <input
              className="signInInput"
              placeholder="Enter Password"
              type="password"
              required
            ></input>
          </li>
          <li className="signInItem inputBox">
            <h5>Confirm Password</h5>
            <input
              className="signInInput"
              placeholder="Enter Password"
              type="password"
              required
            ></input>
          </li>
          <br></br>
          <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <h3>Sign Up</h3>
            </ColorButton>
          </li>

          {/* <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <img className="signInItemLogo" src={squareLogo} />
              <h3>Sign In with Square</h3>
            </ColorButton>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
