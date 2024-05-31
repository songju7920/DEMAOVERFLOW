import React from "react";
import errorImg from "../../asset/img/NotFoundError.svg";
import { useNavigate } from "react-router-dom";

const NotFoundError = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-dvh select-none">
      <div className="flex flex-col justify-between items-center h-[20rem]">
        <div className="flex flex-col justify-between items-center">
          <img src={errorImg} width={250} />
          <p className="font-semibold text-5xl">Page Not Found</p>
        </div>
        <p className="text-center">
          찾으시던 페이지가 존재하지 않거나 이동된것 같습니다
          <br />
          이용에 불편을 드려 죄송합니다
        </p>
        <div className="flex justify-between w-[23rem]">
          <div className="flex items-center justify-center w-[11rem] h-[2rem] bg-D9D9D9 rounded-xl text-sm font-semibold hover:cursor-pointer" onClick={goToMain}>
            메인화면으로 돌아가기
          </div>
          <div className="flex items-center justify-center w-[11rem] h-[2rem] bg-D9D9D9 rounded-xl text-sm font-semibold hover:cursor-pointer" onClick={goBack}>
            이전화면으로 돌아가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundError;
