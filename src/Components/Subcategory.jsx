import React from "react";
import Subcatcard from "./Subcatcard";
import SubCategoryImg from "../images/MainPage/SubCategory2/SubCategory.jpeg";
import { FiChevronRight } from "react-icons/fi";

const Subcategory = () => {
  return (
    <>
      <div className="hidden mobile:block mobile:relative mobile:w-full mobile:h-[152px] mobile:mt-8 mobile:overflow-hidden">
        <div className="overlay absolute h-full w-full bg-black opacity-40 "></div>
        <div className="text-white z-40 absolute px-6 pt-8">
          <h1 className="font-bold text-2xl mb-4">Home Appliances</h1>
          <button className="text-[#005F85] bg-white px-4 py-2 rounded-md text-base font-semibold flex items-center gap-2">Shop Now
         <div className="flex">
         <FiChevronRight className="text-[#52CDFF]"/>
          <FiChevronRight className="ml-[-10px] text-[#00A8EB]"/>
         </div>
          </button>
        </div>
        <img
          className="h-full w-full object-cover"
          src={SubCategoryImg}
          alt=""
        />
      </div>
      <h1 className=" md:block hidden lg:hidden xl:hidden mobile:hidden text-2xl px-7 pt-8 font-bold text-[#212121]">Home Appliances</h1>
      <div className="xl:hidden mobile:px-4 mobile:flex-wrap md:flex-row md:flex-wrap md:px-7 w-full h-fit py-4 xl:px-4 flex xl:flex-col gap-3">
        <Subcatcard />
        <Subcatcard />
        <Subcatcard />
        <Subcatcard />
        <Subcatcard />
        <Subcatcard />
      </div>
      <div className="w-full xl:w-full md:hidden h-[280px] mobile:hidden flex xl:items-center xl:flex items-center justify-center mt-[4vw]">
        <div className="bg-[#F2F2F2] mobile:bg-transparent mobile:border-none w-[85%] mobile:h-full mobile:w-full mobile:shadow-none h-full flex overflow-hidden rounded-2xl border-[1px] border-white box">
          <div className="imgcontainer xl:block md:hidden mobile:hidden w-[42%] relative h-full">
            <div className="overlay absolute w-full h-full bg-black opacity-40"></div>
            <img
              className="w-full h-full object-cover object-center"
              src={SubCategoryImg}
              alt=""
            />
            <h1 className="absolute top-0 text-white px-[24px] py-[32px] font-bold text-4xl leading-[43px] z-30">
              Home Appliances
            </h1>
            <button className=" absolute z-50 bottom-[35%] ml-[24px] bg-white px-4 py-2 rounded-md text-lg font-semibold text-[#005F85] hover:bg-[#005F85] hover:text-white transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className=" p-6 mobile:px-4 flex flex-wrap gap-6 justify-around">
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcategory;
