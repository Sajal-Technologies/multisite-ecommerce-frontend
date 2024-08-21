import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrump = ({ pageItem = null }) => {
  const location = window.location.pathname;
  const camelCase = (str) => {
    return str
      .replace(/-./g, (x) => x[1].toUpperCase())
      .replace(/^\w/, (x) => x.toUpperCase());
  };

  return (
    <>
      <div className="bread-crumps pt-4 mobile:hidden gap-1 xl:px-[7.5vw] mt-10 text-sm flex items-center">
        <FiHome className="text-[#7A7A7A]" />
        <Link className="text-[#7A7A7A]" to="/">
          Home
        </Link>
        <FiChevronRight className="text-[#7A7A7A]" />
        <div className="text-[#7A7A7A]">
          {camelCase(location.split("/")[1])}
        </div>
        {pageItem && (
          <>
            <FiChevronRight className="text-[#7A7A7A]" />
            <div className="text-[#7A7A7A]">{camelCase(pageItem)}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Breadcrump;
