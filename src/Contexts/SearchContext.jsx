import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from "react";
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
    case "product/loaded": {
      const reminderItem = action.payload.length % 3;

      if (reminderItem > 0) {
        return {
          ...state,
          searchProducts: [
            ...state.searchProducts,
            ...action.payload.slice(0, -reminderItem),
          ],
          isLoading: false,
        };
      } else {
        return {
          ...state,
          searchProducts: [...state.searchProducts, ...action.payload],
          isLoading: false,
        };
      }
    }
    case "product/reset":
      return {
        ...state,
        searchProducts: [],
      };
    case "filters/loaded":
      return {
        ...state,
        filters: action.payload,
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: formatError(action.payload),
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
      return {
        ...state,
        selectedFilters: Array.isArray(action.payload)
          ? action.payload
          : [...state.selectedFilters, action.payload],
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

function formatError(error) {
  return (
    error?.response?.data?.Message ||
    error?.response?.statusText ||
    error?.message ||
    "An unexpected error occurred"
  );
}

function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controllerRef = useRef(null);
  const [queries, setURLQuery] = useURL();

  const { selectedFilters } = state;

  // Fetch Functions
  const getSearchProduct = useCallback(async function getSearchProduct(data) {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    controllerRef.current = new AbortController();

    dispatch({ type: "loading", payload: true });

    try {
      const response = await productFetch.post(
        "/oxy-page-search-product/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          signal: controllerRef.current.signal,
        }
      );
      dispatch({
        type: "product/loaded",
        payload: response.data.Product_data,
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
  }, []);

  const fetchMore = useCallback(async function fetchMore(data) {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    controllerRef.current = new AbortController();

    const response = await productFetch.post(
      "/oxy-page-search-product/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        signal: controllerRef.current.signal,
      }
    );

    dispatch({
      type: "product/loaded",
      payload: response.data.Product_data,
    });
  }, []);

  const getFilters = useCallback(async (product_name) => {
    try {
      const response = await productFetch.post(
        "/get-filter/",
        { product_name, page_number: 1 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "filters/loaded",
        payload: response.data.filters,
      });
    } catch (error) {
      getFilters(product_name);
    }
  }, []);

  // Setter Functions
  function setView(str) {
    dispatch({ type: "view/set", payload: str });
  }

  function setSearchError(err) {
    dispatch({ type: "searchError/set", payload: err });
  }

  const setQuery = useCallback(function setQuery(str) {
    dispatch({ type: "query/set", payload: str });
  }, []);

  const resetProduct = useCallback(function resetProduct() {
    dispatch({ type: "product/reset" });
  }, []);

  //Filters Handler
  const setFilters = useCallback(function setFilters(filters) {
    filters &&
      dispatch({
        type: "selectedFilters/set",
        payload: filters,
      });
  }, []);

  function filterChange(e) {
    const { value, checked } = e.target;
    checked
      ? dispatch({ type: "selectedFilters/set", payload: value })
      : dispatch({ type: "selectedFilters/remove", payload: value });
  }

  const clearFilters = useCallback(() => {
    const newParams = new URLSearchParams(location.search);
    newParams.delete("filters");

    setURLQuery(newParams);
    dispatch({ type: "filters/clear" });
  }, [setURLQuery]);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        setView,
        setQuery,
        setSearchError,
        selectedFilters,
        getSearchProduct,
        filterChange,
        clearFilters,
        setFilters,
        getFilters,
        resetProduct,
        fetchMore,
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
