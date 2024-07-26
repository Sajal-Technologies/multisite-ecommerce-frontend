import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrump = () => {
  return (
    <>
      <div className="bread-crumps pt-4 mobile:hidden gap-1 xl:px-[7.5vw] mt-10 text-sm flex items-center">
        <FiHome className="text-[#7A7A7A]" />
        <Link className="text-[#7A7A7A]" to="/">
          Home
        </Link>
        <FiChevronRight className="text-[#7A7A7A]" />
        <Link className="text-[#7A7A7A]" to="">
          Category Title
        </Link>
        <FiChevronRight className="text-[#7A7A7A]" />
        <Link className="text-[#005F85] font-medium" to="">
          Sub category Title
        </Link>
      </div>
    </>
  );
};

export default Breadcrump;
