export const getEnvironmentVariable = (key) => {
  return process.env[`REACT_APP_${key}`];
};

export const getSliceUsers = (users, paginationState) => {
  const sliceUsers = users.users.slice(
    (paginationState.currentPage - 1) * 5,
    paginationState.currentPage * 5
  );
  return sliceUsers;
};
