import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Topheader from "./Components/Topheader";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Categroriespage from "./Components/Cat-components/Categroriespage";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductStyle2 from "./Components/ProductPage/ProductStyle2/ProductStyle2";
import CartPage from "./pages/CartPage";
import Cartpopup from "./Components/CartPage/Cartpopup";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpPage from "./Components/SignIn/SignUpPage";
import ForgotPsw from "./Components/ForgotPassword/ForgotPsw";
import OTPVerification from "./Components/OTPVerification/OTPVerification";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import SearchResult from "./pages/SearchResult";
import { ProductDetailsProvider } from "./Contexts/ProductDetailsContext";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const { pathname } = useLocation();

  const toggleCartPopup = () => {
    setIsCartPopupVisible(!isCartPopupVisible);
  };

  const closeCartPopup = () => {
    setIsCartPopupVisible(false);
  };

  // Check if the current path is related to credential page
  const isCredencialPage = [
    "/SignIn",
    "/SignUp",
    "/ForgotPassword",
    "/OTPVerification",
    "/ResetPassword",
  ].includes(pathname);

  return (
    <>
      {/* Utility Component to Scroll to top on page change */}
      <ScrollToTop />

      {/*  Render Topheader only if the current path is not a credential page  */}
      {!isCredencialPage && <Topheader toggleCartPopup={toggleCartPopup} />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Categories" element={<Categroriespage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route
          path="/Product/:id"
          element={
            <ProductDetailsProvider>
              <ProductPage />
            </ProductDetailsProvider>
          }
        />
        <Route path="/Product-style2" element={<ProductStyle2 />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route
          path="/OTPVerification"
          element={
            <ProtectedRoute>
              <OTPVerification />
            </ProtectedRoute>
          }
        />
        <Route path="/ForgotPassword" element={<ForgotPsw />} />
        <Route
          path="/ResetPassword"
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/*  Render Topheader only if the current path is not a credential page  */}
      {!isCredencialPage && <Footer />}

      {/* Model Window */}
      {isCartPopupVisible && (
        <div className="overlay bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <Cartpopup closeCartPopup={closeCartPopup} />
        </div>
      )}
    </>
  );
};

export default App;

{
  /* <div className={` app ${isCartPopupVisible ? "cart-popup-active" : ""}`}>
</div> */
}
