import React from "react";
import Breadcrump from "./Breadcrump";
import Sort from "./Sort";
import Filteration from "./Filteration";
import CatGrid from "./Cat-component-list/CatGrid";
import CatList from "./Cat-component-list/CatList";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Categroriespage = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <Breadcrump />
      <Sort />
      <div className="flex px-[7.5vw] mt-4 gap-4 py-4 pb-16 justify-between">
        <Filteration /> 
        <CatGrid/>
        {/* <Routes>
          <Route path="/CatGrid" element={<CatGrid />} />
        </Routes> */}
      </div>
        {/* <CatList/> */}
    </div>
  );
};

export default Categroriespage;
























// import React from "react";
// import Breadcrump from "./Breadcrump";
// import Sort from "./Sort";
// import Filteration from "./Filteration";
// import CatGrid from "./Cat-component-list/CatGrid";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import CatList from "./Cat-component-list/CatList";
// // import { Routes } from "react-router-dom";
// const Categroriespage = () => {
//   return (
//     <>
    
//       <div className="flex flex-col bg-[#FAFAFA]">
//         <Breadcrump />
//         <Sort />
//         <div className="flex bg-red-500 px-[7.5vw] mt-4 gap-4 py-4 pb-16 justify-between">
//           <Filteration /> 
          
//           {/* <Routes>
//             <Route path="/CatGrid" element={<CatGrid />} />
//           </Routes> */}
//           {/* <CatGrid/> */}
//           {/* <CatGrid/> */}
//           <Routes>
//             <Route path="/Categories" element={<CatGrid />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categroriespage;
