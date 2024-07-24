import { useEffect } from "react";
import Breadcrump from "../Cat-components/Breadcrump";
import CartCard from "./CartCard";
import { useCart } from "../../Contexts/CartContext";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Loader from "../Loader";
// import Cartpopup from "./Cartpopup";

const CartPage = () => {
  const { getCartItems, cartItems, isCartLoading, cartError } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    getCartItems();
  }, [user]);

  if (!user) {
    return (
      <div className="pt-[15rem]  mobile:pt-[7rem] flex justify-center flex-col items-center">
        <h1>Missing Cart items?</h1>
        <p>Login to see the items you added previously</p>
        <Link to={"/SignIn"}>SignIn</Link>
      </div>
    );
  }

  return (
    <div className="pt-[200px] mobile:pt-[70px]">
      <Breadcrump />
      <div className="w-full flex flex-col items-center h-fit mt-10 mb-[72px] bg-[#FAFAFA]">
        {isCartLoading && <Loader type="lg" />}
        {cartError && <div>{cartError}</div>}
        {!isCartLoading && !cartError && (
          <div className="w-[85%] mobile:w-full px-4">
            <div className="flex gap-4 items-center mb-10 mobile:gap-2 mobile:mb-4">
              <h1 className="text-[#121212] font-semibold text-4xl mobile:text-lg tablet:text-3xl">
                Cart
              </h1>
              <span className="border border-[#005F85] tablet:text-xs text-sm text-[#005F85] px-2 py-1 mobile:px-1 mobile:py-[2px] rounded-full font-semibold mobile:text-xs ">
                {cartItems.length} items
              </span>
            </div>
            {!isCartLoading && cartItems.length <= 0 && (
              <div className="text-center">
                You don&apos;t have Items in your Cart. Please add items
              </div>
            )}

            {cartItems.length !== 0 && (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center mobile:grid-cols-1 mobile:justify-items-stretch gap-4 mobile:w-full">
                {cartItems.map((item, i) => (
                  <CartCard key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
