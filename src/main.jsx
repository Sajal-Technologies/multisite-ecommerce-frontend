import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { ProductProvider } from "./Contexts/ProductContext.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { SaveForLaterProvider } from "./Contexts/SaveForLaterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <SaveForLaterProvider>
              <App />
            </SaveForLaterProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
