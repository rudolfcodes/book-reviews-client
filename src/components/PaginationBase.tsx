import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationBase = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPagination = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const halfVisible = Math.floor((maxPageNumbers - 2) / 2); // Reserve space for the first and last page
    let startPage = Math.max(2, currentPage - halfVisible); // Max to make sure 2 is the minimum because we always show 1 anyway and it cant be 0 or negative
    let endPage = Math.min(totalPages - 1, currentPage + halfVisible); // endPage need to be stopped before the last page / dont go beyond last page

    if (currentPage <= halfVisible + 2) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, maxPageNumbers - 1);
    } else if (currentPage >= totalPages - halfVisible - 1) {
      endPage = totalPages - 1;
      startPage = Math.max(2, totalPages - (maxPageNumbers - 2));
    }

    pageNumbers.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`px-3 py-1 ${
          currentPage === 1 ? "text-white bg-blue-500" : "text-blue-500"
        }`}
      >
        1
      </button>
    );

    if (startPage > 2) {
      pageNumbers.push(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 ${
            currentPage === i ? "underline font-bold" : "text-black"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-3">
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 ${
            currentPage === totalPages ? "underline font-bold" : "text-black"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="my-24 text-center flex items-center text-xl justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "text-primary-grey" : "text-black"}
      >
        Previous
      </button>

      <div className="flex space-x-4 mx-6">{renderPagination()}</div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={
          currentPage === totalPages ? "text-primary-grey" : "text-black"
        }
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBase;
