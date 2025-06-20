// ^An uncontrolled component is a form element where the value is not directly controlled by React's state. Instead, the DOM itself manages the input's value.

import React, { useState } from "react";

const UnControlled = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setValue(value);
    const inputValue = document.querySelector("#input").value;
    console.log(inputValue);
  };
  return (
    <div className="bg-yellow-400 flex justify-center items-center h-screen w-full">
      <input id="input" className="border border-black p-2" />
      <button onClick={handleClick}>Sumbit</button>
    </div>
  );
};

export default UnControlled;
