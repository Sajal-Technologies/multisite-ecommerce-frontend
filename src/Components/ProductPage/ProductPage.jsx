import { useEffect } from "react";
import { useProductDetails } from "../../Contexts/ProductDetailsContext";
import { useSaveForLater } from "../../Contexts/SaveForLaterContext";
import Breadcrump from "../Cat-components/Breadcrump";
import Loader from "../Loader";
import ListingProductDets from "./ListingProductDets";
import { useAuth } from "../../Contexts/AuthContext";

const ProductPage = () => {
  const { isLoading, error } = useProductDetails();
  const { getSavedItems } = useSaveForLater();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    getSavedItems();
  }, [user]);

  return (
    <div className="pt-[60px] mobile:pt-[70px] mb-8">
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
    </div>
  );
};

export default ProductPage;
