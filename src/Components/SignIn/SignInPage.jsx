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

import { FiMail } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import LoginBuilding from "../../images/SigninPage/LoginBuilding.png";
import { Link } from "react-router-dom";
import GoogleSignIn from "./Components/GoogleSignIn";
import FacebookSignIn from "./Components/FacebookSignIn";

const SignInPage = () => {
  return (
    <div className="flex signin flex-col relative xl:flex-row h-screen overflow-x-hidden justify-between w-full overflow-hidden">
      <div className="flex flex-col tablet:mt-[-5%] mt-[230px] h-fit tablet:z-20 p-6 md:p-12 xl:p-24 w-full xl:w-[52%] gap-6 xl:m-0 tablet:h-screen tablet:pt-[15%] tablet:items-start tablet:px-[10%] tablet:justify-center">
        <h1 className="text-[#121212] tablet:text-5xl text-2xl md:text-6xl xl:text-6xl font-bold">
          Sign In
        </h1>
        <div className="flex gap-4 items-center flex-col xl:flex-row tablet:w-full">
          <GoogleSignIn />
          <FacebookSignIn />
        </div>
        <p className="w-full text-center font-bold text-[#5C5C5C] text-xl tablet:my-2 tablet:w-full tablet:text-3xl">
          or
        </p>
        <div className="relative mt-[-2%] flex flex-col gap-3 tablet:gap-4 tablet:mb-4 tablet:w-full">
          <label
            className="text-[#121212] mb-[-8px] xl:text-lg tablet:text-3xl"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-4 tablet:mt-2 rounded-[10px] border border-[#EDEDED] placeholder:text-[#B2B2B2] bg-[#FAFEFF] tablet:w-full tablet:text-2xl"
            type="email"
            placeholder="Enter your email"
          />
          <FiMail className="absolute top-[54px] xl:top-[61px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A] tablet:right-5 tablet:top-[83px] tablet:text-[28px]" />
        </div>
        <div className="tablet:w-full">
          <label
            className="text-[#121212] tablet:mt-0 mt-[-10px] mb-[-18px] xl:text-lg tablet:text-3xl"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative tablet:mt-2">
            <input
              className="p-4 rounded-[10px] w-full border border-[#EDEDED] placeholder:text-[#B2B2B2] bg-[#FAFEFF] tablet:w-full tablet:text-2xl"
              type="password"
              placeholder="Enter your password"
            />
            <FiEyeOff className="absolute top-[28px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A] tablet:right-5 tablet:top-8 tablet:text-[28px]" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[-18px] tablet:mb-4 tablet:mt-[-10px] xl:m-0 tablet:w-full">
          <div className="flex items-center justify-center text-xs gap-2">
            <input
              className="h-4 w-4 tablet:h-6 tablet:w-6 border-[#F2F2F2] xl:h-[22px] xl:w-[22px]"
              type="checkbox"
            />
            <p className="xl:text-sm tablet:text-xl">Remember me</p>
          </div>
          <Link
            to="/ForgotPassword"
            className="text-[#3D3D3D] text-xs border-b border-[#3D3D3D] xl:text-sm tablet:text-xl"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex items-center tablet:w-full mt-[-8px] tablet:mt-0 justify-between bg-[#005F85] tablet:py-4 py-2 px-8 xl:py-4 rounded-xl xl:mt-4">
          <p className="text-white xl:text-lg font-semibold tablet:text-[26px]">
            Sign In
          </p>
          <div className="flex">
            <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
            <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-white" />
            <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
          </div>
        </div>
        <p className="text-[#121212] tablet:text-2xl mt-[-12px] flex justify-center gap-1 xl:text-xl xl:justify-start font-medium xl:mt-0 tablet:w-fit">
          Don&apos;t have an account?
          <Link to="/SignUp" className="text-[#005F85]">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="signin-img warm-effect tablet:hidden absolute h-[230px] w-full pt-2 xl:w-1/2 xl:h-full xl:right-[-4%] xl:bottom-[-4%] xl:pt-[2%] xl:pr-0 xl:pl-[2%] tablet:h-[50%] tablet:absolute tablet:right-[-14%] tablet:bottom-[-3%]">
        <img
          className="h-full w-full object-contain xl:object-contain pt-[8%] p-[3%] pr-[8%] tablet:p-0 xl:absolute"
          src={LoginBuilding}
          alt="Login Building"
        />
      </div>
    </div>
  );
};

export default SignInPage;
