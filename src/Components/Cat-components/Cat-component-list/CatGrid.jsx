import Card from "../../Card";

const CatGrid = () => {
  return (
    <div className="mobile:justify-start mobile:flex-wrap md:justify-evenly xl:justify-between md:items-center md:px-0 md:flex-row md:flex-wrap mobile:mt-[-14px] mobile:px-0 mobile:m-0 mobile:gap-2 md:gap-4 xl:gap-6 flex md:ml-0 xl:pl-10 flex-wrap w-full">
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>

    // <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
    // </div>
  );
};

export default CatGrid;
