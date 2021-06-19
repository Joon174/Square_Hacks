import React, { useState } from "react";
import "./leaderboard.css";
import PlayerCard from "../playerCard/playerCard";
import { LeaderboardObject } from "./mockData";

const Leaderboard = () => {
  return (
    <div className="leaderboard-wrapper">
      {LeaderboardObject.map((leaderboard) => (
        <PlayerCard
          key={leaderboard.rank}
          rank={leaderboard.rank}
          medal={leaderboard.medal}
          name={leaderboard.name}
          score={leaderboard.score}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
