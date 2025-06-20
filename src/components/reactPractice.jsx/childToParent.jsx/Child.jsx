import React, { useState } from "react";

const Child = ({ handleChildByCallback, props }) => {
  const [values, setValues] = useState("");
  return (
    <div className="bg-slate-500 min-h-screen flex justify-center items-center gap-2">
      <div className="flex gap-3">
        <input
          className="rounded-lg text-white bg-[#3b3b5c] py-3 px-4"
          type="text"
          placeholder="enter here"
          value={values}
          onChange={(e) => setValues(e.target.value)}
        />
        <button
          className="rounded-lg text-white bg-[#3b3b5c] py-3 px-4"
          onClick={() => handleChildByCallback(values)}
        >
          Click here
        </button>
      </div>
      <div>{props}</div>
    </div>
  );
};

export default Child;
