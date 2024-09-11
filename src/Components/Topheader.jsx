import { useEffect, useState } from "react";
import Logo from "../images/Brand Logo/LogoName.png";
import Favicon from "../images/Brand Logo/favicon.png";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Seperator from "./Seperator";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

import { CiLogout } from "react-icons/ci";
import SearchBar from "./SearchBar/SearchBar";

const Topheader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { user, handleLogout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    function loadGoogleTranslate() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateElementInit =
        function googleTranslateElementInit() {
          /* global google */
          new google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: true,
              multilanguagePage: true,
              includedLanguages:
                "en,hi,as,bn,gu,kn,kok,ml,mr,ne,or,pa,sa,ta,te,ur",
            },
            "google_translate_element"
          );
        };
    }
    loadGoogleTranslate();

    return () => {
      const script = document.querySelector(
        "script[src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']"
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <header
      className={`transition-transform bg-[#FCFCFC] mobile:h-[72px] duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="upper flex bg-[#F3F9FB] text-[#262626] text-sm px-2 text-right items-center justify-between mobile:block py-1  xl:px-12 ">
        <div className="left flex text-center items-center gap-2  mobile:hidden">
          <p>Welcome to The Shopping AI</p>
        </div>
        <div className="right flex items-center gap-4 mobile:justify-between ">
          <div className="language has-n-select d-inline-block">
            <div
              id="google_translate_element"
              style={{
                display: "flex",
                height: "30px",
                overflow: "hidden",
              }}
            ></div>
          </div>

          <div className="signin flex items-center gap-2">
            <FiUser className="text-lg" />
            {user && user?.["user name"] ? (
              <>
                <p>{user?.["user name"]}</p>
                <button onClick={handleLogout}>
                  <CiLogout className="text-lg text-black" />
                </button>
              </>
            ) : (
              <div className="">
                <Link to="/SignUp">Sign Up/</Link>
                <Link to="/SignIn">Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-[#FCFCFC] items-center gap-2 py-1 px-2 xl:w-[85%]  mx-auto">
        <Link to="/" className=" mobile:hidden block">
          <div className="logo">
            <img
              className="h-[3.2rem] flex-shrink-0 object-contain"
              src={Logo}
              alt="Brand Logo"
            />
          </div>
        </Link>
        <Link to="/" className=" hidden mobile:block">
          <div className="logo">
            <img
              className="h-[3.2rem] flex-shrink-0 object-contain"
              src={Favicon}
              alt="Brand Logo"
            />
          </div>
        </Link>
        <SearchBar isVisible={isVisible} />
        <div className="flex justify-center items-center">
          <Link
            to={"/SaveForLater"}
            className="flex items-center justify-center mobile:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#00A8EB"
              className={`w-7 h-7 `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </Link>
          <div className="mobile:hidden">
            <Seperator />
          </div>
          <Link to="/Cart">
            <FiShoppingCart className="text-[#00A8EB] text-2xl mr-2" />
          </Link>
          <Link className="lg:text-2xl mobile:hidden tablet:text-xl" to="/Cart">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topheader;
