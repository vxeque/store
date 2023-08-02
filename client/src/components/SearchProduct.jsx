// import React from "react";
import React from "react";
import { useEffect } from "react";
import { getAllProducts } from "../api/store.pi";
import { useState } from "react";
import { DateProduct } from "./SaleCom";
import { useForm } from "react-hook-form";

export function SearchProduct() {
  const [products, setProducts] = useState([]);
  const [valueSearh, setvalueSearch] = useState("");
  const {
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function loadProducts() {
      const res = await getAllProducts();
      setProducts(res.data);
    }
    loadProducts();
  }, []);

  const petition = (event) => {
    var searchProduct = products.filter((element) => {
      if (element.name.includes(event.target.value)) {
        setvalueSearch(element);
        return element;
      }
    });
  };

  return (
    <div className="bg-slate-800 p-5 rounded ">
      <label className="justify-center flex">Search Product</label>
      <form>
        <input
          type="text"
          onChange={petition}
          placeholder="Search product"
          className="p-1 text-black rounded"
        />
      </form>
      <div className="mt-3 bg-indigo-500">
        <p className="p-2 ">Id: {valueSearh.id}</p>
        <p className="p-2">Name: {valueSearh.name}</p>
        <p className="p-2">Price: {valueSearh.price}</p>
        <p className="p-2">Stock: {valueSearh.available_stock}</p>
        <p className="p-2">Category: {valueSearh.category}</p>
      </div>
    </div>
  );
}
