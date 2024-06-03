import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Catbanner from "./Catbanner";

const Categories = () => {
  return (
    <>
      <div className=" ">
        <div className="flex items-center justify-center mt-[4vw]">
          <div className="lg:w-[85%] md:w-full mobile:w-full xl:px-4 mobile:px-4 md:px-7">
            <div className="flex justify-between items-center">
              <h1 className="text-[#121212] xl:text-[36px] md:text-3xl font-semibold mobile:text-[22px]">
                Categories
              </h1>
              <div className="flex items-center text-[#7A7A7A] gap-2 mobile:text-sm">
                View all
                <FiArrowRight className="mobile:text-xl"/>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex md:gap-2 flex-wrap mobile:mt-4 mobile:px-4 mobile:gap-2 justify-between xl:gap-4 md:px-7 xl:px-[7.5vw] mt-6">
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
