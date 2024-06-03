// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import facebook from "../../images/SigninPage/facebook.png";
// import { FiMail } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";
// import { FiChevronRight } from "react-icons/fi";
// import LoginBuilding from "../../images/SigninPage/LoginBuilding.png";
// import { Link } from "react-router-dom";

// const SignInPage = () => {
//   return (
//     <>
//       <div className="signin flex h-[100vh] overflow-hidden justify-between w-full">
//         <div className="flex flex-col h-fit pl-[120px] w-fit pt-[80px] gap-6">
//           <h1 className="text-[#121212] text-6xl  leading-[64px] font-bold">
//             Sign In
//           </h1>
//           <div className="flex gap-4 items-center">
//           <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
//             <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
//               <FcGoogle className="text-2xl" /> Continue with Google
//             </div>
//           </div>
//           <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
//             <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
//               <img className="w-6" src={facebook} alt="" />
//               Continue with Facebook
//             </div>
//           </div>
//         </div>
//         <p className="w-full text-center font-bold text-[#5C5C5C] text-xl">
//           or
//         </p>
//           <div className="inputs relative flex flex-col gap-2">
//             <label className="text-[#121212]  text-lg" htmlFor="">
//               Email
//             </label>
//             <input
//               className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
//               type="email"
//               placeholder="Enter your mail"
//             />
//             <FiMail className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A]" />
//           </div>
//           <div className="inputs relative flex flex-col gap-2">
//             <label className="text-[#121212]  text-lg" htmlFor="">
//               Password
//             </label>
//             <input
//               className="p-4 rounded-[10px]  placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
//               type="password"
//               placeholder="Enter your password"
//             />
//             <FiEyeOff className=" absolute top-[20%] text-lg right-0 mx-4 text-[#7A7A7A]" />
//             <div className="flex items-center mt-1 justify-between">
//               <div className="flex items-center gap-2">
//                 <input
//                   className="h-[22px] w-[22px] border-[#F2F2F2]"
//                   type="checkbox"
//                 />
//                 <p>Remember me</p>
//               </div>
//               <Link to="/ForgotPassword" className="text-[#3D3D3D] border-b-[1px] border-[#3D3D3D] text-sm">
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="flex w-full items-center mt-4 justify-between bg-[#005F85] px-8 py-4 rounded-xl">
//               <p className="text-white text-lg font-semibold">Sign In</p>
//               <div className="flex">
//                 <FiChevronRight className="text-2xl text-[#99BFCE]" />
//                 <FiChevronRight className="text-2xl text-white" />
//                 <FiChevronRight className="text-2xl text-[#99BFCE]" />
//               </div>
//             </div>
//             <p className="text-[#121212] text-xl font-medium mt-4">
//               Don't have an account?
//               <Link to="/SignUp" className="text-[#005F85] ml-1">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//         <div className="signin-img h-[90%] absolute right-0 bottom-0">
//           <img
//             className="h-full w-full object-contain"
//             src={LoginBuilding}
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignInPage;

import React from "react";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../images/SigninPage/facebook.png";
import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import LoginBuilding from "../../images/SigninPage/LoginBuilding.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="flex signin flex-col relative lg:flex-row h-screen overflow-x-hidden justify-between w-full">
      <div className="flex flex-col mt-[230px] h-fit p-6 md:p-12 lg:p-24 w-full lg:w-[52%] gap-6 lg:m-0">
        <h1 className="text-[#121212] text-2xl md:text-5xl lg:text-6xl font-bold">
          Sign In
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
          <div className="bg-white border border-[#EDEDED] w-full py-3 px-9 rounded-[10px]">
            <div className="flex items-center text-nowrap justify-center gap-2 text-[#3D3D3D] font-semibold lg:text-lg lg:w-full">
              <FcGoogle className="text-2xl" /> Continue with Google
            </div>
          </div>
          <div className="bg-white border border-[#EDEDED] w-full py-3 px-9 rounded-[10px]">
            <div className="flex items-center text-nowrap justify-center gap-2 text-[#3D3D3D] font-semibold lg:text-lg">
              <img className="w-6" src={facebook} alt="Facebook" />
              Continue with Facebook
            </div>
          </div>
        </div>
        <p className="w-full text-center font-bold text-[#5C5C5C] text-xl">
          or
        </p>
        <div className="relative mt-[-2%] flex flex-col gap-3">
          <label
            className="text-[#121212] mb-[-8px] lg:text-lg"
            htmlFor="email"
          >
            Email
          </label>  
          <input
            className="p-4 rounded-[10px] border border-[#EDEDED] placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
            type="email"
            placeholder="Enter your email"
          />
          <FiMail className="absolute top-[54px] lg:top-[61px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A]" />
        </div>
        <label
          className="text-[#121212]  mt-[-10px] mb-[-18px] lg:text-lg"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="p-4 rounded-[10px] w-full border border-[#EDEDED] placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
            type="password"
            placeholder="Enter your password"
          />
          <FiEyeOff className="absolute top-[28px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A]" />
        </div>
        <div className="flex items-center justify-between mt-[-18px] lg:m-0">
          <div className="flex items-center text-xs gap-2">
            <input className="h-4 w-4 border-[#F2F2F2] lg:h-[22px] lg:w-[22px]" type="checkbox" />
            <p className="lg:text-sm">Remember me</p>
          </div>
          <Link
            to="/ForgotPassword"
            className="text-[#3D3D3D] text-xs border-b border-[#3D3D3D] lg:text-sm"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex items-center mt-[-8px] justify-between bg-[#005F85] py-2 px-8 lg:py-4 rounded-xl lg:mt-4">
          <p className="text-white lg:text-lg font-semibold">Sign In</p>
          <div className="flex">
            <FiChevronRight className="text-xl lg:text-2xl text-[#99BFCE]" />
            <FiChevronRight className="text-xl lg:text-2xl text-white" />
            <FiChevronRight className="text-xl lg:text-2xl text-[#99BFCE]" />
          </div>
        </div>
        <p className="text-[#121212] mt-[-12px] flex justify-center gap-1 lg:text-xl lg:justify-start font-medium lg:mt-0">
          Don't have an account? 
          <Link to="/SignUp" className="text-[#005F85]">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="signin-img warm-effect absolute h-[230px] w-full pt-2 lg:w-1/2 lg:h-full lg:right-0 lg:pt-[2%] lg:pr-0 lg:pl-[2%] tablet:h-[30%]">
        <img
          className="h-full w-full object-contain lg:object-contain pt-[8%] p-[3%] pr-[8%] tablet:p-0 lg:absolute"
          src={LoginBuilding}
          alt="Login Building"
        />
      </div>
    </div>
  );
};

export default SignInPage;
