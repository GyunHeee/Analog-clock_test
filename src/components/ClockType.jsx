import React from 'react';

export default function ClockType({ deg, width, height, color }) {
  const style = {
    transform: `rotate(${deg}deg)`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };

  return <div className="hand" style={style} />;
}
