import Logo from "../images/Brand Logo/LogoName.png";
import { FiChevronRight } from "react-icons/fi";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Footer = () => {
  const { handleLogout, user } = useAuth();
  const TopCategoryNavLinks1 = [
    {
      name: "Electronics",
      link: "/Electronics",
    },
    {
      name: "Beauty & Cosmetics",
      link: "/Beauty & Cosmetics",
    },
    {
      name: "Apparel & Accessories",
      link: "/Apparel & Accessories",
    },
    {
      name: "Shoes",
      link: "/Shoes",
    },
  ];

  const TopCategoryNavLinks2 = [
    {
      name: "Terms & Conditions",
      link: "/Terms & Conditions",
    },
    {
      name: "Privacy Policy",
      link: "/privacypolicy",
    },
  ];

  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center mobile:w-full overflow-x-hidden tablet:w-full">
      <div className="h-full w-[85%] mt-6 mobile:w-full px-4 m-0 tablet:w-full tablet:px-6">
        <div className="flex mobile:flex-col tablet:mt-6 justify-between mobile:mt-8 mt-[2vw]">
          <div className="flex flex-col justify-between w-[25%] mobile:w-full ">
            <div className="">
              <Link to="/">
                <img className="mb-2 h-[2.5rem]" src={Logo} alt="" />
              </Link>
              <p className="text-[#52525B] mobile:w-full mobile:mb-4">
                The Shopping AI is a cutting-edge unified search platform that
                revolutionizes the online shopping experience.
              </p>
            </div>

            <address className="not-italic text-[#52525B] font-semibold">
              <a
                href="mailto:contact@theshoppingai.com"
                className="hover:underline"
              >
                contact@theshoppingai.com
              </a>{" "}
              <br />
              <a href="tel:+91-8138-821123" className="hover:underline">
                +91 8138 821123
              </a>
              <span className="mx-1">/</span>
              <a href="tel:+1-718-344-7421" className="hover:underline">
                +1 (718) 344 7421
              </a>
            </address>
          </div>
          <div className="relative hidden mobile:block">
            <h1 className="uppercase text-[#005F85] font-semibold text-sm mobile:text-lg mt-4">
              Get App
            </h1>
            <div className="mt-4 flex flex-col mobile:flex-row gap-4 w-fit">
              <button className="appstore-button flex w-[150px] items-center justify-end pr-[23px] mobile: py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#fff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <svg
                  className="w-[35px] absolute left-[10%] mobile:left-2"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="fill-white transition-all group-hover:fill-black"
                      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    ></path>
                  </g>
                </svg>
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text leading-none text-[7px] btn-font font-semibold">
                    Coming soon to
                  </span>
                  <span className="bottom-text text-[15px] btn-font font-semibold">
                    App Store
                  </span>
                </span>
              </button>
              <button className="playstore-button flex items-center justify-center py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#ffffff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <BiLogoPlayStore className="text-white text-[35px] transition-all group-hover:text-black" />
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text uppercase leading-none text-[7px] btn-font font-semibold">
                    Coming soon to
                  </span>
                  <span className="bottom-text capitalize text-[15px] btn-font font-semibold">
                    google play
                  </span>
                </span>
              </button>
            </div>
          </div>

          <nav className="mobile:flex mobile:mt-4 mobile:gap-[70px] flex gap-[150px] tablet:gap-[50px]">
            <div className="">
              <h1 className="text-[#005F85] uppercase font-semibold text-lg">
                Top Categories
              </h1>
              <ul className="mt-4 flex flex-col gap-4">
                {TopCategoryNavLinks1.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="flex items-center gap-1 ">
                      <FiChevronRight className="text-[#5C5C5C]" />
                      <p className="text-[#5C5C5C] text-nowrap cursor-pointer">
                        {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h1 className="text-[#005F85] font-semibold uppercase text-lg">
                Help
              </h1>
              <ul className="mt-4 flex flex-col gap-4">
                {TopCategoryNavLinks2.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="flex items-center gap-1">
                      <FiChevronRight className="text-[#5C5C5C]" />
                      <p className="text-[#5C5C5C] text-nowrap cursor-pointer">
                        {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
                <li>
                  {user?.token.access ? (
                    <button
                      className={`flex items-center gap-1 text-[#5C5C5C]`}
                      onClick={handleLogout}
                    >
                      <FiChevronRight className="text-[#5C5C5C]" />
                      Log out
                    </button>
                  ) : (
                    <Link
                      to="/SignIn"
                      className="flex items-center gap-1 text-[#5C5C5C]"
                    >
                      <FiChevronRight className="text-[#5C5C5C]" />
                      Log in
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>

          <div className="relative mobile:hidden">
            <h1 className="uppercase text-[#005F85] font-semibold text-sm">
              Get App
            </h1>
            <div className="mt-4 flex flex-col gap-4">
              <button className="appstore-button flex items-center justify-end pr-[23px] py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all duration-200 @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#fff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <svg
                  className="w-[35px] absolute left-[10%]"
                  viewBox="0 0 24 24"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="fill-white transition-all group-hover:fill-black"
                      d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    ></path>
                  </g>
                </svg>
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text leading-none text-[8px]  btn-font font-semibold">
                    Coming soon to
                  </span>
                  <span className="bottom-text text-[15px] btn-font font-semibold">
                    App Store
                  </span>
                </span>
              </button>
              <button className="playstore-button flex items-center justify-center py-[10px] px-3 border-[2px] border-[#bdbdbd] bg-[#0f0f0f] rounded-2xl gap-[2px] cursor-pointer transition-all duration-200 @apply shadow-[0px_0px_100px_-30px_rgb(255,255,255)] hover:bg-[#ffffff] hover:border-[2px] hover:border-[#8a8a8a] group">
                <BiLogoPlayStore className="text-white text-[35px] transition-all group-hover:text-black" />
                <span className="button-text group-hover:text-black flex flex-col items-start justify-center text-white transition-all duration-300 ">
                  <span className="top-text  leading-none text-[8px] btn-font font-semibold">
                    Coming soon to
                  </span>
                  <span className="bottom-text capitalize text-[15px] btn-font font-semibold">
                    google play
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[45px] bg-[#F2F2F2] mt-8 flex items-center justify-center mobile:justify-between mobile:w-full tablet:w-full tablet:justify-between ">
        <div className="w-[85%] h-full text-[#3D3D3D] text-sm flex items-center justify-center mobile:w-full mobile:justify-between mobile:px-4 tablet:w-full px-6">
          <p className="mobile:text-sm">
            &copy; {new Date().getFullYear()} The Shopping AI, All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
