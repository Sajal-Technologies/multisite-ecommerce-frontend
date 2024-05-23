import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png";
import { FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleResetButton = () => {
    setIsButtonClicked(true);
    setIsMessageVisible(true);
  };
  return (
    <>
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-24 py-[4%] max-[600px]:flex-col-reverse max-[600px]:pl-0 max-[600px]:py-0 max-[600px]:m-0">
        <div className="leftform flex py-8 flex-col w-[36%] gap-10 max-[600px]:w-full max-[600px]:px-4 max-[600px]:gap-4 max-[600px]:pb-[20vh]">
          <div
            className={`bg-[#C6513F] rounded-full mt-[-40px] flex items-center justify-center py-[13px] max-[600px]:absolute max-[600px]:top-[7%] max-[600px]:py-[14px] max-[600px]:px-2 max-[600px]:-translate-x-[50%] max-[600px]:-translate-y-[1%] max-[600px]:left-1/2 max-[600px]:w-[95%] ${
              isMessageVisible ? "" : "hidden"
            }`}
          > 
            <p className="text-white font-semibold max-[600px]:text-sm max-[600px]:font-normal">
              Your password has been reset, please sign in to continue.
            </p>
          </div>
          <div className="flex gap-2 items-center font-medium text-[#5C5C5C] max-[600px]:hidden">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">All Sign-In Options</span>
          </div>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl font-bold max-[600px]:text-2xl">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium max-[600px]:font-normal max-[600px]:mt-0 max-[600px]:pt-2">
              registeredmail@example.net
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label className="text-[#121212] text-lg max-[600px]:text-base" htmlFor="">
              New Password
            </label>
            <input
              className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="password"
              placeholder="Enter new password"
            />
            <FiEyeOff className=" absolute top-[22%] text-lg right-0 mx-4 text-[#7A7A7A]" />
            <div className="flex relative mt-2 flex-col gap-2">
              <label className="text-[#121212] text-lg max-[600px]:text-base" htmlFor="">
                Confirm Password
              </label>
              <input
                className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
                type="password"
                placeholder="Confirm new password"
              />
              <FiEyeOff className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A]" />
            </div>
            <p className="text-[#5C5C5C] font-medium max-[600px]:text-sm max-[600px]:font-normal">
              Resetting your password will log you out of any other devices
              still signed into this account.
            </p>
          </div>
          <div
            onClick={handleResetButton}
            disabled={isButtonClicked}
            className={`flex w-full mt-[-16px] items-center justify-between bg-[#005F85] px-8 py-4 max-[600px]:mt-2 max-[600px]:py-4 rounded-xl ${
              isButtonClicked ? "bg-[#C9C9C9] cursor-not-allowed" : ""
            }`}
          >
            <button className="text-white text-lg font-semibold max-[600px]:text-base">
              Reset Password
            </button>
            <div className="flex">
              <FiChevronRight
                className={`text-2xl text-[#99BFCE] max-[600px]:text-xl ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl text-white max-[600px]:text-xl ${
                  isButtonClicked ? "text-white cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl text-[#99BFCE] max-[600px]:text-xl ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="rightimg overflow-hidden max-[600px]:w-full max-[600px]:absolute max-[600px]:h-[25%] max-[600px]:top-[20%] max-[600px]:left-[50%] max-[600px]:-translate-x-1/2 max-[600px]:-translate-y-1/2">
          <div className="mailmsg flex ml-[20%] mt-[10%] items-center justify-end w-fit h-full max-[600px]:ml-0 max-[600px]:mt-0">
            <img
              className="h-[540px] w-full object-cover max-[600px]:object-contain"
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
