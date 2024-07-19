import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

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
        if (action.payload.response.status === 401) {
          return {
            ...state,
            isLoading: false,
            error: "Please login First!",
          };
        } else {
          return {
            ...state,
            isLoading: false,
            error: action.payload.response.data.Message,
          };
        }
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
    default:
      throw new Error("Invalid action");
  }
}

function ProductProvider({ children }) {
  const [{ searchProducts, isLoading, error, view }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [bodyData, setBodyData] = useState({});
  const navigate = useNavigate();
  const { user } = useAuth();

  async function getProduct(data = bodyData.product_name) {
    controller = new AbortController();
    dispatch({ type: "loading", payload: true });
    try {
      const response = await productFetch.post("/oxy-search-product/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token.access}`,
        },
        signal: controller.signal,
      });
      setBodyData(data);
      dispatch({
        type: "product/loaded",
        payload: response.data["Product_data"],
      });
      navigate("/search?q=" + data.product_name);
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: error,
      });

      if (error?.response?.status === 401) navigate("/SignIn");
      navigate("/search?q=" + data.product_name);
    }
  }

  function setView(str) {
    dispatch({ type: "view/set", payload: str });
  }

  function cancelRequest() {
    if (controller) {
      controller.abort();
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
        getProduct,
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
