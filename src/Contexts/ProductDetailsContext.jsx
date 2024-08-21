import { createContext, useContext, useEffect, useReducer } from "react";
import productFetch from "../Axios Instance/productAxios";
import { useParams } from "react-router-dom";

const ProductDetailsContext = createContext();
const initialState = {
  isLoading: false,
  error: null,
  productDetails: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case "productDetails/loaded":
      return {
        ...state,
        isLoading: false,
        productDetails: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error:
          action.payload?.response?.data?.Message ||
          action.payload?.message ||
          "An unexpected error occurred",
      };
    default:
      throw new Error("Invalid action");
  }
}

function ProductDetailsProvider({ children }) {
  const [{ isLoading, productDetails, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { id } = useParams();

  useEffect(() => {
    async function getProductDetails() {
      dispatch({ type: "loading", payload: true });
      try {
        const response = await productFetch.post("/oxy-product-detail/", {
          product_id: id,
        });
        console.log(response.data.Product_detail);
        dispatch({
          type: "productDetails/loaded",
          payload: response.data.Product_detail,
        });
      } catch (error) {
        dispatch({ type: "rejected", payload: error });
      }
    }
    getProductDetails();
  }, [id]);

  return (
    <ProductDetailsContext.Provider
      value={{ isLoading, productDetails, error }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
}

function useProductDetails() {
  const context = useContext(ProductDetailsContext);
  if (context === undefined) {
    throw new Error("useProductDetails must be used within a ProductProvider");
  }
  return context;
}

export { ProductDetailsProvider, useProductDetails };
