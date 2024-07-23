import { FiArrowRight } from "react-icons/fi";
import Catbanner from "./Catbanner";

const Categories = () => {
  return (
    <div className="xl:w-[90%] lg:w-full lg:mb-10 tablet:mb-8  tablet::w-full xl:pl-[2.5vw] tablet:px-[28px] mobile:px-[28px] lg:px-[28px] flex flex-col mx-auto">
      <div className=" w-full flex items-center justify-between mt-[4vw]">
        <h1 className="text-[#121212] xl:text-[36px] md:text-3xl font-semibold mobile:text-[22px]">
          Categories
        </h1>
        <div className="flex items-center text-[#7A7A7A] gap-2 mobile:text-sm">
          View all
          <FiArrowRight className="mobile:text-xl" />
        </div>
      </div>
      <div className="w-full px- grid grid-cols-3 tablet:grid-cols-3 grid-rows-[200px_200px] tablet:grid-rows-[150px_150px] mobile:grid-rows-[104px_104px] gap-2 xl:gap-4 tablet:gap-2 justify-between mt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Catbanner key={i} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
