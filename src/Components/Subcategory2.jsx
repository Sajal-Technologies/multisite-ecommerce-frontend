import React from "react";
import Subcatcard2 from "./Subcatcard2";

const Subcategory2 = () => {
  return (
    <>
      <div className="w-full h-[280px] flex items-center justify-center mt-[4vw]">
        <div className="box border-[1px] border-white bg-[#F2F2F2] w-[85%] h-full flex justify-between overflow-hidden rounded-2xl">
          <div className=" p-6 flex flex-wrap justify-around">
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
            <Subcatcard2 />
          </div>
          <div className="imgcontainer relative right-0 w-[42%] h-full bg-green-300">
            <div className="overlay absolute w-full h-full bg-black opacity-40"></div>
            <img
              className="w-full h-full object-cover object-center"
              src="https://s3-alpha-sig.figma.com/img/5778/4980/a5cf52bf468760f43a54f517f66a6421?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHv-Go6T-~hlMLpuSQzyxh7nj2oHn2S5KCKh0AQoc5u1Dz082TPr9ViV~k7HFZyCADpclj1V7J2zSCzwUXY0fgisSZz-lm5EAOW7ki9a69OyLLVdPo9YtQVPqxq8vGIxQt9gziF-5dGtJqq7T7usaWhcl4LPVTbkhTqi8CbOkx7d25T3wlePHt6Fwz1CCzrcVxJmWXSS1LPqX33Ynn2G9r5kqoM39gYkJwl3WRiZ2HWbc5c1aW0wCfOXJYJHYVVmjjQrLmIt31OXQQ1Mcj~johhyEhFzcTHFLLnv-8FFHxTqSz21WMjXYXA1o3b7z1fx4XE2V8g2o2u-em~OotBDxQ__"
              alt=""
            />
            <h1 className="absolute top-0 text-white px-[24px] py-[32px] font-bold text-4xl leading-[43px] z-30">
              Electronics & Gadgets
            </h1>
            <button className=" absolute bottom-[35%] ml-[24px] z-50 bg-white px-4 py-2 rounded-md text-lg font-semibold text-[#005F85] hover:bg-[#005F85] hover:text-white transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcategory2;
