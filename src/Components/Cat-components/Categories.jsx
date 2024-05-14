// import React from "react";
// import Breadcrump from "./Breadcrump";
// import Sort from "./Sort";
// import Filteration from "./Filteration";
// import CatList from "./Cat-component-list/CatList";
// import { Routes } from "react-router-dom";

// const Categories = () => {
//   return (
//     <>
//       <div className="flex flex-col bg-[#FAFAFA]">
//         <Breadcrump />
//         <Sort />
//         <Filteration />
//       </div>
//     </>
//   );
// };
// export default Categories;















// const Categories = () => {
//   let minVal = document.querySelector(".min-val");
//   let maxVal = document.querySelector(".max-val");
//   let priceInputMin = document.querySelector(".min-input");
//   let priceInputMax = document.querySelector(".max-input");
//   let minTooltip = document.querySelector(".min-tooltip");
//   let maxTooltip = document.querySelector(".max-tooltip");
//   let minGap = 0;
//   let range = document.querySelector(".slider-tack");
//   let sliderMinValue = parseInt(minVal.min);
//   let sliderMaxValue = parseInt(maxVal.max);

//   useEffect(() => {
//     minVal = document.querySelector(".min-val");
//     maxVal = document.querySelector(".max-val");
//     priceInputMin = document.querySelector(".min-input");
//     priceInputMax = document.querySelector(".max-input");
//     minTooltip = document.querySelector(".min-tooltip");
//     maxTooltip = document.querySelector(".max-tooltip");
//     minGap = 0;
//     range = document.querySelector(".slider-tack");
//     sliderMinValue = parseInt(minVal.min);
//     sliderMaxValue = parseInt(maxVal.max);

//     slideMin();
//     slideMax();
//   }, []);

//   const slideMin = () => {
//     let gap = parseInt(maxVal.value) - parseInt(minVal.value);
//     if(gap <= minGap) {
//       minVal.value = parseInt(maxVal.value) - minGap;
//     }
//     minTooltip.innerHTML = "&#8377;" + minVal.value;
//     priceInputMin.value = minVal.value;
//     setArea();
//   }

//   const slideMax = () => {
//     let gap = parseInt(maxVal.value) - parseInt(minVal.value);
//     if(gap <= minGap) {
//       maxVal.value = parseInt(minVal.value) + minGap;
//     }
//     maxTooltip.innerHTML = "&#8377;" + maxVal.value;
//     priceInputMax.value = maxVal.value;
//     setArea();
//   }

//   const setArea = () => {
//     range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
//     minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
//     range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%"
//     maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%"
//   }

//   const setMinInput = () => {
//     let minPrice = parseInt(priceInputMin.value);
//     if(minPrice < sliderMinValue){
//       priceInputMin.value = sliderMinValue;
//     }
//     minVal.value = priceInputMin.value;
//     slideMin();
//   }

//   const setMaxInput = () => {
//     let maxPrice = parseInt(priceInputMax.value);
//     if(maxPrice < sliderMaxValue){
//       priceInputMax.value = sliderMaxValue;
//     }
//     maxVal.value = priceInputMax.value;
//     slideMax();
//   }

//   // window.onload = function () {
//   //   slideMin();
//   //   slideMax();
//   // };

//   // function slideMin() {
//   //   let gap = parseInt(maxVal.value) - parseInt(minVal.value);
//   //   if (gap <= minGap) {
//   //     minVal.value = parseInt(maxVal.value) - minGap;
//   //   }
//   //   minTooltip.innerHTML = "&#8377;" + minVal.value;
//   //   priceInputMin.value = minVal.value;
//   //   setArea();
//   // }

//   // function slideMax() {
//   //   let gap = parseInt(maxVal.value) - parseInt(minVal.value);
//   //   if (gap <= minGap) {
//   //     maxVal.value = parseInt(minVal.value) + minGap;
//   //   }
//   //   maxTooltip.innerHTML = "&#8377;" + maxVal.value;
//   //   priceInputMax.value = maxVal.value;
//   //   setArea();
//   // }

//   // function setArea() {
//   //   range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
//   //   minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
//   //   range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
//   //   maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
//   // }

//   // const setMinInput = () => {
//   //   let minPrice = parseInt(priceInputMin.value);
//   //   if (minPrice < sliderMinValue) {
//   //     priceInputMin.value = sliderMinValue;
//   //   }
//   //   minVal.value = priceInputMin.value;
//   //   slideMin();
//   // };

//   // const setMaxInput = () => {
//   //   let maxPrice = parseInt(priceInputMax.value);
//   //   if (maxPrice < sliderMaxValue) {
//   //     priceInputMax.value = sliderMaxValue;
//   //   }
//   //   maxVal.value = priceInputMax.value;
//   //   slideMax();
//   // }
