import React, { useEffect, useState } from "react";
import Header from "../../components/common/header/header.tsx";
import Nav from "../../components/common/nav/nav.tsx";
import DropdownImg from "../../asset/img/dropdown.svg";
import QuestionList from "../../components/question/questionList.tsx";
import Pagination from "../../components/question/pagination.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownBtn from "../../components/question/dropdownBtn.tsx";
import { getPosts } from "../../api/post.ts";
import { toast } from "react-toastify";

const Questions = () => {
  interface question {
    title: string;
    writer: string;
    view: number;
    createAt: string;
    postId: number;
  }

  const navigate = useNavigate();
  const location = useLocation();

  const page = parseInt(location.search.split("=")[1]);

  const [orderBy, setOrderBy] = useState("DESC");
  const [questions, setQuestions] = useState<question[]>([]);
  const [pagination, setPagination] = useState<JSX.Element[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const onClick = (num) => {
    navigate(`/questions?page=${num}`);
  };

  const changeOrderBy = (text) => {
    if (text === "오래된순") {
      setOrderBy("ASC");
    } else {
      setOrderBy("DESC");
    }
    changeShowDropdown();
  };

  const changeShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const makePagination = () => {
    console.log(questions.length);
    const result: JSX.Element[] = [<Pagination pageNum={page} active={true} clickEvent={onClick} />];
    for (let i = 1; i < 5; i++) {
      if (result.length == 5) break;
      if (page - i > 0) {
        result.unshift(<Pagination pageNum={page - i} active={false} clickEvent={onClick} />);
      }
      if ((page + i - 1) * 10 < questions.length) {
        result.push(<Pagination pageNum={page + i} active={false} clickEvent={onClick} />);
      }
    }
    setPagination(result);
  };

  const moveToCreatePost = () => {
    navigate("/createPost");
  };

  useEffect(() => {
    // 포스트 데이터 불러오기
    getPosts("")
      .then((res) => {
        setQuestions(res.data.posts);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [page, orderBy]);

  useEffect(() => {
    makePagination();
  }, [questions]);

  return (
    <div className="w-full h-dvh">
      <Header />
      <div className="flex w-full h-[42.6rem]">
        <Nav curruntPage={"question"} />
        <div className="flex flex-col justify-center items-center w-full h-full pt-[2.5rem] px-[3rem] pb-[3rem]">
          <div className="flex justify-between items-center w-full px-[1rem]">
            <div className="select-none">
              <p className="text-3xl font-bold">Questions</p>
              <p className="text-lg font-semibold">{questions.length}개의 질문이 검색되었습니다</p>
            </div>
            <div className="flex justify-between w-[15rem] select-none">
              <div className="relative">
                <div className="flex justify-center items-center px-[1rem] w-[7rem] h-[3rem] bg-EAEBEE rounded-xl hover:cursor-pointer" onClick={changeShowDropdown}>
                  <div className="flex justify-center items-center">{orderBy == "DESC" ? "최신순" : "오래된순"}</div>
                  <img src={DropdownImg} width={12} className="ml-[0.5rem]" />
                </div>
                {showDropdown && (
                  <div className="flex flex-col items-center justify-around absolute h-[5rem] w-[7rem] bg-EAEBEE rounded-xl">
                    <DropdownBtn text={"최신순"} clickEvent={changeOrderBy} direction={"top"} />
                    <DropdownBtn text={"오래된순"} clickEvent={changeOrderBy} direction={"bottom"} />
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center w-[7rem] h-[3rem] font-semibold bg-F8DB43 rounded-xl hover:cursor-pointer" onClick={moveToCreatePost}>
                질문하기
              </div>
            </div>
          </div>
          <div className="w-full mt-[1rem] h-[30rem]">
            <hr className="h-[0.2rem] bg-black" />
            <div className="flex justify-between px-[3rem] py-[0.5rem] w-full">
              <div className="flex justify-center w-[35rem] text-lg font-bold">제목</div>
              <div className="flex justify-center w-[10rem] text-lg font-bold">작성자</div>
              <div className="flex justify-center w-[10rem] text-lg font-bold">조회수</div>
              <div className="flex justify-center w-[10rem] text-lg font-bold">등록일</div>
            </div>
            <hr className="h-[0.09rem] bg-B2B2B2" />
            {questions.slice((page - 1) * 10, 10 * page).map(({ postId, title, writer, view, createAt }) => (
              <QuestionList title={title} writer={writer} view={view} createAt={createAt} postId={postId} />
            ))}
          </div>
          <div className="flex justify-between w-[10rem] mt-[1.5rem]">{pagination.map((element) => element)}</div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
