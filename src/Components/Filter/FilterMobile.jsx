import { useRef } from "react";
import { useLocation } from "react-router-dom";
import FilterList from "./FilterList";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

function FilterMobile({
  filters,
  selectedFilters,
  clearFilters,
  filterChange,
  getFilters,
  queries,
  setURLQuery,
  setIsFilterOpen,
}) {
  const location = useLocation();
  const reloadIcon = useRef();

  function applyFilters() {
    const newParams = new URLSearchParams(location.search);

    if (selectedFilters.length !== 0) {
      newParams.has("filters")
        ? newParams.set("filters", selectedFilters.join("$"))
        : newParams.append("filters", selectedFilters.join("$"));

      newParams.has("page") && newParams.set("page", 1);
    } else newParams.delete("filters");

    setURLQuery(newParams);
    setIsFilterOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={`filteration mobile:block tablet:hidden pt-[100px] lg:hidden fixed top-0 bottom-0 left-0 right-0 z-40  w-full bg-[#FAFAFA] border-[1px] border-[#F2F2F2] py-2 rounded-2xl`}
    >
      <div className="flex justify-between items-center px-3">
        <h2 className="font-bold text-[#121212] text-lg  uppercase ">
          Filters
        </h2>
        <button className="text-2xl" onClick={() => setIsFilterOpen(false)}>
          <IoClose />
        </button>
      </div>
      {filters.length !== 0 ? (
        <div className="h-[80vh] overflow-y-scroll hideScroll">
          <button
            className="bg-[#ff7f00] text-nowrap shadow-md font-bold text-white w-full py-2 my-2 rounded-md"
            onClick={applyFilters}
          >
            Apply Changes
          </button>
          <div className=" text-end">
            {selectedFilters.length !== 0 && (
              <button
                className="text-sm text-[#005F85] py-4 px-3 uppercase font-bold"
                onClick={clearFilters}
              >
                Clear All
              </button>
            )}
          </div>
          <div>
            {filters?.map((listItem, i) => {
              if (listItem.title === "Price") return null;
              return (
                <FilterList
                  key={i}
                  data={listItem}
                  selectedFilters={selectedFilters}
                  filterChange={filterChange}
                />
              );
            })}
          </div>
          <button
            className="bg-[#ff7f00] text-nowrap shadow-md font-bold text-white w-full py-2 my-2 rounded-md"
            onClick={applyFilters}
          >
            Apply Changes
          </button>
        </div>
      ) : (
        <>
          <button
            className="text-nowrap shadow-md font-bold  w-full py-2 my-2 flex items-center justify-center gap-2 rounded-md"
            onClick={async () => {
              reloadIcon.current.classList.add("animate-spin");
              try {
                await getFilters(queries.product_name);
              } finally {
                reloadIcon.current.classList.remove("animate-spin");
              }
            }}
          >
            <span className="" ref={reloadIcon}>
              <TfiReload strokeWidth={1} />
            </span>
            Reload Filters
          </button>
          <p className="text-center text-gray-400">
            Something went Wrong, Please Reload Again!
          </p>
        </>
      )}
    </div>
  );
}

export default FilterMobile;
