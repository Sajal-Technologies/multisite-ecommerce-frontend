import React from "react";
import Cartproduct from "../../images/CartPage/Cartproduct.png";
import Flipkart from "../../images/CartPage/Flipkart.png";
import Meesho from "../../images/CartPage/Meesho.png";
import Amazon from "../../images/CartPage/amazon.png";
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartCard = () => {
  return (
    <>
      <div className="card w-[300px] tablet:w-[300px] mobile:flex mobile:w-full h-fit rounded-2xl mobile:rounded-lg overflow-hidden border-[1px] border-[#F2F2F2]">
        <Link to="/Product">
          <div className="imgcontainer w-full h-[210px] mobile:hidden p-2 flex items-center justify-center bg-[#FAFEFF]">
            <img
              className="w-full h-full object-contain p-6"
              src={Cartproduct} 
              alt=""
            />
          </div>
          <div className="lg:hidden md:hidden mobile:h-full tablet:hidden mobile:block">
            <div className="imgcontainer mobile:flex mobile:items-center mobile:justify-center mobile:p-5 w-fit h-full mobile:h-full p-2 flex items-center justify-center bg-[#FAFEFF]">
              <img className="w-[108px]" src={Cartproduct} alt="" />
            </div>
          </div>
        </Link>
        <div className="w-full mobile:w-max py-4 flex flex-col gap-4 mobile:gap-2 mobile:py-3 mobile:px-4">
          <Link to="/Product">
            <div className="sellers mobile:hidden flex justify-between px-4 ">
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
          </Link>
          <div className="px-4 mobile:px-0">
            <Link
              to="/Product"
              className="text-[19px] leading-none text-[#3D3D3D] font-medium mobile:font-semibold mobile:text-sm"
            >
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G...
            </Link>
          </div>
          <div className="sellers lg:hidden tablet:hidden mobile:block">
            <div className="flex items-center gap-2 my-[-8px]">
              <div className="h-8">
                <img
                  className="h-full w-full object-cover"
                  src={Flipkart}
                  alt=""
                />
              </div>
              <div className="h-6">
                <img
                  className="h-full w-full object-cover"
                  src={Meesho}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/Product">
              <div className="mobile:px-0">
                <p className="uppercase px-4 text-[#5C5C5C] text-lg mobile:text-xs flex gap-1 mobile:px-0">
                  save <span className="line-through">&#8377;12550</span>
                </p>
                <p className="px-4 text-[#0B8500] text-2xl font-medium mobile:text-lg mobile:px-0">
                  &#8377;32999
                </p>
              </div>
            </Link>
            <div className="flex gap-2 items-center px-3 border border-[#005F85] rounded-3xl py-1 tablet:mr-4 lg:mr-4">
              <FiShoppingBag className="text-[#005F85] text-xl mobile:text-base" />
              <p className="text-[#005F85] text-lg mobile:text-sm">
                Remove
              </p>
            </div>
          </div>
          <div className="px-4 mobile:px-0">
            <div className="w-full h-12 mobile:h-10 flex items-center justify-between">
              <div className="h-full w-[25%] mobile:w-[30%] mobile: bg-[#F2F2F2] rounded-s-md">
                <img
                  className="h-full w-full object-cover"
                  src={Amazon}
                  alt=""
                />
              </div>
              <div className="h-full w-[75%] mobile:w-[70%] bg-[#005F85] flex items-center justify-center gap-2 rounded-e-md">
                <FiShoppingBag className="text-white text-xl" />
                <p className="text-white text-lg font-semibold mobile:text-sm">
                  Buy Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
