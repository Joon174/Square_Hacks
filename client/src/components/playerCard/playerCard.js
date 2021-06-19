import React from "react";
import "./playerCard.css";

const PlayerCard = ({ rank, medal, name, score }) => {
  return (
    <div className="playerCard-wrapper">
      <h2 className="playerCard-left"> {rank}</h2>
      <div className="playerCard-mid1">
        <img className="playerCard-image" src={medal} alt="player"></img>
      </div>
      <h2 className="playerCard-mid2">{name}</h2>
      <h2 className="playerCard-right">{score}</h2>
    </div>
  );
};

export default PlayerCard;
