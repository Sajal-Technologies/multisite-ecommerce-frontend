import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrump from "./Breadcrump";
import Sort from "./Sort";
import Filteration from "../Filter/Filteration";
import CatGrid from "./Cat-component-list/CatGrid";
import CatListPage from "./Cat-component-list/CatListPage";
import pageInfo from "../../images/FilterCapsule/page-info.svg";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Categroriespage = () => {
  const [searchParams] = useSearchParams();
  const viewType = searchParams.get("view");

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(!st > lastScrollTop);
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="flex flex-col w-full bg-[#FAFAFA] pt-[60px] mobile:pt-[60px]">
      <div
        className={` hidden mobile:fixed mobile:top-[72%] z-30 mobile:w-full mobile:flex mobile:items-center mobile:justify-center overflow-hidden`}
      >
        <div
          className={`w-[175px] text-white h-9 flex items-center gap-[2px] rounded-full transition-all duration-200 ${
            isVisible ? "opacity-1" : " opacity-0"
          }`}
        >
          <div className="h-full w-1/2 flex items-center gap-2 justify-center bg-[#005F85] rounded-s-full">
            <img src={pageInfo} alt="" />
            <p className="text-lg">Filter</p>
          </div>
          <div className="h-full w-1/2 flex items-center gap-2 justify-center bg-[#005F85] rounded-e-full">
            <SwapVertIcon />
            <p className="text-lg">Sort</p>
          </div>
        </div>
      </div>
      <Breadcrump />
      <Sort />
      <div className="flex w-full items-center justify-center">
        <div className="flex xl:w-[85%] md:w-full mt-4 md:mt-0 xl:gap-0 md:gap-4 mobile:w-full px-4 xl:px-0 xl:justify-between py-4">
          <Filteration />
          {viewType === "list" && <CatListPage />}
          {viewType === "grid" && <CatGrid />}
        </div>
      </div>
    </div>
  );
};

export default Categroriespage;
