import { lazy, useState, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProductDetailsProvider } from "./Contexts/ProductDetailsContext";
import Cartpopup from "./Components/CartPage/Cartpopup";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// import TermsAndCondition from "./pages/TermsAndCondition";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

const Topheader = lazy(() => import("./Components/Topheader"));
const Footer = lazy(() => import("./Components/Footer"));
const Main = lazy(() => import("./Components/Main"));
const ProductPage = lazy(() => import("./Components/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const SignInPage = lazy(() => import("./Components/SignIn/SignInPage"));
const SignUpPage = lazy(() => import("./Components/SignIn/SignUpPage"));
const ForgotPsw = lazy(() => import("./Components/ForgotPassword/ForgotPsw"));
const OTPVerification = lazy(() =>
  import("./Components/OTPVerification/OTPVerification")
);
const ResetPassword = lazy(() =>
  import("./Components/ResetPassword/ResetPassword")
);
const SearchResult = lazy(() => import("./pages/SearchResult"));
const SaveForLaterPage = lazy(() => import("./pages/SaveForLaterPage"));
const Categories = lazy(() => import("./pages/Categories"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const App = () => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const { pathname } = useLocation();
  const location = useLocation();

  const toggleCartPopup = () => {
    setIsCartPopupVisible(!isCartPopupVisible);
  };

  const closeCartPopup = () => {
    setIsCartPopupVisible(false);
  };

  useEffect(() => {
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, [location]);

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
      <ScrollToTop />

      <Suspense fallback={null}>
        {!isCredencialPage && <Topheader toggleCartPopup={toggleCartPopup} />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:product" element={<Categories />} />
          <Route path="/Search" element={<SearchResult />} />
          <Route path="/SaveForLater" element={<SaveForLaterPage />} />
          <Route
            path="/Product/:id"
            element={
              <ProductDetailsProvider>
                <ProductPage />
              </ProductDetailsProvider>
            }
          />

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
          <Route path="Terms & Conditions" element={<TermsAndCondition />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {!isCredencialPage && <Footer />}
      </Suspense>

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
