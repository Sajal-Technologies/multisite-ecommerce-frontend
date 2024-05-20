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
    <nav>
      <div className="upper flex bg-[#F3F9FB] text-[#262626] text-sm text-right items-center justify-between py-3 px-12">
        <div className="left flex text-center items-center gap-2">
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
      <div className="logo-search px-12 py-2 flex justify-between items-center border-[1px] bg-[#FCFCFC]">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <div className="right flex items-center gap-14">
          <div className="search flex items-center relative">
            <FiSearch className="left-3 absolute text-[#5C5C5C] text-[20px]" />
            <input
              className="bg-[#FAFAFA] border-[1px] border-[#DEDEDE] p-4 pl-10 w-[40vw] rounded-lg"
              type="text"
              placeholder="Search essentials, groceries and more..."
              name=""
              id=""
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <FiShoppingCart className="text-[#00A8EB] text-2xl" />
              <Link className="text-2xl" to="/Cart">
                Cart
              </Link>
            </div>
            <Seperator />
            <div className="flex items-center gap-2">
              <img className="w-14 h-6" src={FlashDeals} alt="" />
              <a onClick={toggleCartPopup} className="text-2xl" href="">
                Flash Deals
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mega-menu py-4 px-12 flex items-center justify-center gap-2 bg-[#FCFCFC] border-b-[1px] border-[#F2F2F2]">
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
