import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import Card from "../../Card";

const SimilarProduct = () => {
  return (
    <>
      <div className="flex w-full items-center mb-[72px] flex-col">
        <div className="flex w-[85%] mt-[72px] mb-8 tablet:w-full tablet:mb-4 tablet:mt-6 tablet:px-8 mobile:mb-2 mobile:mt-6 mobile:w-full mobile:px-4 items-center justify-between">
          <p className="text-[#121212] text-2xl font-semibold capitalize tablet:text-2xl mobile:text-lg mobile:font-semibold">
            Similar products
          </p>
          <div className="flex gap-2 mobile:hidden tablet:hidden">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-custom-gradient">
              <FiChevronsLeft className="text-white text-xl" />
            </div>
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#FF7F00] bg-custom-gradient2">
              <FiChevronsRight className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="flex w-[85%] justify-between tablet:w-full tablet:px-8 tablet:gap-4 tablet:overflow-x-auto tablet:scroll-smooth tablet:snap-x mobile:w-full mobile:px-4 mobile:gap-2 mobile:overflow-x-auto mobile:scroll-smooth mobile:snap-x hideScroll">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
