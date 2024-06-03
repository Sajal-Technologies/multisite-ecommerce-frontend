import React from "react";
import { FiPackage } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiRadio } from "react-icons/fi";
import Seperator from "./Seperator";

const Feature = () => {
  return (
    <>
      <div className="flex md:hidden xl:block mt-[4vw] mobile:hidden">
        <div className="flex items-center justify-center">
          <div className="py-6 border-[1px] border-[#00A8EB] w-[85%] rounded-lg px-16 flex items-center justify-between">
            <div className="items flex items-center justify-center gap-4">
              <FiPackage className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  different products
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Compare prices and shop Smarter
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiShoppingBag className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  CART PREFRENCES
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Save your items to your cart!
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiZap className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  CATCH BEST DEALS
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Grab your lovely hottest offers
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiRadio className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  HOSTING WEBSITES
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Find your items via multiple stores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
