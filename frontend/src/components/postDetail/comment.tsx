import React from "react";

interface props {
  nickname: String;
  createAt: String;
  contents: String;
}

const CommentDetail = ({ nickname, createAt, contents }: props) => {
  return (
    <div className="px-[2rem] py-[1rem] rounded-xl">
      <div className="flex align-middle">
        <div className="w-[3rem] h-[3rem] mr-3 bg-DBDBDB rounded-full"></div>
        <div className="flex flex-col">
          <p className="font-semibold">{nickname}</p>
          <p className="text-646464">{createAt}</p>
        </div>
      </div>
      <div className="mt-[0.5rem] mb-[0.8rem] flex">
        <div className="w-[0.05rem] mx-[1.5rem] h-auto bg-black" />
        <p className="ml-[0.7rem] mt-[0.3rem]">{contents}</p>
      </div>
      <hr className="border-dotted border-[0.01rem]" />
    </div>
  );
};

export default CommentDetail;
