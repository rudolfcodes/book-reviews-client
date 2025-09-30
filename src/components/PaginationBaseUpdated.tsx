import React from "react";

interface PaginationBaseUpdatedProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationBaseUpdated = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationBaseUpdatedProps) => {
  const renderPagination = () => {
    const pageNumbers: JSX.Element[] = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor((maxVisiblePages - 2) / 2);

    // the middle range depends on the current page, how many pages to show on the left and right
    // you dont want to go below 2 or above totalPages - 1 because we already show the first and last page
    // you subtract for the startPage the halfVisible from the currentPage and max sure it can never get lower than 2
    let startPage = Math.max(2, currentPage - halfVisible);
    // you add for the endPage the halfVisible to the currentPage and make sure that it never goes beyond totalPages - 1
    let endPage = Math.min(totalPages - 1, currentPage + halfVisible);

    if (currentPage <= halfVisible + 2) {
      startPage = 2;
      endPage = Math.min(totalPages - 1, maxVisiblePages - 1);
    } else if (currentPage >= totalPages - halfVisible - 1) {
      endPage = totalPages - 1;
      startPage = Math.max(2, totalPages - (maxVisiblePages - 2));
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

    /* middle pages */
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
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 ${
            currentPage === i ? "text-white bg-blue-500" : "text-blue-500"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-2">
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
            currentPage === totalPages
              ? "text-white bg-blue-500"
              : "text-blue-500"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      {/* previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "text-primary-grey" : "text-black"}
      >
        Previous
      </button>

      {/* page numbers */}
      <div>{renderPagination()}</div>
      {/* next button */}
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

export default PaginationBaseUpdated;
