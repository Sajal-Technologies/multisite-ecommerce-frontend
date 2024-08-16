import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from "react";
import productFetch from "../Axios Instance/productAxios";
import useURL from "../hooks/useURL";
const CategoryContext = createContext();

const initialState = {
  categoryProducts: [],
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
        categoryProducts: [
          ...state.categoryProducts,
          ...action.payload["Product_data"],
        ],
        isLoading: false,
      };
    case "product/reset":
      return {
        ...state,
        categoryProducts: [],
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
    case "view/set":
      return { ...state, view: action.payload };
    case "error/set":
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

function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [queries, setURLQuery] = useURL();
  const controllerRef = useRef(null);

  const { selectedFilters } = state;

  // Fetch Functions
  const getCategoryProduct = useCallback(async function getCategoryProduct(
    data
  ) {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    controllerRef.current = new AbortController();

    dispatch({ type: "loading", payload: true });

    try {
      const response = await productFetch.post(
        "oxy-category-page-search/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          signal: controllerRef.current.signal,
        }
      );
      console.log(data);
      console.log(response.data);
      dispatch({
        type: "product/loaded",
        payload: response.data,
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
  },
  []);

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
      payload: response.data,
    });
  }, []);

  const getFilters = useCallback(async (product_name) => {
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
  }, []);

  // Setter Functions
  function setView(str) {
    dispatch({ type: "view/set", payload: str });
  }

  function setCategoryError(err) {
    dispatch({ type: "error/set", payload: err });
  }

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
    <CategoryContext.Provider
      value={{
        ...state,
        setView,
        getCategoryProduct,
        setCategoryError,
        selectedFilters,
        filterChange,
        clearFilters,
        setFilters,
        getFilters,
        fetchMore,
        resetProduct,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("usecategory must be used within a CategoryProvider");
  }
  return context;
}

export { useCategory, CategoryProvider };
