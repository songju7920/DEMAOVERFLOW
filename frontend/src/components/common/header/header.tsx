import React, { useState } from "react";
import Logo from "../../../asset/img/logo.svg";
import Search from "../../../asset/img/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const moveToAbout = () => {
    navigate("/about");
  };

  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToSignup = () => {
    navigate("/signup");
  };

  const moveToQuestions = () => {
    navigate("/questions?page=1");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    toast.success("로그아웃이 완료되었습니다.");
    navigate("/");
  };

  return (
    <div className="flex justify-around items-center h-[5rem] shadow-[3px_3px_2px_#dadada]">
      <img src={Logo} className="hover:cursor-pointer select-none" onClick={moveToAbout} />
      {location.pathname === "/about" ? (
        <p className="text-xl font-semibold hover:cursor-pointer select-none" onClick={moveToQuestions}>
          Move To Questions
        </p>
      ) : (
        <p className="text-xl font-semibold hover:cursor-pointer select-none" onClick={moveToAbout}>
          About Hompage
        </p>
      )}
      <div className="flex w-[55rem] justify-between">
        <div className="flex relative">
          <img src={Search} width={18} className="absolute top-[0.9rem] left-[0.9rem] hover:cursor-pointer select-none" onClick={moveToQuestions} />
          <input
            placeholder="Search anything you want"
            className="border-[0.09rem] border-black px-[2.5rem] w-[40rem] h-[3rem] rounded-xl placeholder:font-semibold placeholder:text-B9B9B9 placeholder:select-none"
          />
        </div>
        {!localStorage.getItem("accessToken") ? (
          <div className="flex justify-between w-[13rem]">
            <div className="flex items-center justify-center bg-F8DB43 rounded-xl w-[6rem] h-[3rem] font-bold hover:cursor-pointer select-none" onClick={moveToLogin}>
              로그인
            </div>
            <div className="flex items-center justify-center bg-F8DB43 rounded-xl w-[6rem] h-[3rem] font-bold hover:cursor-pointer select-none" onClick={moveToSignup}>
              회원가입
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-F8DB43 rounded-xl w-[6rem] h-[3rem] font-bold hover:cursor-pointer select-none" onClick={logout}>
            로그아웃
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
