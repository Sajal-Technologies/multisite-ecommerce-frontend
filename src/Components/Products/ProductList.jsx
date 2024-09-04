// import Amazon from "../../images/CategoriesPage/CatComponent/CatList/amazon.png";
// import Flipkart from "../../images/CategoriesPage/CatComponent/CatList/flipkart.png";
// import Meesho from "../../images/CategoriesPage/CatComponent/CatList/meesho.png";
// import Indiamart from "../../images/CategoriesPage/CatComponent/CatList/indiamart.png";
// import { FiTrendingDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
import DynamicLogo from "../DynamicLogo";
import GoToCart from "../GoToCart";
import { useCart } from "../../Contexts/CartContext";

function ProductList({ product }) {
  const { price, thumbnail, title, product_id, merchant, delivery } = product;
  const { cartItems } = useCart();

  return (
    <div className="w-full relative mobile:h-[139px] tablet:h-[150px] xl:h-[200px] items-center flex mobile:gap-4 overflow-hidden tablet:gap-4 lg:gap-4 xl:gap-1 border-[1px] border-[#F2F2F2] rounded-2xl ">
      <Link to={`/product/${product_id}`}>
        <div className="imgcontainer flex gap-4 items-center justify-center mobile:h-full mobile:w-[104px] tablet:w-[150px] lg:h-[200px] tablet:h-[150px] lg:w-[300px] bg-[#FAFEFF]">
          <img
            loading="lazy"
            className="w-full h-full object-contain mobile:w-[79px] "
            src={thumbnail}
            alt={`${title} Image`}
          />
        </div>
      </Link>
      <div className=" lg:hidden tablet:hidden mobile:block flex flex-col pr-2 h-full py-4">
        <p className="text-sm text-[#3D3D3D] font-semibold line-clamp-2 ">
          {title}
        </p>

        <div className="flex items-end">
          <Link to={`/product/${product_id}`}>
            <div className="">
              <p className="text-[#5C5C5C] text-xs">
                SAVE <span className="line-through">&#8377;125550</span>
              </p>
              <p className="text-[#0B8500] text-lg">&#8377;{price}</p>
            </div>
          </Link>
          <div className="mx-4 border-[1px] border-[#005F85] rounded-full">
            {cartItems.some((item) => item.product_id === product_id) ? (
              <GoToCart />
            ) : (
              <AddToCart id={product_id} />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mobile:hidden h-full gap-2 tablet:py-0 xl:py-4 w-full tablet:overflow-hidden">
        <Link to={`/product/${product_id}`}>
          <div className="flex h-full items-center w-full justify-between">
            <div className="flex gap-0">
              <div className="logocontainer flex items-center justify-start xl:ml-0 tablet:ml-[-14px] px-5 w-auto mb-2">
                <DynamicLogo sellerName={merchant?.name || "Unknown"} />
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/product/${product_id}`}>
          <div className="xl:mb-4 xl:px-5 tablet:mb-2 xl:mt-0 tablet:mt-[-10px] tablet:px-0 tablet:w-full tablet:overflow-hidden">
            <p className="font-medium xl:text-[19px] leading-6 text-[#3D3D3D] tablet:text-base line-clamp-2">
              {title}
            </p>
          </div>
        </Link>
        <div className="xl:px-5 w-full tablet:px-0 flex items-center justify-between">
          <Link to={`/product/${product_id}`}>
            <div className="">
              <p className="text-[#5C5C5C] tablet:text-sm xl:text-base">
                {delivery}
                {/* SAVE <span className="line-through">&#8377;125550</span> */}
              </p>
              <p className="text-[#0B8500] text-2xl font-medium">
                &#8377;{price}
              </p>
            </div>
          </Link>
          <div className="mx-4 border-[1px] border-[#005F85] rounded-full">
            {cartItems.some((item) => item.product_id === product_id) ? (
              <GoToCart />
            ) : (
              <AddToCart id={product_id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
