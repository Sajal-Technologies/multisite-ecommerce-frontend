import { useEffect } from "react";
import Breadcrump from "../Components/Cat-components/Breadcrump";
import CartCard from "../Components/CartPage/CartCard";
import { useCart } from "../Contexts/CartContext";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import emptyCart from "../images/CartPage/emptyCart.png";
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
      <div className="flex items-center justify-center h-[100vh] bg-gray-100">
        <div className="text-center p-6 w-[85%] bg-white shadow-md rounded-lg">
          <h1 className="text-[#121212] text-xl font-bold">
            Missing Cart items?
          </h1>
          <p className="mb-4">Sign-in to see the items you added previously</p>
          <Link
            to={"/SignIn"}
            className="bg-[#005F85] text-white px-2 py-1 text-lg font-semibold rounded-md"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[60px] mobile:pt-[70px]">
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
              <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                  <div className="flex justify-center">
                    <img
                      src={emptyCart}
                      alt="empty-cart"
                      className="w-[20%] block"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Your cart is empty
                  </h2>
                  <p className="text-gray-500 mt-2">
                    It looks like you don&apos;t have any items in your cart.
                    Start adding some!
                  </p>
                </div>
              </div>
            )}

            {cartItems.length !== 0 && (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center mobile:grid-cols-1 mobile:justify-items-stretch gap-4 mobile:gap-4 mobile:w-full">
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
