import React from "react";
import { format } from "date-fns";

function CalendarHeader({ currentDate, onPrev, onNext }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={onPrev} className="text-xl p-2">⬅️</button>
      <h2 className="text-xl font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
      <button onClick={onNext} className="text-xl p-2">➡️</button>
    </div>
  );
}

export default CalendarHeader;
