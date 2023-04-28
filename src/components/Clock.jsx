import React, { useState, useEffect, useCallback } from 'react';
import './Clock.css';
import ClockType from './ClockType';
import { useRecoilValue } from 'recoil';
import { timeState } from '../recoil/TimeProvider';

export default function Clock() {
  const time = useRecoilValue(timeState);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const calculateDegree = useCallback(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDegree = hours * 30 + minutes * 0.5;
    const minuteDegree = minutes * 6 + seconds * 0.1;
    const secondDegree = seconds * 6;

    return { hour: hourDegree, minute: minuteDegree, second: secondDegree };
  }, [time]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      calculateDegree();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [calculateDegree]);

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
        <ClockType
          deg={calculateDegree().hour}
          width={4}
          height={45}
          color="black"
        />
        <ClockType
          deg={calculateDegree().minute}
          width={3}
          height={60}
          color="black"
        />
        <ClockType
          deg={calculateDegree().second}
          width={2}
          height={80}
          color="black"
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
