import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const Card = ({ product }) => {
  const { price, thumbnail, title, merchant, product_id, rating } = product;

  return (
    <div className="card md:ml-0 lg:max-w-[320px] flex-0  mobile:basis-[180px] md:m-0 mobile:flex-shrink-0 flex-shrink-0 inline-block mobile:inline-block flex-1 xl:basis-[280px] lg:basis-[256px] tablet:basis-[220px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
      <Link to={`/product/${product_id}`}>
        <div className="imgcontainer w-full flex items-center overflow-hidden justify-center bg-[#FAFEFF]">
          <img
            loading="lazy"
            className="w-full h-[250px] object-contain"
            src={thumbnail}
            alt={`${title} Image`}
          />
        </div>
      </Link>
      <div className="w-full py-4 flex flex-col gap-4 mobile:gap-1">
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
            <AddToCart id={product_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
