import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom"

const DailyGoals = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("dailyGoals");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever goals change
  useEffect(() => {
    localStorage.setItem("dailyGoals", JSON.stringify(goals));
  }, [goals]);

  const submitHandler = () => {
    if (goal.trim() === "") return;
    setGoals([...goals, { text: goal, done: false }]);
    setGoal("");
  };

  const toggleDone = (index) => {
    const updated = [...goals];
    updated[index].done = !updated[index].done;
    setGoals(updated);
  };

  const deleteGoal = (index) => {
    const updated = [...goals];
    updated.splice(index, 1);
    setGoals(updated);
  };

  return (
    <div className="absolute inset-0 h-screen w-full bg-slate-200 flex justify-center py-6 px-4">
      <div className="w-full max-w-3xl rounded-xl shadow-xl p-6 flex flex-col h-full bg-slate-100">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Daily Goals
          </h1>
          <Link to='/' >
      <button className='bg-red-500 px-4 py-2 rounded cursor-pointer'>Close</button>
     </Link>
     
        </div>

        {/* Input Section */}
        <div className="mt-6 flex gap-3">
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your goal..."
            className="flex-1 p-3 rounded-md
                       border border-gray-300
                       text-gray-800 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-green-500 text-base md:text-lg"
          />

          <button
            onClick={submitHandler}
            className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>

        {/* Scrollable Goals Container */}
        <div className="mt-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="space-y-3">
            {goals.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between
                           bg-white p-3 rounded-lg shadow-sm"
              >
                {/* Goal Text + Number */}
                <div className="flex gap-3 items-center">
                  <span className="font-bold text-gray-500">{index + 1}.</span>
                  <p
                    className={`text-gray-800 ${
                      item.done ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Tick + Delete */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleDone(index)}
                    className="w-5 h-5 accent-green-500 cursor-pointer"
                  />
                  <button
                    onClick={() => deleteGoal(index)}
                    className="text-red-500 font-bold text-lg hover:text-red-700 transition"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e2e8f0; /* light gray track */
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e2e8f0; /* gray thumb */
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #808080
        }
      `}</style>
    </div>
  );
};

export default DailyGoals;
