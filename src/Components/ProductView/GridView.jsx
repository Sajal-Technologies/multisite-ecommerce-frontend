import { useProduct } from "../../Contexts/ProductContext";
import ProductCard from "../Products/ProductCard";

function GridView() {
  const { searchProducts } = useProduct();
  if (searchProducts.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <h1 className="text-[#5C5C5C] font-semibold text-2xl">
          No Products Found :(
        </h1>
      </div>
    );
  }

  return (
    <div className="mobile:justify-start mobile:flex-wrap md:justify-evenly xl:justify-between md:items-center md:px-0 md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 md:gap-4 xl:gap-6 flex md:ml-0 xl:pl-10 flex-wrap w-full">
      {searchProducts.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}

export default GridView;
