"use client"

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const TimerClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return format(date, 'h:mm a');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-sm md:text-2xl bg-blue-300 font-semibold rounded-full px-6 py-4 hover:bg-blue-400 hover:text-white transition duration-300">
        {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default TimerClock;
