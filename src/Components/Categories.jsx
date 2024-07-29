import { FiArrowRight } from "react-icons/fi";
// import Catbanner from "./Catbanner";
import smartphone from "../images/MainPage/Category/SmartPhone.jpg";
import cloth from "../images/MainPage/Category/T-shirt.jpg";
import bag from "../images/MainPage/Category/Bag.jpg";

const Categories = () => {
  return (
    <div className="w-[85%] mt-12  mx-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        <span className="flex items-center  gap-2 pr-5 text-[#121212] ">
          View All <FiArrowRight className="mobile:text-xl" />
        </span>
      </div>
      <div className=" grid  grid-cols-4 grid-rows-[1fr_1fr_1fr] gap-4 *:rounded-3xl">
        <div className=" group relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={cloth}
              alt=""
              className="w-full block object-cover h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="text-2xl font-bold leading-none mb-2 w-[60%]">
                Immerse Yourself in Every Story.
                {/* Book */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={bag}
              alt=""
              className="w-full block object-cover h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="text-2xl font-bold leading-none mb-2 w-[80%]">
                Elevate Your Performance.
                {/* Sport */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group row-span-3 relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={smartphone}
              alt=""
              className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full flex flex-col ">
              <h3 className="text-2xl font-bold leading-none mb-3">
                Connect Smarter, Live Better
              </h3>
              <p className="text-base leading-tight text-[#5C5C5C]">
                latest smartphones with advanced features and sleek designs.
              </p>
            </div>
            {/* <button className="text-white  bg-[#005F85] px-4 py-2 rounded-full text-base font-semibold absolute bottom-16 right-3">
            Shop Now
          </button> */}
          </a>
        </div>

        <div className=" group relative row-span-2 overflow-hidden">
          <div className="w-full h-full">
            <img
              src={bag}
              alt=""
              className="w-full object-cover block h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="text-2xl font-bold leading-none mb-2 w-[80%]">
                Play, Imagine, Explore.
                {/* Toy and Games */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group row-span-2 col-span-2 relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={bag}
              alt=""
              className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 px-4 py-8"
          >
            <div className="cursor-pointer w-full">
              <h3 className="text-5xl font-extrabold leading-none mb-4">
                Elevate Your Style <br /> with Modern <br /> Trends
              </h3>
              <p className="text-xl font-semibold leading-snug tracking-wider mb-6 text-[#5C5C5C] w-[50%]  ">
                Discover stylish clothing and accessories that define your look.
              </p>
              <button className="text-white  bg-[#005F85] px-4 py-2 rounded-full text-base font-semibold">
                Explore More
              </button>
            </div>
          </a>
        </div>

        <div className=" group relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={cloth}
              alt=""
              className="block object-cover w-full h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </div>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="text-2xl font-bold leading-none mb-2 w-[80%]">
                Radiate Wellness and Beauty
                {/* Health and Beauty */}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
