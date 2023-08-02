import React from "react";
// import {} from ''

export function DateProduct({ product }) {
  return (
    <div style={{ borderBottom: "1px red solid" }}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.available_stock}</p>
      <p>{product.Category}</p>
    </div>
  );
}
