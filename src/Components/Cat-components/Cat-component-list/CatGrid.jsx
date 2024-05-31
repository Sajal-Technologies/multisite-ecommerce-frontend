import React from "react";
import Card from "../../Card";

const CatGrid = () => {
  return (
    <>
      <div className="max-[600px]:justify-start max-[600px]:flex-wrap md:justify-start md:items-center md:px-2 md:flex-row md:flex-wrap max-[600px]:mt-[-14px] max-[600px]:px-0 max-[600px]:m-0 max-[600px]:gap-2 md:gap-4 xl:gap-6 flex md:ml-0 xl:pl-10 xl:flex-wrap xl:justify-between w-full">
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

{
  /* <div className=" gap-4 flex ml-4 pl-8 flex-wrap  justify-between w-full">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div> */
}
