import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topheader from "./Components/Topheader";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Categroriespage from "./Components/Cat-components/Categroriespage";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductStyle2 from "./Components/ProductPage/ProductStyle2/ProductStyle2";
import CartPage from "./Components/CartPage/CartPage";

const App = () => {
  return (
    <>
      <Router>
        <div >
          <Topheader />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route path="/Categories" element={<Categroriespage />} />
          </Routes>
          <Routes>
            <Route path="/Product" element={<ProductPage/>}/>
            </Routes>
          <Routes>
            <Route path="/Product-style2" element={<ProductStyle2/>}/>
            </Routes>
          <Routes>
            <Route path="/Cart" element={<CartPage/>}/>
            </Routes>
          <Footer />
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
