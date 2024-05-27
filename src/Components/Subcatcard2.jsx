import React from "react";
import Phones from "../images/MainPage/SubCategory/SubCatCard2/Phones.png"

const Subcatcard2 = () => {
  return (
    <>
      <div className="subcatcard2 w-[290px] max-[600px]:w-full text-[#262626] h-[110px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Smart Phones</p>
          <p className=" leading-[22px] text-[#7A7A7A]">
            From <br /> <span className="text-[#3D3D3D] text-xl">&#8377;3299</span>
          </p>
        </div>
        <div className="scale-[1.45] overflow-hidden px-4">
          <img
            className="h-full w-full object-cover scale-x-[-1]"
            src={Phones}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subcatcard2;
