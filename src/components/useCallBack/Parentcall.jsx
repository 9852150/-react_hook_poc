import React, { useCallback, useMemo, useState } from "react";
import ChildCall from "./childCall";

const Parentcall = () => {
  const [value, setvalue] = useState("");
  const [background, setbackground] = useState("red");
  const [count, setCount] = useState(0);

  const handleColor = useCallback(() => {
    console.log("color");

    setbackground(value);
  }, [value]);

  const handleIncrement = useCallback(() => {
    console.log("count");

    setCount(count + 1);
  }, [count]);
  return (
    <>
      <div style={{ background: background, height: "100vh" }}>
        <input
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          className="border-b-red border-b outline-none"
        />
        <div>
          {count}
          <button onClick={handleIncrement}>Increment</button>
          <ChildCall {...{ handleColor, setbackground }} />
        </div>
      </div>
    </>
  );
};

export default Parentcall;
