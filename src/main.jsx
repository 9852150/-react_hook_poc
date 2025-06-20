import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./components/allRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
);
