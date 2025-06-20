import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();
  const handleRef = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleRef}>Click</button>
    </>
  );
};

export default UseRef;
