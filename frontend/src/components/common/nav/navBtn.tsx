import React from "react";

interface props {
  img: string;
  text: string;
  active: boolean;
  clickEvent: any;
}

const NavBtn = ({ img, text, active, clickEvent }: props) => {
  return (
    <div className={`flex justify-between items-center pl-[1.5rem] mb-[0.5rem] ${active && "bg-E8E8E8"} w-[11.5rem] h-[2.5rem] pr-[3rem] rounded-l-xl select-none`} onClick={() => clickEvent(text)}>
      <img src={img} width={20} />
      <p className="font-semibold text-xl">{text}</p>
    </div>
  );
};

export default NavBtn;
