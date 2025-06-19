import React from "react";
import { format } from "date-fns";

function DayCell({ date, isCurrentMonth, isToday, events }) {
  return (
    <div
      className={`p-2 border h-24 relative rounded ${
        isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"
      } ${isToday ? "border-blue-500 border-2" : ""}`}
    >
      <div className="text-sm font-semibold">{format(date, "d")}</div>
      <div className="absolute top-6 left-1 right-1 overflow-hidden">
        {events.slice(0, 2).map((event, idx) => (
          <div
            key={idx}
            className="text-xs truncate rounded px-1 mb-1"
            style={{ backgroundColor: event.color, color: "white" }}
            title={`${event.title} (${event.startTime}-${event.endTime})`}
          >
            {event.title}
          </div>
        ))}
        {events.length > 2 && (
          <div className="text-xs text-gray-500 mt-1">+{events.length - 2} more</div>
        )}
      </div>
    </div>
  );
}

export default DayCell;
