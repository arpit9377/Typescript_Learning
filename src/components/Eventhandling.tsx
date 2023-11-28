import React, { ChangeEvent, useState,MouseEvent } from 'react';

const Eventhandling = () => {
  const [input, setInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(() =>  event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    alert('submitted');
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Eventhandling;
