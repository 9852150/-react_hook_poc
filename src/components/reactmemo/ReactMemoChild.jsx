import React, { memo } from "react";

const ReactMemoChild = ({ text }) => {
  console.log("child render");

  return (
    <>
      <div>{text}</div>
    </>
  );
};

export default memo(ReactMemoChild);
