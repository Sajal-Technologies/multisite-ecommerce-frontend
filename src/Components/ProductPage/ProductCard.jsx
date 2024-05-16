import React from "react";
import ProductImg from "../../images/ProductPage/Productimg.png";
import Amazon from "../../images/ProductPage/amazon.png";
import Flipkart from "../../images/ProductPage/flipkart.png";
import Meesho from "../../images/ProductPage/meesho.png";
import Indiamart from "../../images/ProductPage/indiamart.png";
import { FiShoppingBag, FiTrendingDown } from "react-icons/fi";

const ProductCard = () => {
  return (
    <>
      <div className="featured-product flex flex-col overflow-hidden rounded-2xl border bg-white border-[#F2F2F2] @apply shadow-[0px_2px_3px_0px_#00000005]">
      <div className="flex flex-col">
              <div className="flex items-center">
                <div className="product-image w-[25%] p-7 h-[270px]  bg-[#FAFEFF] border-[0.5px] border-[#FAFAFA]">
                  <img
                    className="w-full h-full object-cover"
                    src={ProductImg}
                    alt=""
                  />
                </div>
                <div className="h-full pl-4 w-full">
                  <div className="sellers pl-2 w-full items-center justify-between flex pr-6  h-[54px] ">
                    <div className="imgs h-full w-full  flex gap-3 items-center">
                      <div className="img-container h-full w-[60px]">
                        <img
                          className="w-full h-full object-cover"
                          src={Amazon}
                          alt=""
                        />
                      </div>
                      <div className="img-container h-full w-[60px]">
                        <img
                          className="w-full h-full object-cover"
                          src={Flipkart}
                          alt=""
                        />
                      </div>
                      <div className="img-container p-2 h-full w-[60px]">
                        <img
                          className="w-full h-full scale-[.7] object-contain"
                          src={Meesho}
                          alt=""
                        />
                      </div>
                      <div className="img-container p-2 h-full w-[60px]">
                        <img
                          className="w-full h-full object-contain"
                          src={Indiamart}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center h-[40px] text-lg font-medium gap-4 justify-center bg-white border border-[#F2F2F2]  rounded-md px-4">
                      <p className="text-[#0B8500] text-lg">-11%</p>
                      <FiTrendingDown className="text-[#0B8500]" />
                    </div>
                  </div>
                  <p className="text-[#3D3D3D] pl-4  font-medium text-[19px] leading-[26px] pr-4">
                    Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G
                    Without FaceTime in Egypt, iPhone 15 Pro Physical Dual Sim
                    128GB Blue Titanium 5G Without FaceTime
                  </p>

                  <div className="mt-4 flex px-4 pr-6 items-center justify-between">
                    <div className="">
                      <p className="text-[#5C5C5C] leading-none my-1">
                        SAVE<span className=" line-through ml-2">₹12550</span>
                      </p>
                      <p className="text-[#0B8500] font-medium leading-none text-[42px]">
                        ₹42999
                      </p>
                    </div>
                    <div className="flex">
                      <div className="h-12 w-14 flex items-center justify-center rounded-s-md bg-[#F2F2F2]">
                        <img
                          className="w-full h-full object-cover"
                          src={Amazon}
                          alt=""
                        />
                      </div>
                      <button className="bg-[#005F85] font-semibold text-lg text-white py-2 px-4 flex items-center justify-center rounded-e-md gap-2">
                        <FiShoppingBag className="text-xl" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default ProductCard