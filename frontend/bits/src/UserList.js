import React from "react";
import Pagination from "./components/Pagination";
import useFetchUsers from "./hooks/useFetchUsers";
import usePagination from "./hooks/usePagination";
import UserListTable from "./components/UseListTable";
import Error from "./components/Error";

function UserList() {
  const { users } = useFetchUsers();
  const totalPages = Math.ceil(users.users.length / 5);
  const { paginationState, handlePageChange } = usePagination({ totalPages });

  if (users?.error) {
    return <Error error={users.error?.message} />;
  }
  if (users.loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="userList__wrapper">
      <UserListTable users={users} paginationState={paginationState} />
      <Pagination
        currentPage={paginationState.currentPage}
        totalPages={paginationState.totalPages}
        updatePaginationState={handlePageChange}
      />
    </div>
  );
}

export default UserList;
