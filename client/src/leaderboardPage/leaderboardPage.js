import React from "react";
import "./leaderboardPage.css";
import Leaderboard from "../components/leaderboard/leaderboard";
import Navbar from "../components/navbar/navbar";

const LeaderboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="leaderboardPage-wrapper">
        <div className="leaderboardPage-mid">
          <h2 className="leaderboardPage-title"> Leaderboard</h2>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
