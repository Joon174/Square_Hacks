import React, { useState } from "react";
import "./eventCalendar.css";
import EventCard from "../eventCard/eventCard";
import { TournamentObject } from "./mockData";

const EventCalendar = () => {
  return (
    <div className="eventCalendar-wrapper">
      {TournamentObject.map((torunament) => (
        <EventCard
          key={torunament.key}
          imgLink={torunament.logoPath}
          eventDate={torunament.date}
          tourneyTitle={torunament.title}
          tourneyStage={torunament.stage}
        />
      ))}
    </div>
  );
};

export default EventCalendar;
