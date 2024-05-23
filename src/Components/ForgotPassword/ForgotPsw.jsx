import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png"
import { Link } from "react-router-dom";

const ForgotPsw = () => {
  return (
    <>
      <div className="main h-screen w-full signin flex pl-[8%] max-[600px]:items-center justify-between max-[600px]:h-screen max-[600px]:w-full max-[600px]:m-0 py-[5%] max-[600px]:py-0 max-[600px]:px-4 max-[600px]:flex max-[600px]:justify-center max-[600px]:flex-col-reverse">
        <div className="leftform flex py-8 max-[600px]:m-0 max-[600px]:w-full flex-col w-[50%] gap-10 max-[600px]:gap-4 max-[600px]:mt-[-12vh]">
          <div className="flex gap-2 max-[600px]:hidden items-center font-medium text-[#5C5C5C]">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">All Sign-In Options</span>
          </div>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl font-bold max-[600px]:text-2xl">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium ">
              Don't worry, it happens to the best of us, We will send an OTP via
              your registered email.
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label className="text-[#121212] max-[600px]:text-[16px] text-lg" htmlFor="">
              Email
            </label>
            <input
              className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="email"
              placeholder="Enter your mail"
            />
            <FiMail className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A]" />
          </div>
          <Link to="/OTPVerification" className="flex w-full items-center justify-between bg-[#005F85] px-8 py-4 rounded-xl max-[600px]:py-3">
            <Link to="/OTPVerification" className="text-white text-lg font-semibold max-[600px]:text-base">Send OTP Code</Link>
            <div className="flex">
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
              <FiChevronRight className="text-2xl text-white" />
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
            </div>
          </Link>
        </div>
        <div className="rightimg w-full pt-[15%] h-[50%] max-[600px]:absolute max-[600px]:h-[25%] max-[600px]:top-[12%] max-[600px]:left-[60%] max-[600px]:-translate-x-1/2 max-[600px]:-translate-y-1/2">
            <div className="mailmsg flex ml-[20%] max-[600px]:ml-0 max-[600px]:mt-0 mt-[10%] items-center justify-end w-fit h-full">
                <img className="h-[480px] w-full object-cover max-[600px]:h-[180px]" src={mailMessage} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPsw;
