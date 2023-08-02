import { useEffect } from "react";
import { getAllProducts } from "../api/store.pi";
import { useState } from "react";

export function Store() {
    // chante the name of the tab
    useEffect(() => {
      document.title = "Store online";
    }, []);
  return <div>tienda</div>
}
