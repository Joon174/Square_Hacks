import React from "react";
import "./tourneyCard.css";

const TourneyCard = ({ imgLink, tourneyTitle }) => {
  return (
    <div className="tourneyCard-wrapper">
      <img className="tourneyCard-left" src={imgLink} alt="tourney"></img>
      <h5 className="tourneyCard-right">{tourneyTitle}</h5>
    </div>
  );
};

export default TourneyCard;
