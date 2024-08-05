import Breadcrump from "../Components/Cat-components/Breadcrump";
import Sort from "../Components/Cat-components/Sort";
import Filteration from "../Components/Cat-components/Filteration";
import ListView from "../Components/ProductView/ListView";
import GridView from "../Components/ProductView/GridView";
import { useEffect, useState } from "react";
import pageInfo from "../images/FilterCapsule/page-info.svg";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useSearch } from "../Contexts/SearchContext";
import useURL from "../hooks/useURL";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState(7);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const {
    view,
    query,
    getSearchProduct,
    searchProducts,
    error,
    isLoading: searchLoading,
  } = useSearch();
  const [queries, setURLQuery] = useURL();
  const location = useLocation();

  useEffect(() => {
    const page = parseInt(new URLSearchParams(location.search).get("page"));
    setCurrentPage(page || 1);
  }, [location.search]);

  useEffect(() => {
    if (query || !queries.product_name) return;
    getSearchProduct(queries);
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

  useEffect(() => {
    if (
      currentPage > 1 &&
      currentPage < totalPages &&
      searchProducts.length === 0
    ) {
      setTotalPages(currentPage);
    }

    if (currentPage === totalPages && searchProducts.length > 0) {
      setTotalPages(totalPages + 1);
    }
  }, [currentPage, totalPages, searchProducts]);

  const handlePageChange = (pageNumber) => {
    const newParams = new URLSearchParams(location.search);
    newParams.has("page")
      ? newParams.set("page", pageNumber)
      : newParams.append("page", pageNumber);

    setURLQuery(newParams);
    getSearchProduct({ ...queries, page_number: pageNumber });
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#FAFAFA] pt-[60px] mobile:pt-[70px]">
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
      <div className="flex w-full items-center justify-start ">
        <div className="flex xl:w-[85%] mx-auto md:w-full mt-4 md:mt-0 xl:gap-0 tablet:gap-4 md:gap-4 mobile:w-full px-4 xl:px-0 xl:justify-between tablet:justify-between py-4">
          <Filteration />
          {view === "grid" && (
            <GridView
              searchProducts={searchProducts}
              error={error}
              searchLoading={searchLoading}
              handlePrevious={handlePrevious}
              currentPage={currentPage}
              handleNext={handleNext}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
            />
          )}
          {view === "list" && (
            <ListView
              searchProducts={searchProducts}
              error={error}
              searchLoading={searchLoading}
              handlePrevious={handlePrevious}
              currentPage={currentPage}
              handleNext={handleNext}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
