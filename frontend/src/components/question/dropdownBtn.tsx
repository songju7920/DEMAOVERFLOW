import React from "react";

interface props {
  text: string;
  direction: string;
  clickEvent: any;
}

const DropdownBtn = ({ text, direction, clickEvent }: props) => {
  return (
    <div
      className={`flex items-center justify-center w-[7rem] h-[2.5rem] hover:cursor-pointer active:bg-DBDBDB rounded-${direction == "top" ? "t" : "b"}-xl transition ease-in-out delay-150`}
      onClick={() => clickEvent(text)}
    >
      {text}
    </div>
  );
};

export default DropdownBtn;
