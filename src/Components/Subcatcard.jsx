import React from "react";
import img from "../images/MainPage/SubCategory/SubCatCard/HomeAppliances.png"

const Subcatcard = () => {
  return (
    <>
      <div className="subcatcard w-[286px] text-[#262626] h-[105px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Oven Toasters</p>
          <p className=" leading-[22px] text-[#5C5C5C]">
            From <br /> &#8377;3299
          </p>
        </div>
        <div className="scale-[1.45] overflow-hidden px-4">
          <img
            className="h-full w-full object-cover scale-x-[-1]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subcatcard;
