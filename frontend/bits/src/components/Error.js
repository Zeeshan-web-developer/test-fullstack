import React from "react";

function Error({ error }) {
  if (typeof error === "string") {
    return (
      <div>
        <h2>Error: {error}</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Error: Something went wrong</h2>
    </div>
  );
}

export default Error;
