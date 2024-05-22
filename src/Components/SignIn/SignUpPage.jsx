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
    <div className="signin h-screen lg:bg-white flex flex-col lg:flex-row lg:h-screen overflow-hidden justify-between w-full">
      <div className="flex flex-col mt-[220px] lg:mt-0 h-full px-4 lg:pl-32 w-full lg:w-1/2 pt-8 lg:pt-20 gap-3">
        <h1 className="text-[#121212] text-2xl lg:text-6xl leading-tight font-bold lg:mb-4">
          Sign Up
        </h1>
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="bg-white border justify-center border-[#EDEDED] w-full lg:w-1/2 py-3 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold lg:text-lg">
            <FcGoogle className="text-xl lg:text-2xl" />
            Continue with Google
          </div>
          <div className="bg-white border justify-center border-[#EDEDED] w-full lg:w-1/2 py-3 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold lg:text-lg">
            <img className="w-5 lg:w-6" src={facebook} alt="Facebook" />
            Continue with Facebook
          </div>
        </div>
        <p className="w-full text-center font-bold text-[#5C5C5C] text-xl mt-2 lg:my-4">
          or
        </p>
        {/* <div className="relative flex flex-col gap-2 mt-4">
          <label className="text-[#121212] text-lg" htmlFor="name">
            Name
          </label>
          <div className="relative">
            <input
              className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full"
              type="text"
              placeholder="Enter your name"
            />
            <FiUser className="absolute top-4 right-4 text-lg text-[#7A7A7A]" />
          </div>
          
          
        </div> */}
        {/* <div className="relative mt-[-8px]">
        
          </div> */}
        <div className=" relative flex mt-[-2%] flex-col gap-3 lg:gap-4">
          <label className="text-[#121212] mb-[-8px] relative" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 rounded-[10px]  border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full"
            type="email"
            placeholder="Enter your email"
          />
          <FiMail className="absolute top-[46px] lg:top-[51px] right-4 text-lg text-[#7A7A7A]" />
          <label className="text-[#121212] mb-[-8px]" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full"
              type="password"
              placeholder="Enter your password"
            />
            <FiEyeOff className="absolute top-5 right-4 text-lg text-[#7A7A7A]" />
          </div>
          <div className="flex items-center justify-center gap-2 lg:justify-start ">
            <input
              className=" h-4 w-4 lg:h-[22px] lg:w-[22px] border-[#F2F2F2]"
              type="checkbox"
            />
            <p className="text-[12px] lg:text-sm">
              I've read and agree with the terms of service and privacy policy.
            </p>
          </div>
        </div>
        <div className="flex items-center py-2 px-8 mt-3 lg:mt-6 justify-between bg-[#005F85] lg:px-8 lg:py-4 rounded-xl">
          <p className="text-white text-lg font-semibold">Sign Up</p>
          <div className="flex">
            <FiChevronRight className="text-2xl text-[#99BFCE]" />
            <FiChevronRight className="text-2xl text-white" />
            <FiChevronRight className="text-2xl text-[#99BFCE]" />
          </div>
        </div>
        <p className="text-[#121212] text-center mt-2 lg:text-xl font-medium lg:mt-4 lg:text-left">
          Already have an account?
          <Link to="/SignIn" className="text-[#005F85] pl-1">
            Sign In
          </Link>
        </p>
      </div>
      <div className="signin-img absolute h-[230px] pt-4 lg:block lg:h-full overflow-hidden lg:absolute lg:right-0 lg:bottom-0 warm-effect w-full lg:w-1/2 ">
        <img
          className="h-full w-full object-contain pr-[13%] p-[2%] lg:p-0 lg:mt-[3%]"
          src={SignUpBuilding}
          alt="Sign Up Building"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
