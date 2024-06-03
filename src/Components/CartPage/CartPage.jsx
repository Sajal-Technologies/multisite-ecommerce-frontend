import React from "react";
import Breadcrump from "../Cat-components/Breadcrump";
import CartCard from "./CartCard";
import Cartpopup from "./Cartpopup";

const CartPage = () => {

  return (
    <>
      <Breadcrump />
      <div className="w-full flex flex-col items-center h-fit mt-10 mb-[72px] bg-[#FAFAFA]">
        <div className="w-[85%] mobile:w-full px-4">
          <div className="flex gap-4 items-center mb-10 mobile:gap-2 mobile:mb-4">
            <h1 className="text-[#121212] font-semibold text-4xl mobile:text-lg tablet:text-3xl">Cart</h1>
            <span className="border border-[#005F85] tablet:text-xs text-sm text-[#005F85] px-2 py-1 mobile:px-1 mobile:py-[2px] rounded-full font-semibold mobile:text-xs ">
              33 items
            </span>
          </div>
          <div className="flex flex-wrap gap-4 tablet:gap-8 mobile:gap-2 justify-stretch mobile:w-full">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
