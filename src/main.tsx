import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/inter/index.css";
import "./index.css";
import { App } from "./app";
import { makeServer } from "./__mock/server";

makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
