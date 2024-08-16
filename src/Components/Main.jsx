import { lazy, Suspense } from "react";
import Banner from "./Banner";
import CategoryList from "./Category-Section";

const Fproduct = lazy(() => import("./Feature-Product"));
const Categories = lazy(() => import("./Categories"));
const Subcategory = lazy(() => import("./Subcategory"));

const Main = () => {
  return (
    <div className="bg-[#FAFAFA] pb-16 pt-[60px] mobile:pt-[70px]">
      <Banner />
      <CategoryList />
      <Suspense fallback={null}>
        <Fproduct Category={"Electronics"} />
        <Categories />
        <Fproduct Category={"HomeDecor"} />
        <Subcategory title={"Home appliances"} />
        <Fproduct Category={"Furniture"} />
        <Subcategory title={"Electronics and Gadgets"} type={"reverse"} />
      </Suspense>
    </div>
  );
};

export default Main;
