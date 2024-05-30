import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundError from "./page/Error/notFound.tsx";
import Questions from "./page/questions/questions.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/questions" element={<Questions />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default Router;
