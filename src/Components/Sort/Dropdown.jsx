import Select from "react-select";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Dropdown = ({ setURLQuery, setIsSortOpen }) => {
  const [defaultValue, setDefaultValue] = useState();
  const location = useLocation();

  const options = useMemo(() => {
    return [
      { value: "relevance", label: "Relevance" },
      { value: "low_to_high", label: "Low to High" },
      { value: "high_to_low", label: "High to Low" },
      { value: "rating", label: "Rating" },
    ];
  }, []);

  const handleSort = (e) => {
    const newParams = new URLSearchParams(location.search);
    newParams.has("sortby")
      ? newParams.set("sortby", e.value)
      : newParams.append("sortby", e.value);

    setURLQuery(newParams);
    setIsSortOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const value = new URLSearchParams(location.search).get("sortby");
    setDefaultValue(
      options.find((option) => option.value === value) || options[0]
    );
  }, [location.search, options]);

  return (
    <Select
      options={options}
      value={defaultValue}
      placeholder="Relevancy"
      className=" mobile:w-full tablet:w-[230px] lg:w-[230px]"
      noOptionsMessage={() => "No data found.."}
      onChange={handleSort}
      styles={{
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "#005F85",
          opacity: 1,
          fontWeight: 500,
        }),
        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "#005F85 !important",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "#DEDEDE !important",
        }),
        Dropdown: (baseStyles) => ({
          ...baseStyles,
          color: "#005F85 !important",
        }),
      }}
    />
  );
};

export default Dropdown;
