import Banner from "./Banner";
import CategoryList from "./Category-Section";
import Fproduct from "./Feature-Product";
import Categories from "./Categories";
import Subcategory from "./Subcategory";
import Subcategory2 from "./Subcategory2";

const Main = () => {
  return (
    <div className="bg-[#FAFAFA] pb-16 pt-[60px] mobile:pt-[70px]">
      <Banner />
      <CategoryList />
      <Fproduct Category={"Electronics"} />
      <Categories />
      <Fproduct Category={"HomeDecor"} />
      <Subcategory />
      <Fproduct Category={"Furniture"} />
      <Subcategory2 />
    </div>
  );
};

export default Main;
