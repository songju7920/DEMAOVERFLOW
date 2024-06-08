import React, { useEffect, useState } from "react";
import Header from "../../components/common/header/header.tsx";
import MDEditor from "@uiw/react-md-editor";
import SubmitBtn from "../../asset/img/submitBtn.svg";
import CommentDetail from "../../components/postDetail/comment.tsx";

interface comment {
  username: String;
  contents: String;
  createdAt: String;
}

const PostDetail = () => {
  const [contents, setContents] = useState("");
  const [comments, setComments] = useState<comment[]>([]);
  const [commentContents, setCommentContents] = useState("");

  // api 연동
  useEffect(() => {}, []);

  const onChange = (e) => {
    setCommentContents(e.target.value);
  };

  // api 연동
  const postComment = () => {};

  return (
    <div className="w-full h-dvh">
      <Header />
      <div className="flex flex-col items-center w-full h-[43rem] py-[3rem] overflow-scroll">
        <div className="w-[50rem] px-[2rem] py-[1.5rem] border-black border-[0.05rem] rounded-xl" data-color-mode="light">
          <MDEditor.Markdown source={contents} />
        </div>
        <div className="w-[50rem] flex flex-col mt-[3rem]">
          <div className="border-black border-[0.05rem] px-[2rem] pt-[2rem] pb-[1rem] rounded-xl">
            <textarea className="w-full h-[5rem] outline-none resize-none" onChange={onChange} />
            <div className="flex justify-end w-full">
              <img src={SubmitBtn} width={20} className="hover:cursor-pointer" onClick={postComment} />
            </div>
          </div>
          <div className=" mt-[2rem]">
            {comments.length == 0 && <p className="font-semibold text-818181">댓글이 없습니다. 첫 댓글을 남겨주세요!</p>}
            {comments.map(({ username, contents, createdAt }: comment) => (
              <CommentDetail nickname={username} createAt={createdAt} contents={contents}></CommentDetail>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
