import React from 'react';
import { useState, useEffect } from 'react';
import { BsClockFill } from "react-icons/bs";
import './Timer.css'

 export const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(5)



  const getTime = () => {
    if (remaining>=0){setRemaining((prev)=>--prev)
    setMinutes((prev)=>{return prev=Math.floor((remaining / 60) % 60)});
    setSeconds((prev)=>{return prev=Math.floor((remaining ) % 60)});}
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(remaining), 1000);
    return () => clearInterval(interval);
  }, [remaining]);

  return (
    <div className="timer">
              <span className='timer_part  timer_part--minutes'>{minutes.toString().padStart(2,0)}</span>
        <span className='timer_part'>:</span>
        <span className='timer_part  timer_part--seconds'>{seconds.toString().padStart(2,0)}</span>
        <button className='timer_btn'>
            <BsClockFill color='#8208e6' size={30}></BsClockFill>
        </button>
    </div>
  );
};