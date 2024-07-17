import { useProduct } from "../../Contexts/ProductContext";
import ProductCard from "../Products/ProductCard";

function GridView() {
  const { searchProducts } = useProduct();
  return (
    <div className="mobile:justify-start mobile:flex-wrap md:justify-evenly xl:justify-between md:items-center md:px-0 md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 md:gap-4 xl:gap-6 flex md:ml-0 xl:pl-10 flex-wrap w-full">
      {searchProducts.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}

export default GridView;
