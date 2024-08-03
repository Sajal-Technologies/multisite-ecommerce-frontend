import Select from "react-select";
import { useSearch } from "../../Contexts/SearchContext";
import { useLocation, useNavigate } from "react-router-dom";
import useURL from "../../hooks/useURL";

const Dropdown = () => {
  const { getSearchProduct } = useSearch();
  const navigate = useNavigate();
  const queries = useURL();
  const location = useLocation();

  const handleSort = (e) => {
    const newParams = new URLSearchParams(location.search);
    newParams.has("sortby")
      ? newParams.set("sortby", e.value)
      : newParams.append("sortby", e.value);

    navigate(`/Search?${newParams.toString()}`);
    getSearchProduct({ ...queries, sort_by: e.value });
  };

  const options = [
    { value: "relevance", label: "Relevance" },
    { value: "low_to_high", label: "Low to High" },
    { value: "high_to_low", label: "High to Low" },
    { value: "rating", label: "Rating" },
  ];

  return (
    <Select
      options={options}
      defaultValue={
        options[
          options.findIndex((option) => option.value === queries.sort_by)
        ] || options[0]
      }
      placeholder="Relevancy"
      className="w-[230px] mobile:hidden"
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
