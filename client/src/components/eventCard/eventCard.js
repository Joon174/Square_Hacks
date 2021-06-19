import React from "react";
import "./eventCard.css";

const EventCard = ({ imgLink, eventDate, tourneyTitle, tourneyStage }) => {
  return (
    <div className="eventCard-wrapper">
      <h2 className="eventCard-left">{eventDate}</h2>
      <ul className="eventCard-mid">
        <li className="eventCard-mid-title">
          <h3>{tourneyTitle}</h3>
        </li>
        <li className="eventCard-mid-stage">
          <h5>{tourneyStage}</h5>
        </li>
      </ul>
      <img className="eventCard-right" src={imgLink} alt="tourney"></img>
    </div>
  );
};

export default EventCard;
