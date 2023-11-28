import React, { useRef } from 'react';

function UseRef() {
  const focusPoint = useRef<HTMLTextAreaElement>(null);

  const handleAction = () => {
    if (focusPoint.current) {
      focusPoint.current.value = 'I have entered this using Useref';
      focusPoint.current.focus();
    }
  };

  return (
    <div>
      <textarea ref={focusPoint}></textarea>
      <button onClick={handleAction}>Action</button>
    </div>
  );
}

export default UseRef;
