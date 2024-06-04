import React from "react";
import Card from "../../Card";

const CatGrid = () => {
  return (
    <>
      <div className="mobile:justify-start mobile:flex-wrap md:justify-evenly xl:justify-between md:items-center md:px-0 md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 md:gap-4 xl:gap-6 flex md:ml-0 xl:pl-10 flex-wrap w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CatGrid;

