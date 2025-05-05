import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.sass";
import AppRouter from "./AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
