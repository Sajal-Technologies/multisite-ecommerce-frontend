import { createContext, useContext, useReducer, useState } from "react";
import productFetch from "../Axios Instance/productAxios";
import useURL from "../hooks/useURL";
const SearchContext = createContext();

const initialState = {
  query: "",
  searchProducts: [],
  filters: [],
  selectedFilters: [],
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
    case "selectedFilters/set":
      if (Array.isArray(action.payload))
        return {
          ...state,
          selectedFilters: [...state.selectedFilters, ...action.payload],
        };
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload],
      };
    case "selectedFilters/remove":
      return {
        ...state,
        selectedFilters: state.selectedFilters.filter(
          (item) => item !== action.payload
        ),
      };
    case "filters/clear":
      return { ...state, selectedFilters: [] };
    default:
      throw new Error("Invalid action");
  }
}

function SearchProvider({ children }) {
  const [
    { searchProducts, isLoading, error, view, query, filters, selectedFilters },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [controller, setController] = useState(null);
  const [queries, setURLQuery] = useURL();

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
      console.log(data);
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

  //Filters

  function setFilters(filters) {
    filters &&
      dispatch({
        type: "selectedFilters/set",
        payload: filters.split("."),
      });
  }

  function filterChange(e) {
    const { value, checked } = e.target;
    checked
      ? dispatch({ type: "selectedFilters/set", payload: value })
      : dispatch({ type: "selectedFilters/remove", payload: value });
  }

  function clearFilters() {
    const newParams = new URLSearchParams(location.search);
    newParams.delete("filters");

    setURLQuery(newParams);
    getSearchProduct({ ...queries, filters_all: selectedFilters.join(",") });
    dispatch({ type: "filters/clear", payload: [] });
  }

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        error,
        setView,
        filters,
        query,
        setQuery,
        view,
        setSearchError,
        selectedFilters,
        searchProducts,
        getSearchProduct,
        cancelRequest,
        filterChange,
        clearFilters,
        setFilters,
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
