import { useAuth } from "../../Contexts/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEyeOff, FiEye, FiChevronRight, FiMail } from "react-icons/fi";
import GoogleSignIn from "./Components/GoogleSignIn";
import FacebookSignIn from "./Components/FacebookSignIn";
import LoginBuilding from "../../images/SigninPage/LoginBuilding.png";
import Loader from "../Loader";
import { useProduct } from "../../Contexts/ProductContext";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const { login, isLoading, error, setError } = useAuth();
  const { error: searchError, setSearchError } = useProduct();

  // Clear error after 5 seconds
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (error && typeof error === "string") setError(null);
      if (searchError) setSearchError(null);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [setError, error, searchError, setSearchError]);

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit() {
    const updatedValidation = {
      email: email === "",
      password: password === "",
    };

    setValidation(updatedValidation);

    if (!updatedValidation.email && !updatedValidation.password) {
      login(email, password, rememberMe);
    }
  }

  return (
    <div className="flex signin flex-col relative xl:flex-row h-screen overflow-x-hidden justify-between w-full overflow-hidden">
      <div className="flex flex-col tablet:mt-[-5%] mt-[230px] h-fit tablet:z-20 p-6 md:p-12 xl:px-24 xl:py-12 w-full xl:w-[52%] gap-6 xl:m-0 tablet:h-screen tablet:pt-[15%] tablet:items-start tablet:px-[10%] tablet:justify-center">
        {searchError && (
          <p className="text-red-600 font-bold text-xl text-center">
            {searchError}
          </p>
        )}
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
            value={email}
            onChange={(e) => {
              setValidation((validation) => ({ ...validation, email: false }));
              setEmail(e.target.value);
              if (typeof error !== "string") setError(null);
            }}
            placeholder="Enter your email"
          />
          <FiMail className="absolute top-[54px] xl:top-[61px] right-4 transform -translate-y-1/2 text-lg text-[#7A7A7A] tablet:right-5 tablet:top-[83px] tablet:text-[28px]" />
        </div>
        {validation.email && (
          <p className="text-red-600 font-bold xl:pl-2 xl:-mt-4">
            This is requied field*
          </p>
        )}

        {error?.email && (
          <p className="text-red-600 font-bold xl:pl-2 xl:-mt-4">
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
                if (typeof error !== "string") setError(null);
                setValidation((validation) => ({
                  ...validation,
                  password: false,
                }));
                setPassword(e.target.value);
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
              <p className="text-red-600 font-bold xl:pl-2 xl:mt-2">
                This is requied field*
              </p>
            )}

            {error?.password && (
              <p className="text-red-600 font-bold xl:pl-2 xl:mt-2">
                {error.password[0]}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-[-18px] tablet:mb-4 tablet:mt-[-10px] xl:m-0 tablet:w-full">
          <div className="flex items-center justify-center text-xs gap-2">
            <input
              className="h-4 w-4 tablet:h-6 tablet:w-6 border-[#F2F2F2] xl:h-[22px] xl:w-[22px]"
              type="checkbox"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="xl:text-sm tablet:text-xl">Remember me</label>
          </div>
          <Link
            to="/ForgotPassword"
            className="text-[#3D3D3D] text-xs border-b border-[#3D3D3D] xl:text-sm tablet:text-xl"
          >
            Forgot Password?
          </Link>
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
            {isLoading ? "Please wait" : "Sign In"}
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
          <p className="text-red-600 font-bold text-center text-lg -mt-3">
            {error}
          </p>
        )}

        <p className="text-[#121212] tablet:text-2xl mt-[-12px] flex justify-center gap-1 xl:text-xl xl:justify-start font-medium xl:mt-0 tablet:w-fit">
          Don&apos;t have an account?
          <Link
            to="/SignUp"
            className="text-[#005F85]"
            onClick={() => setError(null)}
          >
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
