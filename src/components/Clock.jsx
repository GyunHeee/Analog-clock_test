import React, { useState, useContext, useEffect } from 'react';
import './Clock.css';
import ClockType from './ClockType';
import { ClockContext } from '../context/TimeProvider';

export default function Clock() {
  const time = useContext(ClockContext) || new Date();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const [hourDegree, setHourDegree] = useState(0);
  const [minuteDegree, setMinuteDegree] = useState(0);
  const [secondDegree, setSecondDegree] = useState(0);

  // 위의 처리를 통해 시침,분침,초침이 자동으로 움직임
  useEffect(() => {
    const intervalId = setInterval(() => {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const hourDegree = hours * 30 + minutes * 0.5;
      const minuteDegree = minutes * 6 + seconds * 0.1;
      const secondDegree = seconds * 6;

      setHourDegree(hourDegree);
      setMinuteDegree(minuteDegree);
      setSecondDegree(secondDegree);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

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
        <ClockType deg={hourDegree} width={4} height={45} color="black" />
        <ClockType deg={minuteDegree} width={3} height={60} color="black" />
        <ClockType deg={secondDegree} width={2} height={80} color="black" />
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
