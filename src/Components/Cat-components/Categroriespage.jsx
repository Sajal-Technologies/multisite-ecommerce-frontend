import React from "react";
import Breadcrump from "./Breadcrump";
import Sort from "./Sort";
import Filteration from "./Filteration";
import CatGrid from "./Cat-component-list/CatGrid";
import { useLocation } from "react-router-dom";
import CatListPage from "./Cat-component-list/CatListPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Categroriespage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const viewType = searchParams.get("view");

  return (
    <div className="flex flex-col w-full bg-[#FAFAFA]">
      <Breadcrump/>
      <Sort />
      <div className="flex w-full items-center justify-center">
        <div className="flex w-[85%] mt-4 gap-4 max-[600px]:w-full px-4 py-4 pb-16 justify-between">
          <Filteration />
          {viewType && viewType == "list" ? <CatListPage /> : <CatGrid />}
        </div>
      </div>
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
