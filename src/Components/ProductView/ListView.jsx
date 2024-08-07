import ProductList from "../Products/ProductList";
import Pagination from "../Pagination/Pagination";

function ListView({
  products,
  error,
  loading,
  handlePageChange,
  handleNext,
  handlePrevious,
  currentPage,
  totalPages,
}) {
  return (
    <div className="basis-full">
      {!error && !loading && products.length === 0 ? (
        <div className="flex items-center flex-col mt-[15rem] w-full h-[40vh]">
          <h1 className="text-gray-400 font-bold text-2xl mb-1">
            Sorry, no result found!
          </h1>
          <p className="text-gray-400 text-lg">
            Please check the spelling or try searching for something else
          </p>
        </div>
      ) : (
        <>
          <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex  flex-wrap w-full">
            {products.map((product, i) => (
              <ProductList key={i} product={product} />
            ))}
          </div>
          <Pagination
            handlePageChange={handlePageChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}

export default ListView;
