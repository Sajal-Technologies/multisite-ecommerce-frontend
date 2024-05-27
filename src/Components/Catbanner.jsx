import React from "react";
import BannerImg from "../images/MainPage/CatBanner/BannerImg.png"

const Catbanner = () => {
  return (
    <>
      <div className="w-[418px] h-[200px] max-[600px]:inline-block max-[600px]:flex-shrink-0 max-[600px]:w-[114px] max-[600px]:h-[104px] relative bg-gradient-to-br from-[#015F85] via-[#05739e] to-[#19a5dc] rounded-lg overflow-hidden">
        <h1 className="text-white font-semibold text-2xl p-6 max-[600px]:text-sm max-[600px]:text-nowrap max-[600px]:py-4 max-[600px]:px-4">Smart Phones</h1>
        <div className="imgcon">
          <img
            className=" scale-125 absolute left-[20%] top-[33%] max-[600px]:top-[60%] max-[600px]:left-0 max-[600px]:scale-[1.8]"
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Catbanner;
