import React, { useState } from "react";
import { ColorButton, useStyles, NextButton } from "../button/button";
import swordLogo from "../../Images/sword.png";
import "./signup.css";

const SignUp = () => {
  const classes = useStyles();
  const [identity, setIdentity] = useState("");

  const identitySetter = async (val) => {
    await setIdentity(val);
    console.log(identity);
  };

  return (
    <div className="signInWrapper">
      <div className="signInContainer">
        <ul className="signInList">
          <li className="signInItem">
            <h2>Sign Up</h2>
          </li>

          <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
              value="Individual"
              onClick={() => identitySetter("Individual")}
            >
              <h3>Individual</h3>
            </ColorButton>
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
              value="Business"
              onClick={() => identitySetter("Business")}
            >
              <h3>Business</h3>
            </ColorButton>
          </li>
          {identity === "Business" ? (
            <li className="signInItem inputBox">
              <h5>Business Name</h5>
              <input
                className="signInInput"
                placeholder="Enter Business Name"
                type="text"
                required
              ></input>
            </li>
          ) : (
            <li className="signInItem inputBox">
              <h5>User Name</h5>
              <input
                className="signInInput"
                placeholder="Enter User Name"
                type="text"
                required
              ></input>
            </li>
          )}

          <li className="signInItem inputBox">
            <h5>Email</h5>
            <input
              className="signInInput"
              placeholder="example@email.com"
              type="text"
              min="5"
              max="20"
              required
            ></input>
          </li>

          <li className="signInItem inputBox">
            <h5>Phone Number</h5>
            <input
              className="signInInput"
              placeholder="0459058069"
              type="text"
              min="5"
              max="20"
              required
            ></input>
          </li>

          <li className="signInItem inputBox">
            <h5>Choose Password</h5>
            <input
              className="signInInput"
              placeholder="Enter Password"
              type="password"
              max="15"
              required
            ></input>
          </li>

          <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <h3>Next</h3>
            </ColorButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
