import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProductContext = createContext();

let controller;

const initialState = {
  searchProducts: [],
  isLoading: false,
  error: "",
  view: "grid",
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
    case "view/set":
      return { ...state, view: action.payload };
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
    console.log(data);
    try {
      const response = await productFetch.post("/oxy-search-product/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token.access}`,
        },
        signal: controller.signal,
      });
      console.log(response.data["Product_data"]);
      console.log(data);
      setBodyData(data);
      dispatch({
        type: "product/loaded",
        payload: response.data["Product_data"],
      });
      navigate("/search?q=" + data.product_name);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: error.response.data.message,
      });
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
