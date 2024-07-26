// import Productimg from "../../images/ProductPage/Product.png";
// // import img2 from "../../images/ProductPage/img2.png";
// // import img3 from "../../images/ProductPage/img3.png";
// // import img4 from "../../images/ProductPage/img4.png";
// import { FiChevronDown } from "react-icons/fi";
import amazon from "../../images/ProductPage/amazon.png";
import indiamart from "../../images/ProductPage/indiamart.png";
import { Link, useParams } from "react-router-dom";
import ProductItem from "./ProductItem/ProductItem.jsx";
import { useProductDetails } from "../../Contexts/ProductDetailsContext.jsx";
import { useState } from "react";
import AddToCart from "../AddToCart.jsx";
import { FaStar } from "react-icons/fa";

const ListingProductDets = () => {
  const { productDetails } = useProductDetails();
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [seller, setSeller] = useState();
  const [activeTab, setActiveTab] = useState("description");

  const userLocale = navigator.language || "en-US";
  const reviewsCount = new Intl.NumberFormat(userLocale).format(
    productDetails.reviews?.reviews_count || 0
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return productDetails?.description || "No Information";
      case "specifications":
        return productDetails?.specifications?.length > 0
          ? productDetails.specifications.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-xl mobile:text-base">
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
            <h2 className="font-bold text-lg mb-2">Top Reviews</h2>
            <h3 className="font-bold text-lg mb-1">
              {productDetails.reviews.top_review?.title}
            </h3>
            <blockquote className="mb-4 text-base">
              "{productDetails.reviews.top_review?.text}"
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
    <div className="main w-full flex justify-center items-center">
      <div className=" h-fit mx-2 xl:w-[85%] mobile:w-[100%] tablet:w-[100%] tablet:border-none mobile:border-none mobile:mt-6 mt-10 rounded-xl lg:border-[0.5px] xl:border-[#DEDEDE] @apply shadow-[3px_3px_12px_0px_#00000008] ">
        <div className="w-full flex flex-row mobile:flex-col tablet:flex-col items-center justify-between  mobile:p-0 p-10 sm:px-4 mobile:px-4 tablet:px-8">
          <div className="flex h-full tablet:w-full w-1/2 mobile:w-[100%] mobile:flex-col-reverse tablet:flex-col-reverse tablet-h-fit tablet:items-center mobile:h-fit mobile:items-center lg:h-[400px]">
            <div className="h-full flex items-center justify-center w-1/6 bg-white mobile:w-full tablet:w-full">
              <div className="mini-image-container flex flex-col mobile:flex-row tablet:flex-row gap-2  items-center tablet:w-full mobile:w-full overflow-scroll h-full">
                {productDetails.images?.["full_size"].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="w-full tablet:flex tablet:items-center tablet:justify-center"
                  >
                    <div
                      className={`h-[70px] mobile:hidden tablet:hidden w-5/6 border-[1px] border-[#C9C9C9] hover:border-2 hover:border-[#005F85] rounded-lg ${
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
            <div className="hidden tablet:block mobile:block h-[200px] w-full mb-[40px]">
              <img
                className="h-full w-full object-contain"
                src={productDetails.images?.full_size[selectedImageIndex]}
                alt=""
              />
            </div>
            <div className="h-full w-5/6 bg-white tablet:hidden mobile:hidden">
              <img
                className="h-full w-full object-contain"
                src={productDetails.images?.full_size[selectedImageIndex]}
                alt=""
              />
            </div>
          </div>
          <div className=" h-full pl-4 w-full  mobile:w-full tablet:w-full tablet:mt-8 mobile:mt-8 flex flex-col gap-8">
            <select
              className="w-full h-[50px] px-4 border rounded-lg border-[#DEDEDE] text-[#005F85] text-[19px] font-medium"
              onChange={(e) => setSeller(e.target.value)}
              value={seller}
            >
              {productDetails?.pricing?.online.map((item, index) => (
                <option key={index} value={item.seller}>
                  {item.seller}
                </option>
              ))}
            </select>
            <div>
              {/* No data in API */}
              {/* <p className="text-lg text-[#005F85] font-semibold tablet:mb-1 mobile:mb-1">
                Brand: SAMSUNG
              </p> */}
              <Link
                to="/Product-style2"
                className="text-[#121212] font-medium text-2xl tablet:text-xl tablet:leading-none mobile:text-xl mobile:leading-none"
              >
                {productDetails.title}
              </Link>
              <br />
              {productDetails.reviews?.reviews_count > 0 && (
                <div className="text-sm font-medium flex gap-2 mt-1">
                  <span className="flex items-center gap-1 px-1 rounded-sm bg-green-600 text-white font-bold">
                    {productDetails.reviews?.rating_stars}
                    <FaStar className="-mt-1" />
                  </span>
                  <span className="text-gray-400 text-base font-bold ">
                    {reviewsCount} Reviews
                  </span>
                </div>
              )}
              <p className="text-[#5C5C5C] mt-2">
                {productDetails.description?.split(" ").slice(0, 30).join(" ") +
                  "..."}
              </p>
            </div>
            <div className=" flex items-center justify-between mobile:mt-[-12px] tablet:mt-[-12px]">
              <div className="">
                {/* No data in API */}
                <p className="text-[#5C5C5C] leading-none my-1">
                  SAVE<span className=" line-through ml-2">₹12550</span>
                </p>
                <p className="text-[#0B8500] font-medium leading-none text-[42px] tablet:text-2xl mobile:text-2xl">
                  {productDetails.pricing?.online?.[0].currency}{" "}
                  {productDetails.pricing?.online.find(
                    (item) => item.seller === seller
                  )?.price || productDetails.pricing?.online?.[0].price}
                </p>
              </div>
              <div className="flex">
                <div className="h-12 w-14 flex items-center justify-center rounded-s-md bg-[#F2F2F2]">
                  <img
                    className="w-full h-full object-cover"
                    src={amazon}
                    alt=""
                  />
                </div>
                <AddToCart type="large" id={id} />
              </div>
            </div>

            <div className="w-full lg:h-[90px] tablet:h-[90px] mobile:h-[60px] mobile:mb-4 flex">
              <div className="w-1/2 h-full flex mobile:px-4 tablet:px-4 items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-s-md">
                <div className="flex h-full flex-col lg:py-3 mobile:py-0 tablet:py-0 tablet:flex-col tablet:text-center tablet:items-center tablet:justify-center tablet:w-1/2 mobile:flex-col mobile:text-center mobile:items-center mobile:justify-center mobile:w-1/2">
                  <p className="text-[#5C5C5C] text-sm tablet:text-nowrap mobile:text-nowrap">
                    Lowest Price
                  </p>
                  <p className="text-[#0B8500] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                    {productDetails.pricing?.online?.[0].currency}{" "}
                    {productDetails.pricing?.online?.[0].price}
                  </p>
                </div>
                <div className="imgcontainer flex tablet:w-28 lg:w-28 lg:h-14 mobile:justify-center tablet:justify-center tablet:items-center tablet:h-full mobile:items-center mobile:h-full">
                  <img
                    className="lg:h-full lg:w-full lg:object-cover tablet:scale-[1] mobile:scale-[1.3]"
                    src={amazon}
                    alt=""
                  />
                </div>
              </div>

              {/* No data About it in API */}
              <div className="w-1/2 h-full flex items-center justify-center bg-[#FAFEFF] border border-[#DEDEDE] rounded-e-md">
                <div className="">
                  <p className="text-[#5C5C5C] text-sm tablet:text-nowrap mobile:text-nowrap">
                    Highest Price
                  </p>
                  <p className="text-[#ED0303] text-2xl mobile:text-[19px] tablet:text-[19px] font-medium">
                    ₹62999
                  </p>
                </div>
                <div className="imgcontainer flex lg:w-28 tablet:w-24 lg:h-14 tablet:justify-center tablet:items-center tablet:h-[80%] mobile:justify-center mobile:items-center mobile:h-[80%]">
                  <img
                    className="lg:h-full lg:w-full lg:object-contain w-[62px]"
                    src={indiamart}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex gap-8 p-4 text-lg">
          <div className="basis-full border border-[#DEDEDE] rounded-xl p-2">
            <div className="flex gap-8 px-4 py-2 border-b border-[#DEDEDE] ">
              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "description"
                    ? "text-[#005F85]"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "highlights"
                    ? "text-[#005F85]"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("highlights")}
              >
                Highlights
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "specifications"
                    ? "text-[#005F85]"
                    : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>

              <button
                className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                  activeTab === "reviews" ? "text-[#005F85]" : "text-[#999999]"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className="p-4 min-h-[200px]">
              <p className="text-[#5C5C5C] text-lg mobile:text-base tablet:text-base">
                {renderTabContent()}
              </p>
            </div>
          </div>

          {productDetails?.related_items?.[0] && (
            <div className="border border-[#DEDEDE] rounded-xl h-[415px] p-2 basis-[25%] flex-shrink-0 ">
              <h3 className="mb-2 text-[#1C1C1C] text-lg">
                {productDetails?.related_items?.[0].title}
              </h3>
              <div className="flex flex-col gap-6 h-[4150px] py-1 overflow-y-auto hideScroll">
                {productDetails?.related_items?.[0].items.map((item, i) => {
                  return <ProductItem key={i} item={item} />;
                })}
              </div>
            </div>
          )}
        </div>

        {/* <div className="h-full w-full px-0 pr-4 py-10 flex gap-6 justify-between mobile:flex-col tablet:flex-col  tablet:w-[100%] tablet:p-0 tablet:pr-0 tablet:py-0  mobile:w-[100%] mobile:p-0 mobile:pr-0 mobile:py-0">
          <div className="px-4 tablet:px-8">
            <div className="w-full h-[425px] tablet:min-h-[250px] border overflow-hidden border-[#DEDEDE] rounded-xl mobile:w-full tablet:w-full tablet:h-fit mobile:h-fit">
              <div className="h-12 w-full flex border-b border-[#C9C9C9] items-center px-10 gap-12">
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "description"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("description")}
                >
                  Description
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "highlights"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("highlights")}
                >
                  Highlights
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "specifications"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("specifications")}
                >
                  Specifications
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "reviews" ? "text-[#005F85]" : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("reviews")}
                >
                  Reviews
                </button>
              </div>
              <div className="p-4">
                <p className="text-[#5C5C5C] text-lg mobile:text-base tablet:text-base">
                  {tabOpen}
                </p>
              </div>
            </div>
          </div>
          {productDetails?.related_items?.[0] && (
            <div className=" mobile:pl-4 tablet:pl-4 basis-[300px] tablet:w-full tablet:border-none pb-5 w-full border border-[#DEDEDE] mobile:w-full mobile:border-none rounded-xl">
              <div className="tablet:p-4">
                <p className="text-[#1C1C1C] text-lg tablet:text-2xl pl-2 my-2 font-medium xl:p-4 mobile:font-semibold tablet:font-semibold mobile:p-0">
                  {productDetails?.related_items?.[0].title}
                </p>
                <div className="flex mobile:snap-x tablet:snap-x hideScroll tablet:scroll-smooth mobile:scroll-smooth flex-col gap-5 tablet:mt-4 tablet:flex-row mobile:mt-4 mobile:flex-row mobile:flex-nowrap mobile:overflow-x-auto tablet:flex-nowrap tablet:overflow-x-auto">
                  {productDetails?.related_items?.[0].items.map((item, i) => {
                    if (i <= 3) return <ProductItem key={i} item={item} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ListingProductDets;

{
  /* <div className="h-full w-full px-0 pr-4 py-10 flex gap-6 justify-between mobile:flex-col tablet:flex-col  tablet:w-[100%] tablet:p-0 tablet:pr-0 tablet:py-0  mobile:w-[100%] mobile:p-0 mobile:pr-0 mobile:py-0">
          <div className="px-4 tablet:px-8">
            <div className="w-full h-[425px] tablet:min-h-[250px] border overflow-hidden border-[#DEDEDE] rounded-xl mobile:w-full tablet:w-full tablet:h-fit mobile:h-fit">
              <div className="h-12 w-full flex border-b border-[#C9C9C9] items-center px-10 gap-12">
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "description"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("description")}
                >
                  Description
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "highlights"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("highlights")}
                >
                  Highlights
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "specifications"
                      ? "text-[#005F85]"
                      : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("specifications")}
                >
                  Specifications
                </button>
                <button
                  className={` mobile:font-medium mobile:text-nowrap tablet:text-nowrap tablet:font-medium ${
                    tabOpen === "reviews" ? "text-[#005F85]" : "text-[#999999]"
                  }`}
                  onClick={() => setTabOpen("reviews")}
                >
                  Reviews
                </button>
              </div>
              <div className="p-4">
                <p className="text-[#5C5C5C] text-lg mobile:text-base tablet:text-base">
                  {tabOpen}
                </p>
              </div>
            </div>
          </div>
          {productDetails?.related_items?.[0] && (
            <div className=" mobile:pl-4 tablet:pl-4 basis-[300px] tablet:w-full tablet:border-none pb-5 w-full border border-[#DEDEDE] mobile:w-full mobile:border-none rounded-xl">
              <div className="tablet:p-4">
                <p className="text-[#1C1C1C] text-lg tablet:text-2xl pl-2 my-2 font-medium xl:p-4 mobile:font-semibold tablet:font-semibold mobile:p-0">
                  {productDetails?.related_items?.[0].title}
                </p>
                <div className="flex mobile:snap-x tablet:snap-x hideScroll tablet:scroll-smooth mobile:scroll-smooth flex-col gap-5 tablet:mt-4 tablet:flex-row mobile:mt-4 mobile:flex-row mobile:flex-nowrap mobile:overflow-x-auto tablet:flex-nowrap tablet:overflow-x-auto">
                  {productDetails?.related_items?.[0].items.map((item, i) => {
                    if (i <= 3) return <ProductItem key={i} item={item} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div> */
}
