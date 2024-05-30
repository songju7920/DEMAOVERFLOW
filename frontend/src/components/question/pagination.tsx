import React from "react";

interface props {
  pageNum: number;
  active: boolean;
  clickEvent: any;
}

const Pagination = ({ pageNum, active, clickEvent }: props) => {
  return (
    <div className="relative hover:cursor-pointer" onClick={() => clickEvent(pageNum)}>
      <p className={`${active ? "text-E7C000" : "text-black"}`}>{pageNum}</p>
      {active && <div className="absolute bottom-[0.2rem] h-[0.1rem] w-full bg-E7C000"></div>}
    </div>
  );
};

export default Pagination;
