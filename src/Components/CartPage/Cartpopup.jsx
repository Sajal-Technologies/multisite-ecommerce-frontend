import { FiX } from "react-icons/fi";
import PopupImg from "../../images/CartPopup/3dPopup.png";

const Cartpopup = ({ closeCartPopup }) => {
  return (
    <>
      <div className="h-fit w-[516px] flex flex-col gap-4 items-center rounded-xl border-[1.5px] border-[#B2B2B2] p-4 pb-6 bg-white">
        <div className="w-full h-fit flex justify-between">
          <div className="h-10 w-10 rounded-full"></div>
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#FAFEFF] border border-[#E5FAFF] popupbox">
            <FiX className="text-[#005F85] text-xl" />
          </div>
        </div>
        <div className="3dobject w-full h-[180px] flex items-center justify-center ">
          <img className="w-[200px] object-contain" src={PopupImg} alt="" />
        </div>
        <h1 className="text-[#262626] text-2xl font-semibold">
          Did you buy the product?
        </h1>
        <p className="text-[#7A7A7A] text-lg w-[80%] text-center">
          We just want to know as it helps us to offer more satisfaction
          experience for our valuable users.
        </p>
        <div className="w-full h-fit flex gap-2 items-center justify-center">
          <div className="h-5 w-[190px] flex items-center justify-center bg-white border border-[#005F85] rounded-md py-8">
            <p
              onClick={closeCartPopup}
              className="text-[#005F85] font-semibold text-lg"
            >
              No, I didn&apos;t
            </p>
          </div>
          <div className="h-5 w-[190px] flex items-center justify-center bg-[#005F85] rounded-md py-8">
            <p
              onClick={closeCartPopup}
              className="text-white font-semibold text-lg"
            >
              Yes, I did
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpopup;
