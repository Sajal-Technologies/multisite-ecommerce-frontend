import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Card from "./Card";

const Fproduct = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-8 items-center justify-center mt-[4vw] mobile:mb-4">
          <div className="xl:w-[85%] md:w-full mobile:w-[100%] mobile:px-4 md:px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[#121212] xl:text-[36px] font-semibold mobile:text-xl md:text-3xl">
                <span className="mobile:hidden">Grab the best</span> <span className="mobile:uppercase">d</span>eals on
                <span className="text-[#0083B8]"> Electronics</span>
              </h1>
              <div className="flex items-center text-[#7A7A7A] gap-2 mobile:text-sm">
                View all
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="cards-container snap-x mobile:snap-x overflow-auto scroll-smooth mobile:flex-row whitespace-nowrap overflow-x-auto flex justify-start mobile:justify-start mobile:w-full mobile:px-4 xl:w-[85%] md:w-full md:px-4 gap-4 mobile:overflow-x-auto mobile:whitespace-nowrap">
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
