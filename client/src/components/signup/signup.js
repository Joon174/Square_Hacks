import React from "react";
import { ColorButton, useStyles } from "../button/button";
import swordLogo from "./sword.png";
import squareLogo from "./square.png";
import "./signup.css";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className="signInWrapper">
      <div className="signInContainer">
        <ul className="signInList">
          <li className="signInItem">
            <img src={swordLogo} />
          </li>
          <li className="signInItem">
            <h2>Welcome to TourneyBrite </h2>
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
            <h5>Password</h5>
            <input
              className="signInInput"
              placeholder="Enter Password"
              type="password"
              required
            ></input>
          </li>
          <li className="signInItem">
            <h5 className="signUpText">No account?</h5>
            <h5 className="signUpLink">Create One!</h5>
          </li>
          <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <h3>Sign In</h3>
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

export default SignUp;
