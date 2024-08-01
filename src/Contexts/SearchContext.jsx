import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
const SearchContext = createContext();

const initialState = {
  query: "",
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
    case "query/set":
      return { ...state, query: action.payload };
    case "view/set":
      return { ...state, view: action.payload };
    case "searchError/set":
      return { ...state, error: action.payload };
    case "abort/set":
      return { ...state, searchProducts: [] };
    default:
      throw new Error("Invalid action");
  }
}

function SearchProvider({ children }) {
  const [{ searchProducts, isLoading, error, view, query }, dispatch] =
    useReducer(reducer, initialState);
  const [bodyData, setBodyData] = useState(null);
  const [controller, setController] = useState(null);

  async function getSearchProduct(data = bodyData.product_name) {
    const newController = new AbortController();
    setController(newController);

    dispatch({ type: "loading", payload: true });

    try {
      const response = await productFetch.post(
        "/oxy-page-search-product/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          signal: newController.signal,
        }
      );
      setBodyData(data);
      console.log(response.data);
      dispatch({
        type: "product/loaded",
        payload: response.data["Product_data"],
      });
    } catch (error) {
      if (error.name === "CanceledError") {
        dispatch({ type: "abort/set" });
      } else {
        dispatch({
          type: "rejected",
          payload: error,
        });
      }
    }
  }

  function setView(str) {
    dispatch({ type: "view/set", payload: str });
  }

  function setSearchError(err) {
    dispatch({ type: "searchError/set", payload: err });
  }

  function setQuery(str) {
    dispatch({ type: "query/set", payload: str });
  }

  function cancelRequest() {
    if (controller) {
      controller.abort();
      setController(null);
    }
  }
  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        bodyData,
        getSearchProduct,
        isLoading,
        error,
        setView,
        query,
        setQuery,
        cancelRequest,
        view,
        setSearchError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}

export { useSearch, SearchProvider };
