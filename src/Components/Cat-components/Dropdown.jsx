import React from "react";
import Select from "react-select";

const Dropdown = () => {
  const options = [
    { value: "lorem", label: "Option One" },
    { value: "lorem2", label: "Option Two" },
    { value: "lorem3", label: "Option Three" },
    { value: "lorem4", label: "Option Four" },
  ];
  return (
    <>
      <Select 
        options={options}
        placeholder="Relevancy"
        className="w-[230px] mobile:hidden"
        noOptionsMessage={() => "No data found.."}
        styles={{
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "#005F85",
            opacity: 1,
            fontWeight: 500
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#005F85 !important",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#DEDEDE !important"
          }),
          Dropdown:(baseStyles)=>({
            ...baseStyles,
            color: "#005F85 !important"
          })
        }}
      />
    </>
  );
};

export default Dropdown;
