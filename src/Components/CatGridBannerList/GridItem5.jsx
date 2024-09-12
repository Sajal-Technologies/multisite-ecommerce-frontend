import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productFetch from "../../Axios Instance/productAxios";

const MAX_RETRIES = 3;
function GridItem5() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getCategories(retryCount = 0) {
      if (sessionStorage.getItem("cat_gridItem_5")) {
        setData(JSON.parse(sessionStorage.getItem("cat_gridItem_5")));
        setIsLoading(false);
        return;
      }
      try {
        const response = await productFetch.post(
          "/get-category-text-with-image/",
          { cat_name: "Fashion" }
        );
        console.log(response.data.Category_data);
        setData(response.data.Category_data);
        sessionStorage.setItem(
          "cat_gridItem_5",
          JSON.stringify(response.data.Category_data)
        );
      } catch (error) {
        console.log(error);
        if (retryCount < MAX_RETRIES) {
          getCategories(retryCount + 1);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full aspect-square row-span-2 col-span-2 mobile:row-start-1 bg-gray-300 overflow-hidden animate-pulse"></div>
    );
  }

  return (
    <Link
      to={data?.name}
      className=" group row-span-2 col-span-2 mobile:row-start-1 relative overflow-hidden"
    >
      <picture className="w-full h-full">
        <img
          src={data?.image}
          alt=""
          className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
        />
      </picture>
      <a
        href="#"
        className="absolute top-0 left-0 right-0 bottom-0 z-10 px-4 py-8"
      >
        <div className="cursor-pointer  w-[65%]">
          <h3 className="xl:text-5xl lg:text-4xl tablet:text-2xl mobile:text-xl mobile:leading-[1.1] mobile:mb-2  font-extrabold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1] lg:mb-4 tablet:mb-2">
            {data?.text1}
          </h3>
          <p className="xl:text-xl  lg:text-base tablet:text-sm font-semibold xl:leading-snug mobile:mb-4 lg:leading-tight tracking-wider lg:mb-5 tablet:mb-3 xl:mb-6 text-[#5C5C5C] lg:w-[50%] tablet:w-[80%] ">
            {data?.text2}
          </p>
          <Link
            to={data?.name}
            className="text-white  bg-[#005F85] px-4 py-2 rounded-full text-base font-semibold"
          >
            Explore More
          </Link>
        </div>
      </a>
    </Link>
  );
}

export default GridItem5;
