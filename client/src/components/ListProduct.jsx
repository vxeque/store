import React from "react";

export function ListProduct({ element }) {
  return (
    // <div style={{ justifyContent: "space-between", display: "flex" }}>
    <div className="flex mt-7 space-x-44 justify-center bg-opacity-20 bg-neutral-950 rounded">
      <p>{element.id}</p>
      <p>{element.name}</p>
      <p>{element.price}</p>
      <p>{element.amount}</p>
      <p>{element.price * element.amount}</p>
    </div>
  );
}
