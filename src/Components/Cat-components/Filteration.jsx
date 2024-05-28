import React from "react";
import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import Slider from "react-slider";
import Flipkart from "../../images/CategoriesPage/Filteraion/flipkart.png";
import Indiamart from "../../images/CategoriesPage/Filteraion/indiamart.png";
import Amazon from "../../images/CategoriesPage/Filteraion/amazon.png";
import Meesho from "../../images/CategoriesPage/Filteraion/meesho.png";
const MIN = 100;
const MAX = 12000;

const Filteration = () => {
  const [values, setValues] = useState([MIN, MAX]);

  const handleChange = (index, event) => {
    const newValue = parseInt(event.target.value, 10);
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <>
      <div className="filteration max-[600px]:hidden h-fit flex flex-col gap-8 items-center justify-center w-[280px] bg-[#FAFAFA] border-[1px] border-[#F2F2F2] py-6 px-4 rounded-2xl">
        <button className="bg-[#B2B2B2] text-nowrap text-white w-full py-3 px-14 rounded-md">
          Apply Changes
        </button>
        <div className="filter-category w-full border-b-[1px] pb-4 border-b-[#DEDEDE]">
          <div className="flex items-center justify-between ">
            <p className="font-semibold text-[#121212] text-lg">
              Category title
            </p>
            <FiChevronUp className="text-[#005F85] text-lg" />
          </div>
          {[
            { name: "Mobile Accessories", count: "441" },
            { name: "Electronics", count: "670" },
            { name: "Smartphones", count: "67" },
            { name: "Modern Tech", count: "132" },
          ].map((item, index) => (
            <div className="flex items-center my-4 justify-between ">
              <p className="text-[#5C5C5C] text-lg">{item.name}</p>
              <p className="text-[#5C5C5C] text-lg">{item.count}</p>
            </div>
          ))}
          <p className="text-[#005F85] cursor-pointer font-semibold capitalize underline">
            see all
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4 w-full items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <p className="text-[#121212] font-semibold text-lg">
                Price range
              </p>
              <FiChevronUp className="text-[#005F85] text-lg" />
            </div>
            <div className="w-full flex flex-col gap-4">
              <Slider
                className={"slider w-full h-[6px] rounded bg-[#F2F2F2]"}
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
              />
              <div className="flex h-[85px] w-full ">
                <div className="w-full ">
                  <p className=" w-full mb-4 text-[#121212]">Min</p>
                  <span className="border-[1px] text-lg text-[#5C5C5C] input-field border-[#DEDEDE] bg-white py-[10px] px-2 rounded-md">
                    &#8377;
                    <input
                      value={values[0]}
                      className="w-[65%] ml-2"
                      type="number"
                      thumbColor="transparent"
                      placeholder="0"
                      onChange={(event) => handleChange(0, event)}
                    />
                  </span>
                </div>
                <div className="w-fit">
                  <p className="mb-4 text-[#121212]">Max</p>
                  <span className="border-[1px] text-lg text-[#5C5C5C] input-field border-[#DEDEDE] bg-white py-[10px] px-2 rounded-md">
                    &#8377;
                    <input
                      value={values[1]}
                      className="w-[65%] ml-2"
                      type="number"
                      placeholder="0"
                      onChange={(event) => handleChange(1, event)}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              <p className="text-[#121212] font-semibold text-lg">Seller</p>
              <FiChevronUp className="text-[#005F85] text-lg" />
            </div>
            <div className="w-full flex flex-col gap-4 border-b-[1px] border-[#DEDEDE] pb-4">
              {[
                {
                  name: "Amazon",
                  count: "56",
                  img: `${Amazon}`,
                },
                {
                  name: "Meesho",
                  count: "70",
                  img: `${Meesho}`,
                },
                { name: "Flipkart", count: "52", img: `${Flipkart}` },
                { name: "Indiamart", count: "37", img: `${Indiamart}` },
              ].map((item, index, array) => (
                <div className="flex w-full items-center gap-4 justify-between ">
                  <div className=" flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer border-[#5C5C5C]"
                    />
                    <div className="img-container flex items-center justify-center overflow-hidden w-6 h-6">
                      <img
                        className={`w-full h-full object-center object-cover`}
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <p className="text-[#5C5C5C] text-lg">{item.name}</p>
                  </div>
                  <p className="text-[#5C5C5C] text-lg">{item.count}</p>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[#121212] font-semibold text-lg">Brand</p>
              <FiChevronUp className="text-[#005F85] text-lg" />
            </div>

            <div className="flex flex-col w-full gap-4">
              {[
                { name: "Samsung", count: "49" },
                { name: "Apple", count: "34" },
                { name: "Huawei", count: "210" },
                { name: "Realme", count: "26" },
                { name: "Google Pixel", count: "10" },
              ].map((item, index) => (
                <div className="flex w-full items-center gap-4 justify-between ">
                  <div className=" flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer border-[#5C5C5C]"
                    />

                    <p className="text-[#5C5C5C] text-lg">{item.name}</p>
                  </div>
                  <p className="text-[#5C5C5C] text-lg">{item.count}</p>
                </div>
              ))}
              <p className="text-[#005F85] cursor-pointer w-full font-semibold capitalize underline">
                see all
              </p>
            </div>
            <button className="bg-[#B2B2B2] text-white w-full py-3 px-14 rounded-md">
              Apply Changes
            </button>
          </div>
        </div>
      </div>
      {/* <Routes>
          <Route path="/Categories-Grid" element={<CatGrid />} />
        </Routes> */}
      {/* </div> */}
    </>
  );
};

export default Filteration;
