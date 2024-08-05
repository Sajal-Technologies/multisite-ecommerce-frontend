import { useNavigate } from "react-router-dom";
import Page404 from "../images/404 Page.svg";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center mt-[30px] w-screen h-screen relative">
      <picture className="w-full h-full">
        <img src={Page404} alt="404" className="w-full h-full block" />
      </picture>

      <p className="text-3xl font-bold text-[#455a63] absolute top-[55%] left-[60%] font-mono">
        Page Not Found
      </p>
      <button
        className="bg-[#ffc526] text-[#455a63] px-4 font-mono py-2 animate-bounce rounded absolute bottom-[10%] left-[45%] font-bold shadow-lg"
        onClick={handleClick}
      >
        Back to Home
      </button>
    </div>
  );
}

export default PageNotFound;
