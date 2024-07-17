import { createContext, useContext, useReducer } from "react";
import productFetch from "../Axios Instance/productAxios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProductContext = createContext();

const initialState = {
  searchProducts: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "product/loaded":
      return { ...state, searchProducts: action.payload, isLoading: false };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}

function ProductProvider({ children }) {
  const [{ searchProducts, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();
  const { user } = useAuth();

  async function getProduct(productName, sortby = "relevance") {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await productFetch.post(
        "/oxy-search-product/",
        {
          product_name: productName,
          sort_by: sortby,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token.access}`,
          },
        }
      );
      console.log(response.data["Product_data"]);
      dispatch({
        type: "product/loaded",
        payload: response.data["Product_data"],
      });
      navigate("/search?q=" + productName + "&view=grid");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: error.response.data.message,
      });
    }
  }

  return (
    <ProductContext.Provider
      value={{ searchProducts, getProduct, isLoading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}

export { ProductProvider, useProduct };
