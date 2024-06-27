import Breadcrump from "../Cat-components/Breadcrump";
import ListingProductDets from "./ListingProductDets";
import SimilerProducts from "./SimilerProducts";

const ProductPage = () => {
  return (
    <>
      <div className="pt-[200px] mobile:pt-[70px]">
        <Breadcrump />
        <ListingProductDets />
        <SimilerProducts />
      </div>
    </>
  );
};

export default ProductPage;
