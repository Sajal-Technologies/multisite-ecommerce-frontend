import Banner from "./Banner";
import Feature from "./Feature-section";
import Fproduct from "./Feature-Product";
import Categories from "./Categories";
import Subcategory from "./Subcategory";
import Subcategory2 from "./Subcategory2";

const Main = () => {
  return (
    <div className="bg-[#FAFAFA] pb-16 pt-[200px] mobile:pt-[70px]">
      <Banner />
      <Feature />
      <Fproduct />
      <Categories />
      <Subcategory />
      <Subcategory2 />
    </div>
  );
};

export default Main;
