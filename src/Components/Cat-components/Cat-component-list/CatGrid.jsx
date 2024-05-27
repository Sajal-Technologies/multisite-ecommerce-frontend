import React from "react";
import Card from "../../Card";

const CatGrid = () => {
  return (
    <>
      <div className="max-[600px]:justify-start max-[600px]:mt-[-14px] max-[600px]:px-0 max-[600px]:m-0 max-[600px]:gap-2 gap-4 flex ml-4 pl-8 flex-wrap justify-between w-full">
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
