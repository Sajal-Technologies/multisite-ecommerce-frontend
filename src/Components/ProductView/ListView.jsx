import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../Contexts/ProductContext";
import ProductList from "../Products/ProductList";

function ListView() {
  const { searchProducts, error, isLoading: searchLoading } = useProduct();
  const [queryString] = useSearchParams();
  const searchQuery = queryString.get("q");

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <h1 className="text-[#5C5C5C] font-semibold text-2xl">
          {error === "Unable to fetch the Product data: 'results'"
            ? error.replace("results", searchQuery)
            : error}
        </h1>
      </div>
    );
  }

  if (!error && !searchLoading && searchProducts.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <h1 className="text-[#5C5C5C] font-semibold text-2xl">
          No Products Found :(
        </h1>
      </div>
    );
  }

  return (
    <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex xl:pl-8 tablet:pl-4 flex-wrap w-full tablet:w-full">
      {searchProducts.map((product, i) => (
        <ProductList key={i} product={product} />
      ))}
    </div>
  );
}

export default ListView;
