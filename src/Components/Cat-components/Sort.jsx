import Dropdown from "./Dropdown";
import { FiList } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sort = () => {
  return (
    <>
      <div className=" xl:px-[7.5vw] tablet:px-4 mobile:px-4 mobile:w-full flex tablet:mt-6 xl:mt-10 mobile:mt-5 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold tablet:text-xl xl:text-2xl text-[#121212] mobile:text-lg mobile:text-nowrap">
            Category title
          </h1>
          <span className="text-[#5C5C5C] mobile:text-xs">(195 results)</span>
        </div>
        <div className=" flex items-center gap-2">
          <p className="text-[#121212] mobile:hidden">Sort by</p>
          <Dropdown />
          <div className="flex items-center mobile:flex">
            <Link to="?view=list">
              <div className=" group flex bg-[#DEDEDE] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-s-md">
                <FiList className="bg-[#DEDEDE] text-[#5C5C5C]  group-hover:bg-[#FF7F00] group-hover:text-white" />
              </div>
            </Link>
            <Link to="?view=grid">
              <div className="group flex bg-[#FF7F00] hover:bg-[#FF7F00] hover:text-[white] p-2 rounded-e-md">
                <FiGrid className="bg-[#FF7F00] text-white group-hover:bg-[#FF7F00] group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
