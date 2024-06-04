import React, { useState } from "react";
import character from "../../asset/img/loginCharacter.svg";
import logo from "../../asset/img/logoImg.svg";
import PwInput from "../../components/signup/pwInput.tsx";

const Signup = () => {
  const [data, setData] = useState({ username: "", password: "", passwordChack: "" });

  const onChange = (e) => {
    const { value, name } = e.target;

    setData({ ...data, [name]: value });
  };

  const onclick = () => {
    if (data.password !== data.passwordChack) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    console.log(data);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-dvh bg-FFDD2C">
      <img src={character} width={70} className="absolute left-[9.5rem] top-[10rem]" />
      <div className="flex flex-col items-center justify-center w-[70rem] h-[35rem] border-[0.1rem] border-black bg-white rounded-3xl z-10">
        <div className="flex flex-col h-[18rem] justify-between items-center">
          <div className="flex justify-between items-center w-[10.5rem]">
            <img src={logo} width={45} />
            <p className="text-3xl font-semibold italic text-F0CA00">Sign up</p>
          </div>
          <div className="flex flex-col justify-between h-[9rem]">
            <input className="bg-F2F5FA px-[1.5rem] w-[30rem] h-[2.5rem] rounded-xl" placeholder="이름을 입력해주세요" name="username" onChange={onChange} />
            <PwInput placeHolder={"비밀번호를 입력하세요"} name={"password"} changeEvent={onChange} />
            <PwInput placeHolder={"비밀번호를 재입력하세요"} name={"passwordChack"} changeEvent={onChange} />
          </div>
          <button className="bg-F0CA00 w-[30rem] h-[2.5rem] rounded-xl active:bg-D5B300 transition ease-in-out delay-150" onClick={onclick}>
            회원가입 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
