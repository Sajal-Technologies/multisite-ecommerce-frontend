// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import facebook from "../../images/SigninPage/facebook.png";
// import { FiMail } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";
// import { FiChevronRight } from "react-icons/fi";
// import SignUpBuilding from "../../images/SigninPage/SignupBuilding.png";
// import { FiUser } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const SignUpPage = () => {
//   return (
//     <>
//       <div className="signin max-[600px]:flex-col-reverse flex h-[100vh] overflow-hidden justify-between w-full ">
//         <div className="flex flex-col h-fit pl-[120px]  max-[600px]:px-4 max-[600px]:py-2 w-fit pt-[40px] gap-4">
//           <h1 className="text-[#121212] text-6xl max-[600px]:text-2xl leading-[64px] font-bold">
//             Sign Up
//           </h1>
//           <div className="flex gap-4 items-center">
//             <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
//               <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
//                 <FcGoogle className="text-2xl" /> Continue with Google
//               </div>
//             </div>
//             <div className="bg-white border border-[#EDEDED] w-fit py-3 px-9 rounded-[10px]">
//               <div className="flex items-center gap-2 text-[#3D3D3D] font-semibold text-lg">
//                 <img className="w-6" src={facebook} alt="" />
//                 Continue with Facebook
//               </div>
//             </div>
//           </div>
//           <p className="w-full text-center font-bold text-[#5C5C5C] text-xl">
//             or
//           </p>
//           <div className="inputs relative flex flex-col gap-2">
//             <label className="text-[#121212]  text-lg" htmlFor="">
//               Name
//             </label>
//             <input
//               className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
//               type="text"
//               placeholder="Enter your name"
//             />
//             <FiUser className=" absolute top-[28%] text-lg right-0 mx-4 text-[#7A7A7A]" />
//             <label className="text-[#121212]  text-lg" htmlFor="">
//               Email
//             </label>
//             <input
//               className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
//               type="email"
//               placeholder="Enter your mail"
//             />
//             <FiMail className=" absolute top-[81%] text-lg right-0 mx-4 text-[#7A7A7A]" />
//           </div>
//           <div className="inputs relative flex flex-col gap-2">
//             <label className="text-[#121212]  text-lg" htmlFor="">
//               Password
//             </label>
//             <input
//               className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
//               type="password"
//               placeholder="Enter your password"
//             />
//             <FiEyeOff className=" absolute top-[21%] text-lg right-0 mx-4 text-[#7A7A7A]" />
//             <div className="flex items-center mt-1 justify-between">
//               <div className="flex items-center gap-2">
//                 <input
//                   className="h-[22px] w-[22px] border-[#F2F2F2]"
//                   type="checkbox"
//                 />
//                 <p>
//                   I've read and agree with terms of service and our privacy
//                   policy.
//                 </p>
//               </div>
//             </div>
//             <div className="flex w-full items-center mt-3 justify-between bg-[#005F85] px-8 py-4 rounded-xl">
//               <p className="text-white text-lg font-semibold">Sign Up</p>
//               <div className="flex">
//                 <FiChevronRight className="text-2xl text-[#99BFCE]" />
//                 <FiChevronRight className="text-2xl text-white" />
//                 <FiChevronRight className="text-2xl text-[#99BFCE]" />
//               </div>
//             </div>
//             <p className="text-[#121212] text-xl font-medium mt-2">
//               Already have an account?
//               <Link to="/SignIn" className="text-[#005F85] pl-1">
//                  Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="signin-img max-[600px]:h-[200px] max-[600px]:flex max-[600px]:items-center max-[600px]:justify-center max-[600px]:pr-16 max-[600px]:w-full max-[600px]:top-0 h-[100%] absolute right-0 bottom-0 custom-bg">
//           <img
//             className="h-full pl-[10%] pt-[10%] pr-0 pb-0 w-full object-contain"
//             src={SignUpBuilding}
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUpPage;













