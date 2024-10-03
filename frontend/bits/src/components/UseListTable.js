import React from "react";
import { getSliceUsers } from "../utils";

function UseListTable({ users, paginationState }) {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <>
        {getSliceUsers(users, paginationState).map((user) => (
          <tr key={user.id}>
            <td style={{ border: "1px solid black" }}>{user.id}</td>
            <td style={{ border: "1px solid black" }}>{user.name}</td>
            <td style={{ border: "1px solid black" }}>{user.email}</td>
          </tr>
        ))}
      </>
    </table>
  );
}

export default UseListTable;
