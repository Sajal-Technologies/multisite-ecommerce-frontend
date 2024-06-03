import React from "react";
import Breadcrump from "./Breadcrump";
import Sort from "./Sort";
import Filteration from "./Filteration";
import CatGrid from "./Cat-component-list/CatGrid";
import { useLocation } from "react-router-dom";
import CatListPage from "./Cat-component-list/CatListPage";

const Categroriespage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const viewType = searchParams.get("view");

  return (
    <div className="flex flex-col w-full bg-[#FAFAFA]">
      <Breadcrump />
      <Sort />
      <div className="flex w-full items-center justify-center">
        <div className="flex xl:w-[85%] md:w-full mt-4 md:mt-0 xl:gap-0 md:gap-4 mobile:w-full px-4 py-4">
          <Filteration />
          {viewType && viewType == "list" ? <CatListPage /> : <CatGrid />}
        </div>
      </div>
    </div>
  );
};

export default Categroriespage;
