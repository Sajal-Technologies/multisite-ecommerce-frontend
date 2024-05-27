import React from "react";
import Apple from "../images/MainPage/Headerlogos/Apple.svg";
import Logo from "../images/MainPage/Headerlogos/Logo.svg";
import FlashDeals from "../images/MainPage/Headerlogos/FlashDeals.gif";
import { FiGlobe } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import Seperator from "./Seperator";
import { Link } from "react-router-dom";

const Topheader = ({ toggleCartPopup }) => {
  return (
    <nav className="">
      <div className="upper flex bg-[#F3F9FB] text-[#262626] text-sm text-right items-center justify-between py-3 px-12 max-[600px]:hidden ">
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
            <div className="">
              <Link to="/SignUp">Sign Up/</Link>
              <Link to="/SignIn">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-search px-12 py-2 flex justify-between items-center border-[1px] bg-[#FCFCFC] max-[600px]:gap-0 max-[600px]:justify-start max-[600px]:items-center max-[600px]:px-4 max-[600px]:py-3 max-[600px]:flex-row max-[600px]:w-screen">
        <div className="max-[600px]:h-6 max-[600px]:w-6 max-[600px]:flex max-[600px]:flex-col max-[600px]:gap-1 hidden max-[600px]:px-0 max-[600px]:justify-center">
          <div className="max-[600px]:h-[2.5px] max-[600px]:bg-[#005F85] max-[600px]:w-[18px] max-[600px]:rounded-lg"></div>
          <div className="max-[600px]:h-[2.5px] max-[600px]:bg-[#005F85] max-[600px]:w-[18px] max-[600px]:rounded-lg"></div>
          <div className="max-[600px]:h-[2.5px] max-[600px]:bg-[#005F85] max-[600px]:w-[18px] max-[600px]:rounded-lg"></div>
        </div>
        <img className="max-[600px]:h-11 max-[600px]:px-4 lg:hidden" src={Logo} alt="" />
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <div className="right flex items-center gap-14 pl-[100px]">
          <div className="search flex items-center relative max-[600px]:left-[-26%]">
            <FiSearch className="left-3 absolute text-[#5C5C5C] text-xl max-[600px]:left-[-25px]" />
            <input
              className="bg-[#FAFAFA] border-[1px] border-[#DEDEDE] p-4 pl-10 w-[40vw] max-[600px]:ml-[-35px] rounded-lg max-[600px]:px-2 max-[600px]:py-[10px] max-[600px]:pl-10 max-[600px]:w-[220px] max-[600px]:placeholder:text-xs"
              type="text"
              placeholder="Search essentials, groceries and more..."
              name=""
              id=""
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2 max-[600px]:gap-0 max-[600px]:absolute max-[600px]:right-0 max-[600px]:px-4 ">
              <FiShoppingCart className="text-[#00A8EB] text-2xl max-[600px]:text-[#005F85]" />
              <Link className="text-2xl max-[600px]:hidden" to="/Cart">
                Cart
              </Link>
            </div>
            <div className="max-[600px]:hidden">
            <Seperator/>
            </div>
            <div className="flex items-center gap-2 max-[600px]:hidden">
              <img className="w-14 h-6" src={FlashDeals} alt="" />
              <a onClick={toggleCartPopup} className="text-2xl" href="">
                Flash Deals
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mega-menu max-[600px]:hidden py-4 px-12 flex items-center justify-center gap-2 bg-[#FCFCFC] border-b-[1px] border-[#F2F2F2]">
        {[
          "All",
          "Home Appliances",
          "Groceries",
          "Gaming Gears",
          "Electronics",
          "Accessories",
          "Fashion",
          "Beauty & Cosmetics",
        ].map((item, index) => (
          <Link
            key={index}
            className={`mx-2 flex items-center whitespace-nowrap gap-2 text-lg text-[#005F85] font-[500] bg-[#F3F9FB] px-[19px] py-3 rounded-full transition duration-200 
            ${
              index === 0
                ? "bg-[#17617f] text-white"
                : "hover:bg-[#005F85] hover:text-white"
            }`}
            style={{ backgroundColor: index === 0 ? "#17617f" : "" }}
            to="/Categories"
          >
            {item} <FiChevronDown />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Topheader;
