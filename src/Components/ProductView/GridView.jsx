import ProductCard from "../Products/ProductCard";
import Pagination from "../Pagination/Pagination";

function GridView({
  products,
  error,
  loading,
  currentPage,
  totalPages,
  fetchCallback,
}) {
  return (
    <div className="w-full mobile:mt-4 flex flex-col justify-between">
      {!error && !loading && products?.length === 0 ? (
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
          <div className=" xl:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mobile:flex-wrap md:justify-evenly xl:justify-start md:px-0 mobile:justify-center md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 tablet:gap-4 lg:gap-6 xl:gap-6 flex md:ml-0  flex-wrap w-full">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        fetchCallback={fetchCallback}
      />
    </div>
  );
}

export default GridView;
