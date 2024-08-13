import smartphone from "../images/MainPage/Category/SmartPhone.jpg";
import cloth from "../images/MainPage/Category/T-shirt.jpg";
import bag from "../images/MainPage/Category/Bag.jpg";
import health from "../images/MainPage/Category/Health and Beauty.jpg";
import games from "../images/MainPage/Category/Gaming.jpg";

const Categories = () => {
  return (
    <div className="w-[85%] mt-12  mx-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
      </div>
      <div className=" grid  tablet:grid-cols-4 lg:grid-cols-4 grid-rows-[repeat(3,1fr)] mobile:grid-rows-[repeat(6,1fr)] md:grid-cols-3 mobile:gap-2 tablet:gap-2  lg:gap-4 *:rounded-3xl">
        <div className=" group relative overflow-hidden">
          <picture className="w-full h-full -z-10">
            <img
              src={cloth}
              alt=""
              className="w-full block object-cover h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="lg:text-xl xl:text-2xl tablet:text-base mobile:text-lg mobile:leading-[1.1]  font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1]  w-[60%]">
                Immerse Yourself in Every Story.
                {/* Book */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group relative overflow-hidden">
          <picture className="w-full h-full">
            <img
              src={games}
              alt=""
              className="w-full object-cover block h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="lg:text-xl xl:text-2xl tablet:text-xl mobile:text-lg mobile:leading-[1.1]   font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1]   tablet:w-full lg:w-[80%]">
                Play, Imagine, Explore.
                {/* Toy and Games */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group row-span-3 relative overflow-hidden">
          <picture className="w-full h-full">
            <img
              src={smartphone}
              alt=""
              className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full flex flex-col tablet:justify-between tablet:py-4">
              <h3 className="lg:text-xl xl:text-2xl tablet:text-xl mobile:text-lg mobile:leading-[1.1]  font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1] mb-3">
                Connect Smarter, Live Better
              </h3>
              <p className="lg:text-base tablet:text-sm lg:leading-tight tablet:leading-[1] mobile:hidden tablet:block  text-[#5C5C5C]">
                latest smartphones with advanced features and sleek designs.
              </p>
            </div>
          </a>
        </div>

        <div className=" group relative row-span-2 overflow-hidden">
          <picture className="w-full h-full">
            <img
              src={bag}
              alt=""
              className="w-full block object-cover h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="lg:text-xl xl:text-2xl tablet:text-base mobile:text-lg mobile:leading-[1.1]   font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1]  w-[80%]">
                Elevate Your Performance.
                {/* Sport */}
              </h3>
            </div>
          </a>
        </div>

        <div className=" group row-span-2 col-span-2 mobile:row-start-1 relative overflow-hidden">
          <picture className="w-full h-full">
            <img
              src={bag}
              alt=""
              className="w-full h-full block object-cover object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 px-4 py-8"
          >
            <div className="cursor-pointer w-full">
              <h3 className="xl:text-5xl lg:text-4xl tablet:text-2xl mobile:text-xl mobile:leading-[1.1] mobile:mb-2  font-extrabold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1] lg:mb-4 tablet:mb-2">
                Elevate Your Style <br /> with Modern <br /> Trends
              </h3>
              <p className="xl:text-xl lg:text-base tablet:text-sm font-semibold xl:leading-snug mobile:mb-2 lg:leading-tight tracking-wider lg:mb-5 tablet:mb-3 xl:mb-6 text-[#5C5C5C] lg:w-[50%] tablet:w-[80%] ">
                Discover stylish clothing and accessories that define your look.
              </p>
              <button className="text-white  bg-[#005F85] px-4 py-2 rounded-full text-base font-semibold">
                Explore More
              </button>
            </div>
          </a>
        </div>

        <div className=" group relative overflow-hidden">
          <picture className="w-full h-full">
            <img
              src={health}
              alt=""
              className="block object-cover w-full h-full object-center group-hover:scale-105 transition-all ease-in-out duration-300"
            />
          </picture>
          <a
            href="#"
            className="absolute top-0 left-0 right-0 bottom-0 z-10 p-4"
          >
            <div className="cursor-pointer w-full h-full">
              <h3 className="lg:text-xl xl:text-2xl tablet:text-base mobile:text-lg mobile:leading-[1.1]   font-bold xl:leading-[1.1] lg:leading-[1.1] tablet:leading-[1.1]  w-[80%]">
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
