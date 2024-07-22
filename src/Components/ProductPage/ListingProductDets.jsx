import Productimg from "../../images/ProductPage/Product.png";
import img2 from "../../images/ProductPage/img2.png";
import img3 from "../../images/ProductPage/img3.png";
import img4 from "../../images/ProductPage/img4.png";
import amazon from "../../images/ProductPage/amazon.png";
import indiamart from "../../images/ProductPage/indiamart.png";
import { FiChevronDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem/ProductItem.jsx";

const ListingProductDets = () => {
  return (
    <div className="main w-full flex flex-col items-center">
      <div className=" h-fit xl:w-[85%] mobile:w-[100%] tablet:w-[100%] tablet:border-none mobile:border-none mobile:mt-6 mt-10 rounded-xl lg:border-[0.5px] xl:border-[#DEDEDE] @apply shadow-[3px_3px_12px_0px_#00000008] ">
        <div className="w-full flex flex-row mobile:flex-col tablet:flex-col items-center justify-between h-[400px] mobile:p-0 p-10 sm:px-4 mobile:px-4 tablet:px-8">
          <div className="flex h-full tablet:w-full w-1/2 mobile:w-[100%] mobile:flex-col-reverse tablet:flex-col-reverse tablet-h-fit tablet:items-center mobile:h-fit mobile:items-center">
            <div className="h-full flex items-center justify-center w-1/6 bg-white mobile:w-full tablet:w-full">
              <div className="flex flex-col mobile:flex-row tablet:flex-row gap-2 justify-between items-center tablet:w-full mobile:w-full">
                {[
                  { img: `${Productimg}` },
                  { img: `${img2}` },
                  { img: `${img3}` },
                  { img: `${img4}` },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="h-full w-full tablet:flex tablet:items-center tablet:justify-center"
                  >
                    <div
                      className={`h-[70px] mobile:hidden tablet:hidden w-5/6 border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
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
                      className={`h-[90px] mobile:block tablet:block hidden w-[80px] border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
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
            <div className="hidden tablet:block mobile:block h-[200px] w-full mb-[40px]">
              <img
                className="h-full w-full object-contain"
                src={Productimg}
                alt=""
              />
            </div>
            <div className="h-full w-5/6 bg-white tablet:hidden mobile:hidden">
              <img
                className="h-full w-full object-contain"
                src={Productimg}
                alt=""
              />
            </div>
          </div>
          <div className=" h-full pl-4  mobile:w-full tablet:w-full tablet:mt-8 mobile:mt-8 flex flex-col gap-8">
            <div className="w-full h-[50px] flex items-center justify-between bg-white border rounded-lg border-[#DEDEDE]">
              <div className="flex items-center">
                <div className="imgcontainer flex items-center tablet:w-full mobile:w-full justify-center h-[50px] m-2 w-10">
                  <img
                    className="h-full w-full object-cover"
                    src={amazon}
                    alt=""
                  />
                </div>
                <p className="text-[#005F85] text-[19px] font-medium">Amazon</p>
              </div>
              <FiChevronDown className="m-4 text-[#005F85] text-xl" />
            </div>
            <div>
              <p className="text-lg text-[#005F85] font-semibold tablet:mb-1 mobile:mb-1">
                Brand: SAMSUNG
              </p>
              <Link
                to="/Product-style2"
                className="text-[#121212] font-medium text-2xl tablet:text-xl tablet:leading-none mobile:text-xl mobile:leading-none"
              >
                LG Top Load 13Kg Smart Inverter, Turbo Drum™, Silver, Soft
                Closing Door-T1388NEHGE
              </Link>
            </div>
            <div className=" flex items-center justify-between mobile:mt-[-12px] tablet:mt-[-12px]">
              <div className="">
                <p className="text-[#5C5C5C] leading-none my-1">
                  SAVE<span className=" line-through ml-2">₹12550</span>
                </p>
                <p className="text-[#0B8500] font-medium leading-none text-[42px] tablet:text-2xl mobile:text-2xl">
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
                <button className="bg-[#005F85] mobile:text-base tablet:text-base font-semibold text-lg text-white py-2 px-4 flex items-center justify-center rounded-e-md gap-2">
                  <FiShoppingBag className="text-xl" />
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full lg:h-[90px] tablet:h-[15vw] flex">
              <div className="w-1/2 h-full flex mobile:px-4 tablet:px-4 items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-s-md">
                <div className="flex h-full flex-col lg:py-3 mobile:py-0 tablet:py-0 tablet:flex-col tablet:text-center tablet:items-center tablet:justify-center tablet:w-1/2 mobile:flex-col mobile:text-center mobile:items-center mobile:justify-center mobile:w-1/2">
                  <p className="text-[#5C5C5C] text-sm tablet:text-nowrap mobile:text-nowrap">
                    Lowest Price
                  </p>
                  <p className="text-[#0B8500] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                    ₹42999
                  </p>
                </div>
                <div className="imgcontainer flex tablet:w-28 lg:w-28 lg:h-14 mobile:justify-center tablet:justify-center tablet:items-center tablet:h-full mobile:items-center mobile:h-full">
                  <img
                    className="lg:h-full lg:w-full lg:object-cover tablet:scale-[1] mobile:scale-[1.3]"
                    src={amazon}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-1/2 h-full flex items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-e-md">
                <div className="">
                  <p className="text-[#5C5C5C] text-sm tablet:text-nowrap mobile:text-nowrap">
                    Highest Price
                  </p>
                  <p className="text-[#ED0303] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                    ₹62999
                  </p>
                </div>
                <div className="imgcontainer flex lg:w-28 tablet:w-24 lg:h-14 tablet:justify-center tablet:items-center tablet:h-[80%] mobile:justify-center mobile:items-center mobile:h-[80%]">
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
        <div className="h-full w-full px-0 pr-4 py-10 flex gap-6 justify-between mobile:flex-col tablet:flex-col tablet:mt-[30vh] tablet:w-[100%] tablet:p-0 tablet:pr-0 tablet:py-0 mobile:mt-[41vh] mobile:w-[100%] mobile:p-0 mobile:pr-0 mobile:py-0">
          <div className="px-4 tablet:px-8">
            <div className="w-[850px] h-[425px] border overflow-hidden border-[#DEDEDE] rounded-xl mobile:w-full tablet:w-full tablet:h-fit mobile:h-fit">
              <div className="h-12 w-full flex border-b border-[#C9C9C9] items-center px-10 gap-12">
                <p className="text-[#005F85] font-medium tablet:text-nowrap mobile:text-nowrap">
                  Title here
                </p>
                <p className="text-[#999999] mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium">
                  Title here
                </p>
                <p className="text-[#999999] mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium">
                  Title here
                </p>
                <p className="text-[#999999] mobile:hidden">Title here</p>
              </div>
              <div className="p-4">
                <p className="text-[#5C5C5C] text-lg mobile:text-base tablet:text-base">
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
          <div className="h-fit mobile:pl-4 tablet:pl-4 tablet:w-full tablet:border-none pb-5 w-[300px] border border-[#DEDEDE] mobile:w-full mobile:border-none rounded-xl">
            <div className="tablet:p-4">
              <p className="text-[#1C1C1C] text-lg tablet:text-2xl font-medium xl:p-4 mobile:font-semibold tablet:font-semibold mobile:p-0">
                You may like
              </p>
              <div className="flex mobile:snap-x tablet:snap-x hideScroll tablet:scroll-smooth mobile:scroll-smooth flex-col gap-5 tablet:mt-4 tablet:flex-row mobile:mt-4 mobile:flex-row mobile:flex-nowrap mobile:overflow-x-auto tablet:flex-nowrap tablet:overflow-x-auto">
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
  );
};

export default ListingProductDets;
