import { FiPackage } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiRadio } from "react-icons/fi";
import Seperator from "./Seperator";

const Feature = () => {
  return (
    <>
      {/* Large Screen */}
      <div className="flex md:hidden xl:block mt-[4vw] mobile:hidden">
        <div className="flex items-center justify-center">
          <div className="py-6 border-[1px] border-[#00A8EB] w-[85%] rounded-lg px-16 flex items-center justify-between">
            <div className="items flex items-center justify-center gap-4">
              <FiPackage className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  different products
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Compare prices and shop Smarter
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiShoppingBag className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  CART PREFRENCES
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Save your items to your cart!
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiZap className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  CATCH BEST DEALS
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Grab your lovely hottest offers
                </p>
              </div>
            </div>
            <Seperator />
            <div className="items flex items-center justify-center gap-4">
              <FiRadio className="text-[#005F85] text-3xl" />
              <div className="">
                <h5 className="uppercase font-semibold text-[#3D3D3D] leading-none">
                  HOSTING WEBSITES
                </h5>
                <p className="text-sm text-[#5C5C5C]">
                  Find your items via multiple stores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen  */}
      <div className="mobile:block my-8 tablet:hidden xl:hidden lg:hidden hidden w-full">
        <div className="flex flex-col items-center gap-2 px-4">
          <div className="flex items-start gap-1 border-[1px] rounded-lg p-3 border-[#00A8EB] w-full">
            <FiPackage className="text-[#005F85] text-xl" />
            <div className="">
              <p className="text-[#3D3D3D] text-sm font-semibold uppercase">
                Different products
              </p>
              <p className="text-[#5C5C5C] text-xs">
                Compare prices and shop Smarter
              </p>
            </div>
          </div>
          <div className="flex items-start gap-1 border-[1px] rounded-lg p-3 border-[#00A8EB] w-full">
            <FiShoppingBag className="text-[#005F85] text-xl" />
            <div className="">
              <p className="text-[#3D3D3D] text-sm font-semibold uppercase">
                Cart Preferences
              </p>
              <p className="text-[#5C5C5C] text-xs">
                Save your items to your cart!
              </p>
            </div>
          </div>
          <div className="flex items-start gap-1 border-[1px] rounded-lg p-3 border-[#00A8EB] w-full">
            <FiZap className="text-[#005F85] text-xl" />
            <div className="">
              <p className="text-[#3D3D3D] text-sm font-semibold uppercase">
                Catch best deals
              </p>
              <p className="text-[#5C5C5C] text-xs">
                Grab your lovely hottest offers
              </p>
            </div>
          </div>
          <div className="flex items-start gap-1 border-[1px] rounded-lg p-3 border-[#00A8EB] w-full">
            <FiRadio className="text-[#005F85] text-xl" />
            <div className="">
              <p className="text-[#3D3D3D] text-sm font-semibold uppercase">
                Hosting websites
              </p>
              <p className="text-[#5C5C5C] text-xs">
                Find your items via multiple stores
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
