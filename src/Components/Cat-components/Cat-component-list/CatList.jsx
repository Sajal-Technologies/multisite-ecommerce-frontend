import React from "react";
import Iphone from "../../../images/CategoriesPage/CatComponent/CatList/iphone.png";
import Amazon from "../../../images/CategoriesPage/CatComponent/CatList/amazon.png";
import Flipkart from "../../../images/CategoriesPage/CatComponent/CatList/flipkart.png";
import Meesho from "../../../images/CategoriesPage/CatComponent/CatList/meesho.png";
import Indiamart from "../../../images/CategoriesPage/CatComponent/CatList/indiamart.png";
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const CatList = () => {
  return (
    <>
      <div className="max-[600px]:w-full relative max-[600px]:h-[139px] h-fit items-center flex max-[600px]:gap-4 overflow-hidden gap-4 border-[1px] border-[#F2F2F2] rounded-2xl ">
        <Link to="/Product">
          <div className="imgcontainer flex gap-4 items-center justify-center max-[600px]:h-full max-[600px]:w-[104px] h-[230px] w-[300px] bg-[#FAFEFF]">
            <img
              className="w-full h-full object-contain max-[600px]:w-[79px] "
              src={Iphone}
              alt=""
            />
          </div>
        </Link>
        <div className=" lg:hidden max-[600px]:block flex flex-col pr-2 h-full py-4">
          <p className="text-sm text-[#3D3D3D] font-semibold">
            Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G Without Fa...
          </p>
          <div className="flex items-center py-3 w-full justify-between">
            <div className="flex gap-3">
              <div className="logocontainer flex items-center justify-center h-[18px] w-fit ">
                <img className="h-5" src={Meesho} alt="" />
              </div>
              <div className="logocontainer flex items-center justify-center h-[18px] w-fit ">
                <img className="h-5" src={Indiamart} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <Link to="/Product">
              <div className="">
                <p className="text-[#5C5C5C] text-xs">
                  SAVE <span className="line-through">&#8377;125550</span>
                </p>
                <p className="text-[#0B8500] text-lg">
                  &#8377;32999
                </p>
              </div>
            </Link>
            <div className="h-8 w-8 flex absolute right-0 bottom-0 mb-5 mr-4  items-center cursor-pointer justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
              <FiShoppingBag className="text-[#005F85] text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-[600px]:hidden h-full py-4 w-fit">
          <Link to="/Product">
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
          </Link>
          <Link to="/Product">
            <div className="mb-4 px-5">
              <p className="font-medium text-[19px] leading-6 text-[#3D3D3D]">
                Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G
                Without FaceTime in Egypt, iPhone 15 Pro Physical Dual Sim 128GB
                Blue Titanium
              </p>
            </div>
          </Link>
          <div className="px-5 flex items-center justify-between">
            <Link to="/Product">
              <div className="">
                <p className="text-[#5C5C5C] ">
                  SAVE <span className="line-through">&#8377;125550</span>
                </p>
                <p className="text-[#0B8500] text-2xl font-medium">
                  &#8377;32999
                </p>
              </div>
            </Link>
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
