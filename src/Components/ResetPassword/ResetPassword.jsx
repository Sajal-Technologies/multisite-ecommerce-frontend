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
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-24 py-[4%]">
        <div className="leftform flex py-8 flex-col w-[36%] gap-10">
          <div
            className={`bg-[#C6513F] rounded-full mt-[-40px] flex items-center justify-center py-[13px] ${
              isMessageVisible ? "" : "hidden"
            }`}
          >
            <p className="text-white font-semibold">
              Your password has been reset, please sign in to continue.
            </p>
          </div>
          <div className="flex gap-2 items-center font-medium text-[#5C5C5C]">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">All Sign-In Options</span>
          </div>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl font-bold">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium">
              registeredmail@example.net
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label className="text-[#121212]  text-lg" htmlFor="">
              New Password
            </label>
            <input
              className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="password"
              placeholder="Enter new password"
            />
            <FiEyeOff className=" absolute top-[22%] text-lg right-0 mx-4 text-[#7A7A7A]" />
            <div className="flex relative mt-2 flex-col gap-2">
              <label className="text-[#121212]  text-lg" htmlFor="">
                Confirm Password
              </label>
              <input
                className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
                type="password"
                placeholder="Confirm new password"
              />
              <FiEyeOff className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A]" />
            </div>
            <p className="text-[#5C5C5C] font-medium">
              Resetting your password will log you out of any other devices
              still signed into this account.
            </p>
          </div>
          <div
            onClick={handleResetButton}
            disabled={isButtonClicked}
            className={`flex w-full mt-[-16px] items-center justify-between bg-[#005F85] px-8 py-4 rounded-xl ${
              isButtonClicked ? "bg-[#C9C9C9] cursor-not-allowed" : ""
            }`}
          >
            <button className="text-white text-lg font-semibold">
              Reset Password
            </button>
            <div className="flex">
              <FiChevronRight
                className={`text-2xl text-[#99BFCE] ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl text-white ${
                  isButtonClicked ? "text-white cursor-not-allowed" : ""
                }`}
              />
              <FiChevronRight
                className={`text-2xl text-[#99BFCE] ${
                  isButtonClicked ? "text-gray-500 cursor-not-allowed" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="rightimg overflow-hidden">
          <div className="mailmsg flex ml-[20%] mt-[10%] items-center justify-end w-fit h-full">
            <img
              className="h-[540px] w-full object-cover"
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
