import React from "react";
import Breadcrump from "../Cat-components/Breadcrump";
import CartCard from "./CartCard";

const CartPage = () => {
  return (
    <>
      <Breadcrump />
      <div className="w-full flex flex-col items-center h-fit mt-10 mb-[72px] bg-[#FAFAFA]">
        <div className="w-[85%]">
          <div className="flex gap-4 items-center mb-10">
            <h1 className="text-[#121212] font-semibold text-4xl">Cart</h1>
            <span className="border border-[#005F85] text-sm text-[#005F85] px-2 py-1 rounded-full font-semibold">
              33 items
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
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
