import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topheader from "./Components/Topheader";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Categroriespage from "./Components/Cat-components/Categroriespage";
import ProductPage from "./Components/ProductPage/ProductPage";

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
