import Breadcrump from "../Components/Cat-components/Breadcrump";
import Sort from "../Components/Cat-components/Sort";
import Filteration from "../Components/Cat-components/Filteration";
import ListView from "../Components/ProductView/ListView";
import GridView from "../Components/ProductView/GridView";
import { useProduct } from "../Contexts/ProductContext";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import pageInfo from "../images/FilterCapsule/page-info.svg";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Loader from "../Components/Loader";

function SearchResult() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const {
    view,
    bodyData,
    getSearchProduct,
    searchProducts,
    error,
    isLoading: searchLoading,
  } = useProduct();
  const [searchQuery] = useSearchParams();
  const query = searchQuery.get("q");

  console.log(bodyData);

  useEffect(() => {
    if (bodyData !== null) return;
    if (!query) return;
    getSearchProduct({ product_name: query });
  }, []);

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
    <div className="flex flex-col w-full bg-[#FAFAFA] pt-[200px] mobile:pt-[70px]">
      {searchLoading && (
        <div className=" w-screen h-screen fixed top-0 right-0 left-0 z-30 grid place-items-center bg-[rgba(0,0,0,0.1)]">
          <Loader type="lg" />
        </div>
      )}
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
      <div className="flex w-full items-center justify-center ">
        <div className="flex xl:w-[85%] md:w-full mt-4 md:mt-0 xl:gap-0 md:gap-4 mobile:w-full px-4 xl:px-0 xl:justify-between py-4">
          <Filteration />
          {view === "grid" && (
            <GridView
              searchProducts={searchProducts}
              error={error}
              searchLoading={searchLoading}
            />
          )}
          {view === "list" && (
            <ListView
              searchProducts={searchProducts}
              error={error}
              searchLoading={searchLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
