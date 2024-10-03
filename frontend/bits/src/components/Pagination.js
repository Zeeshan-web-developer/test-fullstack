//re-usbale component for pagination

import React from "react";

function Pagination({ currentPage, totalPages, updatePaginationState }) {
  const handlePageChange = (page) => {
    updatePaginationState(page);
  };

  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
