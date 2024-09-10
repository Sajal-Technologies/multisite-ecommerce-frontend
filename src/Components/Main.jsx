import { lazy, Suspense } from "react";

const Banner = lazy(() => import("./Banner"));
const CategoryList = lazy(() => import("./CategoryList"));
const Fproduct = lazy(() => import("./Feature-Product"));
const Categories = lazy(() => import("./Categories"));
const Subcategory = lazy(() => import("./Subcategory"));

const Main = () => {
  return (
    <div className="bg-[#FAFAFA] pb-16 pt-[100px]">
      <Suspense fallback={null}>
        <Banner />
        <CategoryList />
        <Fproduct Category={"HomeDecor"} />
        <Categories />
        <Fproduct Category={"Electronics"} />
        <Subcategory title={"Home appliances"} />
        <Fproduct Category={"Furniture"} />
        <Subcategory title={"Electronics & Gadgets"} type={"reverse"} />
      </Suspense>
    </div>
  );
};

export default Main;
