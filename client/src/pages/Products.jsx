import React, { useEffect } from "react";
import { RegisterProduct } from "../components/RegisterProduct";
import { SearchProduct } from "../components/SearchProduct";
import { UpdateProduct } from "../components/UpdateProduct";
import { useNavigate } from "react-router-dom";

export function Products() {

  return (
    <div>
      <RegisterProduct />
      <div className="m-10 flex gap-24 justify-center ">
      <SearchProduct />
      <UpdateProduct></UpdateProduct>
      </div>
    </div>
  );
}
