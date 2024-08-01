import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { SaveForLaterProvider } from "./Contexts/SaveForLaterContext.jsx";
import { SearchProvider } from "./Contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <SaveForLaterProvider>
              <App />
            </SaveForLaterProvider>
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
