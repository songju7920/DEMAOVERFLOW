import React, { useEffect, useState } from "react";
import Header from "../../components/common/header/header.tsx";
import MDEditor, { title } from "@uiw/react-md-editor";
import CommentDetail from "../../components/postDetail/comment.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../api/post.ts";

interface comment {
  username: String;
  contents: String;
  createdAt: String;
}

interface post {
  title: String;
  contents: string;
  createdAt: String;
  views: number;
  username: string;
}

const PostDetail = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const [postData, setPostData] = useState<post>({
    title: "내용이 불러와지지 않은것 같습니다. 새로고침을 시도하세요.",
    contents: "### 내용이 불러와지지 않은것 같습니다. 새로고침을 시도하세요.",
    createdAt: "",
    views: 0,
    username: ""
  });
  const [comments, setComments] = useState<comment[]>([]);
  const [commentContents, setCommentContents] = useState("");

  // api 연동
  useEffect(() => {
    getDetail(postId)
      .then((data) => {
        setPostData(data.data);
        console.log(data.data);
      })
      .catch();
  }, []);

  // api 연동
  const postComment = () => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
  };

  return (
    <div className="w-full h-dvh">
      <Header />
      <div className="flex flex-col items-center w-full h-[43rem] py-[3rem] overflow-scroll">
        <div className="flex flex-col align-top w-[46rem] h-[4rem]">
          <p className="text-2xl font-bold">{postData.title}</p>
          <div className="flex w-[22rem] justify-between">
            <div className="flex">
              <p className="mr-[0.4rem] text-818181">Asked in</p>
              <p>{postData.createdAt}</p>
            </div>
            <div className="flex">
              <p className="mr-[0.4rem] text-818181">writed by</p>
              <p>{postData.username}</p>
            </div>
            <div className="flex">
              <p className="mr-[0.4rem] text-818181">Viewed</p>
              <p>{`${postData.views} times`}</p>
            </div>
          </div>
        </div>
        <hr className="w-[50rem] h-[1rem]" />
        <div className="w-[50rem] px-[2rem] py-[1.5rem] rounded-xl" data-color-mode="light">
          <MDEditor.Markdown source={postData.contents} />
        </div>
        <div className="w-[46rem] flex flex-col mt-[3rem]">
          <div className=" mt-[2rem]">
            {comments.length == 0 ? (
              <p className="font-semibold text-818181">답변이 없습니다. 첫 답변을 남겨주세요!</p>
            ) : (
              <p className="font-semibold text-818181">{comments.length}개의 답변이 있습니다.</p>
            )}
            {comments.map(({ username, contents, createdAt }: comment) => (
              <CommentDetail nickname={username} createAt={createdAt} contents={contents}></CommentDetail>
            ))}
          </div>
        </div>
        <hr className="w-[50rem] h-[1rem] my-[1rem]" />
        <div className="flex flex-col w-[46rem] items-end">
          <p className="w-full font-semibold mb-[0.5rem]">답변 등록하기</p>
          <div data-color-mode="light" className="w-full">
            <MDEditor
              height={"20rem"}
              value={commentContents}
              onChange={(value) => {
                if (value) setCommentContents(value);
              }}
            />
          </div>
          <button className="w-[6rem] h-[3rem] mt-[0.5rem] bg-F8DB43 rounded-xl hover:cursor-pointer" onClick={postComment}>
            답변 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
