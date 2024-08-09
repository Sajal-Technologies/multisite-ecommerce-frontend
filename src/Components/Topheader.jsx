import { useEffect, useState } from "react";
import Apple from "../images/MainPage/Headerlogos/Apple.svg";
import Logo from "../images/MainPage/Headerlogos/Logo.svg";
import FlashDeals from "../images/MainPage/Headerlogos/FlashDeals.gif";
import { FiGlobe } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Seperator from "./Seperator";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useSearch } from "../Contexts/SearchContext";

const Topheader = ({ toggleCartPopup }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { user } = useAuth();
  const { setQuery, clearFilters } = useSearch();
  const navigate = useNavigate();

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("search").trim();
    setQuery(query);

    if (query === "") return;
    clearFilters();
    navigate(`/Search?q=${query}`);
  };

  return (
    <nav
      className={`transition-transform mobile:h-[72px] duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="upper flex bg-[#F3F9FB] text-[#262626] text-sm px-2 text-right items-center justify-between py-1 md:px-4  xl:px-12 mobile:hidden">
        <div className="left flex text-center items-center gap-2 ">
          <p>Welcome to worldwide Chak De</p>
          <img src={Apple} alt="" />
        </div>
        <div className="right flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FiGlobe className="text-lg" />
            <p>Language</p>
          </div>
          <div className="signin flex items-center gap-2">
            <FiUser className="text-lg" />
            {user && user?.["user name"] ? (
              <p>{user?.["user name"]}</p>
            ) : (
              <div className="">
                <Link to="/SignUp">Sign Up/</Link>
                <Link to="/SignIn">Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="logo-search md:w-full md:px-4 md:ml-0 xl:ml-0 md:border-none px-2 xl:px-12 py-0 flex justify-between items-center border-[1px] bg-[#FCFCFC] mobile:gap-0 mobile:justify-start mobile:items-center mobile:px-4 mobile:py-3 mobile:flex-row mobile:w-screen">
        <div className="mobile:h-6 mobile:w-6 mobile:flex mobile:flex-col mobile:gap-1 hidden mobile:px-0 mobile:justify-center">
          <div className="mobile:h-[2.5px] mobile:bg-[#005F85] mobile:w-[18px] mobile:rounded-lg"></div>
          <div className="mobile:h-[2.5px] mobile:bg-[#005F85] mobile:w-[18px] mobile:rounded-lg"></div>
          <div className="mobile:h-[2.5px] mobile:bg-[#005F85] mobile:w-[18px] mobile:rounded-lg"></div>
        </div>
        <img
          className="mobile:h-11 md:hidden mobile:px-4 lg:hidden "
          src={Logo}
          alt=""
        />
        <Link to="/">
          <div className="logo hidden md:block xl:flex xl:items-center pl-5">
            <img
              className="md:h-full md:w-full md:object-cover h-[30%] py-1"
              src={Logo}
              alt=""
            />
          </div>
        </Link>
        <div className="right flex items-center gap-14 pl-[100px] mobile:pl-[30px] md:ml-[-250px]">
          <form
            className="search flex items-center relative"
            onSubmit={handleSearchSubmit}
          >
            <FiSearch className="left-3 absolute text-[#5C5C5C] text-xl mobile:left-[-25px]" />
            <input
              className="bg-[#FAFAFA] border-[1px] border-[#DEDEDE] px-4 py-2 pl-10 md:w-[40vw]  xl:w-[45vw] mobile:ml-[-35px] rounded-lg mobile:px-2 mobile:py-[10px] mobile:pl-10 mobile:w-[220px] mobile:placeholder:text-xs"
              type="text"
              placeholder="Search essentials, groceries and more..."
              name="search"
            />
          </form>
          <div className="flex items-center">
            <div className="flex items-center gap-2 mobile:gap-0 mobile:absolute mobile:right-0 mobile:px-4 ">
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
                <FiShoppingCart className="text-[#00A8EB] text-2xl mobile:text-[#005F85]" />{" "}
              </Link>
              <Link className="xl:text-2xl mobile:hidden md:text-xl" to="/Cart">
                Cart
              </Link>
            </div>
            <div className="mobile:hidden">
              <Seperator />
            </div>
            <div className="flex items-center gap-2 mobile:hidden">
              <img className="w-14 h-6" src={FlashDeals} alt="" />
              <a
                onClick={toggleCartPopup}
                className="xl:text-2xl xl:pr-0 md:text-nowrap md:text-xl"
                href=""
              >
                Flash Deals
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topheader;
