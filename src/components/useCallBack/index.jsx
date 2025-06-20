import React, { useCallback, useState } from "react";
import UseCall from "./UseCall";

const UseCallBackComp = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo((preV) => [...preV, "New Todo"]);
  }, [todo]);
  return (
    <div>
      <UseCall {...{ todo, addTodo }} />
      <hr />
      <div>Count:{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseCallBackComp;
