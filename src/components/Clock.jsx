import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

  const timeString = `${hours}:${minutes}:${seconds}`;

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY - 30 });
  };

  return (
    <div className="container">
      <div
        className="clock"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hourDegree}deg)` }}
          title={timeString}
        />
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
          title={timeString}
        />
        <div
          className="second-hand"
          style={{ transform: `rotate(${secondDegree}deg)` }}
          title={timeString}
        />
        <div className="center" />
      </div>
      {showTooltip && (
        <div
          className="tooltip"
          style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
        >
          {time.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
