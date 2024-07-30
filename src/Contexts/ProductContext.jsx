import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

let controller;

const initialState = {
  searchProducts: [],
  isLoading: false,
  error: null,
  view: "grid",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case "product/loaded":
      return { ...state, searchProducts: action.payload, isLoading: false };

    case "rejected":
      if (action.payload.response) {
        return {
          ...state,
          isLoading: false,
          error: action.payload.response.data.Message,
        };
      } else if (action.payload.request) {
        return {
          ...state,
          isLoading: false,
          error: action.payload?.message,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error: action.payload?.message,
        };
      }
    case "view/set":
      return { ...state, view: action.payload };
    case "searchError/set":
      return { ...state, error: action.payload };
    case "abort/set":
      return { ...state, isLoading: false, searchProducts: [] };
    default:
      throw new Error("Invalid action");
  }
}

function ProductProvider({ children }) {
  const [{ searchProducts, isLoading, error, view }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [bodyData, setBodyData] = useState(null);
  const navigate = useNavigate();

  async function getSearchProduct(data = bodyData.product_name) {
    navigate("/search?q=" + data.product_name);
    controller = new AbortController();
    dispatch({ type: "loading", payload: true });
    try {
      const response = await productFetch.post("/oxy-search-product/", data, {
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });
      setBodyData(data);
      dispatch({
        type: "product/loaded",
        payload: response.data["Product_data"],
      });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: error,
      });
    }
  }

  function setView(str) {
    dispatch({ type: "view/set", payload: str });
  }

  function cancelRequest() {
    if (controller) {
      controller = controller.abort();
      dispatch({ type: "abort/set" });
    }
  }

  function setSearchError(err) {
    dispatch({ type: "searchError/set", payload: err });
  }

  return (
    <ProductContext.Provider
      value={{
        searchProducts,
        bodyData,
        getSearchProduct,
        isLoading,
        error,
        setView,
        view,
        cancelRequest,
        setSearchError,
      }}
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
