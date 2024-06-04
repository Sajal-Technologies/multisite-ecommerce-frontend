import React, { useState, useEffect, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import otpVerification from "../../images/OTPVerification/otpVerification.png";
import otpVerifying from "../../images/OTPVerification/otpVerifying.png";
import otpVerified from "../../images/OTPVerification/otpVerified.png";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [currentImage, setCurrentImage] = useState(otpVerification);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!value.match(/^[0-9]$/)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (value !== "") {
      setCurrentImage(otpVerifying);
    }

    if (newOtp.every((val) => val !== "")) {
      setCurrentImage(otpVerified);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] !== "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        setCurrentImage(otpVerifying);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").split("");
    const newOtp = [...otp];
    pastedData.forEach((char, index) => {
      if (index < otp.length) {
        newOtp[index] = char.match(/^[0-9]$/) ? char : "";
      }
    });
    setOtp(newOtp);

    const filledIndex = pastedData.findIndex((char) => !char.match(/^[0-9]$/));
    if (filledIndex === -1 && pastedData.length < otp.length) {
      inputRefs.current[pastedData.length].focus();
    } else if (filledIndex > -1) {
      inputRefs.current[filledIndex].focus();
    } else {
      inputRefs.current[otp.length - 1].focus();
    }

    if (newOtp.every((val) => val !== "")) {
      setCurrentImage(otpVerified);
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const isOtpComplete = otp.every((value) => value !== "");

  return (
    <>
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-20 py-[5%] mobile:flex-col-reverse mobile:h-screen tablet:p-0 tablet:m-0 mobile:w-full mobile:justify-between mobile:m-0 mobile:p-0">
        <div className="left flex flex-col py-8 w-[60%] gap-8 mobile:px-4 mobile:w-full mobile:my-[27vh] mobile:gap-4 tablet:h-screen tablet:w-full px-[10%] tablet:items-start tablet:justify-center">
          <Link to="/ForgotPassword">
            <div className="flex gap-2 items-center font-medium text-[#5C5C5C] mobile:hidden">
              <FiArrowLeft className="text-xl tablet:text-3xl" />
              <span className="text-xl tablet:text-3xl">Back</span>
            </div>
          </Link>
          <div className="">
            <h1 className="text-[#121212] text-3xl tablet:text-4xl font-bold mobile:text-2xl">
              Enter 4-Digit OTP Code
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] tablet:text-2xl pt-3 font-medium mobile:font-normal">
              We just sent a verification code to your registered email, please
              check your mail.
            </p>
          </div>
          <div className="">
            <p className="text-[#121212] tablet:text-2xl font-medium">
              Didn't receive code?
              <span className="text-[#005F85]">Resend Code</span>
            </p>
          </div>
          <div className="otpboxs flex gap-2 tablet:justify-between tablet:items-center tablet:w-full mobile:justify-center">
            {otp.map((data, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                className={`otp-input active:border-[#00A8EB] focus:border-[#00A8EB] focus:outline-none h-20 w-20 mobile:h-[50px] mobile:w-[50px] mobile:text-xl text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg ${
                  data ? "active" : ""
                }`}
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
              />
            ))}
          </div>
          <Link
            to="/ResetPassword"
            className={`flex w-full items-center btn justify-between bg-[#005F85] px-8 tablet:py-5 py-4 mobile:py-3 rounded-xl ${
              isOtpComplete ? "bg-[#005F85]" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Link
              to="/ResetPassword"
              className="text-white text-nowrap text-lg tablet:text-2xl font-semibold mobile:text-base"
            >
              Verify OTP Code
            </Link>
            <Link to="/ResetPassword" className="flex">
              <FiChevronRight
                className={`text-2xl tablet:text-3xl mobile:text-xl ${
                  isOtpComplete
                    ? "text-[#99BFCE]"
                    : "text-[#999999] cursor-not-allowed"
                }`}
              />
              <FiChevronRight
                className={`text-2xl tablet:text-3xl mobile:text-xl ${
                  isOtpComplete ? "text-white" : "text-white cursor-not-allowed"
                }`}
              />
              <FiChevronRight
                className={`text-2xl tablet:text-3xl mobile:text-xl ${
                  isOtpComplete
                    ? "text-[#99BFCE]"
                    : "text-[#999999] cursor-not-allowed"
                }`}
              />
            </Link>
          </Link>
        </div>
        <div className="right tablet:hidden">
          <div className="r-img warm-effect h-screen mt-[-77px] w-full mobile:absolute mobile:h-[364px] mobile:m-0 mobile:p-0 mobile:top-[-3%] mobile:mb-6">
            <img
              className="h-full w-full object-contain mobile:p-[11%] mobile:object-contain"
              src={currentImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
