import { useSearchParams } from "react-router-dom";
import ProductList from "../Products/ProductList";
import Pagination from "../Pagination/Pagination";

function ListView({
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

  if (error && !searchLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <h1 className="text-gray-400 font-semibold text-2xl">
          {error === "Unable to fetch the Product data: 'results'"
            ? error.replace("results", searchQuery)
            : error}
        </h1>
      </div>
    );
  }

  return (
    <div className="basis-full">
      {!error && !searchLoading && searchProducts.length === 0 ? (
        <div className="flex items-center flex-col mt-[15rem] w-full h-[100vh]">
          <h1 className="text-gray-400 font-bold text-2xl mb-1">
            Sorry, no result found!
          </h1>
          <p className="text-gray-400 text-lg">
            Please check the spelling or try searching for something else
          </p>
        </div>
      ) : (
        <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex  flex-wrap w-full">
          {searchProducts.map((product, i) => (
            <ProductList key={i} product={product} />
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

export default ListView;
