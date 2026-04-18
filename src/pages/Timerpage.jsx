import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const WORK_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

const Timer = () => {
  const [seconds, setSeconds] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Timer Logic
  useEffect(() => {
    let timer;

    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      if (!isBreak) {
        // Work finished → Break start
        setIsBreak(true);
        setSeconds(BREAK_TIME);
      } else {
        // Break finished → Work start
        setIsBreak(false);
        setSeconds(WORK_TIME);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds, isBreak]);

  // Format mm:ss
  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div
      className={`h-screen w-full absolute top-0
      ${isBreak ? 'bg-sky-950' : 'bg-blue-950'}`}
    >

      {/* Header */}
      <div className='h-30 flex items-center justify-between px-6'>
        <h1 className='text-3xl font-bold cursor-pointer text-white'>
          Study with me . . .
        </h1>
        <Link to='/' >
      <button className='bg-red-500 px-4 py-2 rounded cursor-pointer'>Close</button>
     </Link>
      </div>

      {/* Center */}
      <div className='w-full h-[83%] flex items-center justify-center'>
        <div
          className={`h-[50%] w-[50%]
          max-w-[520px] min-w-[280px]
          gap-6 flex justify-center items-center flex-col
          rounded-2xl border
          ${isBreak
            ? 'border-red-300 shadow-[0_0_25px_rgba(239,68,68,0.4)]'
            : 'border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]'}
          bg-white/5 backdrop-blur-md`}
        >

          {/* Session Title */}
          <div>
            <h1
              className={`text-3xl font-semibold mb-4 px-5 py-2 rounded-[8px]
              ${isBreak ? 'bg-red-600' : 'bg-emerald-500'}`}
            >
              {isBreak ? 'Rest Time' : 'Work Session'}
            </h1>
          </div>

          {/* Time */}
          <div>
            <p className='text-5xl font-bold text-white'>
              {formatTime()}
            </p>
          </div>

          {/* Controls */}
          <div className='flex gap-[6%] mt-6'>
            <button
              onClick={() => setIsRunning(true)}
              className='bg-black px-4 py-1 rounded-lg text-white'
            >
              Start
            </button>

            <button
              onClick={() => setIsRunning(false)}
              className='bg-black px-4 py-1 rounded-lg text-white'
            >
              Pause
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setIsBreak(false);
                setSeconds(WORK_TIME);
              }}
              className='bg-black px-4 py-1 rounded-lg text-white'
            >
              Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Timer;

