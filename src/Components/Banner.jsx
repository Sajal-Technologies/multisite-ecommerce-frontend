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
import Phone from "../images/phone.png";
import Homeappliances from "../images/homeappliances.png";

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
            <div className="h-[90%] w-[80%] flex justify-between">
              <div className="bl">
                <h3 className="mt-[3vw] mb-0 text-white text-2xl">
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
              <div className="br mr-[4vw]">
                <img src={Phone} className="mt-[1.5vw]" alt="" />
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
                    src="https://s3-alpha-sig.figma.com/img/f0c0/9379/745c2cc486f326929cc1b8f54c4ef1b6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOYDGRt1X43EIAvu72PhpXkj-dMnAoUaLCpfnrM7jLo3RwtJr5PG2dJIqsfNxK4T4NjpjabJ63iGtaMPInMqK0YuTP3BgcAkmk0ny0ahVGGx~WnXNPCv~UBpePItWfMydaTeG1CQWowpkY83O4QFH6dThzhDptQCy02Lmmg6gzQ1oFJS3IoZNsumZ-BG8pUXBj9NyjJ499RKpFyrLYqel1PPnD5R~pFtai6KD6Er9XFJSduEEDVoNmIYIxLEaFFtAQ5KHMxuc6etv57Te2Y8-4skC~ejV9S-VWv7GPBEk2S4z1-UGwo4--09uTJZKV8Uj9Wt5D6MkGft~k1wFsA7yA__"
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
                    src="https://s3-alpha-sig.figma.com/img/7aae/005e/e5852f776252b7d4f0de2311d323b369?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-b3WmX~8Lc9rhKAk2AEn5i31hQxH903d06Mu8M4YdKRJRq6zYCyCY3LPRGLch7ztt4tAP7u6Kwl5NkZWm0eucVidTvEOtbhw8w8QiSrstdgdjollI0WgpwTZ5~-hkmn3ry73iUuI7a9SW6hjjqxd7w3xLViFkBLlQVHkiHPcRo3OjMV7PM6HrK7khHq1YA~WVzTAxzUfROHDaIu6RahIpk4vo9JTdeHt-zYD766Xit6x3FhMruKd6swB9GqPwHpyQbCcfKxSaARyqoVuOum55aASJtcvxT9ft0rdAAfF8Qtdo135c5i426VOSKEZPMUUikL3fQu1j5HNHs0scmYTw__"
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
                    src="https://s3-alpha-sig.figma.com/img/c22f/25d2/82031ed7869070a69c59f08833b2e5eb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vx8mBZmPXRMr5ZDlUz8TP15YB3Z4CLHtnPuLvBNM4LdXnTamkSOBJuwKzlMTUUoSDox-kHIJvcPdPLDEgStUdV-17NSz9RmhwfJ1fNnqiTB94MJkVGe-FVa6h5XGDWliXNmNgHGwOTdQSe5EXe1fku98K0STsvq2g9a3PQhCVUmf0Ztxbj~htGeh~GqpsOG~qh8~Awg4t3UxqmKz7kZDjqCJtBxD2f0rW5IUnLicORi-teo88UoQWIgQhS8oCKlUtH718G-vNFVxYBgM8qZgR1v7teTi6N6piP5v~mlDV1s5UYFV53xaIX1EnYcPrWjwOx3RLm1RDZZvIEh7rZvzCg__"
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
                    src="https://s3-alpha-sig.figma.com/img/8a4a/38c3/a683f2aef547571b9f3d5b4841cbd0d7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J9GCSLl2kO2nlycE6~giEpmJfN3KuqSFbccCF2c0zIV30OpL1G5BcrFSfd17wRfmQd7Jt8Oi2wT4czzAqIKbYa0uE5Eho0WuXIyrQ7lEgRFnBdwRJUX85KQ9zAEplG5S8zQTIMpf5P5iFL5oQ8rt-aEYyDPEqv1tK5n83vq8T4GvC5D7fPmaeQM2pDzr54cpDrkQEIlf0YCj1ZQ2~Zc1voqqQkNQiXh4Z27N9aStQuoaLplu8ljPWwt2u5ubxDG7zrE7QmexbBUidYC7D1XOs1hntvD3If6wfwg5bkhjWcb14L7CmsCt86mpaxoIPqcL~zRVDYQyH3fDK79Ed9o~rg__"
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
