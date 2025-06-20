import React, { memo } from "react";

const UseCall = ({ todo, addTodo }) => {
  console.log("child render");

  return (
    <>
      <div className="my-10">
        {todo.map(({ el }) => {
          <p>{el}</p>;
        })}
      </div>
      <div>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </>
  );
};

export default memo(UseCall);
