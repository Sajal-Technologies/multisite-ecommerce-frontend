import React from "react";
import Card from "../../Card";
import CatList from "./CatList";

const CatListPage = () => {
  return (
    <>
      <div className="mobile:justify-start mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 gap-4 flex xl:pl-8 md:pl-4 flex-wrap w-full md:w-full">
        <CatList />
        <CatList />
        <CatList />
        <CatList />
        <CatList />
        <CatList />
      </div>
    </>
  );
};

export default CatListPage;
