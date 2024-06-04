import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundError from "./page/Error/notFound.tsx";
import Questions from "./page/questions/questions.tsx";
import About from "./page/about/about.tsx";
import Login from "./page/login/login.tsx";
import Signup from "./page/signup/signup.tsx";
import CreatePost from "./page/createPost/createPost.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/about"} />} />
      <Route path="/about" element={<About />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createPost" element={<CreatePost />} />
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default Router;
