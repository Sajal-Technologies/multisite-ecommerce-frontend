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
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-24 py-[5%]">
        <div className="left flex flex-col py-8 w-[36%] gap-8  ">
          <div className="flex gap-2 items-center font-medium text-[#5C5C5C]">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">Back</span>
          </div>
          <div className="">
            <h1 className="text-[#121212] text-3xl font-bold">
              Enter 4-Digit OTP Code
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium">
              We just sent a verification code to your registered email, please
              check your mail.
            </p>
          </div>
          <div className="">
            <p className="text-[#121212] font-medium">
              Didn't receive code?{" "}
              <span className="text-[#005F85]">Resend Code</span>
            </p>
          </div>
          <div className="otpboxs flex gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                className={`otp-input active:border-[#00A8EB] focus:border-[#00A8EB] focus:outline-none h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg ${
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
            className={`flex w-full items-center btn justify-between bg-[#005F85] px-8 py-4 rounded-xl ${
              isOtpComplete ? "bg-[#005F85]" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Link
              to="/ResetPassword"
              className="text-white text-lg font-semibold"
            >
              Verify OTP Code
            </Link>
            <Link to="/ResetPassword" className="flex">
              <FiChevronRight
                className={`text-2xl ${
                  isOtpComplete
                    ? "text-[#99BFCE]"
                    : "text-[#999999] cursor-not-allowed"
                }`}
              />
              <FiChevronRight
                className={`text-2xl ${
                  isOtpComplete ? "text-white" : "text-white cursor-not-allowed"
                }`}
              />
              <FiChevronRight
                className={`text-2xl ${
                  isOtpComplete
                    ? "text-[#99BFCE]"
                    : "text-[#999999] cursor-not-allowed"
                }`}
              />
            </Link>
          </Link>
        </div>
        <div className="right">
          <div className="r-img h-screen mt-[-77px] w-full">
            <img
              className="h-full w-full object-cover"
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
