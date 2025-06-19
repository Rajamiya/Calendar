import React from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import DayCell from "./DayCell";

function CalendarGrid({ currentDate, events }) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const dateStr = format(day, "yyyy-MM-dd");
      const dayEvents = events.filter((e) => e.date === dateStr);
      days.push(
        <DayCell
          key={day}
          date={new Date(day)}
          isCurrentMonth={isSameMonth(day, currentDate)}
          isToday={isSameDay(day, new Date())}
          events={dayEvents}
        />
      );
      day = addDays(day, 1);
    }
    rows.push(<div key={day} className="grid grid-cols-7 gap-1 mb-1">{days}</div>);
    days = [];
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 text-center font-medium text-gray-700 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
      {rows}
    </div>
  );
}

export default CalendarGrid;
