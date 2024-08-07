import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSearch } from "../../Contexts/SearchContext";

function FilterList({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedFilters, filterChange } = useSearch();

  return (
    <section className="filter-category w-full border-b-[1px] py-4 px-3 border-b-[#DEDEDE] cursor-pointer">
      <div
        className=" flex justify-between items-center"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <h3 className="font-semibold text-[#121212] text-sm uppercase">
          {data.title}
        </h3>
        {isOpen ? (
          <FiChevronUp className="text-[#005F85] text-lg" />
        ) : (
          <FiChevronDown className="text-[#005F85] text-lg" />
        )}
      </div>
      {isOpen && (
        <div className="pt-2 px-3">
          <ul className="flex flex-col gap-1">
            {Object.keys(data?.Value || {}).map((key) => (
              <li key={data.Value[key]}>
                <label className="flex items-center gap-2 text-lg font-normal">
                  <input
                    type="checkbox"
                    value={data.Value[key]}
                    className="w-4 h-4"
                    onChange={filterChange}
                    checked={selectedFilters.includes(data.Value[key])}
                  />

                  {key}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default FilterList;
