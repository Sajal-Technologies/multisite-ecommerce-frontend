import { useCallback, useState } from "react";
import useURL from "./useURL";

function usePagination(initialPage = 1, initialTotalPages = 7) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [queries, setURLQuery] = useURL();

  const updatePagination = useCallback(
    (pageNumber, ProductsLength) => {
      if (pageNumber > 1 && pageNumber < totalPages && ProductsLength === 0) {
        setTotalPages(pageNumber);
      }
      if (pageNumber >= totalPages && ProductsLength > 0) {
        setTotalPages(pageNumber + 1);
      }
    },
    [totalPages]
  );

  const handlePageChange = (pageNumber, fetchFunc) => {
    const newParams = new URLSearchParams(location.search);
    newParams.has("page")
      ? newParams.set("page", pageNumber)
      : newParams.append("page", pageNumber);

    setURLQuery(newParams);
    fetchFunc({ ...queries, page_number: pageNumber });
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevious = (currentPage, fetchFunc) => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1, fetchFunc);
    }
  };

  const handleNext = (currentPage, totalPages, fetchFunc) => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1, fetchFunc);
    }
  };

  return {
    currentPage,
    totalPages,
    setCurrentPage,
    updatePagination,
    handleNext,
    handlePrevious,
    handlePageChange,
  };
}

export default usePagination;
