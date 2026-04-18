import React, { useState } from "react";
import {Link} from "react-router-dom"
const defaultPlanner = [
  { time: "06:00 AM", task: "" },
  { time: "08:00 AM", task: "" },
  { time: "10:00 AM", task: "" },
  { time: "12:00 PM", task: "" },
  { time: "02:00 PM", task: "" },
  { time: "05:00 PM", task: "" },
  { time: "08:00 PM", task: "" },
];

const DailyPlanner = () => {
  const [planner, setPlanner] = useState(() => {
    const saved = localStorage.getItem("dailyPlanner");
    return saved ? JSON.parse(saved) : defaultPlanner;
  });

  const handleChange = (index, value) => {
    const updated = [...planner];
    updated[index].task = value;
    setPlanner(updated);
  };

  const saveHandler = () => {
    localStorage.setItem("dailyPlanner", JSON.stringify(planner));
    alert("Daily Planner Saved ✅");
  };

  return (
    <div className="absolute inset-0 w-screen h-[100%] bg-gray-100 flex justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Your Daily Plans
          </h1>
          <Link to='/' >
      <button className='bg-red-500 px-4 py-2 rounded cursor-pointer'>Close</button>
     </Link>
        </div>

        {/* Planner List */}
        <div className="mt-4 flex flex-col gap-4">
          {planner.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              {/* Time */}
              <span className="text-xs md:text-sm font-semibold text-blue-600 min-w-[80px]">
                {item.time}
              </span>

              {/* Task Input */}
              <input
                type="text"
                value={item.task}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Write your task here..."
                className="w-full px-3 py-1 capitalize 
                           bg-white text-gray-800
                           placeholder-gray-400
                           border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className=" mt-2 flex justify-center">
          <button
            onClick={saveHandler}
            className="px-10 py-2  bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default DailyPlanner;

