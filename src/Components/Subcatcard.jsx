import { Link } from "react-router-dom";

const Subcatcard = ({ product }) => {
  const { thumbnail, title, price, product_id } = product;
  return (
    <Link to={`/product/${product_id}`}>
      <div className="subcatcard w-full flex items-center shadow-sm justify-between gap-4 text-[#262626] h-[105px] bg-white  p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="w-full">
          <p className="text-base mb-2 font-medium break-words line-clamp-2 overflow-hidden cursor-pointer">
            {title}
          </p>
          <span className="text-[#0B8500] font-bold text-xl">
            &#8377;{price}
          </span>
        </div>

        <img
          className="h-[100px] w-[100px] object-center block object-cover"
          src={thumbnail}
          alt=""
        />
      </div>
    </Link>
  );
};

export default Subcatcard;
