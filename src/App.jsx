import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Topheader from "./Components/Topheader";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Categroriespage from "./Components/Cat-components/Categroriespage";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductStyle2 from "./Components/ProductPage/ProductStyle2/ProductStyle2";
import CartPage from "./Components/CartPage/CartPage";
import Cartpopup from "./Components/CartPage/Cartpopup";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpPage from "./Components/SignIn/SignUpPage";
import ForgotPsw from "./Components/ForgotPassword/ForgotPsw";
import OTPVerification from "./Components/OTPVerification/OTPVerification";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

const App = () => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

  const toggleCartPopup = () => {
    setIsCartPopupVisible(!isCartPopupVisible);
  };

  const closeCartPopup = () => {
    setIsCartPopupVisible(false);
  };

  const isSignInPage = location.pathname === "/SignIn";
  const isSignUpPage = location.pathname === "/SignUp";
  const isForgotPsw = location.pathname === "/ForgotPassword";
  const isOTPVerification = location.pathname === "/OTPVerification";
  const isResetPassword = location.pathname === "/ResetPassword";

  // const hideHeaderPaths = [
  //   isSignInPage,
  //   isSignUpPage,
  //   isForgotPsw,
  //   isOTPVerification,
  //   isResetPassword,
  // ];
  // const isHeaderVisible = !hideHeaderPaths.includes(true);

  return (
    <>
      {/* <Router> */}
      <div className={` app ${isCartPopupVisible ? "cart-popup-active" : ""}`}>
        {!isSignInPage &&
          !isSignUpPage &&
          !isForgotPsw &&
          !isOTPVerification &&
          !isResetPassword && (
            <Topheader className="header" toggleCartPopup={toggleCartPopup} />
          )}
        <div className="main-content bg-[#FAFAFA] pt-[200px] mobile:pt-[70px]">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route path="/Categories" element={<Categroriespage />} />
          </Routes>
          <Routes>
            <Route path="/Product" element={<ProductPage />} />
          </Routes>
          <Routes>
            <Route path="/Product-style2" element={<ProductStyle2 />} />
          </Routes>
          <Routes>
            <Route path="/Cart" element={<CartPage />} />
          </Routes>
          <Routes>
            <Route path="/Signin" element={<SignInPage />} />
          </Routes>
          <Routes>
            <Route path="/SignUp" element={<SignUpPage />} />
          </Routes>
          <Routes>
            <Route path="/ForgotPassword" element={<ForgotPsw />} />
          </Routes>
          <Routes>
            <Route path="/OTPVerification" element={<OTPVerification />} />
          </Routes>
          <Routes>
            <Route path="/ResetPassword" element={<ResetPassword />} />
          </Routes>
        </div>
        {!isSignInPage &&
        !SignUpPage &&
        !isForgotPsw &&
        !isOTPVerification &&
        !isResetPassword ? (
          <Footer className="footer" />
        ) : (
          ""
        )}

        <Footer className="footer" />

        {/* {!SignUpPage ? <Footer className="footer" /> : ""} */}

        {isCartPopupVisible && (
          <div className="overlay bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <Cartpopup closeCartPopup={closeCartPopup} />
          </div>
        )}
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
