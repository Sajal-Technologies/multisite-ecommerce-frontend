import React from "react";
import Breadcrump from "../Cat-components/Breadcrump";
import ListingProductDets from "./ListingProductDets";
import SimilerProducts from "./SimilerProducts";

const ProductPage = () => {
  return (
    <>
      <Breadcrump />
      <ListingProductDets/>
      <SimilerProducts/>
    </>
  );
};

export default ProductPage;
