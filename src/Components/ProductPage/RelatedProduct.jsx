import { FaStar } from "react-icons/fa";
import { useProductDetails } from "../../Contexts/ProductDetailsContext";
import { Link } from "react-router-dom";

function RelatedProduct() {
  const { productDetails } = useProductDetails();
  const relatedItems = productDetails?.related_items;
  return (
    <div className="xl:w-[85%] w-full mx-auto px-2">
      <h2 className="text-[#333] font-bold text-3xl mb-4">
        {relatedItems[0].title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-4">
        {relatedItems[0]?.items.map((item, i) => (
          <div
            key={i}
            className="   border border-[#DEDEDE] rounded-2xl overflow-hidden w-full"
          >
            <Link to={`/Product/${item.product_id}`}>
              <div className="w-full h-[200px] bg-white flex justify-center items-center mb-2">
                <img
                  className="object-cover block rounded-xl"
                  src={item.image}
                  alt=""
                />
              </div>
            </Link>
            <div className="p-4">
              <Link to={`/Product/${item.product_id}`}>
                <p className="text-[#121212]  text-lg font-bold line-clamp-2 break-words mb-2 cursor-pointer">
                  {item.title}
                </p>
              </Link>
              <div className="flex items-center justify-between">
                <p className="text-[#0B8500] text-2xl font-bold">
                  {item.currency}
                  {item.price}
                </p>
                <span>
                  <FaStar className="-mt-1 inline-block" />{" "}
                  <span className="font-bold">{item.rating}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
