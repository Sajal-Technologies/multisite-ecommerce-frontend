import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import Loader from "../Loader";
import { GoMoveToTop } from "react-icons/go";

function GridView({ products, error, loading, params, callbackFn }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnToTopVisible, setIsBtnToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = async () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY || window.pageYOffset;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollTop > 2000) {
        setIsBtnToTopVisible(true);
      } else {
        setIsBtnToTopVisible(false);
      }

      if (scrollPercentage >= 50 && !isLoading) {
        setIsLoading(true);

        await callbackFn({
          ...params,
          page_number: params.page_number + 1,
        });

        setIsLoading(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callbackFn, params, isLoading]);

  return (
    <div className=" w-full mobile:mt-4 flex flex-col justify-between">
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
          {isBtnToTopVisible && (
            <button
              className="flex justify-center items-center p-2  bg-[#005F85] border-[1px] rounded-full fixed bottom-10 right-10"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <GoMoveToTop className="text-2xl text-white" />
            </button>
          )}
          <div className="listing_products xl:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mobile:flex-wrap md:justify-evenly xl:justify-start md:px-0 mobile:justify-center md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 tablet:gap-4 lg:gap-6 xl:gap-6 flex md:ml-0  flex-wrap w-full mb-4">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          {isLoading && <Loader />}
        </>
      )}
    </div>
  );
}

export default GridView;
