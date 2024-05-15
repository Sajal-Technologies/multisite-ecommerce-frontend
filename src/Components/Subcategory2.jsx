import React from "react";
import Subcatcard2 from "./Subcatcard2";
import SubCategoryImg from "../images/MainPage/SubCategory2/SubCategory2.jpeg"

const Subcategory2 = () => {
  return (
    <>
      <div className="w-full h-[280px] flex items-center justify-center mt-[4vw]">
        <div className="box border-[1px] border-white bg-[#F2F2F2] w-[85%] h-full flex justify-between overflow-hidden rounded-2xl">
          <div className=" p-6 flex flex-wrap justify-around">
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
          </div>
          <div className="imgcontainer relative right-0 w-[42%] h-full bg-green-300">
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
    </>
  );
};

export default Subcategory2;
