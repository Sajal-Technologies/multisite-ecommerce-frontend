import React from "react";
import productItemImg from "../../../images/ProductPage/item.png"

const ProductItem = () => {
  return (
    <div className="items w-full flex tablet:flex-shrink-0 tablet:w-[230px] tablet:p-0 tablet:pr-5 mobile:flex-shrink-0  items-center gap-4 h-[70px] p-4 mobile:w-[229px] mobile:p-0  mobile:pr-5">
      <div className="h-[70px] mobile:w-[115px] tablet:w-[115px] tablet:h-[70px] mobile:h-[70px]  w-[70px !important] border border-[#DEDEDE] rounded-lg flex items-center justify-center">
        <img
          className="h-full w-full object-cover object-left"
          src={productItemImg}
          alt=""
        />
      </div>

      <div className="">
        <p className="text-[#262626] mobile:text-sm tablet:text-sm">
          LG Top Load 13Kg Smart Inverter, Turb...
        </p>
        <p className="text-[#0083B8] font-medium mobile:text-sm tablet:text-sm">
          ₹42999 - ₹42999
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
