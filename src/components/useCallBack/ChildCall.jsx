import React, { memo } from "react";

const ChildCall = ({ handleColor }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={handleColor}>Change Color</button>
    </div>
  );
};

export default memo(ChildCall);
