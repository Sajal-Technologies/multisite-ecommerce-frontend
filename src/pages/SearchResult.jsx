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
import MultiStageLoader from "../Components/MultiStageLoader";

function SearchResult() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const {
    view,
    getSearchProduct,
    searchProducts,
    resetProduct,
    getFilters,
    error,
    setQuery,
    fetchMore,
    setView,
    setFilters,
    selectedFilters,
    filterChange,
    filters,
    clearFilters,
    isLoading: searchLoading,
  } = useSearch();
  const [queries, setURLQuery] = useURL();

  useEffect(() => {
    if (!queries.product_name) return;
    resetProduct();
    getSearchProduct(queries);
    setQuery(queries.product_name);
    setFilters(queries.filter_all?.split(","));
  }, [queries, getSearchProduct, setQuery, setFilters, resetProduct]);

  useEffect(() => {
    getFilters(queries.product_name);
  }, [queries.product_name, getFilters]);

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

  if (error && !searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh]">
        <h1 className="text-gray-400 font-semibold text-2xl">
          {error === "Unable to fetch the Product data:url"
            ? error.replace("url", queries.product_name)
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
      <Breadcrump
        pageItem={queries?.product_name.replace(
          queries.product_name[0],
          queries.product_name[0].toUpperCase()
        )}
      />
      <Sort
        title={queries.product_name}
        setView={setView}
        product={searchProducts}
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
            filterChange={filterChange}
          />
          {view === "grid" && (
            <GridView
              products={searchProducts}
              error={error}
              loading={searchLoading}
              callbackFn={fetchMore}
              params={queries}
            />
          )}
          {view === "list" && (
            <ListView
              products={searchProducts}
              error={error}
              loading={searchLoading}
              callbackFn={fetchMore}
              params={queries}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
