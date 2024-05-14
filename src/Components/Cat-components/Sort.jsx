import React from "react";
import Dropdown from "./Dropdown";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const Sort = () => {
  return (
    <>
      <div className=" px-[7.5vw] flex mt-10 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-2xl text-[#121212]">
            Category title
          </h1>
          <span className="text-[#5C5C5C]">(195 results)</span>
        </div>
        <div className=" flex items-center gap-2">
          <p className="text-[#121212]">Sort by</p>
          <Dropdown />
          <div className="flex items-center">
            <div className=" group flex bg-[#DEDEDE] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-s-md">
              <FiList className="bg-[#DEDEDE] text-[#5C5C5C]  group-hover:bg-[#FF7F00] group-hover:text-white" />
            </div>
            <div className="group flex bg-[#FF7F00] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-e-md">
              <FiGrid className="bg-[#FF7F00] text-white group-hover:bg-[#FF7F00] group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
