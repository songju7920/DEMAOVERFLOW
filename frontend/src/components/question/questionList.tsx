import React from "react";

interface props {
  title: string;
  writer: string;
  view: number;
  createAt: string;
}

const QuestionList = ({ title, writer, view, createAt }: props) => {
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
