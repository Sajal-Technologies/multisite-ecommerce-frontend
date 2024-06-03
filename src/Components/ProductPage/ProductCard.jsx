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
          <div className="flex items-center mobile:w-full tablet:w-full tablet:h-[170px] mobile:h-[139px]">
            <div className="product-image mobile:hidden tablet:hidden w-[25%] p-7 h-[270px] bg-[#FAFEFF] border-[0.5px] border-[#FAFAFA]">
              <img
                className="w-full h-full object-cover "
                src={ProductImg}
                alt=""
              />
            </div>
            <div className="product-image mobile:block tablet:block hidden h-full w-[30%] bg-[#FAFEFF] border-[0.5px] border-[#FAFAFA]">
              <img
                className="w-full h-full object-contain "
                src={ProductImg}
                alt=""
              />
            </div>
            <div className="h-full pl-4 w-full mobile:w-[70%] tablet:w-[78%] tablet:py-3 tablet:flex tablet:flex-col tablet:gap-3 mobile:py-3 mobile:flex mobile:flex-col mobile:gap-3">
              <div className="sellers mobile:hidden tablet:hidden pl-2 w-full items-center justify-between flex pr-6 h-[54px] ">
                <div className="imgs h-full w-full flex gap-3 items-center">
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
              <p className="text-[#3D3D3D] tablet:px-2 tablet:text-lg tablet:font-semibold tablet:text-nowrap mobile:px-2 pl-4 mobile:text-sm mobile:font-semibold mobile:text-nowrap font-medium text-[19px] leading-[26px] pr-4">
                Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G
                Without FaceTime in Egypt, iPhone 15 Pro Physical Dual Sim 128GB
                Blue Titanium 5G Without FaceTime
              </p>

              <div className="sellers lg:hidden tablet:block mobile:block h-fit w-full">
                <div className="flex">
                  <div className="img-con p-2 h-full ">
                    <img className="h-5 " src={Meesho} alt="" />
                  </div>
                  <div className="img-con p-2 h-full ">
                    <img className="h-5 " src={Indiamart} alt="" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex px-4 pr-6 items-center justify-between tablet:w-full tablet:mt-0 tablet:px-2 tablet:pr-4 mobile:w-full mobile:mt-0 mobile:px-2 mobile:pr-0">
                <div className="">
                  <p className="text-[#5C5C5C] leading-none my-1 mobile:text-xs mobile:my-0 tablet:my-0 tablet:text-base">
                    SAVE<span className=" line-through ml-2">₹12550</span>
                  </p>
                  <p className="text-[#0B8500] font-medium leading-none text-[42px] tablet:text-3xl mobile:text-lg">
                    ₹42999
                  </p>
                </div>

                <div className="cart lg:hidden md:hidden tablet:block mobile:block">
                  <div className=" flex h-9 mobile:w-9 tablet:h-12 tablet:w-12 mx-4 items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
                    <FiShoppingBag className="text-[#005F85] mobile:text-xl tablet:text-2xl" />
                  </div>
                </div>

                <div className="flex mobile:hidden tablet:hidden">
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

export default ProductCard;
