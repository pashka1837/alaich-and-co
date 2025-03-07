import { createRoot } from "react-dom/client";
import "@fontsource/inter/index.css";
import "./index.css";
import { App } from "./app";
import { makeServer } from "./__mock/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

createRoot(document.getElementById("root")!).render(<App />);
