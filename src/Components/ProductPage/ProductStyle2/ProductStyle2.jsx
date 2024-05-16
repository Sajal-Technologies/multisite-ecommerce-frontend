import React from "react";
import ListingProductDets from "../ListingProductDets";

import RelatedProduct from "./RelatedProduct";
import SimilerProduct from "./SimilarProduct";

const ProductStyle2 = () => {
  return (
    <>
      <div className="main">
        <ListingProductDets />
        <RelatedProduct/>
        <SimilerProduct/>
      </div>
    </>
  );
};

export default ProductStyle2;
