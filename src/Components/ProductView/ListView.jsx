import { useEffect, useState } from "react";
import ProductList from "../Products/ProductList";
import Loader from "../Loader";
import { GoMoveToTop } from "react-icons/go";

function ListView({ products, error, loading, params, callbackFn }) {
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
  }, [callbackFn, params]);

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
          <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex mb-4  flex-wrap w-full">
            {products.map((product, i) => (
              <ProductList key={i} product={product} />
            ))}
          </div>

          {isLoading && <Loader />}
        </>
      )}
    </div>
  );
}

export default ListView;
