import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const Banner = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  //We should Provide Callback to Use State hook if we want to initialise the state with calculated value
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600);

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
    <div className="mt-[4vw] mobile:m-0">
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
        className="mySwiper xl:w-[85%] md:w-[95%] mobile:rounded-none rounded-2xl mobile:w-full  "
      >
        <SwiperSlide>
          <div className="h-[25vw] mobile:h-[36vw] w-[100%] md:w-full flex items-center justify-center bg-gradient-to-br from-[#015F85] via-[#016A94] to-[#0187BD] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex relative justify-between">
              <div className="banner1 mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 md:text-lg mb-0 text-white xl:text-2xl mobile:text-xs mobile:my-1  tablet:mb-0">
                  Get best online deals for mobile phones
                </h3>
                <h1 className="font-bold mt-[-.8vw] md:text-[38px] text-white xl:text-[64px] mobile:text-xl">
                  New Smartphones
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] md:text-[28px] uppercase text-white xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/Smartphones">
                  <Button />
                </Link>
              </div>
              <div className="br mr-[4vw] w-[30%] mobile:mr-[-5vw]">
                <img
                  src={Phone}
                  className="mt-[1.5vw] h-full w-full object-cover scale-[1.3] mobile:mt-[13vw] mobile:scale-[2]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[25vw] mobile:h-[36vw] w-[100%] md:w-full flex items-center justify-center bg-gradient-to-br from-[#FF8001] via-[#FF8001] to-[#FFC892] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 md:text-lg mb-0 text-white xl:text-2xl mobile:text-xs mobile:my-1  tablet:mb-0">
                  Get best online deals for smart watches
                </h3>
                <h1 className="font-bold mt-[-.8vw] md:text-[38px] text-white xl:text-[64px] uppercase mobile:text-xl">
                  Smart wearable
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] md:text-[28px] uppercase text-white xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/smart watch">
                  <Button2 className="bg-[#005F85]" />
                </Link>
              </div>
              <div className="br mr-[3vw] mobile:mr-[-7vw]">
                <div className="w-full flex h-full">
                  <img
                    src={Watch}
                    className="mt-[.8vw] scale-[.85] mobile:mt-[5vw] mobile:scale-[1]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[25vw] w-[100%] mobile:h-[36vw] flex items-center justify-center bg-[#192030] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 md:text-lg mb-0 text-white xl:text-2xl mobile:text-xs mobile:text-nowrap mobile:my-1  tablet:mb-0">
                  Get best online deals for home appliances
                </h3>
                <h1 className="font-bold mt-[-.8vw] md:text-[38px] text-white xl:text-[64px] uppercase mobile:text-xl">
                  Perfect appliances
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase md:text-[28px] text-white xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/Home appliances">
                  <Button />
                </Link>
              </div>
              <div className="br mr-[3vw] mobile:mr-[-13vw] scaledown">
                <img
                  className="mt-[1.5vw] mobile:scale-[.65] mobile:mt-[-2vw] "
                  src={Homeappliances}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[25vw] mobile:h-[36vw] w-[100%] flex items-center justify-center bg-[#E6425E] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 md:text-lg mb-0 text-white text-2xl mobile:text-xs mobile:my-1  tablet:mb-0">
                  Get best online deals for home TVs
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white md:text-[38px] xl:text-[64px] mobile:text-xl">
                  SHOP SMART TVs
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase md:text-[28px] text-white xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/Smart TV">
                  <Button2 />
                </Link>
              </div>
              <div className="br mr-[3vw] mobile:mr-[-5vw] mobile:mt-[1vw]">
                <div className="w-full flex h-full">
                  <img src={Tv} className="mt-[1.5vw]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[25vw] mobile:h-[36vw] w-[100%] flex items-center justify-center bg-[#F7C59F] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 mb-0 text-white md:text-lg xl:text-2xl mobile:text-xs mobile:my-1  tablet:mb-0">
                  Get best online deals for furniture
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white xl:text-[64px] md:text-[38px] mobile:text-xl">
                  SHOP BEST Furniture
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white md:text-[28px] xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/Furniture">
                  <Button2 />
                </Link>
              </div>
              <div className="br mr-[3vw] mobile:mr-[-8vw]">
                <div className="w-full flex h-full">
                  <img
                    src={Furniture}
                    className="mt-[1.5vw] scale-[1.3]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[25vw] mobile:h-[36vw] w-[100%] flex items-center justify-center bg-gradient-to-br from-[#292B2A] via-[#212322] to-[#757678] rounded-2xl mobile:rounded-none">
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl mobile:ml-[-5vw]">
                <h3 className="xl:mt-[3vw] md:mt-4 mb-0 text-white md:text-lg xl:text-2xl mobile:text-xs mobile:my-1  tablet:mb-0">
                  Get best online deals for gears
                </h3>
                <h1 className="font-bold mt-[-.8vw] text-white md:text-[38px] xl:text-[64px] uppercase mobile:text-xl">
                  shop best gears
                </h1>
                <h2 className="font-bold mt-[-.8vw] mb-[1.8vw] uppercase text-white md:text-[28px] xl:text-[32px] mobile:text-xl">
                  UP to 60% OFF
                </h2>
                <Link to="/Headphones">
                  <Button2 />
                </Link>
              </div>
              <div className="br mr-[3vw] mobile:mr-[-8vw]">
                <div className="w-full flex h-full">
                  <img src={HeadPhone} className="mt-[1.5vw]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
