import React, { useState } from "react";
import { startOfMonth, addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import events from "../data/events.json";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrev = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNext = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div className="bg-white p-4 shadow rounded">
      <CalendarHeader currentDate={currentDate} onPrev={handlePrev} onNext={handleNext} />
      <CalendarGrid currentDate={startOfMonth(currentDate)} events={events} />
    </div>
  );
}

export default Calendar;
