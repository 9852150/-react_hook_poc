import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

const UseContextChild = () => {
  //   const data = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(data) => {
        console.log(data);
      }}
    </ThemeContext.Consumer>
  );
};

export default UseContextChild;
