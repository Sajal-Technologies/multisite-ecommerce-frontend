import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productFetch from "../../Axios Instance/productAxios";

const MAX_RETRIES = 3;
function GridItem3() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getCategories(retryCount = 0) {
      if (sessionStorage.getItem("cat_gridItem_3")) {
        setData(JSON.parse(sessionStorage.getItem("cat_gridItem_3")));
        setIsLoading(false);
        return;
      }
      try {
        const response = await productFetch.post(
          "/get-category-text-with-image/",
          { cat_name: "Smartphones" }
        );
        console.log(response.data.Category_data);
        setData(response.data.Category_data);
        sessionStorage.setItem(
          "cat_gridItem_3",
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
      <div className="w-full h-full aspect-square row-span-3 bg-gray-300 overflow-hidden animate-pulse"></div>
    );
  }

  return (
    <Link
      to={data?.name}
      className=" group row-span-3 relative overflow-hidden"
    >
      <picture className="w-full h-full">
        <img
          src={data?.image}
          alt=""
          className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
        />
      </picture>
      <a href="#" className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4">
        <div className="cursor-pointer w-full h-full flex flex-col gap-2">
          <h3 className="lg:text-xl xl:text-2xl tablet:text-xl mobile:text-lg mobile:leading-[1.1]  font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1] mb-3">
            {data?.text1}
          </h3>
          <p className="lg:text-base tablet:text-sm lg:leading-tight tablet:leading-[1] mobile:hidden tablet:block  text-[#5C5C5C]">
            {data?.text2}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default GridItem3;
