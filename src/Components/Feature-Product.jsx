import { FiArrowRight } from "react-icons/fi";
import Card from "./Card";
import { useEffect, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const Fproduct = ({ Category }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getProducts() {
      try {
        const response = await productFetch.post(
          "/oxy-sale-product/",
          {
            product_name: { Category },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data.Product_data);
      } catch (error) {
        getProducts();
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [Category]);

  return (
    <section className="flex flex-col">
      <div className="flex mb-8 items-center justify-center mt-[4vw] mobile:mb-4">
        <div className="xl:w-[85%] md:w-full mobile:w-[100%] mobile:px-4 md:px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[#121212] xl:text-[36px] font-semibold mobile:text-xl md:text-3xl">
              <span className="mobile:hidden">Grab the best</span>{" "}
              <span className="mobile:uppercase">d</span>eals on
              <span className="text-[#0083B8]"> {Category}</span>
            </h1>
            {isLoading ? null : (
              <div className="flex items-center text-[#7A7A7A] gap-2 mobile:text-sm">
                <Link to={`/${Category}?filters=sales%3A1`}>View all</Link>
                <FiArrowRight />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {isLoading && (
          <div className="flex gap-4 justify-center items-center w-[85%]">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}
        {!isLoading && (
          <div className="cards-container snap-x mobile:snap-x overflow-auto scroll-smooth mobile:flex-rowoverflow-x-auto flex justify-start mobile:justify-start mobile:w-full mobile:px-4 xl:w-[85%] md:w-full md:px-4 gap-4 mobile:overflow-x-auto ">
            {products.map((product, i) => {
              if (i < 7) return <Card key={i} product={product} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Fproduct;
