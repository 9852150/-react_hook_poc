import React, { useRef, useState } from "react";

const BgColorByRef = () => {
  const [bgColor, setBgColor] = useState("");
  const colorRef = useRef();
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
          ref={colorRef}
        />
        <button
          className="rounded-lg text-white bg-[#3b3b5c] py-3 px-4"
          onClick={() => setBgColor(colorRef.current.value)}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default BgColorByRef;
