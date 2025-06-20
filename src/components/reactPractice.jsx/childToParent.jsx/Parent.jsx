import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [props, setProps] = useState("");
  const handleChildByCallback = (child) => {
    setProps(child);
  };
  return (
    <div>
      {/* <h1>{props}</h1> */}
      <Child {...{ handleChildByCallback, props }} />
    </div>
  );
};

export default Parent;
