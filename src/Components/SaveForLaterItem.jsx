import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useSaveForLater } from "../Contexts/SaveForLaterContext";
import { FaRocket } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function SaveForLaterItem({ item }) {
  const { product_name, product_image, price, product_id, id, seller_name } =
    item;
  const { moveToCart, deleteSavedItem } = useSaveForLater();

  const [isMoving, setIsMoving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [setError] = useState(null);

  async function handleMoveToCart(id) {
    setIsMoving(true);
    try {
      await moveToCart({ savelater_id: id });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsMoving(false);
    }
  }

  async function handleRemove(id) {
    setIsDeleting(true);
    try {
      await deleteSavedItem({ savelater_id: id });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="card xl:max-w-[350px]  mobile:flex w-full h-fit rounded-2xl mobile:rounded-lg overflow-hidden border-[1px] border-[#F2F2F2]">
      <Link to={`/Product/${product_id}`}>
        <div className="imgcontainer w-full h-[210px] mobile:hidden p-2 flex items-center justify-center bg-[#FAFEFF]">
          <img
            className="w-full h-full object-contain p-6"
            src={product_image}
            alt=""
          />
        </div>
        <div className="lg:hidden md:hidden mobile:h-full tablet:hidden mobile:block mobile:flex-shrink-0">
          <div className="imgcontainer mobile:flex mobile:items-center w-[150px] mobile:justify-center mobile:p-5 h-full mobile:h-full p-2 flex items-center justify-center bg-[#FAFEFF]">
            <img className=" " src={product_image} alt="" />
          </div>
        </div>
      </Link>
      <div className="w-full mobile:w-full py-4 flex flex-col gap-4 mobile:gap-2 mobile:py-3 mobile:px-4">
        <Link to={`/Product/${product_id}`}>
          <div className="sellers mobile:hidden flex justify-between px-4 ">
            <p className="line-clamp-1 break-words text-sm font-bold uppercase tracking-wider text-[#005F85]">
              {seller_name}
            </p>
          </div>
        </Link>
        <div className="px-4 mobile:px-0">
          <Link
            to={`/Product/${product_id}`}
            className="text-[19px] h-[52px] leading-snug text-[#3D3D3D] font-medium line-clamp-2 overflow-hidden mobile:font-semibold mobile:text-sm"
          >
            {product_name}
          </Link>
        </div>
        <div className="sellers lg:hidden tablet:hidden mobile:block">
          <p className="line-clamp-1 break-words text-sm font-bold uppercase tracking-wider text-[#005F85]">
            {seller_name}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/Product/${product_id}`}>
            <div className="mobile:px-0">
              <p className="uppercase px-4 text-[#5C5C5C] text-lg mobile:text-xs flex gap-1 mobile:px-0">
                save <span className="line-through">&#8377;12550</span>
              </p>
              <p className="px-4 text-[#0B8500] text-2xl font-medium mobile:text-lg mobile:px-0">
                &#8377;{price}
              </p>
            </div>
          </Link>

          <button
            className={`flex gap-2 items-center px-3 border  border-[#005F85] rounded-3xl py-1 tablet:mr-4 lg:mr-4 ${
              isMoving
                ? "opacity-50 text-[#5C5C5C] cursor-not-allowed"
                : "text-[#005F85]"
            }`}
            onClick={() => handleMoveToCart(id)}
            disabled={isMoving}
          >
            {isMoving ? (
              <Loader />
            ) : (
              <FiShoppingBag className=" text-xl mobile:text-base" />
            )}
            <span className=" text-lg mobile:text-sm">
              {isMoving ? "Moving..." : "Move To Cart"}
            </span>
          </button>
        </div>
        <div className="px-4 mobile:px-0">
          <div className="w-full h-12 mobile:h-10 flex items-center justify-between">
            <button className="h-full w-[75%] mobile:w-[70%] bg-[#005F85] flex items-center justify-center gap-2 rounded-md">
              <FaRocket className="text-white" />
              <p className="text-white text-lg font-semibold mobile:text-sm cursor-pointer">
                Buy Now
              </p>
            </button>
            <button
              className="border-[1px] border-red-600 rounded-full p-1"
              onClick={() => handleRemove(id)}
            >
              {isDeleting ? (
                <Loader />
              ) : (
                <MdOutlineDeleteOutline className="text-red-600 text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveForLaterItem;
