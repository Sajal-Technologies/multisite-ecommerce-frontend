import React from "react";
import Breadcrump from "../Cat-components/Breadcrump";
import CartCard from "./CartCard";
import Cartpopup from "./Cartpopup";

const CartPage = () => {

  return (
    <>
      <Breadcrump />
      <div className="w-full flex flex-col items-center h-fit mt-10 mb-[72px] bg-[#FAFAFA]">
        <div className="w-[85%] max-[600px]:w-full px-4">
          <div className="flex gap-4 items-center mb-10 max-[600px]:gap-2 max-[600px]:mb-4">
            <h1 className="text-[#121212] font-semibold text-4xl max-[600px]:text-lg">Cart</h1>
            <span className="border border-[#005F85] text-sm text-[#005F85] px-2 py-1 max-[600px]:px-1 max-[600px]:py-[2px] rounded-full font-semibold max-[600px]:text-xs ">
              33 items
            </span>
          </div>
          <div className="flex flex-wrap gap-4 max-[600px]:gap-2 justify-between max-[600px]:w-full">
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
