import MDEditor from "@uiw/react-md-editor";
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
        <div data-color-mode="light" className="w-full px-[1rem]">
          <MDEditor.Markdown source={contents} />
        </div>
      </div>
      <hr className="border-dotted border-[0.01rem]" />
    </div>
  );
};

export default CommentDetail;
