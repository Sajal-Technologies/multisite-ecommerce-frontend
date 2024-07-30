import amazon from "../../images/ProductPage/amazon.png";
import flipkart from "../../images/ProductPage/flipkart.png";
import meesho from "../../images/ProductPage/meesho.png";
import indiamart from "../../images/ProductPage/indiamart.png";

function DynamicLogo({ sellerName }) {
  switch (sellerName) {
    case "Amazon.in":
      return (
        <img src={amazon} alt="amazon" className="w-full block object-cover" />
      );
    case "Flipkart":
      return (
        <img
          src={flipkart}
          alt="flipkart"
          className="w-[100px] block object-cover"
        />
      );
    case "Meesho":
      return (
        <img
          src={meesho}
          alt="meesho"
          className="h-[50px] block object-cover"
        />
      );
    case "Indiamart":
      return (
        <img
          src={indiamart}
          alt="indiamart"
          className="w-full block object-cover"
        />
      );
    default:
      return <p>{sellerName}</p>;
  }
}

export default DynamicLogo;
