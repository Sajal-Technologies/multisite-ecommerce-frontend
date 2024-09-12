import GridItem1 from "./CatGridBannerList/GridItem1";
import GridItem2 from "./CatGridBannerList/GridItem2";
import GridItem3 from "./CatGridBannerList/GridItem3";
import GridItem4 from "./CatGridBannerList/GridItem4";
import GridItem5 from "./CatGridBannerList/GridItem5";
import GridItem6 from "./CatGridBannerList/GridItem6";

const Categories = () => {
  return (
    <div className="xl:w-[85%] lg:w-full lg:px-0 px-2  mt-12  mx-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
      </div>
      <div className=" grid  tablet:grid-cols-4 lg:grid-cols-4 grid-rows-[repeat(3,1fr)] mobile:grid-rows-[repeat(6,1fr)] md:grid-cols-3 mobile:gap-2 tablet:gap-2  lg:gap-4 *:rounded-3xl">
        <GridItem1 />
        <GridItem2 />
        <GridItem3 />
        <GridItem4 />
        <GridItem5 />
        <GridItem6 />
      </div>
    </div>
  );
};

export default Categories;
