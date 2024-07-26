import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../Contexts/CartContext";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AddToCart({ id }) {
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
    <button
      className={`h-12 w-12 mobile:h-9 mobile:w-9 mx-4 flex items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff] ${
        isLoading ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      <FiShoppingBag className="text-[#005F85] text-[24px] mobile:text-xl" />
    </button>
  );
}

export default AddToCart;
