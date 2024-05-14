import React from "react";
import Subcatcard from "./Subcatcard";

const Subcategory = () => {
  return (
    <>
      <div className="w-full h-[280px] flex items-center justify-center mt-[4vw]">
        <div className="bg-[#F2F2F2] w-[85%] h-full flex overflow-hidden rounded-2xl border-[1px] border-white box">
          <div className="imgcontainer w-[42%] relative h-full bg-green-300">
            <div className="overlay absolute w-full h-full bg-black opacity-40"></div>
            <img
              className="w-full h-full object-cover object-center"
              src="https://s3-alpha-sig.figma.com/img/26ae/c211/0634f43aaf14b40a1008f67ea619c61c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CH1TRQsn68mWMfKdPioiZzpkNr4qjtVPrpz4brt0f2W9exi3WY0s7QMVPHrA2gc5VetHU5s7HcR0M5wFreQ-15NETllpF8eTnpyCcmBiuGCx92WK8~VJ0D9Y0z~MwDjzVwJpZrKn~nSPaVv~c1OOMv0cUSPGR2brPkqO4Lkk-tjo2RYBUxHIbzBVIvOSGYk~Np376zPtQfM-h9zcTP2YjnKS0gCWve5IUi4XI6E0FBW00zjFxRduhFlGAo9X7VDBCb4DAuKryPoSGE~~sTxtYaM533f4-k1hq40IubnP-ED8OoXNrM4JMitbzbseHvUxkGUGPtxR~hp5-b1QPJIntA__"
              alt=""
            />
            <h1 className="absolute top-0 text-white px-[24px] py-[32px] font-bold text-4xl leading-[43px] z-30">
              Home Appliances
            </h1>
            <button className=" absolute z-50 bottom-[35%] ml-[24px] bg-white px-4 py-2 rounded-md text-lg font-semibold text-[#005F85] hover:bg-[#005F85] hover:text-white transition-all duration-200">
              Shop Now
            </button>
          </div>
          <div className=" p-6 flex flex-wrap gap-6 justify-around">
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
            <Subcatcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcategory;
