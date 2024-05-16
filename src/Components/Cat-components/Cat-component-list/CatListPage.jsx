import React from "react";
import Card from "../../Card";
import CatList from "./CatList";

const CatListPage = () => {
  return (
    <>
      <div className=" gap-4 flex ml-4 pl-8 flex-wrap justify-between w-full">
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
