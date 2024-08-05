import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
// import { FiTrendingDown } from "react-icons/fi";

function ProductCard({ product }) {
  const { price, thumbnail, title, merchant, product_id } = product;

  return (
    <div className="card md:ml-0 lg:max-w-[320px] flex-0  mobile:basis-[180px] md:h-[380px] md:m-0 mobile:h-[274px] mobile:flex-shrink-0 flex-shrink-0 inline-block mobile:inline-block flex-1 xl:basis-[280px] lg:basis-[256px] tablet:basis-[180px] h-[400px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
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
            <div className="flex items-center gap-2">
              <p className="line-clamp-1 break-words text-sm font-bold uppercase tracking-wider text-[#005F85]">
                {merchant.name}
              </p>

              {/* <div className="h-8">
                <img
                  className=" h-full w-full object-cover"
                  src={Flipkart}
                  alt=""
                />
              </div> */}
            </div>
            {/* <div className="flex items-center gap-2 justify-center bg-[#F2F2F2] rounded-md px-2 mobile:hidden">
              <p className="text-[#0B8500] text-lg font-medium">-11%</p>
              <FiTrendingDown className="text-[#0B8500]" />
            </div> */}
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
              {/* <p className="uppercase px-4 text-[#5C5C5C] text-lg mobile:text-xs">
                save <span className="line-through">&#8377;12550</span>
              </p> */}
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
}

export default ProductCard;
