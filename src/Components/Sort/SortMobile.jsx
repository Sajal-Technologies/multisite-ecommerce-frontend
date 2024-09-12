import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Slider from "react-slider";

const MIN = 0;
const MAX = 120000;

function SortMobile({ setView, setURLQuery, setIsSortOpen, view, queries }) {
  const [values, setValues] = useState([MIN, MAX]);
  const [isClearVisible, setIsClearVisible] = useState(false);

  const location = useLocation();

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
      setIsSortOpen(false);
      window.scrollTo(0, 0);
    }, 1000);
    return () => clearTimeout(Timeout);
  }, [
    values,
    location.search,
    queries.product_name,
    setURLQuery,
    setIsSortOpen,
  ]);

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

  return (
    <div className="mobile:block tablet:hidden pt-[100px] lg:hidden fixed top-0 bottom-0 left-0 right-0 z-40  w-full h-screen overflow-y-scroll hideScroll bg-[#FAFAFA] flex items-center gap-2 px-3">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#121212] text-lg  uppercase mb-2">
          Sort by
        </h2>
        <button className="text-2xl" onClick={() => setIsSortOpen(false)}>
          <IoClose />
        </button>
      </div>

      <div className=" flex items-center gap-4 relative z-40">
        <Dropdown setURLQuery={setURLQuery} setIsSortOpen={setIsSortOpen} />
        <div className="flex items-center mobile:flex">
          <button
            className={`group flex ${
              view === "list" ? "bg-[#FF7F00]" : "bg-[#DEDEDE]"
            } hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-s-md`}
            onClick={() => {
              setView("list");
              setIsSortOpen(false);
            }}
          >
            <FiList
              className={`${
                view === "list" ? "text-white" : " text-[#121212]"
              } group-hover:text-white`}
            />
          </button>

          <button
            className={`group flex ${
              view === "grid" ? "bg-[#FF7F00]" : "bg-[#DEDEDE]"
            }  hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-e-md`}
            onClick={() => {
              setView("grid");
              setIsSortOpen(false);
            }}
          >
            <FiGrid
              className={`${
                view === "grid" ? "text-white" : " text-[#121212]"
              } group-hover:text-white`}
            />
          </button>
        </div>
      </div>

      <div className=" border-b-[1px] py-4 px-3 border-b-[#DEDEDE] mb-2">
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
      </div>
    </div>
  );
}

export default SortMobile;
