import React from "react";
import "./calendarPage.css";
import EventCalendar from "../components/eventCalendar/eventCalendar";
import Navbar from "../components/navbar/navbar";
import Advertisement from "../components/advertisement/advertisement";
import CalendarFilter from "../components/calendarFilter/calendarFilter";
const CalendarPage = () => {
  return (
    <div>
      <Navbar />
      <div className="calendarPage-wrapper">
        <div className="calendarPage-left">
          <Advertisement />
        </div>
        <div className="calendarPage-mid">
          <h2 className="calendarPage-title"> Calendar</h2>
          <EventCalendar />
        </div>
        <div className="calendarPage-right">
          <CalendarFilter />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
