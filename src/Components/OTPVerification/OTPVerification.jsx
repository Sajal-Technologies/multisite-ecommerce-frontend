import React, { useState, useEffect, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const OTPVerification = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if(!value.match(/^[0-9]$/)) return;

        const newOtp = [...otp];
        newOtp[index] = value; 
        setOtp(newOtp);

        if(value !== "" && index < otp.length - 1 ){
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
          inputRefs.current[index - 1].focus();
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
      };
    
      useEffect(() => {
        inputRefs.current[0].focus();
      }, []);

    // const inputs = document.querySelector(".otpboxs input");
    // const otpbtn = document.querySelector(".btn");

    // let handleOtp =(e)=>{
    //     let input = e.target;
    //     let inputValue = input.value;
    //     input.value = "";
    //     input.value = inputValue ? inputValue[0] : "";

    //     let inputIndex = input.dataset.index;
        
    //     if(inputValue.length > 0 && inputIndex < inputs.length - 1){
    //         input.nextElementSibling.disabled = false
    //         input.nextElementSibling.focus();
    //         input.previousElementSibling.disabled = true;

    //     }
    // }



    // inputs.forEach((input, index)=> {
    //     input.dataset.index = index;
    //     input.addEventListener('keyup', handleOtp)
    // })


  return (
    <>
      <div className="main h-screen w-full signin flex justify-between pl-24 py-[5%]">
        <div className="left flex py-8 flex-col w-[36%] gap-8">
          <div className="flex gap-2 items-center font-medium text-[#5C5C5C]">
            <FiArrowLeft className="text-xl" />
            <span className="text-xl">Back</span>
          </div>
          <div className="">
            <h1 className="text-[#121212] text-3xl font-bold">Enter 4-Digit OTP Code</h1>
            <p className="text-[#5C5C5C] leading-[21px] pt-3 font-medium">We just sent a verification code to your registered email, please check your mail.</p>
          </div>
          <div className="">
            <p className="text-[#121212] font-medium">Didn't receive code? <span className="text-[#005F85]">Resend Code</span></p>
          </div>
          <div className="otpboxs flex gap-2">

          {otp.map((data, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}






            {/* <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1"/>
            <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1" disabled/>
            <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1" disabled/>
            <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1" disabled/>
            <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1" disabled/>
            <input className="h-20 w-20 text-center text-4xl bg-white border border-[#C9C9C9] rounded-lg" type="" maxLength="1" disabled/> */}
          </div>
          <div to="" className="flex w-full items-center btn justify-between bg-[#005F85] px-8 py-4 rounded-xl">
            <div to="" className="text-white text-lg font-semibold">Send OTP Code</div>
            <div className="flex">
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
              <FiChevronRight className="text-2xl text-white" />
              <FiChevronRight className="text-2xl text-[#99BFCE]" />
            </div>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </>
  );
};

export default OTPVerification;
