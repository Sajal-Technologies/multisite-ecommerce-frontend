import { MdOutlineShoppingCart, MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

function GoToCart({ type = "small" }) {
  return (
    <>
      {type === "small" && (
        <Link
          to="/Cart"
          className={`h-10 w-10 mobile:h-8 mobile:w-8 flex items-center justify-center rounded-full`}
        >
          <MdShoppingCartCheckout className="text-[#005F85] text-[24px] mobile:text-xl" />
        </Link>
      )}

      {type === "large" && (
        <button
          className={`hover:bg-[#005F85] text-[#005F85] transition-all rounded-full whitespace-nowrap  font-semibold text-lg hover:text-white py-2 px-4 flex items-center justify-center tablet:text-base mobile:text-sm gap-2 cursor-pointer border border-[#005F85] `}
        >
          <MdOutlineShoppingCart className="text-xl" />
          Go to Cart
        </button>
      )}
    </>
  );
}

export default GoToCart;
