import { useSearchParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import MultiStageLoader from "../MultiStageLoader";
import Pagination from "../Pagination/Pagination";

function GridView({
  searchProducts,
  error,
  searchLoading,
  handlePageChange,
  handleNext,
  handlePrevious,
  currentPage,
  totalPages,
}) {
  const [queryString] = useSearchParams();
  const searchQuery = queryString.get("q");

  if (searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh]">
        <MultiStageLoader />
      </div>
    );
  }

  if (error && !searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[80vh]">
        <h1 className="text-gray-400 font-semibold text-2xl">
          {error === "Unable to fetch the Product data: 'results'"
            ? error.replace("results", searchQuery)
            : error}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      {!error && !searchLoading && searchProducts.length === 0 ? (
        <div className="flex justify-center mt-[15rem] w-full h-[100vh]">
          <h1 className="text-gray-400 font-bold text-2xl">
            No Products Found :(
          </h1>
        </div>
      ) : (
        <div className=" xl:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mobile:flex-wrap md:justify-evenly xl:justify-start md:px-0 mobile:justify-center md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 tablet:gap-4 lg:gap-6 xl:gap-6 flex md:ml-0 xl:pl-10 flex-wrap w-full">
          {searchProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
      <Pagination
        handlePageChange={handlePageChange}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default GridView;
