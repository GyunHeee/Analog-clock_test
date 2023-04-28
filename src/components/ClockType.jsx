import React, { useEffect, useState } from 'react';

export default function ClockType({ deg, width, height, color }) {
  const [transform, setTransform] = useState(`rotate(${deg}deg)`);

  useEffect(() => {
    setTransform(`rotate(${deg}deg)`);
  }, [deg]);

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    transform,
  };

  return <div className="hand" style={style} />;
}
