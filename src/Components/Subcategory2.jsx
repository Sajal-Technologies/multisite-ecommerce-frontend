import React from "react";
import Subcatcard2 from "./Subcatcard2";
import SubCategoryImg from "../images/MainPage/SubCategory2/SubCategory2.jpeg";
import { FiChevronRight } from "react-icons/fi";

const Subcategory2 = () => {
  return (
    <>
      <div className="w-full md:hidden xl:flex xl:items-center lg:block h-[280px] max-[600px]:h-fit max-[600px]:flex-col flex items-center justify-center mt-[4vw]">
        <div className="max-[600px]:img-div max-[600px]:relative hidden max-[600px]:block max-[600px]:w-full max-[600px]:h-[152px]">
          <div className="overlay max-[600px]:absolute h-full w-full bg-[#00000066]"></div>
          <img
            className="max-[600px]:h-full max-[600px]:w-full object-cover"
            src={SubCategoryImg}
            alt=""
          />
          <div className="absolute top-0 left-0 px-6 py-7">
            <h1 className="text-white font-bold text-2xl pb-4">
              Electronics & Gadgets
            </h1>
            <button className="bg-white text-[#005F85] font-semibold py-2 px-4 flex gap-2 items-center justify-center rounded-md">
              Shop Now <div className="flex"><FiChevronRight className="text-[#52CDFF]"/> <FiChevronRight className="text-[#00A8EB] ml-[-10px]"/></div>
            </button>
          </div>
        </div>
        <div className="box max-[600px]:mt-4 border-[1px]  border-white bg-[#F2F2F2] max-[600px]:w-full w-[85%] h-full flex justify-between overflow-hidden rounded-2xl">
          <div className="max-[600px]:p-0 max-[600px]:gap-3 max-[600px]:px-4 p-6 flex flex-wrap justify-around">
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
          </div>
          <div className="imgcontainer md:hidden xl:items-center xl:flex max-[600px]:hidden relative right-0 w-[42%] h-full">
            <div className="overlay absolute w-full h-full bg-black opacity-40"></div>
            <img
              className="w-full h-full object-cover object-center"
              src={SubCategoryImg}
              alt=""
            />
            <h1 className="absolute top-0 text-white px-[24px] py-[32px] font-bold text-4xl leading-[43px] z-30">
              Electronics & Gadgets
            </h1>
            <button className=" absolute bottom-[35%] ml-[24px] z-50 bg-white px-4 py-2 rounded-md text-lg font-semibold text-[#005F85] hover:bg-[#005F85] hover:text-white transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="md:block hidden lg:hidden xl:hidden max-[600px]:hidden px-7 pt-2 text-2xl font-bold text-[#212121]">Electronics & Gadgets</h1>
      <div className="hidden w-full xl:hidden px-7 md:flex flex-wrap gap-3 py-4">
        <Subcatcard2/>
        <Subcatcard2/>
        <Subcatcard2/>
        <Subcatcard2/>
        <Subcatcard2/>
        <Subcatcard2/>
      </div>
    </>
  );
};

export default Subcategory2;
