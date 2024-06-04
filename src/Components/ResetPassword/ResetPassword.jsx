import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleResetButton = () => {
    setIsButtonClicked(true);
    setIsMessageVisible(true);
  };
  return (
    <>
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-24 py-[4%] mobile:flex-col-reverse mobile:pl-0 mobile:py-0 mobile:m-0 tablet:p-0 tablet:m-0">
        <div className="leftform flex py-8 flex-col w-[36%] gap-10 mobile:w-full mobile:px-4 mobile:gap-4 mobile:pb-[20vh] tablet:w-full tablet:h-screen tablet:px-[10%] tablet:items-start tablet:justify-center">
          <div
            className={`bg-[#C6513F] rounded-full mt-[-40px] flex items-center justify-center py-[13px] mobile:absolute mobile:top-[7%] mobile:py-[14px] mobile:px-2 mobile:-translate-x-[50%] mobile:-translate-y-[1%] mobile:left-1/2 mobile:w-[95%] ${
              isMessageVisible ? "" : "hidden"
            }`}
          >
            <p className="text-white tablet:text-2xl tablet:px-6 tablet: font-semibold mobile:text-sm mobile:font-normal">
              Your password has been reset, please sign in to continue.
            </p>
          </div>
          <Link to="/OTPVerification">
            <div className="flex gap-2 items-center font-medium text-[#5C5C5C] mobile:hidden">
              <FiArrowLeft className="text-xl tablet:text-3xl" />
              <span className="text-xl tablet:text-3xl">
                All Sign-In Options
              </span>
            </div>
          </Link>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl tablet:text-4xl font-bold mobile:text-2xl">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] tablet:text-2xl leading-[21px] pt-3 font-medium mobile:font-normal mobile:mt-0 mobile:pt-2">
              registeredmail@example.net
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label
              className="text-[#121212] tablet:text-3xl tablet:mb-1 text-lg mobile:text-base"
              htmlFor=""
            >
              New Password
            </label>
            <input
              className="p-4 rounded-[10px] tablet:text-2xl tablet:mb-4 placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="password"
              placeholder="Enter new password"
            />
            <FiEyeOff className=" absolute top-[22%] tablet:top-[23%] tablet:text-[26px] text-lg right-0 mx-4 text-[#7A7A7A]" />
            <div className="flex relative mt-2 flex-col gap-2">
              <label
                className="text-[#121212] tablet:text-3xl tablet:mb-1 text-lg mobile:text-base"
                htmlFor=""
              >
                Confirm Password
              </label>
              <input
                className="p-4 rounded-[10px] tablet:text-2xl placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
                type="password"
                placeholder="Confirm new password"
              />
              <FiEyeOff className=" absolute top-[60%] tablet:text-[26px] text-lg right-0 mx-4 text-[#7A7A7A]" />
            </div>
            <p className="text-[#5C5C5C] tablet:text-2xl tablet:mb-1 font-medium mobile:text-sm mobile:font-normal">
              Resetting your password will log you out of any other devices
              still signed into this account.
            </p>
          </div>
          <div
            onClick={handleResetButton}
            disabled={isButtonClicked}
            className={`flex w-full mt-[-16px] items-center justify-between tablet:py-5 bg-[#005F85] px-8 py-4 mobile:mt-2 mobile:py-4 rounded-xl ${
              isButtonClicked ? "bg-[#C9C9C9] cursor-not-allowed" : ""
            }`}
          >
            <button className="text-white tablet:text-[26px] text-lg font-semibold mobile:text-base">
              Reset Password
            </button>
            <div className="flex">
              <FiChevronRight
                className={`text-2xl tablet:text-3xl text-[#99BFCE] mobile:text-xl ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl tablet:text-3xl text-white mobile:text-xl ${
                  isButtonClicked ? "text-white cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl tablet:text-3xl text-[#99BFCE] mobile:text-xl ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="rightimg tablet:hidden overflow-hidden mobile:w-full mobile:absolute mobile:h-[25%] mobile:top-[20%] mobile:left-[50%] mobile:-translate-x-1/2 mobile:-translate-y-1/2">
          <div className="mailmsg flex ml-[20%] mt-[10%] items-center justify-end w-fit h-full mobile:ml-0 mobile:mt-0">
            <img
              className="h-[540px] w-full object-cover mobile:object-contain"
              src={mailMessage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
