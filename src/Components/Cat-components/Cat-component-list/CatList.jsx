import React from "react";
import img from "../../../images/Iphone.png";
import Amazon from "../../../images/amazon.png";
import Flipkart from "../../../images/flipkart.png";
import Meesho from "../../../images/logomeesho.png";
import Indiamart from "../../../images/indiamart2.png";
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const CatList = () => {
  return (
    <>
      <div className=" h-fit w-[58vw] items-center flex overflow-hidden gap-4 border-[1px] border-[#F2F2F2] rounded-2xl ">
        <div className="imgcontainer flex gap-4 items-center justify-center h-[210px] w-[350px] bg-[#FAFEFF]">
          <img className="w-full h-full object-contain" src={img} alt="" />
        </div>
        <div className="flex flex-col h-full py-4 w-fit">
          <div className="flex h-full items-center w-full justify-between">
            <div className="flex gap-0">
              <div className="logocontainer flex items-center justify-center h-[70px] w-fit ">
                <img
                  className="h-full w-full object-contain"
                  src={Amazon}
                  alt=""
                />
              </div>
              <div className="logocontainer flex items-center justify-center h-[70px] w-fit ">
                <img
                  className="h-full w-full object-contain"
                  src={Flipkart}
                  alt=""
                />
              </div>
              <div className="logocontainer flex items-center justify-center h-[70px] w-fit ">
                <img
                  className="h-full w-full scale-[.37] object-contain"
                  src={Meesho}
                  alt=""
                />
              </div>
              <div className="logocontainer flex items-center justify-center h-[70px] w-fit ">
                <img
                  className="h-full w-full scale-[.48] object-contain"
                  src={Indiamart}
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center bg-[#F2F2F2] py-1 rounded-md px-2 mr-4">
              <p className="text-[#0B8500] text-lg font-medium">-11%</p>
              <FiTrendingDown className="text-[#0B8500]" />
            </div>
          </div>
          <div className="mb-4 px-5">
            <p className="font-medium text-[19px] leading-6 text-[#3D3D3D]">
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G Without
              FaceTime in Egypt, iPhone 15 Pro Physical Dual Sim 128GB Blue
              Titanium
            </p>
          </div>
          <div className="px-5 flex items-center justify-between">
            <div className="">
              <p className="text-[#5C5C5C] ">
                SAVE <span className="line-through">&#8377;125550</span>
              </p>
              <p className="text-[#0B8500] text-2xl font-medium">
                &#8377;32999
              </p>
            </div>
            <div className="h-12 w-12 mx-4 flex items-center cursor-pointer justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
              <FiShoppingBag className="text-[#005F85] text-[24px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatList;