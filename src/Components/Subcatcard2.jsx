import React from "react";
import Phones from "../images/MainPage/SubCategory/SubCatCard2/Phones.png"

const Subcatcard2 = () => {
  return (
    <>
      <div className="subcatcard2 w-[290px] text-[#262626] h-[110px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Smart Phones</p>
          <p className=" leading-[22px] text-[#5C5C5C]">
            From <br /> &#8377;3299
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
