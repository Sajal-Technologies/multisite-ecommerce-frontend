import { useEffect } from "react";
import { useProductDetails } from "../../Contexts/ProductDetailsContext";
import { useSaveForLater } from "../../Contexts/SaveForLaterContext";
import Breadcrump from "../Cat-components/Breadcrump";
import ListingProductDets from "./ListingProductDets";
import { useAuth } from "../../Contexts/AuthContext";
import MultiStageLoader from "../MultiStageLoader";

const ProductPage = () => {
  const { isLoading, error, productDetails } = useProductDetails();
  const { getSavedItems } = useSaveForLater();
  const { user } = useAuth();

  useEffect(() => {
    if (productDetails.title) document.title = productDetails.title;
    if (!user) return;
    getSavedItems();

    return () => {
      document.title = "The Shopping AI";
    };
  }, [user, productDetails, getSavedItems]);
  [];
  return (
    <div className="pt-[60px] mobile:pt-[70px] mb-12">
      <Breadcrump />
      {isLoading && (
        <div className="h-[50svh] grid place-items-center">
          <MultiStageLoader />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <h1 className="text-gray-400 font-semibold text-2xl">
            {error === "Unable to fetch the Product detail: 'pricing'"
              ? "Unable to fetch the Product details"
              : error}
          </h1>
        </div>
      )}
      {!isLoading && !error && <ListingProductDets />}
    </div>
  );
};

export default ProductPage;
