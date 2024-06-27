import ListingProductDets from "../ListingProductDets";
import RelatedProduct from "./RelatedProduct";
import SimilerProduct from "./SimilarProduct";

const ProductStyle2 = () => {
  return (
    <div className="main pt-[200px] mobile:pt-[70px]">
      <ListingProductDets />
      <RelatedProduct />
      <SimilerProduct />
    </div>
  );
};

export default ProductStyle2;
