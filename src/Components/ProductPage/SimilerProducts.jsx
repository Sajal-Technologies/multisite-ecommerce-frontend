import React from "react";
import ProductCard from "./ProductCard";

const SimilerProducts = () => {
  return (
    <>
      <div className="similar-products flex justify-center w-full h-fit my-[72px]">
        <div className="w-[85%] h-full">
          <h1 className="text-[#121212] mb-8 font-semibold text-[36px] leading-[36px]">
            Similer Products
          </h1>
          <div className="flex flex-col gap-6">
            <ProductCard />
            <ProductCard />
          </div>
          <h1 className="text-[#121212] mt-[72px] mb-8 font-semibold text-[36px] leading-[36px]">
            Related Products
          </h1>
          <div className="flex flex-col gap-6">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilerProducts;
