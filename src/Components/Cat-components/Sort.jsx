import React from "react";
import Dropdown from "./Dropdown";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sort = () => {
  return (
    <>
      <div className=" px-[7.5vw] max-[600px]:px-4 flex mt-10 max-[600px]:mt-5 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-2xl text-[#121212] max-[600px]:text-lg">
            Category title
          </h1>
          <span className="text-[#5C5C5C] max-[600px]:text-sm">(195 results)</span>
        </div>
        <div className=" flex items-center gap-2">
          <p className="text-[#121212] max-[600px]:hidden">Sort by</p>
          <Dropdown />
          <div className="flex items-center">
              <Link to="/categories?view=list">
            <div className=" group flex bg-[#DEDEDE] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-s-md">
                <FiList className="bg-[#DEDEDE] text-[#5C5C5C]  group-hover:bg-[#FF7F00] group-hover:text-white" />
            </div>
              </Link>
            <Link to="/categories?view=grid">
              <div className="group flex bg-[#FF7F00] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-e-md">
                <FiGrid className="bg-[#FF7F00] text-white group-hover:bg-[#FF7F00] group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
