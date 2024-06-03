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
      <div className="mobile:w-full md:w-[65%] xl:w-[80.5%] relative mobile:h-[139px] md:h-[150px] xl:h-[200px] items-center flex mobile:gap-4 overflow-hidden md:gap-4 xl:gap-1 border-[1px] border-[#F2F2F2] rounded-2xl ">
        <Link to="/Product">
          <div className="imgcontainer flex gap-4 items-center justify-center mobile:h-full mobile:w-[104px] md:w-[150px] xl:h-[200px] md:h-[150px] xl:w-[300px] bg-[#FAFEFF]">
            <img
              className="w-full h-full object-contain mobile:w-[79px] "
              src={Iphone}
              alt=""
            />
          </div>
        </Link>
        <div className=" lg:hidden md:hidden mobile:block flex flex-col pr-2 h-full py-4">
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
        <div className="flex flex-col mobile:hidden h-full md:py-0 xl:py-4 mobile:w-fit xl:w-fit md:w-full md:overflow-hidden">
          <Link to="/Product">
            <div className="flex h-full items-center w-full justify-between">
              <div className="flex gap-0">
                <div className="logocontainer flex items-center xl:ml-0 md:ml-[-14px] justify-center md:h-[60px] xl:h-[70px] w-fit ">
                  <img
                    className="h-full w-full object-contain"
                    src={Amazon}
                    alt=""
                  />
                </div>
                <div className="logocontainer flex items-center justify-center md:h-[60px] xl:h-[70px] w-fit">
                  <img
                    className="h-full w-full object-contain"
                    src={Flipkart}
                    alt=""
                  />
                </div>
                <div className="logocontainer flex items-center justify-center md:h-[60px] xl:h-[70px] w-fit ">
                  <img
                    className="h-full w-full scale-[.37] object-contain"
                    src={Meesho}
                    alt=""
                  />
                </div>
                <div className="logocontainer flex items-center justify-center md:h-[60px] xl:h-[70px] w-fit ">
                  <img
                    className="h-full w-full scale-[.48] object-contain"
                    src={Indiamart}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center gap-6 justify-center bg-[#F2F2F2] py-1 rounded-md px-2 xl:mr-4 md:mr-2">
                <p className="text-[#0B8500] text-lg font-medium">-11%</p>
                <FiTrendingDown className="text-[#0B8500]" />
              </div>
            </div>
          </Link>
          <Link to="/Product">
            <div className="xl:mb-4 xl:px-5 md:mb-2 xl:mt-0 md:mt-[-10px] md:px-0 md:w-full md:overflow-hidden">
              <p className="font-medium xl:text-[19px] leading-6 text-[#3D3D3D] md:text-base md:text-nowrap">
                Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G
                Without FaceTime in Egypt, iPhone 15 Pro Physical Dual Sim 128GB
                Blue Titanium
              </p>
            </div>
          </Link>
          <div className="xl:px-5 md:px-0 flex items-center justify-between">
            <Link to="/Product">
              <div className="">
                <p className="text-[#5C5C5C] md:text-sm xl:text-base">
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
