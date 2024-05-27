import React from "react";
import Productimg from "../../images/ProductPage/Product.png";
import img2 from "../../images/ProductPage/img2.png";
import img3 from "../../images/ProductPage/img3.png";
import img4 from "../../images/ProductPage/img4.png";
import amazon from "../../images/ProductPage/amazon.png";
import indiamart from "../../images/ProductPage/indiamart.png";
import { FiChevronDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import Item from "../../images/ProductPage/item.png";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem/ProductItem.jsx";

const ListingProductDets = () => {
  return (
    <>
      <div className="main w-full flex flex-col items-center">
        <div className=" h-fit w-[85%] max-[600px]:w-[100%] max-[600px]:border-none max-[600px]:mt-6 mt-10 rounded-xl border-[0.5px] border-[#DEDEDE] @apply shadow-[3px_3px_12px_0px_#00000008] ">
          <div className="w-full flex max-[600px]:flex-col items-center justify-between h-[400px] max-[600px]:p-0 p-10 max-[600px]:px-4">
            <div className="flex h-full w-1/2 max-[600px]:w-[100%] max-[600px]:flex-col-reverse max-[600px]:h-fit max-[600px]:items-center">
              <div className="h-full flex items-center justify-center w-1/6 bg-white max-[600px]:w-full">
                <div className="flex flex-col max-[600px]:flex-row gap-2 justify-between items-center max-[600px]:w-full">
                  {[
                    { img: `${Productimg}` },
                    { img: `${img2}` },
                    { img: `${img3}` },
                    { img: `${img4}` },
                  ].map((item, index) => (
                    <div className="h-full w-full">
                      <div
                        className={`h-[70px] max-[600px]:hidden w-5/6 border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
                          index === 0 ? "border-[2px] border-[#005F85]" : ""
                        }`}
                      >
                        <img
                          className="h-full w-full object-contain p-2"
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <div
                        className={`h-[90px] max-[600px]:block hidden w-[80px] border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
                          index === 0 ? "border-[2px] border-[#005F85]" : ""
                        }`}
                      >
                        <img
                          className="h-full w-full object-contain p-2"
                          src={item.img}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden max-[600px]:block h-[200px] w-full mb-[40px]">
                <img
                  className="h-full w-full object-contain"
                  src={Productimg}
                  alt=""
                />
              </div>
              <div className="h-full w-5/6 bg-white max-[600px]:hidden">
                <img
                  className="h-full w-full object-contain"
                  src={Productimg}
                  alt=""
                />
              </div>
            </div>
            <div className=" h-full max-[600px]:w-full max-[600px]:mt-8 flex flex-col gap-8">
              <div className="w-full h-[50px] flex items-center justify-between bg-white border rounded-lg border-[#DEDEDE]">
                <div className="flex items-center">
                  <div className="imgcontainer flex items-center max-[600px]:w-full justify-center h-[50px] m-2 w-10">
                    <img
                      className="h-full w-full object-cover"
                      src={amazon}
                      alt=""
                    />
                  </div>
                  <p className="text-[#005F85] text-[19px] font-medium">
                    Amazon
                  </p>
                </div>
                <FiChevronDown className="m-4 text-[#005F85] text-xl" />
              </div>
              <div>
                <p className="text-lg text-[#005F85] font-semibold max-[600px]:mb-1">
                  Brand: SAMSUNG
                </p>
                <Link
                  to="/Product-style2"
                  className="text-[#121212] font-medium text-2xl max-[600px]:text-xl max-[600px]:leading-none"
                >
                  LG Top Load 13Kg Smart Inverter, Turbo Drum™, Silver, Soft
                  Closing Door-T1388NEHGE
                </Link>
              </div>
              <div className=" flex items-center justify-between max-[600px]:mt-[-12px]">
                <div className="">
                  <p className="text-[#5C5C5C] leading-none my-1">
                    SAVE<span className=" line-through ml-2">₹12550</span>
                  </p>
                  <p className="text-[#0B8500] font-medium leading-none text-[42px] max-[600px]:text-2xl">
                    ₹42999
                  </p>
                </div>
                <div className="flex">
                  <div className="h-12 w-14 flex items-center justify-center rounded-s-md bg-[#F2F2F2]">
                    <img
                      className="w-full h-full object-cover"
                      src={amazon}
                      alt=""
                    />
                  </div>
                  <button className="bg-[#005F85] max-[600px]:text-base font-semibold text-lg text-white py-2 px-4 flex items-center justify-center rounded-e-md gap-2">
                    <FiShoppingBag className="text-xl" />
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="w-full lg:h-[90px] flex">
                <div className="w-1/2 h-full flex max-[600px]:px-4 items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-s-md">
                  <div className="flex h-full flex-col lg:py-3 max-[600px]:py-0 max-[600px]:flex-col max-[600px]:text-center max-[600px]:items-center max-[600px]:justify-center max-[600px]:w-1/2">
                    <p className="text-[#5C5C5C] text-sm max-[600px]:text-nowrap">Lowest Price</p>
                    <p className="text-[#0B8500] text-2xl max-[600px]:text-[19px] font-medium">
                      ₹42999
                    </p>
                  </div>
                  <div className="imgcontainer flex lg:w-28 lg:h-14 max-[600px]:justify-center max-[600px]:items-center max-[600px]:h-full">
                    <img
                      className="lg:h-full lg:w-full lg:object-cover max-[600px]:scale-[1.3]"
                      src={amazon}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-e-md">
                  <div className="">
                    <p className="text-[#5C5C5C] text-sm max-[600px]:text-nowrap">Highest Price</p>
                    <p className="text-[#ED0303] text-2xl max-[600px]:text-[19px] font-medium">
                      ₹62999
                    </p>
                  </div>
                  <div className="imgcontainer flex lg:w-28 lg:h-14 max-[600px]:justify-center max-[600px]:items-center max-[600px]:h-[80%]">
                    <img
                      className="lg:h-full lg:w-full lg:object-contain w-[62px]"
                      src={indiamart}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full px-10 py-10 flex gap-6 justify-between max-[600px]:flex-col max-[600px]:mt-[41vh] max-[600px]:w-[100%] max-[600px]:p-0 max-[600px]:pr-0 max-[600px]:py-0">
            <div className="px-4">
            <div className="w-[845px] h-[425px] border overflow-hidden border-[#DEDEDE] rounded-xl max-[600px]:w-full max-[600px]:h-fit">
              <div className="h-12 w-full flex border-b border-[#C9C9C9] items-center px-10 gap-12">
                <p className="text-[#005F85] font-medium max-[600px]:text-nowrap">Title here</p>
                <p className="text-[#999999] max-[600px]:font-medium max-[600px]:text-nowrap">Title here</p>
                <p className="text-[#999999] max-[600px]:font-medium max-[600px]:text-nowrap">Title here</p>
                <p className="text-[#999999] max-[600px]:hidden">Title here</p>
              </div>
              <div className="p-4">
                <p className="text-[#5C5C5C] text-lg max-[600px]:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-[#505050] flex items-center gap-2">
                    <FiCheck /> Some great feature name here
                  </p>
                  <p className="text-[#505050] flex items-center gap-2">
                    <FiCheck />
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <p className="text-[#505050] flex items-center gap-2">
                    <FiCheck />
                    Duis aute irure dolor in reprehenderit
                  </p>
                  <p className="text-[#505050] flex items-center gap-2">
                    <FiCheck />
                    Some great feature name here
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="h-fit max-[600px]:pl-4 pb-5 w-[300px] border border-[#DEDEDE] max-[600px]:w-full max-[600px]:border-none rounded-xl">
              <div className="">
                <p className="text-[#1C1C1C] text-lg font-medium p-4 max-[600px]:font-semibold max-[600px]:p-0">
                  You may like
                </p>
                <div className="flex max-[600px]:snap-x hideScroll max-[600px]:scroll-smooth flex-col gap-5 max-[600px]:mt-4 max-[600px]:flex-row max-[600px]:flex-nowrap max-[600px]:overflow-x-auto max-[600px]: ">
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingProductDets;
