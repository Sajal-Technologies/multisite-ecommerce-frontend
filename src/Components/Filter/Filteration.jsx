import { useEffect, useRef, useState } from "react";
import Slider from "react-slider";
import { useLocation } from "react-router-dom";
import FilterList from "./FilterList";
import { TfiReload } from "react-icons/tfi";

const MIN = 0;
const MAX = 120000;

const Filteration = ({
  filters,
  selectedFilters,
  clearFilters,
  filterChange,
  getFilters,
  queries,
  setURLQuery,
}) => {
  const [values, setValues] = useState([MIN, MAX]);
  const [isClearVisible, setIsClearVisible] = useState(false);

  const location = useLocation();
  const reloadIcon = useRef();

  useEffect(() => {
    const min = new URLSearchParams(location.search).get("ppr_min");
    const max = new URLSearchParams(location.search).get("ppr_max");

    setValues([parseInt(min, 10) || MIN, parseInt(max, 10) || MAX]);
  }, [location.search]);

  useEffect(() => {
    setIsClearVisible(values[0] !== MIN || values[1] !== MAX);
    const minParam =
      parseInt(new URLSearchParams(location.search).get("ppr_min"), 10) || MIN;
    const maxParam =
      parseInt(new URLSearchParams(location.search).get("ppr_max"), 10) || MAX;

    const shouldProceed = minParam !== values[0] || maxParam !== values[1];

    if (!shouldProceed || !queries.product_name) return;

    const Timeout = setTimeout(() => {
      const newParams = new URLSearchParams(location.search);
      newParams.has("ppr_min")
        ? newParams.set("ppr_min", values[0])
        : newParams.append("ppr_min", values[0]);

      newParams.has("ppr_max")
        ? newParams.set("ppr_max", values[1])
        : newParams.append("ppr_max", values[1]);

      setURLQuery(newParams);
      window.scrollTo(0, 0);
    }, 1000);
    return () => clearTimeout(Timeout);
  }, [values, location.search, queries.product_name, setURLQuery]);

  const handleChange = (index, event) => {
    const newValues = values.map((value, i) =>
      i === index ? parseInt(event.target.value, 10) : value
    );
    setValues(newValues);
    setIsClearVisible(true);
  };

  function handleClearPrice() {
    const newParams = new URLSearchParams(location.search);
    newParams.delete("ppr_min");
    newParams.delete("ppr_max");
    setURLQuery(newParams);
    setValues([MIN, MAX]);
  }

  function applyFilters() {
    const newParams = new URLSearchParams(location.search);

    if (selectedFilters.length !== 0) {
      newParams.has("filters")
        ? newParams.set("filters", selectedFilters.join("|"))
        : newParams.append("filters", selectedFilters.join("|"));

      newParams.has("page") && newParams.set("page", 1);
    } else newParams.delete("filters");

    setURLQuery(newParams);
    window.scrollTo(0, 0);
  }

  return (
    <div className="filteration mobile:hidden block w-full bg-[#FAFAFA] border-[1px] border-[#F2F2F2] py-2 rounded-2xl self-start">
      <h2 className="font-bold text-[#121212] text-lg  uppercase px-3">
        Filters
      </h2>
      <section className=" border-b-[1px] py-4 px-3 border-b-[#DEDEDE] mb-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[#121212] text-sm uppercase mb-2">
            Prices
          </h3>
          {isClearVisible && (
            <button
              className="text-sm text-[#005F85] uppercase font-bold self-start"
              onClick={handleClearPrice}
            >
              Clear
            </button>
          )}
        </div>
        <div>
          <Slider
            className={"slider w-full h-[6px] rounded bg-[#F2F2F2] mb-4"}
            onChange={(value) => {
              setValues(value);
              setIsClearVisible(true);
            }}
            value={values}
            min={MIN}
            max={MAX}
          />
          <div className="grid grid-cols-2 gap-1">
            <label className="w-full relative">
              Min
              <input
                type="number"
                value={values[0]}
                className="w-full p-2 pl-5 border-[1px] shadow-sm border-[#DEDEDE] text-lg rounded-md text-[#5C5C5C]"
                placeholder="0"
                onChange={(event) => handleChange(0, event)}
              />
              <span className="absolute left-2 top-2/4  text-[#5C5C5C] bg-transparent font-bold">
                &#8377;
              </span>
            </label>
            <label className="w-full relative">
              Max
              <input
                type="number"
                value={values[1]}
                className="w-full p-2 pl-5 border-[1px] shadow-sm border-[#DEDEDE] text-lg rounded-md text-[#5C5C5C]"
                placeholder="120000"
                onChange={(event) => handleChange(1, event)}
              />
              <span className="absolute left-2 top-2/4 text-[#5C5C5C] bg-transparent font-bold">
                &#8377;
              </span>
            </label>
          </div>
        </div>
      </section>
      {filters.length !== 0 ? (
        <>
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
          {selectedFilters.length !== 0 && (
            <button
              className="bg-[#ff7f00] text-nowrap shadow-md font-bold text-white w-full py-2 my-2 rounded-md"
              onClick={applyFilters}
            >
              Apply Changes
            </button>
          )}
        </>
      ) : (
        <button
          className="text-nowrap shadow-md font-bold  w-full py-2 my-2 flex items-center justify-center gap-2 rounded-md"
          onClick={() => {
            reloadIcon.current.classList.add("animate-spin");
            getFilters(queries.product_name);
          }}
        >
          <span className="" ref={reloadIcon}>
            <TfiReload strokeWidth={1} />
          </span>
          Reload Filters
        </button>
      )}
    </div>
  );
};

export default Filteration;
