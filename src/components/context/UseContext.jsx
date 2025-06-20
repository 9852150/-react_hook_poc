// import React, { createContext, useState } from "react";
// import UseContextChild from "./UsecontextChild";

// export const ThemeContext = createContext();

// const ContextExp = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={theme}>
//       <UseContextChild />
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>
//     </ThemeContext.Provider>
//   );
// };

// export default ContextExp;

import React, { createContext, useState } from "react";
import UseContextChild from "./UsecontextChild";

// Create the context
export const ThemeContext = createContext();

const UseContext = () => {
  const [count, setCount] = useState(1); // Dynamically managed state

  return (
    <ThemeContext.Provider value={count}>
      {" "}
      {/* Provide the count value */}
      <UseContextChild />
      <button onClick={() => setCount(count + 1)}>add</button>
    </ThemeContext.Provider>
  );
};

export default UseContext;
