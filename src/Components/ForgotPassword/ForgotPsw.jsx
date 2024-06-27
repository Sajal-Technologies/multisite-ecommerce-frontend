import { FiArrowLeft } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png";
import { Link } from "react-router-dom";

const ForgotPsw = () => {
  return (
    <>
      <div className="main h-screen w-full signin flex pl-[8%] mobile:items-center justify-between mobile:h-screen mobile:w-full mobile:m-0 py-[5%] mobile:py-0 mobile:px-4 mobile:flex mobile:justify-center mobile:flex-col-reverse tablet:m-0 tablet:p-0">
        <div className="leftform flex py-8 mobile:m-0 mobile:w-full flex-col w-[50%] gap-10 mobile:gap-4 mobile:mt-[-12vh] tablet:w-full tablet:h-screen tablet:px-[10%] tablet:justify-center tablet:items-start">
          <Link to="/Signin">
            <div className="flex gap-2 mobile:hidden items-center font-medium text-[#5C5C5C]">
              <FiArrowLeft className="text-xl tablet:text-3xl" />
              <span className="text-xl tablet:text-3xl">
                All Sign-In Options
              </span>
            </div>
          </Link>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl tablet:text-3xl font-bold mobile:text-2xl">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] leading-[21px] tablet:text-2xl pt-3 font-medium ">
              Don&apos;t worry, it happens to the best of us, We will send an
              OTP via your registered email.
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2 tablet:w-full">
            <label
              className="text-[#121212] tablet:text-3xl mobile:text-[16px] text-lg"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="p-4 rounded-[10px] tablet:w-full tablet:text-2xl placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type="email"
              placeholder="Enter your mail"
            />
            <FiMail className=" absolute top-[60%] text-lg right-0 mx-4 text-[#7A7A7A] tablet:text-3xl tablet:absolute tablet:top-[55%]" />
          </div>
          <Link
            to="/OTPVerification"
            className="flex w-full items-center tablet:py-5 justify-between bg-[#005F85] px-8 py-4 rounded-xl mobile:py-3"
          >
            <Link
              to="/OTPVerification"
              className="text-white text-lg tablet:text-2xl font-semibold mobile:text-base"
            >
              Send OTP Code
            </Link>
            <div className="flex">
              <FiChevronRight className="text-2xl tablet:text-3xl text-[#99BFCE]" />
              <FiChevronRight className="text-2xl tablet:text-3xl text-white" />
              <FiChevronRight className="text-2xl tablet:text-3xl text-[#99BFCE]" />
            </div>
          </Link>
        </div>
        <div className="rightimg tablet:hidden w-full pt-[15%] h-[50%] mobile:absolute mobile:h-[25%] mobile:top-[12%] mobile:left-[60%] mobile:-translate-x-1/2 mobile:-translate-y-1/2">
          <div className="mailmsg flex ml-[20%] mobile:ml-0 mobile:mt-0 mt-[10%] items-center justify-end w-fit h-full">
            <img
              className="h-[480px] w-full object-cover mobile:h-[180px]"
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
