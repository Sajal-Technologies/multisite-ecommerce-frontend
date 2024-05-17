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

const App = () => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

  const toggleCartPopup = () => {
    setIsCartPopupVisible(!isCartPopupVisible);
  };

  const closeCartPopup = () => {
    setIsCartPopupVisible(false);
  };

  const isSignInPage = location.pathname === "/Signin";

  return (
    <>
      <Router>
        <div
          className={` app ${isCartPopupVisible ? "cart-popup-active" : ""}`}
        >
          {!isSignInPage && (
            <Topheader className="header" toggleCartPopup={toggleCartPopup} />
          )}
          <div className="main-content">
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
          </div>
          {!isSignInPage && <Footer className="footer" />}

          {isCartPopupVisible && (
            <div className="overlay bg-[#00000080] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
              <Cartpopup closeCartPopup={closeCartPopup} />
            </div>
          )}
        </div>
      </Router>
    </>
  );
};

export default App;

{
  /* <Routes>
  <Route path="/categories" element={<Categories />} />
</Routes>; */
}
