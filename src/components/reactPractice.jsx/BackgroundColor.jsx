import React, { useState } from "react";

const BackgroundColor = () => {
  const [color, setColor] = useState("");
  const [bgColor, setBackgroundColor] = useState("");
  return (
    <div
      style={{ background: bgColor }}
      className="bg-black min-h-screen text-white"
    >
      <div className="flex gap-7 items-center justify-center min-h-[60vh] pt-10">
        <input
          className="rounded-lg text-white bg-[#3b3b5c] py-3 px-4"
          type="text"
          placeholder="Enter color name"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          className="rounded-lg text-white bg-[#3b3b5c] py-3 px-4"
          onClick={() => setBackgroundColor(color)}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default BackgroundColor;
