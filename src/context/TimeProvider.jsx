import React, { useState, useEffect, createContext } from 'react';

export const ClockContext = createContext();

export default function TimeProvider({ children }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <ClockContext.Provider value={time}>{children}</ClockContext.Provider>;
}
