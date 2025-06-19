import React from "react";
import Calendar from "./components/Calendar";
import "./index.css"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;
