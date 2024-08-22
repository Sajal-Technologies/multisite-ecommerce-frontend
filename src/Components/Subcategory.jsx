import Subcatcard from "./Subcatcard";
import SubCategoryImg from "../images/MainPage/SubCategory2/SubCategory.jpeg";
import { FiChevronRight } from "react-icons/fi";
import productFetch from "../Axios Instance/productAxios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MAX_RETRIES = 3;

const Subcategory = ({ title, type = "normal" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getProducts(retryCount = 0) {
      if (sessionStorage.getItem(title)) {
        setProducts(JSON.parse(sessionStorage.getItem(title)));
        setIsLoading(false);
        return;
      }

      try {
        const response = await productFetch.post(
          "/oxy-sale-product/",
          {
            product_name: { title },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.Product_data.length < 6 && retryCount < MAX_RETRIES) {
          getProducts(retryCount + 1);
        } else {
          setProducts(response.data.Product_data);
          sessionStorage.setItem(
            title,
            JSON.stringify(response.data.Product_data.slice(0, 6))
          );
        }
      } catch (error) {
        if (retryCount < MAX_RETRIES) {
          getProducts(retryCount + 1);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [title]);

  if (isLoading) {
    return (
      <div className="mx-2 xl:mx-0">
        <div
          className={`lg:flex gap-4 justify-center lg:rounded-2xl lg:border-[1px]  overflow-hidden items-center w-full xl:w-[85%] xl:mx-auto  mt-[4vw] ${
            type === "reverse" ? "lg:pl-4" : "lg:pr-4"
          }`}
        >
          <div
            className={`lg:w-[30%] tablet:w-full mb-4 lg:mb-0 mobile:w-full h-[280px] bg-gray-300 animate-pulse ${
              type === "reverse" ? "order-2" : ""
            }`}
          ></div>
          <div className="grid gap-4 lg:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 w-full">
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="subcatcard w-full flex items-center shadow-sm justify-between gap-2 text-[#262626] h-[105px] bg-white  p-4 rounded-xl border-[1px] animate-pulse border-[#DEDEDE]"
                >
                  <div className="w-full">
                    <div className="h-6 w-full bg-gray-300 rounded-md mb-4"></div>
                    <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                  </div>
                  <div className="h-[80px] w-[100px] bg-gray-300 rounded-md"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLoading && products.length !== 0 && (
        <>
          <div className="hidden tablet:block mobile:block mobile:relative tablet:relative mt-10 mobile:w-full mobile:h-[152px] tablet:h-[180px] mobile:mt-8 mobile:overflow-hidden">
            <div className="overlay absolute h-full w-full bg-black opacity-40 "></div>
            <div className="text-white z-40 absolute px-6 pt-8">
              <h1 className="font-bold text-2xl mb-4">{title}</h1>
              <Link
                to={`/${title}?filters=sales%3A1`}
                className="text-[#005F85] bg-white px-4 py-2 rounded-md text-base font-semibold flex items-center gap-2"
              >
                Explore Now
                <div className="flex">
                  <FiChevronRight className="text-[#52CDFF]" />
                  <FiChevronRight className="ml-[-10px] text-[#00A8EB]" />
                </div>
              </Link>
            </div>
            <img
              className="h-full w-full object-cover"
              src={SubCategoryImg}
              alt=""
            />
          </div>

          <div className="lg:hidden mobile:px-4 px-7 w-full h-fit py-4  grid grid-cols-2 mobile:grid-cols-1 gap-3">
            {isLoading ? (
              <div className="subcatcard w-full flex items-center shadow-sm justify-between gap-4 text-[#262626] h-[105px] bg-white  p-4 rounded-xl border-[1px] animate-pulse border-[#DEDEDE]">
                <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
              </div>
            ) : (
              products.map((product, i) => {
                if (i < 6) return <Subcatcard key={i} product={product} />;
              })
            )}
          </div>

          {/* Big Screen  */}
          <div className="w-full xl:w-[85%] mx-auto tablet:w-full tablet:hidden h-[280px]  mobile:hidden flex xl:items-center xl:flex items-center justify-center mt-[4vw]">
            <div className="bg-[#F2F2F2] mobile:bg-transparent mobile:border-none w-[85%] lg:w-full lg:mx-2  mobile:h-full mobile:w-full mobile:shadow-none h-full flex overflow-hidden rounded-2xl border-[1px] border-white box ">
              <div
                className={`imgcontainer xl:block tablet:hidden mobile:hidden w-[30%] relative h-full ${
                  type === "reverse" ? "order-2" : ""
                }`}
              >
                <div className="overlay absolute w-full h-full bg-black opacity-40"></div>
                <img
                  className="w-full h-full object-cover object-center"
                  src={SubCategoryImg}
                  alt=""
                />
                <h1 className="absolute top-0 text-white px-[24px] py-[32px] h-[120px] font-bold text-4xl leading-[43px] z-30 line-clamp-2 overflow-hidden break-words">
                  {title}
                </h1>
                <Link
                  to={`/${title}?filters=sales%3A1`}
                  className=" absolute z-40 bottom-[35%]  ml-[24px] bg-white px-4 py-2 rounded-md text-lg font-semibold text-[#005F85] hover:bg-[#005F85] hover:text-white transition-all duration-200"
                >
                  Explore Now
                </Link>
              </div>
              <div className=" p-6 grid grid-cols-3 gap-4 w-full">
                {products.map((product, i) => {
                  if (i < 6) return <Subcatcard key={i} product={product} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Subcategory;
