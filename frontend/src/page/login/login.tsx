import React, { useState } from "react";
import character from "../../asset/img/loginCharacter.svg";
import logo from "../../asset/img/logoImg.svg";
import openedEye from "../../asset/img/seeImg.svg";
import closedEye from "../../asset/img/notSeeImg.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPW, setShowPW] = useState(false);

  const onClick = () => {
    setShowPW((prevShowPW) => !prevShowPW);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-dvh bg-FFDD2C">
      <img src={character} width={70} className="absolute left-[9.5rem] top-[10rem]" />
      <div className="flex flex-col items-center justify-center w-[70rem] h-[35rem] border-[0.1rem] border-black bg-white rounded-3xl z-10">
        <div className="flex flex-col items-center justify-around h-[20rem]">
          <div className="flex items-center justify-between w-[9rem]">
            <img src={logo} width={45} />
            <p className="text-F0CA00 text-3xl font-bold italic">Login</p>
          </div>
          <div className="flex flex-col h-[6rem] justify-between">
            <input placeholder="아이디를 입력하세요" className="w-[30rem] h-[2.5rem] px-[15px] bg-F2F5FA rounded-xl" />
            <div className="relative">
              <input placeholder="비밀번호를 입력하세요" className="w-[30rem] h-[2.5rem] px-[15px] bg-F2F5FA rounded-xl" type={showPW ? "text" : "password"} />
              <img src={showPW ? openedEye : closedEye} className="absolute right-3 bottom-[0.3rem] hover:cursor-pointer" onClick={onClick} />
            </div>
          </div>
          <button className="w-[30rem] h-[2.5rem] bg-F0CA00 rounded-xl font-semibold text-white text-lg">Login</button>
          <div className="flex justify-between w-[16rem] select-none">
            <p className="text-sm text-818181">아직 회원이 아니신가요?</p>
            <p className="text-sm text-474747 font-bold hover:cursor-pointer">회원가입 하러 가기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
