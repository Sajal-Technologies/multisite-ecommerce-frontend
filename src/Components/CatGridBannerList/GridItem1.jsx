import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productFetch from "../../Axios Instance/productAxios";

const MAX_RETRIES = 3;
function GridItem1() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getCategories(retryCount = 0) {
      if (sessionStorage.getItem("cat_gridItem_1")) {
        setData(JSON.parse(sessionStorage.getItem("cat_gridItem_1")));
        setIsLoading(false);
        return;
      }
      try {
        const response = await productFetch.post(
          "/get-category-text-with-image/",
          { cat_name: "Book" }
        );
        console.log(response.data.Category_data);
        setData(response.data.Category_data);
        sessionStorage.setItem(
          "cat_gridItem_1",
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
      <div className="w-full h-full aspect-square bg-gray-300 overflow-hidden animate-pulse"></div>
    );
  }

  return (
    <Link
      to={data?.name}
      className=" group relative overflow-hidden aspect-w-1 aspect-h-1"
    >
      <picture className="w-full h-full -z-10">
        <img
          src={data?.image}
          alt=""
          className="w-full block object-cover h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
        />
      </picture>
      <a href="#" className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4">
        <div className="cursor-pointer w-full h-full">
          <h3 className="lg:text-xl xl:text-2xl tablet:text-base mobile:text-lg mobile:leading-[1.1]  font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1]  w-[60%]">
            {data?.text1}
            {/* Book */}
          </h3>
        </div>
      </a>
    </Link>
  );
}

export default GridItem1;