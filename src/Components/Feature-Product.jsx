import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "./Card";

const Fproduct = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-8 items-center justify-center mt-[4vw]">
          <div className="w-[85%]">
            <div className="flex justify-between items-center">
              <h1 className="text-[#121212] text-[36px] font-semibold">
                Grab the best deal on
                <span className="text-[#0083B8]"> Electronics</span>
              </h1>
              <div className="flex items-center text-[#7A7A7A] gap-2">
                View all
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="cards flex justify-between w-[85%] gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fproduct;
