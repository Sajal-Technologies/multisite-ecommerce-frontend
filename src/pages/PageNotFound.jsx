import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <p className="text-3xl font-bold mb-5">
        Oops!{" "}
        <span className="text-[#005F85] text-8xl mx-4 underline decoration-4 underline-offset-4">
          404
        </span>{" "}
        Page Not Found :(
      </p>
      <button
        className="bg-[#005F85] text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Back to Home
      </button>
    </div>
  );
}

export default PageNotFound;
