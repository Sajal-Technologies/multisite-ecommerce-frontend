function Loader({ type = "sm" }) {
  if (type === "sm") {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`w-8 h-8 inline-block border-4 border-t-4 border-t-[#3498db] border-[#f3f3f3] rounded-full animate-spin`}
        ></div>
      </div>
    );
  }

  if (type === "md") {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`w-10 h-10 inline-block border-4 border-t-4 border-t-[#3498db] border-[#f3f3f3] rounded-full animate-spin`}
        ></div>
      </div>
    );
  }

  if (type === "lg") {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`w-16 h-16 inline-block border-[6px] border-t-[6px] border-t-[#3498db] border-[#f3f3f3] rounded-full animate-spin`}
        ></div>
      </div>
    );
  }
}

export default Loader;
