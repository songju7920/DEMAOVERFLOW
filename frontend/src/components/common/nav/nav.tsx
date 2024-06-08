import React from "react";
import NavBtn from "./navBtn.tsx";
import HomeImg from "../../../asset/img/home.svg";
import Question from "../../../asset/img/question.svg";
import { useNavigate } from "react-router-dom";

interface props {
  curruntPage: string;
}

const Nav = ({ curruntPage }: props) => {
  const navigate = useNavigate();

  const onClick = (path: string) => {
    if (path === "My Page") {
      navigate("/home");
    } else if (path === "Question") {
      navigate("/questions?page=1");
    }
  };

  return (
    <div className="flex flex-col items-end w-[15rem] py-[2rem] y-full border-r-[0.09rem] border-black hover:cursor-pointer">
      {/* <NavBtn img={HomeImg} text={"My Page"} active={curruntPage === "home"} clickEvent={onClick} /> */}
      <NavBtn img={Question} text={"Question"} active={curruntPage === "question"} clickEvent={onClick} />
    </div>
  );
};

export default Nav;
