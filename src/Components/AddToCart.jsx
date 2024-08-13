import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../Contexts/CartContext";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useState } from "react";

function AddToCart({ type = "small", id, sellerLink }) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) {
      navigate("/SignIn");
      return;
    }
    try {
      setIsLoading(true);
      const data = id
        ? { product_id: id, quantity: 1 }
        : { seller_link: sellerLink, quantity: 1 };
      // setError(null);
      await addToCart(data);
    } catch (error) {
      console.log(error);
      // setError(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {type === "small" && (
        <button
          className={`h-10 w-10 mobile:h-8 mobile:w-8 flex items-center justify-center rounded-full  ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader type="sm" />
          ) : (
            <FiShoppingBag className="text-[#005F85] text-[24px] mobile:text-xl" />
          )}
        </button>
      )}

      {type === "large" && (
        <button
          className={`hover:bg-[#005F85] text-[#005F85] transition-all rounded-full whitespace-nowrap  font-semibold text-lg hover:text-white py-2 px-4 flex items-center justify-center tablet:text-base mobile:text-sm gap-2 cursor-pointer border border-[#005F85]  ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader type="sm" />
          ) : (
            <FiShoppingBag className="text-xl" />
          )}
          {isLoading ? "Going to Cart" : "Add to Cart"}
        </button>
      )}
    </>
  );
}

export default AddToCart;
