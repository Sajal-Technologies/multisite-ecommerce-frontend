// import { FiPackage, FiRadio, FiShoppingBag, FiZap } from "react-icons/fi";

import { MdDevices, MdViewList } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineChrome } from "react-icons/ai";
import { GiGamepad, GiShoppingCart } from "react-icons/gi";
import { FaRegDotCircle, FaRegSmile, FaTshirt } from "react-icons/fa";

const CategoryList = () => {
  const categories = [
    {
      title: "All",
      link: "/Categories",
      icon: (
        <MdViewList className="text-[#005F85] text-3xl row-span-2 tablet:row-span-1" />
      ),
      description: "Explore our entire collection.",
    },
    {
      title: "Home Appliances",
      link: "/Categories",
      icon: <AiOutlineChrome className="text-[#005F85] text-3xl row-span-2" />,
      description: "Essentials for every household.",
    },
    {
      title: "Groceries",
      link: "/Categories",
      icon: <GiShoppingCart className="text-[#005F85] text-3xl row-span-2" />,
      description: "Fresh produce and pantry staples.",
    },
    {
      title: "Gaming Gears",
      link: "/Categories",
      icon: <GiGamepad className="text-[#005F85] text-3xl row-span-2" />,
      description: "Latest gear for gamers.",
    },
    {
      title: "Electronics",
      link: "/Categories",
      icon: <MdDevices className="text-[#005F85] text-3xl row-span-2" />,
      description: "Cutting-edge tech and gadgets.",
    },
    {
      title: "Accessories",
      link: "/Categories",
      icon: <FaRegDotCircle className="text-[#005F85] text-3xl row-span-2" />,
      description: "Stylish accessories for any look.",
    },
    {
      title: "Fashion",
      link: "/Categories",
      icon: <FaTshirt className="text-[#005F85] text-3xl row-span-2" />,
      description: "Trendy clothing and accessories.",
    },
    {
      title: "Beauty & Cosmetics",
      link: "/Categories",
      icon: <FaRegSmile className="text-[#005F85] text-3xl row-span-2" />,
      description: "Enhance your beauty routine.",
    },
  ];
  return (
    <div className="w-full border-y-[1px] mt-12 border-[#00A8EB]">
      <div className="w-[95%] mx-auto flex items-center justify-between gap-4 hideScroll overflow-x-auto ">
        {categories.map((item, i) => {
          return (
            <Link
              key={i}
              className={` grid lg:grid-cols-[auto_1fr] tablet:grid-cols-[1fr] tablet:justify-items-center mobile:justify-items-center  items-center gap-x-4 whitespace-nowrap text-[#005F85] font-medium mobile:text-sm mobile:px-3 mobile:py-2 relative px-6 py-4 transition duration-200 after:w-[1px] after:block after:h-[24px] after:bg-[#D9D9D9] after:absolute after:top- after:translate-y-0 after:right-[-3%] last-of-type:after:hidden
           `}
              to={item.link}
            >
              {item.icon}
              <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                {item.title}
              </h5>
              <p className="text-sm text-[#5C5C5C] mobile:hidden block">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