import React from "react";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../images/SigninPage/facebook.png";
import { FiMail, FiEyeOff, FiChevronRight, FiUser } from "react-icons/fi";
import SignUpBuilding from "../../images/SigninPage/SignupBuilding.png";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signin h-screen xl:bg-white flex flex-col xl:flex-row xl:h-screen overflow-hidden justify-between w-full">
      <div className="flex flex-col mt-[220px] xl:mt-0 h-full px-4 xl:pl-32 w-full xl:w-1/2 pt-8 xl:pt-20 gap-3 tablet:h-screen tablet:pt-[-7%] tablet:mt-0 tablet:items-start tablet:justify-center tablet:px-[10%]">
        <h1 className="text-[#121212] text-2xl xl:text-6xl leading-tight font-bold xl:mb-4 tablet:text-5xl">
          Sign Up
        </h1>
        <div className="flex gap-4 items-center flex-col xl:flex-row tablet:w-full">
          <div className="bg-white border justify-center border-[#EDEDED] tablet:text-2xl w-full xl:w-1/2 py-3 tablet:py-4 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold xl:text-lg">
            <FcGoogle className="text-xl xl:text-2xl tablet:text-3xl" />
            Continue with Google
          </div>
          <div className="bg-white border justify-center border-[#EDEDED] tablet:text-2xl w-full xl:w-1/2 py-3 tablet:py-4 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold xl:text-lg">
            <img className="w-5 tablet:w-7 xl:w-6" src={facebook} alt="Facebook" />
            Continue with Facebook
          </div>
        </div>
        <p className="w-full text-center font-bold tablet:my-6 text-[#5C5C5C] text-xl tablet:text-3xl mt-2 xl:my-4">
          or
        </p>
        <div className=" relative flex mt-[-2%] flex-col gap-3 xl:gap-4 tablet:w-full tablet:gap-4 tablet:mb-4">
          <label className="text-[#121212] tablet:text-3xl mb-[-8px] relative" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 tablet:text-2xl rounded-[10px]  border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full"
            type="email"
            placeholder="Enter your email"
          />
          <FiMail className="absolute top-[46px] xl:top-[51px] right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[62px]" />
          <label className="text-[#121212] mb-[-8px] tablet:text-3xl tablet:mt-4" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full tablet:text-2xl"
              type="password"
              placeholder="Enter your password"
            />
            <FiEyeOff className="absolute top-5 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px]" />
          </div>
          <div className="flex items-center tablet:mt-0 justify-center tablet:justify-start gap-2 xl:justify-start ">
            <input
              className=" h-4 w-4 tablet:h-6 tablet:w-6 xl:h-[22px] xl:w-[22px] border-[#F2F2F2]"
              type="checkbox"
            />
            <p className="text-[12px] xl:text-sm tablet:text-xl">
              I've read and agree with the terms of service and privacy policy.
            </p>
          </div>
        </div>
        <div className="flex items-center tablet:py-5 tablet:mt-0 tablet:w-full py-2 px-8 mt-3 xl:mt-6 justify-between bg-[#005F85] xl:px-8 xl:py-4 rounded-xl">
          <p className="text-white text-lg tablet:text-[26px] font-semibold">Sign Up</p>
          <div className="flex">
            <FiChevronRight className="text-2xl tablet:text-3xl text-[#99BFCE]" />
            <FiChevronRight className="text-2xl tablet:text-3xl text-white" />
            <FiChevronRight className="text-2xl tablet:text-3xl text-[#99BFCE]" />
          </div>
        </div>
        <p className="text-[#121212] text-center tablet:text-2xl tablet:mt-0 mt-2 xl:text-xl font-medium xl:mt-4 xl:text-left">
          Already have an account?
          <Link to="/SignIn" className="text-[#005F85] pl-1">
            Sign In
          </Link>
        </p>
      </div>
      <div className="signin-img tablet:hidden absolute h-[230px] pt-4 xl:block xl:h-full overflow-hidden xl:absolute xl:right-0 xl:bottom-0 warm-effect w-full xl:w-1/2 ">
        <img
          className="h-full w-full object-contain xl:absolute xl:bottom-0 xl:right-[-7%] xl:h-[65%] pr-[13%] p-[2%] xl:p-0 xl:mt-[3%]"
          src={SignUpBuilding}
          alt="Sign Up Building"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
