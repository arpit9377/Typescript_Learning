import React, { useState, FormEvent, ChangeEvent } from "react";

interface IState {
  count?: number;
  inc?: number;
  display?: number;
}

const IncrementBy: React.FC<IState> = ({ count = 0, inc = 0, display = 0 }) => {
  const [countValue, setCount] = useState<number>(count);
  const [incValue, setInc] = useState<number>(inc);
  const [displayValue, showDisplay] = useState<number>(display);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const totalCount = countValue + incValue;
    showDisplay(totalCount);
    setCount(0);
    setInc(0);
  };

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCount(isNaN(value) ? 0 : value);
  };

  const handleIncChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setInc(isNaN(value) ? 0 : value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={countValue}
          placeholder="Enter a Number"
          onChange={handleCountChange}
        />
        <input
          type="text"
          value={incValue}
          placeholder="Increase By"
          onChange={handleIncChange}
        />
        <button type="submit">Increase</button>
        <div>{displayValue}</div>
      </form>
    </div>
  );
};

export default IncrementBy;
