import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import productFetch from "../Axios Instance/productAxios";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  isCartLoading: false,
  cartError: null,
  message: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isCartLoading: action.payload,
        cartError: null,
      };
    }
    case "cartItems/loaded":
      return {
        ...state,
        cartItems: action.payload,
        isCartLoading: false,
      };
    case "item/added":
      return {
        ...state,
        message: action.payload,
      };
    case "item/deleted":
      return {
        ...state,
        message: action.payload,
      };
    case "item/updated":
      return {
        ...state,
        message: action.payload,
        isCartLoading: false,
      };
    case "message/cleared":
      return {
        ...state,
        message: null,
      };
    case "rejected":
      return {
        ...state,
        isCartLoading: false,
        cartError: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
};

function CartProvider({ children }) {
  const { user } = useAuth();
  const [{ cartItems, isCartLoading, cartError }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Get Cart Items
  async function getCartItems() {
    dispatch({ type: "loading", payload: true });
    try {
      const response = await productFetch.get("/get-all-cartitem/", {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });
      console.log(response.data);
      dispatch({
        type: "cartItems/loaded",
        payload: response.data.cart_data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  //Add to Cart
  async function addToCart(data) {
    try {
      const response = await productFetch.post("/add-to-cart/", data, {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });
      console.log(response.data);
      dispatch({
        type: "item/added",
        payload: response.data.Message,
      });
      getCartItems();
    } catch (error) {
      console.log(error);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  // Delete Cart Items
  async function deleteCartItem(data) {
    try {
      const response = await productFetch.post(`/delete-from-cart/`, data, {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });
      dispatch({
        type: "item/deleted",
        payload: response.data.Message,
      });
      getCartItems();
    } catch (error) {
      console.log(error);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  function setMessage(message) {
    dispatch({ type: "message/cleared", payload: message });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartLoading,
        cartError,
        getCartItems,
        addToCart,
        deleteCartItem,
        setMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
