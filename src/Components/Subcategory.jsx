import React from "react";
import Subcatcard from "./Subcatcard";
import SubCategoryImg from "../images/MainPage/SubCategory2/SubCategory.jpeg"


const Subcategory = () => {
  return (
    <>
      <div className="w-full h-[280px] flex items-center justify-center mt-[4vw]">
        <div className="bg-[#F2F2F2] w-[85%] h-full flex overflow-hidden rounded-2xl border-[1px] border-white box">
          <div className="imgcontainer w-[42%] relative h-full bg-green-300">
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
          <div className=" p-6 flex flex-wrap gap-6 justify-around">
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
