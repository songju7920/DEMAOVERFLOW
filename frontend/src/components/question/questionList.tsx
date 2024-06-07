import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
  postId: number;
  title: string;
  writer: string;
  view: number;
  createAt: string;
}

const QuestionList = ({ postId, title, writer, view, createAt }: props) => {
  const navigate = useNavigate();

  onclick = () => {
    navigate(`/question/${postId}`);
  };

  return (
    <>
      <div className="flex justify-between px-[3rem] py-[0.5rem] w-full hover:cursor-pointer">
        <div className="flex w-[35rem] text-646464 text-base">{title}</div>
        <div className="flex justify-center w-[10rem] text-646464 text-base">{writer}</div>
        <div className="flex justify-center w-[10rem] text-646464 text-base">{view}</div>
        <div className="flex justify-center w-[10rem] text-646464 text-base">{createAt}</div>
      </div>
      <hr className="h-[0.09rem] bg-B2B2B2" />
    </>
  );
};

export default QuestionList;
