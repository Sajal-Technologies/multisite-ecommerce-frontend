import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import productFetch from "../Axios Instance/productAxios";

const SaveForLaterContext = createContext();

const initialState = {
  savedItems: [],
  isSaveLoading: false,
  saveError: null,
  saveMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isSaveLoading: action.payload,
        saveError: null,
      };
    }
    case "SavedItems/loaded":
      return {
        ...state,
        savedItems: action.payload,
        isSaveLoading: false,
      };

    case "rejected":
      return {
        ...state,
        isSaveLoading: false,
        saveError: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
};

function SaveForLaterProvider({ children }) {
  const { user } = useAuth();
  const [{ savedItems, isSaveLoading, saveError, saveMessage }, dispatch] =
    useReducer(reducer, initialState);

  // Get Saved Items
  async function getSavedItems() {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await productFetch.get("/get-all-savelateritem/", {
        headers: {
          Authorization: `Bearer ${user?.token?.access}`,
        },
      });
      console.log(response.data);
      dispatch({
        type: "SavedItems/loaded",
        payload: response.data.savelater_data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  //Add to Cart
  async function addToSaveForLater(data, setIsSaved) {
    try {
      await productFetch.post("/add-to-saveforlater/", data, {
        headers: {
          Authorization: `Bearer ${user?.token?.access}`,
        },
      });
      setIsSaved(true);
      getSavedItems();
    } catch (error) {
      console.log(error);
    }
  }

  // Delete Cart Items
  async function deleteSavedItem(data, setIsSaved) {
    try {
      await productFetch.post(`/delete-from-saveforlater/`, data, {
        headers: {
          Authorization: `Bearer ${user?.token?.access}`,
        },
      });

      setIsSaved(false);
      getSavedItems();
    } catch (error) {
      console.log(error);
    }
  }

  // Move To Cart
  async function moveToCart(data) {
    try {
      await productFetch.post(`/move-to-cart/`, data, {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });
      getSavedItems();
    } catch (error) {
      console.log(error);
    }
  }

  function setMessage(message) {
    dispatch({ type: "message/cleared", payload: message });
  }

  return (
    <SaveForLaterContext.Provider
      value={{
        savedItems,
        isSaveLoading,
        saveError,
        saveMessage,
        setMessage,
        getSavedItems,
        addToSaveForLater,
        deleteSavedItem,
        moveToCart,
      }}
    >
      {children}
    </SaveForLaterContext.Provider>
  );
}

function useSaveForLater() {
  const context = useContext(SaveForLaterContext);
  if (context === undefined) {
    throw new Error(
      "useSaveForLater must be used within a SaveForLaterProvider"
    );
  }
  return context;
}

export { useSaveForLater, SaveForLaterProvider };
