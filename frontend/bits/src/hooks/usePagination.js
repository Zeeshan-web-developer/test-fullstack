import React, { useEffect } from "react";

function usePagination({ totalPages = 1 }) {
  const [paginationState, setPaginationState] = React.useState({
    currentPage: 1,
    totalPages: totalPages,
  });

  const updatePaginationState = (currentPage, totalPages) => {
    setPaginationState((prevState) => ({
      ...prevState,
      currentPage,
      totalPages,
    }));
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > paginationState.totalPages) {
      return;
    }
    updatePaginationState(page, paginationState.totalPages);
  };
  useEffect(() => {
    updatePaginationState(1, totalPages);
  }, [totalPages]);
  return {
    paginationState,
    updatePaginationState,
    handlePageChange,
  };
}

export default usePagination;
