import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Components/Banner.css";
import {
  Navigation,
  Autoplay,
  Pagination,
  HashNavigation,
} from "swiper/modules";
import Button from "./Button";
import Button2 from "./Button2";
import Phone from "../images/MainPage/BannerImages/Phone.png";
import Homeappliances from "../images/MainPage/BannerImages/Homeappliances.png";
import Watch from "../images/MainPage/BannerImages/Watch.png"
import Tv from "../images/MainPage/BannerImages/Tv.png"
import Furniture from "../images/MainPage/BannerImages/Furniture.png"
import HeadPhone from "../images/MainPage/BannerImages/Headphone.png"

const Banner = () => {
  return (
    <>
      <div className="mt-[4vw]">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          loop={true}
          speed= {600}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination, HashNavigation]}
          className="mySwiper w-[85%] rounded-2xl"
        >
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#015F85] via-[#016A94] to-[#0187BD] rounded-2xl">
            <div className="h-[90%] w-[80%] flex relative justify-between">
              <div className="banner1 ">
                <h3 className="mt-[3vw]  mb-0 text-white text-2xl">
                  Get best online deals for mobile phones
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px]">
                  New Mobiles Phones
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[4vw] w-[30%]">
                <img src={Phone} className="mt-[1.5vw] h-full w-full object-cover scale-[1.3]" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#FF8001] via-[#FF8001] to-[#FFC892] rounded-2xl">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
                  Get best online deals for smart watches
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase">
                  Smart wearable
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button2 className="bg-[#005F85]" />
              </div>
              <div className="br mr-[3vw]">
                <div className="w-full flex h-full">
                  <img
                    src={Watch}
                    className="mt-[.8vw] scale-[.85]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-[#192030] rounded-2xl">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
                  Get best online deals for home appliances
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase">
                  Perfect appliances
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[3vw]">
                <img className="mt-[1.5vw]" src={Homeappliances} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-[#E6425E] rounded-2xl">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
                  Get best online deals for home TVs
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px]">
                  SHOP SMART TVs
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button2 />
              </div>
              <div className="br mr-[3vw]">
                <div className="w-full flex h-full">
                  <img
                    src={Tv}
                    className="mt-[1.5vw]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-[#F7C59F] rounded-2xl">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
                  Get best online deals for furniture
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px]">
                  SHOP BEST Furniture
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button2 />
              </div>
              <div className="br mr-[3vw]">
                <div className="w-full flex h-full">
                  <img
                    src={Furniture}
                    className="mt-[1.5vw] scale-[1.3]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#292B2A] via-[#212322] to-[#757678] rounded-2xl">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
                  Get best online deals for gears
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase">
                  shop best gears
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px]">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[3vw]">
                <div className="w-full flex h-full">
                  <img
                    src={HeadPhone}
                    className="mt-[1.5vw]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
