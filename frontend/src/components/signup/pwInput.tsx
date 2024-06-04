import React, { useState } from "react";
import openedEye from "../../asset/img/seeImg.svg";
import closedEye from "../../asset/img/notSeeImg.svg";

interface props {
  placeHolder: string;
  name: string;
  changeEvent: any;
}

const PwInput = ({ placeHolder, name, changeEvent }: props) => {
  const [showPW, setShowPW] = useState(false);

  const onClick = () => {
    setShowPW((prevShowPW) => !prevShowPW);
  };

  return (
    <div className="relative">
      <input className="bg-F2F5FA px-[1.5rem] w-[30rem] h-[2.5rem] rounded-xl" placeholder={placeHolder} type={showPW ? "text" : "password"} name={name} onChange={changeEvent} />
      <img src={showPW ? openedEye : closedEye} onClick={onClick} className="absolute right-4 bottom-2" />
    </div>
  );
};

export default PwInput;
