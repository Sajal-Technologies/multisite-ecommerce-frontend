import { useProduct } from "../../Contexts/ProductContext";
import ProductList from "../Products/ProductList";

function ListView() {
  const { searchProducts } = useProduct();
  return (
    <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex xl:pl-8 tablet:pl-4 flex-wrap w-full tablet:w-full">
      {searchProducts.map((product, i) => (
        <ProductList key={i} product={product} />
      ))}
    </div>
  );
}

export default ListView;
