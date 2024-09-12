import Dropdown from "./Dropdown";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const Sort = ({ title, setView, setURLQuery, view }) => {
  return (
    <>
      <div className=" xl:px-[7.5vw] tablet:px-4 mobile:px-4 mobile:w-full flex tablet:mt-6 xl:mt-10 mobile:mt-5 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold tablet:text-xl xl:text-2xl text-[#121212] mobile:text-lg mobile:text-nowrap capitalize">
            {title}
          </h1>
        </div>
        <div className=" flex items-center gap-2 mobile:hidden block">
          <p className="text-[#121212] mobile:hidden">Sort by</p>
          <Dropdown setURLQuery={setURLQuery} />
          <div className="flex items-center mobile:flex">
            <button
              className={`group flex ${
                view === "list" ? "bg-[#FF7F00]" : "bg-[#DEDEDE]"
              } hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-s-md`}
              onClick={() => setView("list")}
            >
              <FiList
                className={`${
                  view === "list" ? "text-white" : " text-[#121212]"
                } group-hover:text-white`}
              />
            </button>

            <button
              className={`group flex ${
                view === "grid" ? "bg-[#FF7F00]" : "bg-[#DEDEDE]"
              }  hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-e-md`}
              onClick={() => setView("grid")}
            >
              <FiGrid
                className={`${
                  view === "grid" ? "text-white" : " text-[#121212]"
                } group-hover:text-white`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
