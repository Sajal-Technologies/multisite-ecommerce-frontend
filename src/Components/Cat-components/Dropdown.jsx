import Select from "react-select";
import { useProduct } from "../../Contexts/ProductContext";

const Dropdown = () => {
  const { getProduct, bodyData } = useProduct();

  const handleSort = (e) => {
    if (bodyData.product_name) {
      getProduct({ ...bodyData, sort_by: e.value });
    }
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
      defaultValue={options[0]}
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
