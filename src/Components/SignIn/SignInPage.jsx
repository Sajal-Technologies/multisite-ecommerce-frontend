import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import facebook from "../../images/SigninPage/facebook.png";
import { FiChevronRight } from "react-icons/fi";
import LoginBuilding from "../../images/SigninPage/LoginBuilding.png";

const SignInPage = () => {
  return (
    <>
      <div className="signin flex h-[100vh] overflow-hidden justify-between w-full">
        <div className="flex flex-col h-fit pl-[120px] w-fit pt-[80px] gap-6">
          <h1 className="text-[#121212] text-6xl  leading-[64px] font-bold">
            Sign In
          </h1>
          <div className="flex gap-4 items-center">
            <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
              <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
                <FcGoogle className="text-2xl" /> Continue with Google
              </div>
            </div>
            <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
              <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
                <img className="w-6" src={facebook} alt="" />
                Continue with Facebook
              </div>
            </div>
          </div>
          <p className="w-full text-center font-bold text-[#5C5C5C] text-xl">
            or
          </p>
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
          <div className="inputs relative flex flex-col gap-2">
            <label className="text-[#121212]  text-lg" htmlFor="">
              Password
            </label>
            <input
              className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="password"
              placeholder="Enter your password"
            />
            <FiEyeOff className=" absolute top-[20%] text-lg right-0 mx-4 text-[#7A7A7A]" />
            <div className="flex items-center mt-1 justify-between">
              <div className="flex items-center gap-2">
                <input
                  className="h-[22px] w-[22px] border-[#F2F2F2]"
                  type="checkbox"
                />
                <p>Remember me</p>
              </div>
              <p className="text-[#3D3D3D] border-b-[1px] border-[#3D3D3D] text-sm">
                Forgot Password?
              </p>
            </div>
            <div className="flex w-full items-center mt-4 justify-between bg-[#005F85] px-8 py-4 rounded-xl">
              <p className="text-white text-lg font-semibold">Sign In</p>
              <div className="flex">
                <FiChevronRight className="text-2xl text-[#99BFCE]" />
                <FiChevronRight className="text-2xl text-white" />
                <FiChevronRight className="text-2xl text-[#99BFCE]" />
              </div>
            </div>
            <p className="text-[#121212] text-xl font-medium mt-4">
              Don't have an account?{" "}
              <span className="text-[#005F85]">Sign Up</span>
            </p>
          </div>
        </div>
        <div className="signin-img h-[90%] absolute right-0 bottom-0">
          <img
            className="h-full w-full object-contain"
            src={LoginBuilding}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
