import React from "react";
import { Route, Routes } from "react-router-dom";
import Project from "./page/project/project.tsx";
import NotFoundError from "./page/Error/notFound.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default Router;
