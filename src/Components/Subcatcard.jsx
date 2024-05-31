import React from "react";
import img from "../images/MainPage/SubCategory/SubCatCard/HomeAppliances.png"

const Subcatcard = () => {
  return (
    <>
      <div className="subcatcard md:flex-shrink-0 max-[600px]:flex-shrink-0 xl:w-[286px] md:w-[49%] max-[600px]:w-full max-[600px]:px-4 max-[600px]:h-[108px] text-[#262626] h-[105px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Oven Toasters</p>
          <p className=" text-[#7A7A7A] max-[600px]:leading-none py-1 leading-none">
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
