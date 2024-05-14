import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Catbanner from "./Catbanner";

const Categories = () => {
  return (
    <>
      <div className=" ">
        <div className="flex items-center justify-center mt-[4vw]">
          <div className="w-[85%]">
            <div className="flex justify-between items-center">
              <h1 className="text-[#121212] text-[36px] font-semibold">
                Categories
              </h1>
              <div className="flex items-center text-[#7A7A7A] gap-2">
                View all
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-4 px-[7.5vw] mt-6">
          <Catbanner />
          <Catbanner />
          <Catbanner />
          <Catbanner />
          <Catbanner />
          <Catbanner />
        </div>
      </div>
    </>
  );
};

export default Categories;
