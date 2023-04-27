import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = hours * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6 + seconds * 0.1;
  const secondDegree = seconds * 6;

  return (
    <div className="container">
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourDegree}deg)` }}
      />
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteDegree}deg)` }}
      />
      <div
        className="second-hand"
        style={{ transform: `rotate(${secondDegree}deg)` }}
      />
      <div className="center" />
    </div>
  );
}