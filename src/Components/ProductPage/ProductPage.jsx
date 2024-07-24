import { useProductDetails } from "../../Contexts/ProductDetailsContext";
import Breadcrump from "../Cat-components/Breadcrump";
import Loader from "../Loader";
import ListingProductDets from "./ListingProductDets";
import SimilerProducts from "./SimilerProducts";

const ProductPage = () => {
  const { isLoading, error } = useProductDetails();
  return (
    <div className="pt-[200px] mobile:pt-[70px]">
      <Breadcrump />
      {isLoading && (
        <div className="h-[50svh] grid place-items-center">
          <Loader type="lg" />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <h1 className="text-[#5C5C5C] font-semibold text-2xl">{error}</h1>
        </div>
      )}
      {!isLoading && !error && <ListingProductDets />}
      <SimilerProducts />
    </div>
  );
};

export default ProductPage;
