import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function FilterList({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="filter-category w-full last-of-type:border-none border-b-[1px] py-4 px-3 border-b-[#DEDEDE] cursor-pointer">
      <div
        className=" flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
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
          <ul className="flex flex-col gap-[1px]">
            {Object.keys(data?.Value).map((item, i) => (
              <li key={i}>
                <label className="flex items-center gap-2 text-lg font-normal">
                  <input
                    type="checkbox"
                    value={data.Value[item]}
                    name={item}
                    className="w-4 h-4"
                    // checked={true}
                  />
                  {item}
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
