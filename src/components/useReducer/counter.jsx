import React, { useReducer } from "react";

const USEReducer = () => {
  const initialValue = { count: 0 };
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="flex justify-center items-center gap-6 w-full bg-slate-900 min-h-screen">
      <button
        onClick={() => dispatch("increment")}
        className="border border-black bg-slate-600 rounded-sm text-sm"
      >
        Increment
      </button>
      <button className="text-white">{state.count}</button>
      <button
        onClick={() => state.count > 0 && dispatch( "decrement")}
        className="border bg-slate-600 border-black rounded-sm text-sm"
      >
        Decrement
      </button>
    </div>
  );
};

export default USEReducer;
