import Breadcrump from "../Components/Cat-components/Breadcrump";
import Sort from "../Components/Cat-components/Sort";
import Filteration from "../Components/Filter/Filteration";
import ListView from "../Components/ProductView/ListView";
import GridView from "../Components/ProductView/GridView";
import { useEffect, useState } from "react";
import pageInfo from "../images/FilterCapsule/page-info.svg";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useSearch } from "../Contexts/SearchContext";
import useURL from "../hooks/useURL";
import { useLocation } from "react-router-dom";
import MultiStageLoader from "../Components/MultiStageLoader";

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
    setQuery,
    setFilters,
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
    setQuery(queries.product_name);
    setFilters(queries.filters_all);
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

  if (error && !searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh]">
        <h1 className="text-gray-400 font-semibold text-2xl">
          {error === "Unable to fetch the Product data: 'results'"
            ? error.replace("results", queries.product_name)
            : error}
        </h1>
      </div>
    );
  }

  if (searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <MultiStageLoader />
      </div>
    );
  }

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
      <div className=" w-full my-4  ">
        <div className="grid mobile:grid-cols-1 grid-cols-[280px_1fr] xl:w-[85%] mx-auto gap-4">
          <Filteration />
          {view === "grid" && (
            <GridView
              products={searchProducts}
              error={error}
              loading={searchLoading}
              handlePrevious={handlePrevious}
              currentPage={currentPage}
              handleNext={handleNext}
              handlePageChange={handlePageChange}
              totalPages={totalPages}
            />
          )}
          {view === "list" && (
            <ListView
              products={searchProducts}
              error={error}
              loading={searchLoading}
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
