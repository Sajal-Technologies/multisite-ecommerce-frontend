import React from "react";
import BannerImg from "../images/MainPage/CatBanner/BannerImg.png"

const Catbanner = () => {
  return (
    <>
      <div className="w-[418px] h-[200px] relative bg-gradient-to-br from-[#015F85] via-[#05739e] to-[#19a5dc] rounded-lg overflow-hidden">
        <h1 className="text-white font-semibold text-2xl p-6">Smart Phones</h1>
        <div className="imgcon">
          <img
            className=" scale-125 absolute left-[20%] top-[33%] "
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Catbanner;
