import React from "react";
import ProductCard from "./ProductCard";

const SimilerProducts = () => {
  return (
    <>
      <div className="similar-products flex justify-center w-full h-fit my-[72px] max-[600px]:my-0 max-[600px]:mt-6 px-4">
        <div className="w-[85%] h-full max-[600px]:w-full">
          <h1 className="text-[#121212] mb-8 max-[600px]:mb-2 font-semibold text-[36px] leading-[36px] max-[600px]:text-lg">
            Similer Products
          </h1>
          <div className="flex flex-col gap-6 max-[600px]:gap-2">
            <ProductCard />
            <ProductCard />
          </div>
          <h1 className="text-[#121212] mt-[72px] mb-8 max-[600px]:mt-6 font-semibold text-[36px] leading-[36px] max-[600px]:text-lg max-[600px]:mb-2">
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
