import React, { useEffect, useState } from "react";
import LandingImg from "../../asset/img/landingPageImg.svg";
import Header from "../../components/common/header/header.tsx";

const About = () => {
  const [cursorHidden, setCursorHidden] = useState(true);
  const [content, setContent] = useState("");

  const string = "당신이 궁금해 하던 모든 코딩 질문".split("");

  const type = (arr: string[], index: number = 0) => {
    if (index < arr.length) {
      setContent((prevContent) => prevContent + arr[index]);
      setTimeout(() => type(arr, index + 1), 80);
    }
  };

  useEffect(() => {
    setContent("");

    const blink = () => {
      setCursorHidden((prevCursorHidden) => !prevCursorHidden);
    };

    type(string);
    const intervalId = setInterval(blink, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-dvh">
      <Header />
      <div className="relative flex justify-around items-center h-[42.55rem] bg-FFDD2C">
        <div className="select-none">
          <div className="flex">
            <p className="text-xl font-semibold after:w-10 after:h-10 after:bg-black">{content}</p>
            <div className={`ml-1 mt-1 w-[0.13rem] h-[1.3rem] ${cursorHidden ? "bg-FFDD2C" : "bg-black"}`}></div>
          </div>
          <p className="w-full text-3xl font-bold">DEMA OVERFLOW에서 찾아보세요! :D</p>
          <p className="w-full text-949494 font-semibold text-end">사소한 질문부터 전문화된 지식까지 물어보세요 ;)</p>
        </div>
        <img src={LandingImg} width={600} className="select-none" />
      </div>
    </div>
  );
};

export default About;
