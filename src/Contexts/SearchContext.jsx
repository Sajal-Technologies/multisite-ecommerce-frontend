import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
const SearchContext = createContext();

const initialState = {
  query: "",
  searchProducts: [],
  filters: [],
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
      return {
        ...state,
        searchProducts: action.payload["Product_data"],
        filters: action.payload.filters,
        isLoading: false,
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error:
          action.payload?.response?.data?.Message ||
          action.payload?.response?.statusText ||
          action.payload?.message ||
          "An unexpected error occurred",
      };
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
  const [{ searchProducts, isLoading, error, view, query, filters }, dispatch] =
    useReducer(reducer, initialState);
  const [controller, setController] = useState(null);

  async function getSearchProduct(data) {
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
      console.log(response.data);
      dispatch({
        type: "product/loaded",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
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
        getSearchProduct,
        isLoading,
        error,
        setView,
        filters,
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
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export { useSearch, SearchProvider };
