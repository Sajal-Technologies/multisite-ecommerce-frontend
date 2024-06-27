import Logo from "../images/MainPage/FooterLogos/Logo.svg";
import Flag from "../images/MainPage/FooterLogos/Flag.png";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { BiLogoPlayStore } from "react-icons/bi";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center mobile:w-full overflow-x-hidden tablet:w-full">
      <div className="h-full w-[85%] mt-10 mobile:w-full px-4 m-0 tablet:w-full tablet:px-6">
        <div className="bg-[#005F85] rounded-lg flex mobile:flex-col relative overflow-hidden">
          <div className="newsletter flex gap-[2px] flex-col mobile:items-start mobile:justify-start mobile:p-4 justify-center px-8 relative mobile:h-[160px] h-[100px] w-[51%] bg-gradient-to-br from-[#00A8EB] to-[#0B9FDA]">
            <h1 className="text-white font-semibold text-2xl mobile:text-xl mobile:leading-6 z-50">
              Newsletter
            </h1>
            <p className="text-white mobile:text-nowrap mobile:leading-5 z-50">
              Get daily news on upcoming offers from many{" "}
              <br className="hidden mobile:block" /> suppliers all over the
              world.
            </p>
          </div>
          <div className="w-[45%] mobile:hidden flex h-full items-center justify-center absolute right-0">
            <div className="w-[85%] relative px-4 flex items-center justify-between h-[50px] bg-white rounded-lg">
              <FiMail className="text-[#005F85] absolute top-[29.3%] text-xl" />
              <input
                className="ml-8 placeholder:text-[#005F85] text-[#005F85] w-[70%]"
                type="text"
                placeholder="Enter your email"
                name=""
                id=""
              />
              <button className="bg-[#FF7F00] px-4 py-2 rounded-md text-white text-sm">
                Submit
              </button>
            </div>
          </div>
          <div className="px-4 w-full absolute bottom-[10px] hidden mobile:block">
            <div className="w-full bg-white flex items-center py-2 px-4 relative rounded-lg">
              <FiMail className="text-[#005F85] absolute text-xl" />
              <input
                type="text"
                className="placeholder:text-[#005F85] ml-9"
                placeholder="Enter your email"
              />
              <button className="bg-[#FF7F00] px-4 py-[7px] rounded-md text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex mobile:flex-col tablet:mt-6 justify-between mobile:mt-8 mt-[2vw]">
          <div className="w-[25%] mobile:w-full">
            <img className="mb-2" src={Logo} alt="" />
            <p className="text-[#52525B] mobile:w-full">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit ,
              consectetur adipiscing elit, sed do eiusmod
            </p>
            <div className="flex gap-2 mt-6 mobile:mt-4">
              <div className="h-[30px] w-[30px] flex justify-center items-center bg-[#2563EB] rounded-full">
                <FaFacebookF className="text-white fill-white" />
              </div>
              <div className="h-[30px] w-[30px] peer flex justify-center items-center bg-white border-[1px] border-[#DEDEDE] rounded-full">
                <FiInstagram className="text-[#EC0A75]" />
              </div>
              <div className="h-[30px] w-[30px] peer flex justify-center items-center bg-white border-[1px] border-[#DEDEDE] rounded-full">
                <FiTwitter className="fill-[#2563EB] text-[#2563EB]" />
              </div>
            </div>
          </div>
          <div className="relative hidden mobile:block">
            <h1 className="uppercase text-[#005F85] font-semibold text-sm mobile:text-lg mt-4">
              Get App
            </h1>
            <div className="mt-4 flex flex-col mobile:flex-row gap-4 w-fit">
              <button className="appstore-button flex w-[150px] items-center justify-end pr-[23px] mobile: py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#fff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <svg
                  className="w-[35px] absolute left-[10%] mobile:left-2"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="fill-white transition-all group-hover:fill-black"
                      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    ></path>
                  </g>
                </svg>
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text leading-none text-[7px] btn-font font-semibold">
                    Download on the
                  </span>
                  <span className="bottom-text text-[15px] btn-font font-semibold">
                    App Store
                  </span>
                </span>
              </button>
              <button className="playstore-button flex items-center justify-center py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#ffffff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <BiLogoPlayStore className="text-white text-[35px] transition-all group-hover:text-black" />
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text uppercase leading-none text-[7px] btn-font font-semibold">
                    Get it On
                  </span>
                  <span className="bottom-text capitalize text-[15px] btn-font font-semibold">
                    google play
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="mobile:flex mobile:mt-4 mobile:gap-[70px] flex gap-[150px] tablet:gap-[50px]">
            <div className="">
              <h1 className="text-[#005F85] font-semibold text-lg">
                Top Categories
              </h1>
              <div className="mt-4 flex flex-col gap-4">
                {[
                  "Watches",
                  "Home Appliances",
                  "Mobile Phone",
                  "Fashion",
                  "Laptops",
                  "Tvs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <FiChevronRight className="text-[#5C5C5C]" />
                    <p className="text-[#5C5C5C] text-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h1 className="text-[#005F85] font-semibold text-lg">Help</h1>
              <div className="mt-4 flex flex-col gap-4">
                {["Terms & Conditions", "Privacy Policy"].map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <FiChevronRight className="text-[#5C5C5C]" />
                    <p className="text-[#5C5C5C] text-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mobile:hidden">
            <h1 className="uppercase text-[#005F85] font-semibold text-sm">
              Get App
            </h1>
            <div className="mt-4 flex flex-col gap-4">
              <button className="appstore-button flex items-center justify-end pr-[23px] py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all duration-200 @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#fff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <svg
                  className="w-[35px] absolute left-[10%]"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="fill-white transition-all group-hover:fill-black"
                      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    ></path>
                  </g>
                </svg>
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text leading-none text-[7px] btn-font font-semibold">
                    Download on the
                  </span>
                  <span className="bottom-text text-[15px] btn-font font-semibold">
                    App Store
                  </span>
                </span>
              </button>
              <button className="playstore-button flex items-center justify-center py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all duration-200 @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#ffffff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <BiLogoPlayStore className="text-white text-[35px] transition-all group-hover:text-black" />
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text uppercase leading-none text-[7px] btn-font font-semibold">
                    Get it On
                  </span>
                  <span className="bottom-text capitalize text-[15px] btn-font font-semibold">
                    google play
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[45px] bg-[#F2F2F2] mt-8 flex items-center justify-center mobile:justify-between mobile:w-full tablet:w-full tablet:justify-between ">
        <div className="w-[85%] h-full text-[#3D3D3D] text-sm flex items-center justify-between mobile:w-full mobile:justify-between mobile:px-4 tablet:w-full px-6">
          <p className="mobile:text-sm">
            © 2024 Saad Mahfouz. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <img className="w-6 h-4" src={Flag} alt="" />
            <p className="">English</p>
            <FiChevronUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
