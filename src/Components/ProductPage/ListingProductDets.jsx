import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../../Contexts/ProductDetailsContext.jsx";
import Separator from "../Seperator.jsx";
import DynamicLogo from "../DynamicLogo.jsx";
import { useRef, useState } from "react";
import AddToCart from "../AddToCart.jsx";
import { FaRocket, FaStar } from "react-icons/fa";
import RelatedProduct from "./RelatedProduct.jsx";
import SaveForLater from "../SaveForLater.jsx";
import GoToCart from "../GoToCart.jsx";
import { useCart } from "../../Contexts/CartContext.jsx";

const ListingProductDets = () => {
  const { productDetails } = useProductDetails();
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const { cartItems } = useCart();

  const details = useRef();

  const userLocale = navigator.language || "en-US";
  const reviewsCount = new Intl.NumberFormat(userLocale).format(
    productDetails.reviews?.reviews_count || 0
  );

  const lowestPrice = productDetails?.pricing?.online.sort(
    (a, b) => a.price - b.price
  )[0];

  const highestPrice = productDetails?.pricing?.online.sort(
    (a, b) => b.price - a.price
  )[0];

  function scrollIntoView() {
    const cordinates = details.current.getBoundingClientRect();

    window.scrollTo({
      left: cordinates.left + window.scrollX,
      top: cordinates.top + window.scrollY,
      behavior: "smooth",
    });
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return productDetails?.description || "No Information";
      case "specifications":
        return productDetails?.specifications?.length > 0
          ? productDetails.specifications.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-xl  mobile:text-sm">
                  {section.section_title}
                </h3>
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index} className="text-base mobile:text-sm">
                      {item.title} : {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : "No Information";
      case "highlights":
        return productDetails?.highlights?.length > 0 ? (
          <ol className="list-decimal list-inside">
            {productDetails.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          "No Information"
        );
      case "reviews":
        return productDetails?.reviews?.top_review ? (
          <div>
            <h2 className="font-bold text-lg mobile:text-base mb-2">
              Top Reviews
            </h2>
            <h3 className="font-bold text-lg mobile:text-base mb-1">
              {productDetails.reviews.top_review?.title}
            </h3>
            <blockquote className="mb-4 text-base mobile:text-sm">
              &quot;{productDetails.reviews.top_review?.text}&quot;
            </blockquote>
            <div className="text-sm flex flex-col gap-1">
              <p>
                <span className="font-bold">Author:</span>{" "}
                {productDetails.reviews.top_review?.author}
              </p>
              <span>
                <span className="font-bold">Rating:</span>{" "}
                {productDetails.reviews.top_review?.rating}
              </span>
            </div>
          </div>
        ) : (
          "No Reviews"
        );
      default:
        return "No Information";
    }
  };

  return (
    <div className="main w-full flex-col flex gap-12 justify-center items-center">
      <div className=" h-fit mx-2 xl:w-[85%] mobile:w-[100%]  tablet:w-[100%] tablet:border-none mobile:border-none mobile:mt-6 mt-10 rounded-xl lg:border-[0.5px] xl:border-[#DEDEDE] @apply shadow-[3px_3px_12px_0px_#00000008] ">
        <div className="w-full flex flex-row mobile:flex-col tablet:flex-col items-center justify-between  mobile:p-0 p-10 sm:px-4 mobile:px-4 tablet:px-8">
          <div className="flex h-full tablet:w-full w-1/2 mobile:w-[100%] mobile:flex-col-reverse tablet:flex-col-reverse tablet-h-fit tablet:items-center mobile:h-fit mobile:items-center lg:h-[400px]">
            <div className="h-full flex items-center justify-center w-1/6 bg-transparent  mobile:w-full tablet:w-full">
              <div className="mini-image-container  flex flex-col mobile:flex-row tablet:flex-row gap-2 tablet:justify-center  items-center tablet:w-full mobile:w-full overflow-scroll h-full">
                {productDetails.images?.["full_size"].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="tablet:flex  tablet:items-center tablet:justify-center"
                  >
                    <div
                      className={`h-[70px] w-[60px] mobile:hidden tablet:hidden  border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
                        index === 0 ? "border-[2px] border-[#005F85]" : ""
                      }`}
                    >
                      <img
                        className="h-full w-full object-contain p-2"
                        src={item}
                        alt=""
                      />
                    </div>
                    <div
                      className={`h-[90px] mobile:block tablet:block hidden w-[80px] border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
                        index === 0 ? "border-[2px] border-[#005F85]" : ""
                      }`}
                    >
                      <img
                        className="h-full w-full object-contain p-2"
                        src={item}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden tablet:block  mobile:block h-[200px] w-full mb-[40px] ">
              <img
                className="h-full object-contain  rounded-xl overflow-hidden mx-auto"
                src={productDetails.images?.full_size[selectedImageIndex]}
                alt=""
              />
            </div>
            <div className="h-full w-5/6 bg-white tablet:hidden mobile:hidden rounded-2xl ml-2 overflow-hidden">
              <img
                className="h-full w-full object-contain"
                src={productDetails.images?.full_size[selectedImageIndex]}
                alt=""
              />
            </div>
          </div>

          <div className=" h-full pl-4 w-full  mobile:w-full tablet:w-full tablet:mt-8 mobile:mt-8 self-start">
            <div className="flex items-center gap-2 text-[#005F85] mb-2">
              <h3 className="text-sm  font-bold uppercase tracking-wider">
                Seller :
              </h3>
              <p className="text-sm font-bold uppercase tracking-wider">
                {productDetails?.pricing?.online?.[0]?.seller}
              </p>
            </div>
            <div className="mb-4">
              <h1 className="text-[#121212] font-bold text-3xl tablet:text-2xl tablet:leading-none mobile:text-xl mobile:leading-none line-clamp-2 break-words mb-4">
                {productDetails?.title}
              </h1>
              {productDetails.reviews?.reviews_count > 0 && (
                <div className="text-sm font-medium flex gap-1 items-center mb-4 mt-1">
                  <span
                    className={`flex items-center gap-1 px-2 py-1 rounded-sm bg-green-600 text-white font-bold ${
                      productDetails.reviews?.rating_stars >= 4
                        ? "bg-green-600"
                        : productDetails.reviews?.rating_stars >= 2
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {productDetails.reviews?.rating_stars}
                    <FaStar className="-mt-1 inline-block" />
                  </span>
                  <Separator />
                  <span className="text-gray-400 text-base font-bold ">
                    {reviewsCount} Reviews
                  </span>
                </div>
              )}
              <p className="text-[#5C5C5C]  mt-2">
                {productDetails?.description
                  ?.split(" ")
                  .slice(0, 30)
                  .join(" ") + "... "}
                <button
                  onClick={scrollIntoView}
                  className="text-[#005F85] font-medium hover:no-underline  underline"
                >
                  Know more
                </button>
              </p>
            </div>
            <p className="text-[#0B8500] font-medium leading-none text-[42px] tablet:text-2xl mobile:text-2xl mb-2">
              {productDetails.pricing?.online?.[0]?.currency}{" "}
              {productDetails.pricing?.online?.[0]?.price}
            </p>
            <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 mobile:gap-1 mb-4 *:rounded-full">
              <a
                href={productDetails.pricing?.online?.[0]?.["seller_link"]}
                className="bg-[#005F85] text-white hover:bg-transparent hover:text-[#005F85] transition-all  tablet:text-base font-semibold text-lg mobile:text-sm self-stretch shadow-[inset_0_0_0_1px_#005F85] flex items-center gap-2 justify-center "
                target="_blank"
              >
                <FaRocket />
                Buy Now
              </a>
              {cartItems.some((item) => item.product_id === id) ? (
                <GoToCart type="large" />
              ) : (
                <AddToCart type="large" id={id} />
              )}

              <div className="border border-[#005F85] rounded-full">
                <SaveForLater id={id} />
              </div>
            </div>

            {productDetails.pricing?.online.length > 1 && (
              <div className="grid grid-cols-2 mb-4">
                <div className=" bg-[#FAFEFF] border border-[#0c0b0b]  rounded-sm">
                  <p className="text-[#5C5C5C] text-center text-lg font-bold ">
                    Lowest Price
                  </p>
                  <div className=" flex justify-center h-[50px] items-center mobile:flex-col mobile:h-[70px] mobile:gap-1 gap-4">
                    <p className="text-[#0B8500] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                      {productDetails.pricing?.online?.[0].currency}{" "}
                      {lowestPrice?.price}
                    </p>
                    <div className="imgcontainer  text-lg font-bold  mobile:h-[80%]">
                      <DynamicLogo
                        sellerName={lowestPrice?.seller || "Unkown"}
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-[#FAFEFF] border border-[#DEDEDE]  rounded-sm">
                  <p className="text-[#5C5C5C]  text-center text-lg font-bold ">
                    Highest Price
                  </p>
                  <div className=" flex justify-center mobile:flex-col mobile:h-[70px] h-[50px] items-center mobile:gap-1 gap-4">
                    <p className="text-[#ED0303] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                      {productDetails.pricing?.online?.[0].currency}{" "}
                      {highestPrice?.price}
                    </p>
                    <div className="imgcontainer  text-lg font-bold  mobile:h-[80%]">
                      <DynamicLogo
                        sellerName={highestPrice?.seller || "Unknown"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {productDetails.pricing?.online.length === 1 && (
              <div className=" bg-[#FAFEFF] border border-[#DEDEDE]  rounded-sm">
                <p className="text-[#5C5C5C] text-center text-lg font-bold ">
                  Lowest Price
                </p>
                <div className=" flex justify-center items-center gap-4">
                  <p className="text-[#0B8500] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                    {productDetails.pricing?.online?.[0].currency}{" "}
                    {lowestPrice?.price}
                  </p>
                  <div className="imgcontainer  text-lg font-bold  mobile:h-[80%]">
                    <DynamicLogo sellerName={lowestPrice?.seller} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="w-full h-full flex  gap-8 p-4 mobile:p-2 text-lg"
          ref={details}
        >
          <div className="basis-full border border-[#DEDEDE] rounded-xl p-2 ">
            <div className="flex mobile:gap-3 mobile:justify-between mobile:*:text-sm gap-8 px-4 py-2 border-b border-[#DEDEDE] ">
              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "description"
                    ? "text-[#005F85] font-bold"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "highlights"
                    ? "text-[#005F85] font-bold"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("highlights")}
              >
                Highlights
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "specifications"
                    ? "text-[#005F85] font-bold"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "reviews"
                    ? "text-[#005F85] font-bold"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className="p-4 min-h-[200px]">
              <div className="text-[#5C5C5C] text-lg mobile:text-sm  tablet:text-base">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[85%] w-full mx-auto px-2">
        <h2 className="text-[#333] font-bold text-3xl mb-4">Prices</h2>
        <div className="w-full flex flex-col gap-4">
          {productDetails?.pricing?.online
            .sort((a, b) => a.price - b.price)
            .map((item, i) => {
              if (item.seller) {
                return (
                  <div
                    className="w-full rounded-xl  bg-white @apply shadow-[3px_3px_12px_0px_#00000008] mobile:px-2 mobile:py-1 py-2 px-4"
                    key={i}
                  >
                    <div className="  flex gap-2 items-center  mb-2 border-b border-[#DEDEDE]">
                      <Link to={item["seller_link"]} target="_blank">
                        <h3 className="text-xl font-bold uppercase text-blue-500 hover:underline">
                          {item.seller}
                        </h3>
                      </Link>

                      <div className="text-xl font-bold ml-auto">
                        {item.currency}
                        {item.price}
                      </div>
                      <SaveForLater
                        sellerLink={item.seller_link}
                        type="large"
                      />
                    </div>
                    <div className="w-full flex justify-between items-center gap-2 mobile:gap-1">
                      <p className="mr-auto text-[#5C5C5C] mobile:line-clamp-2">
                        {item.details}
                      </p>
                      <Link
                        to={item["seller_link"]}
                        target="_blank"
                        className="text-white font-bold border lg:text-lg tablet:text-base mobile:text-sm whitespace-nowrap border-[#005F85]  rounded-full bg-[#005F85] py-2 px-4 hover:bg-white hover:text-[#005F85]"
                      >
                        Shop Now
                      </Link>
                      <AddToCart sellerLink={item.seller_link} type="large" />
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      {productDetails.related_items && <RelatedProduct />}
    </div>
  );
};

export default ListingProductDets;
