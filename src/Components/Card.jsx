import React from "react";
import Phone from "../images/MainPage/Card/Phone.png";
import Flipkart from "../images/MainPage/Card/Flipkart.png";
import Meesho from "../images/MainPage/Card/Meesho.png";
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card max-[600px]:w-[175px] max-[600px]:h-[274px] max-[600px]:flex-shrink-0 flex-shrink-0 inline-block max-[600px]:inline-block w-[300px] h-[400px] max-[600px]:h-[275px] max-[600px]:w-[192px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
        <Link to="/Product">
          <div className="imgcontainer w-full h-1/2 flex items-center justify-center bg-[#FAFEFF]">
            <img className="w-full h-full object-contain" src={Phone} alt="" />
          </div>
        </Link>
        <div className="w-full h-1/2 py-4 flex flex-col gap-4 max-[600px]:gap-1">
          <Link to="/Product">
            <div className="sellers flex justify-between px-4 ">
              <div className="flex items-center gap-2">
                <div className="h-8">
                  <img
                    className=" h-full w-full object-cover"
                    src={Flipkart}
                    alt=""
                  />
                </div>
                <div className="h-8">
                  <img
                    className="h-full w-full object-cover max-[600px]:w-5 max-[600px]:object-contain"
                    src={Meesho}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center bg-[#F2F2F2] rounded-md px-2 max-[600px]:hidden">
                <p className="text-[#0B8500] text-lg font-medium">-11%</p>
                <FiTrendingDown className="text-[#0B8500]" />
              </div>
            </div>
          </Link>
          <div className="px-4">
            <Link
              to="/Product"
              className="text-[19px] leading-none text-[#3D3D3D] max-[600px]:font-semibold max-[600px]:text-sm font-medium max-[600px]: text-nowrap "
            >
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G...
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/Product">
              <div className="">
                <p className="uppercase px-4 text-[#5C5C5C] text-lg max-[600px]:text-xs">
                  save <span className="line-through">&#8377;12550</span>
                </p>
                <p className="px-4 text-[#0B8500] text-2xl font-medium max-[600px]:text-base">
                  &#8377;32999
                </p>
              </div>
            </Link>
            <div className="h-12 w-12 max-[600px]:h-9 max-[600px]:w-9 mx-4 flex items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
              <FiShoppingBag className="text-[#005F85] text-[24px] max-[600px]:text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
