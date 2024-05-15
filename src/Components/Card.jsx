import React from "react";
import Phone from "../images/MainPage/Card/Phone.png"
import Flipkart from "../images/MainPage/Card/Flipkart.png"
import Meesho from "../images/MainPage/Card/Meesho.png"
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const Card = () => {
  return (
    <>
      <div className="card w-[300px] h-[400px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
        <div className="imgcontainer w-full h-1/2 flex items-center justify-center bg-[#FAFEFF]">
          <img
            className="w-full h-full object-contain"
            src={Phone}
            alt=""
          />
        </div>
        <div className="w-full h-1/2 py-4 flex flex-col gap-4">
          <div className="sellers flex justify-between px-4 ">
            <div className="flex items-center gap-2">
              <div className="h-8 w-24 ">
                <img
                  className=" h-full w-full object-cover"
                  src={Flipkart}
                  alt=""
                />
              </div>
              <div className="h-8 w-8">
                <img
                  className="h-full w-full object-cover"
                  src={Meesho}
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center bg-[#F2F2F2] rounded-md px-2">
              <p className="text-[#0B8500] text-lg font-medium">-11%</p>
              <FiTrendingDown className="text-[#0B8500]" />
            </div>
          </div>
          <div className="px-4">
            <p className="text-[19px] leading-none text-[#3D3D3D] font-medium">
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G...
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="uppercase px-4 text-[#5C5C5C] text-lg">
                save <span className="line-through">&#8377;12550</span>
              </p>
              <p className="px-4 text-[#0B8500] text-2xl font-medium">
                &#8377;32999
              </p>
            </div>
            <div className="h-12 w-12 mx-4 flex items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
              <FiShoppingBag className="text-[#005F85] text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
