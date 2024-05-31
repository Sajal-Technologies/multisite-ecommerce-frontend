import React from "react";
import productItemImg from "../../../images/ProductPage/item.png"

const ProductItem = () => {
  return (
    <div className="items w-full flex max-[600px]:flex-shrink-0  items-center gap-4 h-[70px] p-4 max-[600px]:w-[229px] max-[600px]:p-0  max-[600px]:pr-5">
      <div className="h-[70px] max-[600px]:w-[115px] max-[600px]:h-[70px]  w-[70px !important] border border-[#DEDEDE] rounded-lg flex items-center justify-center">
        <img
          className="h-full w-full object-cover object-left"
          src={productItemImg}
          alt=""
        />
      </div>

      <div className="">
        <p className="text-[#262626] max-[600px]:text-sm">
          LG Top Load 13Kg Smart Inverter, Turb...
        </p>
        <p className="text-[#0083B8] font-medium max-[600px]:text-sm">
          ₹42999 - ₹42999
        </p>
      </div>
    </div>
  );
};

export default ProductItem;