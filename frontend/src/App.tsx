import { BrowserRouter } from "react-router-dom";
import React from "react";
import Router from "./router.tsx";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
