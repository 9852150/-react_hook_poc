// ^ A controlled component is a form element whose value is controlled by the state of the React component

import React, { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setValue(value);
  };
  return (
    <div className="bg-yellow-400 flex justify-center items-center h-screen w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-black p-2"
      />
      <button onClick={handleClick}>Sumbit</button>
    </div>
  );
};

export default Controlled;
