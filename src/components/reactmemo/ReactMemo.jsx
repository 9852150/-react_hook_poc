import React, { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const text = "hello";
  return (
    <div>
      <ReactMemoChild {...{ text }} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
    </div>
  );
};

export default ReactMemo;
