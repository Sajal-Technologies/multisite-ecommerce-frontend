import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
import { useEffect, useState } from "react";
// import { FiTrendingDown } from "react-icons/fi";

function ProductCard({ product }) {
  const { price, thumbnail, title, merchant, product_id, rating } = product;
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  return (
    <div className="card relative md:ml-0 lg:max-w-[320px] flex-0  mobile:basis-[180px] md:h-[380px] md:m-0 mobile:h-[274px] mobile:flex-shrink-0 flex-shrink-0 inline-block mobile:inline-block flex-1 xl:basis-[280px] lg:basis-[256px] tablet:basis-[220px] h-[400px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
      <span
        className={`bg-white w-[calc(80%-4px)] ${
          error
            ? "opacity-100 visible pointer-events-auto translate-y-[-150%]"
            : "opacity-0 invisible pointer-events-none translate-y-0"
        } text-[12px] text-center p-2 bottom-[-40px] absolute left-[50%] translate-x-[-50%] shadow-lg leading-tight rounded-lg transition-all duration-300`}
      >
        {error}
      </span>

      <Link to={`/product/${product_id}`}>
        <div className="imgcontainer w-full h-1/2 flex items-center justify-center bg-[#FAFEFF]">
          <img
            loading="lazy"
            className="w-full h-full object-contain"
            src={thumbnail}
            alt={`${title} Image`}
          />
        </div>
      </Link>
      <div className="w-full h-1/2 py-4 flex flex-col gap-4 mobile:gap-1">
        <Link to={`/product/${product_id}`}>
          <div className="sellers flex justify-between px-4 ">
            <div className="flex items-center justify-between gap-2 w-full">
              <p className="line-clamp-1 break-words text-sm font-bold uppercase tracking-wider text-[#005F85]">
                {merchant.name}
              </p>
              {rating && (
                <span className="text-gray-600 font-bold text-nowrap">
                  {rating} &#9733;
                </span>
              )}
            </div>
          </div>
        </Link>
        <div className="px-4">
          <Link
            to={`/product/${product_id}`}
            className="text-[19px] text-[#3D3D3D] mobile:font-semibold mobile:text-sm font-medium break-words line-clamp-2 leading-tight"
          >
            {title}
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/product/${product_id}`}>
            <div className="">
              <p className="px-4 text-[#0B8500] text-2xl font-medium mobile:text-base">
                &#8377;{price}
              </p>
            </div>
          </Link>
          <div className="mx-4 rounded-full border-[1px] border-[#005F85]">
            <AddToCart id={product_id} setError={setError} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
