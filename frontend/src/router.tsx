import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundError from "./page/Error/notFound.tsx";
import Questions from "./page/questions/questions.tsx";
import About from "./page/about/about.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/about"} />} />
      <Route path="/about" element={<About />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default Router;
