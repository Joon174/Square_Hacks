import React from "react";
import "./calendarFilter.css";
import { TournamentObject } from "./mockData";
import TourneyCard from "../tourneyCard/tourneyCard";

const CalendarFilter = () => {
  return (
    <div className="calendarFilter-wrapper">
      <div className="calendarFilter-buffer">
        <h2 className="calendarFilter-title">Filter</h2>
      </div>
      <div className="calendarFilter-item ">
        {TournamentObject.map((torunament) => (
          <TourneyCard
            key={torunament.key}
            imgLink={torunament.logoPath}
            tourneyTitle={torunament.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarFilter;
