import React from "react";
import BannerImg from "../images/MainPage/CatBanner/BannerImg.png"

const Catbanner = () => {
  return (
    <>
      <div className="w-[418px] catbanner h-[200px] mobile:inline-block mobile:flex-shrink-0 mobile:w-[114px] mobile:h-[104px] relative bg-gradient-to-br from-[#015F85] via-[#05739e] to-[#19a5dc] rounded-lg overflow-hidden">
        <h1 className="text-white font-semibold text-2xl p-6 mobile:text-sm mobile:text-nowrap mobile:py-4 mobile:px-4">Smart Phones</h1>
        <div className="imgcon">
          <img
            className=" scale-125 absolute left-[20%] top-[33%] mobile:top-[60%] mobile:left-0 mobile:scale-[1.8]"
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Catbanner;
