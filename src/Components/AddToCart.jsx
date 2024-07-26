import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../Contexts/CartContext";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AddToCart({ type = "small", id }) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) navigate("/SignIn");
    setIsLoading(true);
    await addToCart({ product_id: id, quantity: 1 });
    setIsLoading(false);
  };

  return (
    <>
      {type === "small" && (
        <button
          className={`h-12 w-12 mobile:h-9 mobile:w-9 mx-4 flex items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff] ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          <FiShoppingBag className="text-[#005F85] text-[24px] mobile:text-xl" />
        </button>
      )}

      {type === "large" && (
        <button
          className={`bg-[#005F85] mobile:text-base tablet:text-base font-semibold text-lg text-white py-2 px-4 flex items-center justify-center rounded-e-md gap-2 cursor-pointer ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          <FiShoppingBag className="text-xl" />
          Add to Cart
        </button>
      )}
    </>
  );
}

export default AddToCart;
