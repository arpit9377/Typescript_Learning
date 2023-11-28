import React, { useState } from 'react';

interface Istate  {
  name: string;
  age: number;
}

const TsStates: React.FC<Istate> = ({ name, age }) => {
  const [updatedState, setUpdatedState] = useState<Istate>({ name, age });

  const handleUpdateState = (newState: Istate) => {
    setUpdatedState(newState);
  };

  return (
    <div>
      <h1>{updatedState.name}</h1>
      <h2>{updatedState.age}</h2>
      <button onClick={() => handleUpdateState({ name: 'Rohit', age: 25 })}>
        Update State
      </button>
    </div>
  );
};

export default TsStates;
