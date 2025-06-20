import React, { createContext, useState } from "react";
import UseContextChild from "./UsecontextChild";

// 1. Create Context
export const ThemeContext = createContext();

const ContextApi = () => {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Use Provider to make data available to child components
    <ThemeContext.Provider value={theme}>
      <UseContextChild />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};
export default ContextApi;
