import ProductCard from "./ProductCard";

const SimilerProducts = () => {
  return (
    <>
      <div className="similar-products flex justify-center w-full h-fit my-[72px] mobile:my-0 tablet:my-0 tablet:mt-6 mobile:mt-6 px-4 tablet:px-8">
        <div className="w-[85%] h-full mobile:w-full tablet:w-full">
          <h1 className="text-[#121212] mb-8 mobile:mb-2 tablet:mb-4 font-semibold text-[36px] leading-[36px] tablet:text-2xl mobile:text-lg">
            Similer Products
          </h1>
          <div className="flex flex-col gap-6 mobile:gap-2 tablet:gap-6">
            <ProductCard />
            <ProductCard />
          </div>
          <h1 className="text-[#121212] mt-[72px] mb-8 mobile:mt-6 tablet:mt-6 font-semibold text-[36px] leading-[36px] tablet:text-2xl tablet:mb-4 mobile:text-lg mobile:mb-2">
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
