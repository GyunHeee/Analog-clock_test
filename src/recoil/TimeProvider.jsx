import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

export const timeState = atom({
  key: 'time',
  default: new Date(),
});

export default function TimeProvider({ children }) {
  const [time, setTime] = useRecoilState(timeState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setTime]);

  return <>{children}</>;
}
