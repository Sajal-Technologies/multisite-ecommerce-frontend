import React, { useEffect, useRef, useState } from "react";
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
import Watch from "../images/MainPage/BannerImages/Watch.png";
import Tv from "../images/MainPage/BannerImages/Tv.png";
import Furniture from "../images/MainPage/BannerImages/Furniture.png";
import HeadPhone from "../images/MainPage/BannerImages/Headphone.png";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="mt-[4vw] max-[600px]:m-0">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          loop={true}
          speed={600}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={!isMobile}
          modules={[Navigation, Autoplay, Pagination, HashNavigation]}
          className="mySwiper w-[85%] max-[600px]:rounded-none rounded-2xl max-[600px]:w-full "
        >
          <SwiperSlide className="h-[25vw] max-[600px]:h-[36vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#015F85] via-[#016A94] to-[#0187BD] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex relative justify-between">
              <div className="banner1 max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw]  mb-0 text-white text-2xl max-[600px]:text-xs">
                  Get best online deals for mobile phones
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] max-[600px]:text-xl">
                  New Mobiles Phones
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[4vw] w-[30%] max-[600px]:mr-[-5vw]">
                <img
                  src={Phone}
                  className="mt-[1.5vw] h-full w-full object-cover scale-[1.3] max-[600px]:mt-[13vw] max-[600px]:scale-[2]"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] max-[600px]:h-[36vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#FF8001] via-[#FF8001] to-[#FFC892] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl max-[600px]:text-xs">
                  Get best online deals for smart watches
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase max-[600px]:text-xl">
                  Smart wearable
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button2 className="bg-[#005F85]" />
              </div>
              <div className="br mr-[3vw] max-[600px]:mr-[-7vw]">
                <div className="w-full flex h-full">
                  <img src={Watch} className="mt-[.8vw] scale-[.85] max-[600px]:mt-[5vw] max-[600px]:scale-[1]" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] w-[100%] max-[600px]:h-[36vw] flex items-center justify-center bg-[#192030] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl max-[600px]:text-xs max-[600px]:text-nowrap">
                  Get best online deals for home appliances
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase max-[600px]:text-xl">
                  Perfect appliances
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[3vw] max-[600px]:mr-[-13vw]">
                <img className="mt-[1.5vw] max-[600px]:scale-[.65] max-[600px]:mt-[-2vw]" src={Homeappliances} alt="" />
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] max-[600px]:h-[36vw] w-[100%] flex items-center justify-center bg-[#E6425E] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl max-[600px]:text-xs">
                  Get best online deals for home TVs
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] max-[600px]:text-xl">
                  SHOP SMART TVs
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button2 />
              </div>
              <div className="br mr-[3vw] max-[600px]:mr-[-5vw] max-[600px]:mt-[1vw]">
                <div className="w-full flex h-full">
                  <img src={Tv} className="mt-[1.5vw]" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[25vw] max-[600px]:h-[36vw] w-[100%] flex items-center justify-center bg-[#F7C59F] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl max-[600px]:text-xs">
                  Get best online deals for furniture
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] max-[600px]:text-xl">
                  SHOP BEST Furniture
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button2 />
              </div>
              <div className="br mr-[3vw] max-[600px]:mr-[-8vw]">
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
          <SwiperSlide className="h-[25vw] max-[600px]:h-[36vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#292B2A] via-[#212322] to-[#757678] rounded-2xl max-[600px]:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl max-[600px]:ml-[-5vw]">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl max-[600px]:text-xs">
                  Get best online deals for gears
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white text-[64px] uppercase max-[600px]:text-xl">
                  shop best gears
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white text-[32px] max-[600px]:text-xl">
                  UP to 60% OFF
                </h2>
                <Button />
              </div>
              <div className="br mr-[3vw] max-[600px]:mr-[-8vw]">
                <div className="w-full flex h-full">
                  <img src={HeadPhone} className="mt-[1.5vw]" alt="" />
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
