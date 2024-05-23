import React from "react";
import img from "../images/MainPage/SubCategory/SubCatCard/HomeAppliances.png"

const Subcatcard = () => {
  return (
    <>
      <div className="subcatcard w-[286px] text-[#262626] h-[105px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Oven Toasters</p>
          <p className=" leading-[22px] text-[#7A7A7A]">
            From <br /><span className="text-[#3D3D3D] text-xl">&#8377;3299</span>
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
