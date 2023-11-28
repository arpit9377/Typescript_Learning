import React, { useState, useEffect } from "react";

interface Istate {
  count?: number;
  snappedValues?: number[];
}

export const SnapWithTimer: React.FC<Istate> = ({
  count: defaultCount = 0,
  snappedValues: defaultSnap = [],
}) => {
  const [count, setCount] = useState<number>(defaultCount);
  const [snappedValues, setSnappedValues] = useState<number[]>(
    defaultSnap || [] //  default empty array if defaultSnap is undefined
  );

  let interval: NodeJS.Timer;

  useEffect(() => {
    interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {clearInterval(interval)};
  }, [count]); 

  const handleStart = (event: React.MouseEvent<HTMLElement>) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleStop = (event: React.MouseEvent<HTMLElement>) => {
    clearInterval(interval);
  };

  const handleReset = (event: React.MouseEvent<HTMLElement>) => {
    setCount(0);
  };

  const handleSnap = (event: React.MouseEvent<HTMLElement>) => {
    if (snappedValues && snappedValues.includes(count)) {
      alert("Already exists!");
    } else {
      setSnappedValues((prevValues) => [...prevValues, count]);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSnap}>Snap</button>
      <ul>
        {snappedValues.map((snappedValue) => (
          <li key={snappedValue}>{snappedValue}</li>
        ))}
      </ul>
    </div>
  );
};
