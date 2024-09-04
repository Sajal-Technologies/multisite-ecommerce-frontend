import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "./AuthContext";
import productFetch from "../Axios Instance/productAxios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const getCartItems = useCallback(
    async function getCartItems() {
      if (!user?.token?.access) return;
      dispatch({ type: "loading", payload: true });
      try {
        const response = await productFetch.get("/get-all-cartitem/", {
          headers: {
            Authorization: `Bearer ${user.token.access}`,
          },
        });
        dispatch({
          type: "cartItems/loaded",
          payload: response.data.cart_data,
        });
      } catch (error) {
        console.log(error);
        dispatch({ type: "rejected", payload: error.message });
      }
    },
    [user?.token?.access]
  );

  // Get Cart Items
  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  //Add to Cart
  async function addToCart(data) {
    try {
      await productFetch.post("/add-to-cart/", data, {
        headers: {
          Authorization: `Bearer ${user?.token.access}`,
        },
      });

      navigate("/Cart");
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  }

  // Delete Cart Items
  async function deleteCartItem(data) {
    try {
      await productFetch.post(`/delete-from-cart/`, data, {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });

      getCartItems();
    } catch (error) {
      console.log(error);
    }
  }

  //update Cart Items
  async function updateCartItem(data) {
    try {
      await productFetch.post(`/update-car/`, data, {
        headers: {
          Authorization: `Bearer ${user.token.access}`,
        },
      });

      getCartItems();
    } catch (error) {
      console.log(error);
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
        updateCartItem,
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
