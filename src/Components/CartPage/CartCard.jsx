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
      <div className="card w-[300px] h-fit rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
        <Link to="/Product">
          <div className="imgcontainer w-full h-[210px] p-2 flex items-center justify-center bg-[#FAFEFF]">
            <img
              className="w-full h-full object-contain"
              src={Cartproduct}
              alt=""
            />
          </div>
        </Link>
        <div className="w-full  py-4 flex flex-col gap-4">
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
          <div className="px-4">
            <Link
              to="/Product"
              className="text-[19px] leading-none text-[#3D3D3D] font-medium"
            >
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G...
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/Product">
              <div className="">
                <p className="uppercase px-4 text-[#5C5C5C] text-lg">
                  save <span className="line-through">&#8377;12550</span>
                </p>
                <p className="px-4 text-[#0B8500] text-2xl font-medium">
                  &#8377;32999
                </p>
              </div>
            </Link>
            <div className="flex gap-2 items-center px-3 border border-[#005F85] rounded-3xl py-1 mr-4">
              <FiShoppingBag className="text-[#005F85] text-xl" />
              <p className="text-[#005F85] text-lg">Remove</p>
            </div>
          </div>
          <div className="px-4">
            <div className="w-full h-12 flex items-center justify-between">
              <div className="h-full w-[25%] bg-[#F2F2F2] rounded-s-md">
                <img
                  className="h-full w-full object-cover"
                  src={Amazon}
                  alt=""
                />
              </div>
              <div className="h-full w-[75%] bg-[#005F85] flex items-center justify-center gap-2 rounded-e-md">
                <FiShoppingBag className="text-white text-xl" />
                <p className="text-white text-lg font-semibold">Buy Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
