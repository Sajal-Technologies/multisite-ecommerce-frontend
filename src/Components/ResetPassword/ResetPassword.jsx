import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import mailMessage from "../../images/SigninPage/mailmessage.png";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import Loader from "../Loader";
import ResendOTP from "../ResendOTP/ResendOTP";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [otpResendMessage, setOtpResendMessage] = useState(null);
  const { user, resetPassword, isLoading, error, setError } = useAuth();
  const [validation, setValidation] = useState({
    password: false,
    otp: false,
  });

  console.log(verificationCode);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (error && typeof error === "string") setError(null);
      if (otpResendMessage) setOtpResendMessage(null);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [setError, error, otpResendMessage]);

  function handleSubmit() {
    const updatedValidation = {
      password: password === "",
      otp: verificationCode === "",
    };

    setValidation(updatedValidation);

    if (!updatedValidation.password && !updatedValidation.otp) {
      resetPassword(user.email, password, verificationCode, setMessage);
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeVerificationCode = function (e) {
    const value = e.target.value;
    if (value.length <= 6) setVerificationCode(value);
    else setVerificationCode(value.slice(0, 6));
    setValidation({ ...validation, otp: false });
  };

  return (
    <>
      <div className="main h-screen w-full signin flex justify-between overflow-hidden pl-24 py-[4%] mobile:flex-col-reverse mobile:pl-0 mobile:py-0 mobile:m-0 tablet:p-0 tablet:m-0">
        <div className="leftform flex py-2 flex-col w-[36%] gap-10 mobile:w-full mobile:px-4 mobile:gap-4 mobile:pb-[20vh] tablet:w-full tablet:h-screen tablet:px-[10%] tablet:items-start tablet:justify-center">
          <Link to="/SignUp">
            <div className="flex gap-2 items-center font-medium text-[#5C5C5C] mobile:hidden">
              <FiArrowLeft className="text-xl tablet:text-3xl" />
              <span className="text-xl tablet:text-3xl">
                All Sign-In Options
              </span>
            </div>
          </Link>
          <div className="headlabel">
            <h1 className="text-[#121212] text-3xl tablet:text-4xl font-bold mobile:text-2xl">
              Reset your password
            </h1>
            <p className="text-[#5C5C5C] tablet:text-2xl leading-[21px] pt-3 font-medium mobile:font-normal mobile:mt-0 mobile:pt-2">
              We just sent a verification code to your registered email{" "}
              <span className="font-bold">
                {user ? `${user.email}` : "registeredmail@example.net"}
              </span>{" "}
              please check your mail.
            </p>
          </div>
          <div className="inputs relative flex flex-col gap-2">
            <label
              className="text-[#121212] tablet:text-3xl tablet:mb-1 text-lg mobile:text-base"
              htmlFor=""
            >
              New Password
            </label>
            <input
              className="p-4 rounded-[10px] tablet:text-2xl tablet:mb-4 placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => {
                setValidation({ ...validation, password: false });
                setPassword(e.target.value);
                if (typeof error !== "string") setError(null);
              }}
            />
            {!showPassword ? (
              <FiEyeOff
                className="absolute top-14 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FiEye
                className="absolute top-14 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
            {error?.password && (
              <p className="text-red-600 font-bold xl:-mt-1">
                {error.password[0]}
              </p>
            )}
            {validation.password && (
              <p className="text-red-600 font-bold  xl:-mt-1">
                This is requied field*
              </p>
            )}
            <div className="flex relative mt-2 flex-col gap-2">
              <label
                className="text-[#121212] tablet:text-3xl tablet:mb-1 text-lg mobile:text-base"
                htmlFor=""
              >
                Verification Code
              </label>
              <input
                className="p-4 rounded-[10px] tablet:text-2xl placeholder:text-[#B2B2B2] bg-[#FAFEFF]"
                type="number"
                placeholder="Enter Verification Code"
                value={verificationCode}
                onChange={handleChangeVerificationCode}
              />
              {validation.otp && (
                <p className="text-red-600 font-bold  xl:-mt-1">
                  This is requied field*
                </p>
              )}
            </div>
            <p className="text-[#5C5C5C] tablet:text-2xl tablet:mb-1 font-medium mobile:text-sm mobile:font-normal">
              Resetting your password will log you out of any other devices
              still signed into this account.
            </p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`flex w-full mt-[-16px] items-center justify-between tablet:py-5 bg-[#005F85] px-8 py-4 mobile:mt-2 mobile:py-4 rounded-xl ${
              isLoading ? "bg-[#C9C9C9] cursor-not-allowed" : ""
            }`}
          >
            <p
              className={`text-white tablet:text-[26px] text-lg font-semibold mobile:text-base ${
                isLoading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isLoading ? "Please Wait" : "Reset Password"}
            </p>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="flex">
                <FiChevronRight
                  className={`text-2xl tablet:text-3xl text-[#99BFCE] mobile:text-xl`}
                />
                <FiChevronRight
                  className={`text-2xl tablet:text-3xl text-white mobile:text-xl`}
                />
                <FiChevronRight
                  className={`text-2xl tablet:text-3xl text-[#99BFCE] mobile:text-xl `}
                />
              </div>
            )}
          </button>
          {otpResendMessage && (
            <div className="text-green-600 -my-6">{otpResendMessage}</div>
          )}
          {error && typeof error === "string" && (
            <p className="text-red-600 font-bold text-center text-lg -my-6 ">
              {error}
            </p>
          )}

          <div
            className={` -my-6 flex items-center justify-center mobile:absolute mobile:top-[7%] mobile:py-[14px] mobile:px-2 mobile:-translate-x-[50%] mobile:-translate-y-[1%] mobile:left-1/2 mobile:w-[95%] ${
              message ? "" : "hidden"
            }`}
          >
            <p className="text-green-600 tablet:text-2xl tablet:px-6 tablet: font-semibold mobile:text-sm mobile:font-normal">
              Your password has been reset successfully, please to continue.{" "}
              <Link to="/SignIn" className="text-[#005F85] pl-1 text-lg">
                Sign In.
              </Link>
            </p>
          </div>

          <ResendOTP setOtpResendMessage={setOtpResendMessage} />
        </div>
        <div className="rightimg tablet:hidden overflow-hidden mobile:w-full mobile:absolute mobile:h-[25%] mobile:top-[20%] mobile:left-[50%] mobile:-translate-x-1/2 mobile:-translate-y-1/2">
          <div className="mailmsg flex ml-[20%] mt-[10%] items-center justify-end w-fit h-full mobile:ml-0 mobile:mt-0">
            <img
              className="h-[540px] w-full object-cover mobile:object-contain"
              src={mailMessage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
