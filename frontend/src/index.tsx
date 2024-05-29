import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Fail to find root element, check index.html");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
