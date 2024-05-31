import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrump = () => {
  return (
    <>
      <div className="bread-crumps max-[600px]:hidden gap-1 xl:px-[7.5vw] md:mt-2 md:px-4 xl:mt-10 text-sm flex items-center">
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
