import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Header from "../../components/common/header/header.tsx";
import { createPost } from "../../api/post.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onClick = () => {
    createPost({ title, contents: markdown })
      .then(() => {
        toast.success("글 등록에 성공했습니다 👍");
        navigate("/questions?page=1");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full h-dvh">
      <Header />
      <div className="flex flex-col justify-center items-center w-full h-[43rem]">
        <div className="flex flex-col h-[37rem] justify-between items-end">
          <input className="w-[70rem] h-[3rem] border-[0.05rem] px-[2rem] border-black rounded-xl" placeholder="제목을 입력해주세요" onChange={onChange} />
          <div className="w-[70rem] h-[30rem] overflow-scroll shadow-[3px_3px_2px_#dadada]" data-color-mode="light">
            <MDEditor
              height={"30rem"}
              value={markdown}
              onChange={(value) => {
                if (value) setMarkdown(value);
              }}
            />
          </div>
          <button className="w-[5rem] h-[2.5rem] bg-F8DB43 rounded-lg" onClick={onClick}>
            글 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
