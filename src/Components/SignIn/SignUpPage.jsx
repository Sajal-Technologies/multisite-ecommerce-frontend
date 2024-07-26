import { FiMail, FiEyeOff, FiChevronRight, FiEye } from "react-icons/fi";
import SignUpBuilding from "../../images/SigninPage/SignupBuilding.png";
import { Link } from "react-router-dom";
// import GoogleSignIn from "./Components/GoogleSignIn";
// import FacebookSignIn from "./Components/FacebookSignIn";
import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import Loader from "../Loader";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, isLoading, error, setError } = useAuth();
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (error && typeof error === "string") setError(null);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [setError, error]);

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit() {
    const updatedValidation = {
      email: email === "",
      password: password === "",
      terms: isChecked === false,
    };

    setValidation(updatedValidation);

    if (
      !updatedValidation.email &&
      !updatedValidation.password &&
      !updatedValidation.terms
    ) {
      const userName = email.split("@")[0];
      signUp(email, password, userName);
    }
  }

  return (
    <div className="flex signin flex-col relative xl:flex-row h-screen overflow-x-hidden items-center justify-between w-full overflow-hidden">
      <div className="flex flex-col tablet:mt-[-5%] mt-[230px] h-fit tablet:z-20 p-6 md:p-12 xl:px-24 xl:py-12 w-full xl:w-[52%] gap-6 xl:m-0 tablet:h-screen tablet:pt-[15%] tablet:items-start tablet:px-[10%] tablet:justify-center">
        <h1 className="text-[#121212] tablet:text-5xl text-2xl md:text-6xl xl:text-6xl font-bold">
          Sign Up
        </h1>

        {/* <div className="flex gap-4 items-center flex-col xl:flex-row tablet:w-full">
          <GoogleSignIn />
          <FacebookSignIn />
        </div>

        <p className="w-full text-center font-bold text-[#5C5C5C] text-xl tablet:my-2 tablet:w-full tablet:text-3xl">
          or
        </p> */}

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
            value={email}
            onChange={(e) => {
              setValidation((validation) => ({
                ...validation,
                email: false,
              }));
              setEmail(e.target.value);
              if (typeof error !== "string") setError(null);
            }}
          />
          <FiMail className="absolute top-[54px] xl:top-[61px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A] tablet:right-5 tablet:top-[83px] tablet:text-[28px]" />
        </div>
        {validation.email && (
          <p className="text-red-600 font-bold -mt-5 tablet:-mt-10 mobile:-mt-6   xl:pl-2 min-[1279px]:-mt-4">
            This is requied field*
          </p>
        )}

        {error?.email && (
          <p className="text-red-600 font-bold -mt-5 tablet:-mt-10 mobile:-mt-6   xl:pl-2 min-[1279px]:-mt-4">
            {error.email[0]}
          </p>
        )}

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
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setValidation((validation) => ({
                  ...validation,
                  password: false,
                }));
                setPassword(e.target.value);
                if (typeof error !== "string") setError(null);
              }}
            />
            {!showPassword ? (
              <FiEyeOff
                className="absolute top-5 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FiEye
                className="absolute top-5 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
            {validation.password && (
              <p className="text-red-600 font-bold xl:pl-2 lg:mt-1">
                This is requied field*
              </p>
            )}

            {error?.password && (
              <p className="text-red-600 font-bold xl:pl-2 lg:mt-1">
                {error.password[0]}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 tablet:gap-4 tablet:my-4">
          <div className="flex items-center tablet:mt-0 justify-center tablet:justify-start gap-2 xl:justify-start ">
            <input
              className=" h-4 w-4 tablet:h-6 tablet:w-6 xl:h-[22px] xl:w-[22px] border-[#F2F2F2]"
              type="checkbox"
              onChange={(e) => {
                setIsChecked(e.target.checked);
                setValidation((validation) => ({
                  ...validation,
                  terms: !e.target.checked,
                }));
              }}
            />
            <p className="text-[12px] xl:text-sm tablet:text-xl">
              I&apos;ve read and agree with the terms of service and privacy
              policy.
            </p>
          </div>
          {validation.terms && (
            <p className="text-red-600 font-bold xl:text-left text-center tablet:-mt-3 tablet:text-lg mobile:text-sm">
              You must agree to the terms and conditions before proceeding!.
            </p>
          )}
        </div>

        <button
          className={`flex items-center tablet:w-full mt-[-8px] tablet:mt-0 justify-between bg-[#005F85] tablet:py-4 py-2 px-8 xl:py-4 rounded-xl xl:mt-4 ${
            isLoading ? "bg-[#C9C9C9] cursor-not-allowed" : " cursor-pointer"
          }`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <p
            className={`text-white xl:text-lg font-semibold tablet:text-[26px] ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isLoading ? "Please wait" : "Sign Up"}
          </p>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex">
              <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
              <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-white" />
              <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
            </div>
          )}
        </button>

        {error && typeof error === "string" && (
          <p className="text-red-600 font-bold text-center text-base lg:text-lg -mt-3">
            {error}
          </p>
        )}

        <p className="text-[#121212] tablet:text-2xl mt-[-12px] flex justify-center gap-1 xl:text-xl xl:justify-start font-medium xl:mt-0 tablet:w-fit">
          Don&apos;t have an account?
          <Link
            to="/SignIn"
            className="text-[#005F85]"
            onClick={() => setError(null)}
          >
            Sign In
          </Link>
        </p>
      </div>

      <div className="signin-img warm-effect tablet:hidden absolute h-[230px] w-full pt-2 xl:w-1/2 xl:h-full xl:right-[-4%] xl:bottom-[-4%] xl:pt-[2%] xl:pr-0 xl:pl-[2%] tablet:h-[50%] tablet:absolute tablet:right-[-14%] tablet:bottom-[-3%]">
        <img
          className="h-full w-full object-contain xl:object-contain pt-[8%] p-[3%] pr-[8%] tablet:p-0 xl:absolute"
          src={SignUpBuilding}
          alt="SignUpBuilding"
        />
      </div>
    </div>
  );
};

export default SignUpPage;

{
  /* <div className="signin h-screen xl:bg-white flex flex-col xl:flex-row xl:h-screen overflow-hidden items-center justify-between w-full">
  <div className="flex flex-col mt-[220px] xl:mt-0 h-full px-4 xl:px-24 w-full xl:w-1/2 pt-8 xl:pt-12 gap-3 tablet:h-screen tablet:pt-[-7%] tablet:mt-0 tablet:items-start tablet:justify-center tablet:px-[10%]">
    <h1 className="text-[#121212] text-2xl xl:text-6xl leading-tight font-bold xl:mb-4 tablet:text-5xl">
      Sign Up
    </h1>

    <div className=" relative flex mt-[-2%] flex-col gap-3 xl:gap-4 tablet:w-full tablet:gap-4 tablet:mb-4">
      <div>
        <label
          className="text-[#121212] xl:text-lg tablet:text-3xl mb-[-8px] relative"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full tablet:text-2xl"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setValidation((validation) => ({
              ...validation,
              email: false,
            }));
            setEmail(e.target.value);
            if (typeof error !== "string") setError(null);
          }}
        />
        <FiMail className="absolute top-[46px] xl:top-[51px] right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[62px]" />
        {validation.email && (
          <p className="text-red-600 font-bold xl:pl-2 ">
            This is requied field*
          </p>
        )}

        {error?.email && (
          <p className="text-red-600 font-bold xl:pl-2">{error.email[0]}</p>
        )}
      </div>

      <div>
        <label
          className="text-[#121212] mb-[-8px] xl:text-lg tablet:text-3xl tablet:mt-4"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="p-4 rounded-[10px] border border-[#F2F2F2] placeholder:text-[#B2B2B2] bg-[#FAFEFF] w-full tablet:text-2xl"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setValidation((validation) => ({
                ...validation,
                password: false,
              }));
              setPassword(e.target.value);
              if (typeof error !== "string") setError(null);
            }}
          />
          {!showPassword ? (
            <FiEyeOff
              className="absolute top-5 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FiEye
              className="absolute top-5 right-4 text-lg text-[#7A7A7A] tablet:text-[28px] tablet:top-[15px] cursor-pointer"
              onClick={toggleShowPassword}
            />
          )}
        </div>
        {validation.password && (
          <p className="text-red-600 font-bold xl:pl-2 ">
            This is requied field*
          </p>
        )}

        {error?.password && (
          <p className="text-red-600 font-bold xl:pl-2">{error.password[0]}</p>
        )}
      </div>

      <div className="flex items-center tablet:mt-0 justify-center tablet:justify-start gap-2 xl:justify-start ">
        <input
          className=" h-4 w-4 tablet:h-6 tablet:w-6 xl:h-[22px] xl:w-[22px] border-[#F2F2F2]"
          type="checkbox"
          onChange={(e) => {
            setIsChecked(e.target.checked);
            setValidation((validation) => ({
              ...validation,
              terms: !e.target.checked,
            }));
          }}
        />
        <p className="text-[12px] xl:text-sm tablet:text-xl">
          I&apos;ve read and agree with the terms of service and privacy policy.
        </p>
      </div>
      {validation.terms && (
        <p className="text-red-600 font-bold xl:-my-4 ">
          You must agree to the terms and conditions before proceeding!.
        </p>
      )}
    </div>
    <button
      className={`flex items-center tablet:w-full mt-[-8px] tablet:mt-0 justify-between bg-[#005F85] tablet:py-4 py-2 px-8 xl:py-4 rounded-xl xl:mt-4 ${
        isLoading ? "bg-[#C9C9C9] cursor-not-allowed" : " cursor-pointer"
      }`}
      onClick={handleSubmit}
      disabled={isLoading}
    >
      <p
        className={`text-white xl:text-lg font-semibold tablet:text-[26px] ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {isLoading ? "Please wait" : "Sign Up"}
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex">
          <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
          <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-white" />
          <FiChevronRight className="text-xl tablet:text-3xl xl:text-2xl text-[#99BFCE]" />
        </div>
      )}
    </button>

    {true && (
      <p className="text-red-600 font-bold text-center text-base lg:text-lg -mt-2">
        {error} Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    )}

    <p className="text-[#121212] text-center tablet:text-2xl tablet:mt-0 mt-2 xl:text-xl font-medium xl:mt-4 xl:text-left">
      Already have an account?
      <Link
        to="/SignIn"
        className="text-[#005F85] pl-1"
        onClick={() => {
          setError(null);
        }}
      >
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
</div>; */
}
