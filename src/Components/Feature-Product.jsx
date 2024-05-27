import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "./Card";

const Fproduct = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-8 items-center justify-center mt-[4vw] max-[600px]:mb-4">
          <div className="w-[85%] max-[600px]:w-[100%] max-[600px]:px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[#121212] text-[36px] font-semibold max-[600px]:text-xl">
                <span className="max-[600px]:hidden">Grab the best</span> <span className="max-[600px]:uppercase">d</span>eals on
                <span className="text-[#0083B8]"> Electronics</span>
              </h1>
              <div className="flex items-center text-[#7A7A7A] gap-2 max-[600px]:text-sm">
                View all
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="cards-container max-[600px]:snap-x overflow-auto scroll-smooth max-[600px]:flex-row whitespace-nowrap overflow-x-auto flex justify-start max-[600px]:justify-start max-[600px]:w-full max-[600px]:px-4 w-[85%] gap-4 max-[600px]:overflow-x-auto max-[600px]:whitespace-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
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
