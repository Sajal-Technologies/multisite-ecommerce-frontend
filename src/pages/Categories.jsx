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
import usePagination from "../hooks/usePagination";

function Categories() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { currentPage, setCurrentPage, updatePagination, totalPages } =
    usePagination();
  const {
    view,
    getCategoryProduct,
    categoryProducts,
    getFilters,
    error,
    filters,
    selectedFilters,
    setFilters,
    clearFilters,
    setView,
    isLoading: CategoryLoading,
  } = useSearch();
  const [queries, setURLQuery] = useURL();
  const location = useLocation();

  useEffect(() => {
    const page = parseInt(new URLSearchParams(location.search).get("page"));
    setCurrentPage(page || 1);
  }, [location.search, setCurrentPage]);

  useEffect(() => {
    if (!queries.product_name) return;
    getCategoryProduct(queries);
    setFilters(queries.filters_all?.split(","));
  }, [queries, getCategoryProduct]);

  useEffect(() => {
    getFilters(queries.product_name);
  }, [queries.product_name, getFilters]);

  useEffect(() => {
    clearFilters();
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
    updatePagination(currentPage, totalPages, categoryProducts.length);
  }, [updatePagination, categoryProducts.length, currentPage, totalPages]);

  if (error && !CategoryLoading) {
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

  if (CategoryLoading) {
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
      <Sort
        setView={setView}
        product={getCategoryProduct}
        setURLQuery={setURLQuery}
      />
      <div className=" w-full my-4  ">
        <div className="grid mobile:grid-cols-1 grid-cols-[280px_1fr] xl:w-[85%] mx-auto gap-4">
          <Filteration
            filters={filters}
            selectedFilters={selectedFilters}
            clearFilters={clearFilters}
            getFilters={getFilters}
            queries={queries}
            setURLQuery={setURLQuery}
          />
          {view === "grid" && (
            <GridView
              products={categoryProducts}
              error={error}
              loading={CategoryLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              fetchCallback={getCategoryProduct}
            />
          )}
          {view === "list" && (
            <ListView
              products={categoryProducts}
              error={error}
              loading={CategoryLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              fetchCallback={getCategoryProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
