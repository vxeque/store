import React, { useEffect } from "react";
import { MakeSale } from "../components/MakeSale";
import { UpdateProduct } from "../components/UpdateProduct";

export function Sale() {
  // chante the name of the tab
  useEffect(() => {
    document.title = "Sale";
  }, []);
  return (
    <div className="block m-20">
      <MakeSale></MakeSale>
    </div>
  );
}
