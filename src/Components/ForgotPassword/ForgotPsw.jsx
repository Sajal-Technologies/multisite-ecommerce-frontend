import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png";
import { Link } from "react-router-dom";

const ForgotPsw = () => {
  return (
    <>
      <div className="main h-screen w-full signin flex justify-between pl-24 py-[5%]">
        <div className="leftform flex py-8 flex-col w-[36%] gap-10">
          <div className="flex gap-2 items-center font-medium text-[#5C5C5C]">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">All Sign-In Options</span>
          </div>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl font-bold">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium">
              Don't worry, it happens to the best of us, We will send an OTP via
              your registered email.
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label className="text-[#121212]  text-lg" htmlFor="">
              Email
            </label>
            <input
              className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="email"
              placeholder="Enter your mail"
            />
            <FiMail className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A]" />
          </div>
          <Link
            to="/OTPVerification"
            className="flex w-full items-center justify-between bg-[#005F85] px-8 py-4 rounded-xl"
          >
            <Link
              to="/OTPVerification"
              className="text-white text-lg font-semibold"
            >
              Send OTP Code
            </Link>
            <div className="flex">
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
              <FiChevronRight className="text-2xl text-white" />
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
            </div>
          </Link>
        </div>
        <div className="rightimg">
          <div className="mailmsg flex ml-[20%] mt-[10%] items-center justify-end w-fit h-full">
            <img
              className="h-[480px] w-full object-cover"
              src={mailMessage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPsw;
