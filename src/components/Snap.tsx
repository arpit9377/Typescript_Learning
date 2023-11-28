import React, { useState } from "react";

interface Istate{
    count?:number,
    snap?:number[]
}

const Snap:React.FC <Istate>=({count:defaultCount=0,snap:defaultSnap=[]}) =>{
  const [count, setCount] = useState<number>(defaultCount);
  const [snap, showSnap] = useState<number[]>(defaultSnap);

  const handleSnap = (event: React.MouseEvent<HTMLElement>) => {
    const isInList = snap.includes(count); //Check if it is there in the list or not
    if (isInList) {
      alert("Already exist");
    } else {
      showSnap([...snap, count]); //this is super imp concept, this displays the all previous element in the array  plus the last entered element. All previous+last entered
    }
  };

  const handleDelete = (item:number) => {   //Ye delete button logic
    showSnap(snap.filter((snapItem) => snapItem !== item)); //This is how you delete using filter
  };
 

  const handleIncre = () => {
    setCount(count + 1);
  };
  const handleDecre = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleIncre}>+</button>
      <div>{count}</div>
      <button onClick={handleDecre}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSnap}> Snap/Add</button>
      <ul>
        {snap.map((item) => (
          <li>
            {item}{" "}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Snap;
