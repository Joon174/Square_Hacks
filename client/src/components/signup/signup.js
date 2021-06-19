import React, { useState } from "react";
import { ColorButton, useStyles, NextButton } from "../button/button";
import swordLogo from "../../Images/sword.png";
import "./signup.css";

import Payments from "../payments/payments";

const SignUp = (props) => {
  const classes = useStyles();
  const [identity, setIdentity] = useState("");

  const identitySetter = async (val) => {
    await setIdentity(val);
    console.log(identity);
  };

  // console.log(props.tournament);

  return (
    <div className="signInWrapper">
      <div className="signInContainer">
        <ul className="signInList">
          <li className="signInItem">
            <h2>Participant Sign Up</h2>
          </li>
          <li className="signInItem">
            <h1
              style={{
                color: "red",
              }}
            >
              {props.tournament.name}
            </h1>
          </li>
          <li className="signInItem">
            <ul className="signInList">
              <li className="signInItem inputBox">
                <h5>User Name</h5>
                <input
                  className="signInInput"
                  placeholder="Enter User Name"
                  type="text"
                  required
                ></input>
              </li>

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
            </ul>
          </li>

          {/* <li className="signInItem">
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              <h3>Next</h3>
            </ColorButton>
          </li> */}

          <li>
            <Payments
              paymentAmount={props.tournament.participation_cost}
              tournamentId={props.tournament.id}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
