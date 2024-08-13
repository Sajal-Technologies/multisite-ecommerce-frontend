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

      newParams.has("page") && newParams.set("page", 1);

      setURLQuery(newParams);
      window.scrollTo(0, 0);
    }, 1000);
    return () => clearTimeout(Timeout);
  }, [values]);

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

// <div className="filteration tablet:w-[280px] mobile:hidden h-fit flex flex-col tablet:m-0 tablet:gap-4 xl:gap-8 items-center justify-center w-[280px] bg-[#FAFAFA] border-[1px] border-[#F2F2F2] py-6 px-4 rounded-2xl">
//   <button className="bg-[#B2B2B2] text-nowrap text-white w-full py-3 px-14 rounded-md">
//     Apply Changes
//   </button>
//   <div className="filter-category w-full border-b-[1px] pb-4 border-b-[#DEDEDE]">
//     <div className="flex items-center justify-between ">
//       <p className="font-semibold text-[#121212] text-lg">Category title</p>
//       <FiChevronUp className="text-[#005F85] text-lg" />
//     </div>
//     {[
//       { name: "Mobile Accessories", count: "441" },
//       { name: "Electronics", count: "670" },
//       { name: "Smartphones", count: "67" },
//       { name: "Modern Tech", count: "132" },
//     ].map((item, index) => (
//       <div className="flex items-center my-4 justify-between " key={index}>
//         <p className="text-[#5C5C5C] text-lg">{item.name}</p>
//         <p className="text-[#5C5C5C] text-lg">{item.count}</p>
//       </div>
//     ))}
//     <p className="text-[#005F85] cursor-pointer font-semibold capitalize underline">
//       see all
//     </p>
//   </div>
//   <div className="w-full">
//     <div className="flex flex-col gap-4 w-full items-center justify-between">
//       <div className="flex w-full items-center justify-between">
//         <p className="text-[#121212] font-semibold text-lg">Price range</p>
//         <FiChevronUp className="text-[#005F85] text-lg" />
//       </div>
//       <div className="w-full flex flex-col gap-4">
//         <Slider
//           className={"slider w-full h-[6px] rounded bg-[#F2F2F2]"}
//           onChange={setValues}
//           value={values}
//           min={MIN}
//           max={MAX}
//         />
//         <div className="flex h-[85px] w-full ">
//           <div className="w-full ">
//             <p className=" w-full mb-4 text-[#121212]">Min</p>
//             <span className="border-[1px] text-base text-[#5C5C5C] input-field border-[#DEDEDE] bg-white py-[10px] px-2 rounded-md">
//               &#8377;
//               <input
//                 value={values[0]}
//                 className="w-[65%] ml-2"
//                 type="number"
//                 placeholder="0"
//                 onChange={(event) => handleChange(0, event)}
//               />
//             </span>
//           </div>
//           <div className="w-fit">
//             <p className="mb-4 text-[#121212]">Max</p>
//             <span className="border-[1px] text-base text-[#5C5C5C] input-field border-[#DEDEDE] bg-white py-[10px] px-2 rounded-md">
//               &#8377;
//               <input
//                 value={values[1]}
//                 className="w-[65%] ml-2"
//                 type="number"
//                 placeholder="0"
//                 onChange={(event) => handleChange(1, event)}
//               />
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="flex w-full items-center justify-between">
//         <p className="text-[#121212] font-semibold text-lg">Seller</p>
//         <FiChevronUp className="text-[#005F85] text-lg" />
//       </div>
//       <div className="w-full flex flex-col gap-4 border-b-[1px] border-[#DEDEDE] pb-4">
//         {[
//           {
//             name: "Amazon",
//             count: "56",
//             img: `${Amazon}`,
//           },
//           {
//             name: "Meesho",
//             count: "70",
//             img: `${Meesho}`,
//           },
//           { name: "Flipkart", count: "52", img: `${Flipkart}` },
//           { name: "Indiamart", count: "37", img: `${Indiamart}` },
//         ].map((item, index) => (
//           <div
//             className="flex w-full items-center gap-4 justify-between "
//             key={index}
//           >
//             <div className=" flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 className="w-5 h-5 cursor-pointer border-[#5C5C5C]"
//               />
//               <div className="img-container flex items-center justify-center overflow-hidden w-6 h-6">
//                 <img
//                   className={`w-full h-full object-center object-cover`}
//                   src={item.img}
//                   alt=""
//                 />
//               </div>
//               <p className="text-[#5C5C5C] text-lg">{item.name}</p>
//             </div>
//             <p className="text-[#5C5C5C] text-lg">{item.count}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex w-full items-center justify-between">
//         <p className="text-[#121212] font-semibold text-lg">Brand</p>
//         <FiChevronUp className="text-[#005F85] text-lg" />
//       </div>

//       <div className="flex flex-col w-full gap-4">
//         {[
//           { name: "Samsung", count: "49" },
//           { name: "Apple", count: "34" },
//           { name: "Huawei", count: "210" },
//           { name: "Realme", count: "26" },
//           { name: "Google Pixel", count: "10" },
//         ].map((item, index) => (
//           <div
//             className="flex w-full items-center gap-4 justify-between "
//             key={index}
//           >
//             <div className=" flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 className="w-5 h-5 cursor-pointer border-[#5C5C5C]"
//               />

//               <p className="text-[#5C5C5C] text-lg">{item.name}</p>
//             </div>
//             <p className="text-[#5C5C5C] text-lg">{item.count}</p>
//           </div>
//         ))}
//         <p className="text-[#005F85] cursor-pointer w-full font-semibold capitalize underline">
//           see all
//         </p>
//       </div>
//       <button className="bg-[#B2B2B2] text-white w-full py-3 px-14 rounded-md">
//         Apply Changes
//       </button>
//     </div>
//   </div>
// </div>
