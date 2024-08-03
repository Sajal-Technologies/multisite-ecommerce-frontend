function Pagination({
  handlePageChange,
  handleNext,
  handlePrevious,
  currentPage,
  totalPages,
}) {
  return (
    <div className="w-full flex justify-center  items-center  gap-4 my-5">
      <button
        aria-label="Previous Page"
        className={`bg-white w-8 font-medium text-2xl h-8 rounded-lg flex justify-center items-center ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-400 hover:bg-none"
            : "text-[#005F85] cursor-pointer hover:bg-gray-300"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <ul className="flex flex-wrap gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <li key={i}>
            <button
              className={` w-8 font-medium h-8  rounded-lg flex justify-center items-center cursor-pointer ${
                currentPage === i + 1
                  ? "bg-[#005F85] hover:bg-[#005F85] text-white shadow-lg"
                  : "bg-white hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <span
            className={`bg-white w-8 font-medium h-8 text-gray-400 rounded-lg flex justify-center items-center ${
              currentPage === totalPages ? "hidden" : "block"
            }`}
            disabled
          >
            ...
          </span>
        </li>
      </ul>

      <button
        aria-label="Next Page"
        className={`bg-white w-8 font-medium text-2xl h-8  rounded-lg flex justify-center items-center ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-400 hover:bg-none"
            : "text-[#005F85] cursor-pointer hover:bg-gray-300"
        }`}
        onClick={handleNext}
      >
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
