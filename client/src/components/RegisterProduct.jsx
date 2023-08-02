import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
import { registerProducts } from "../api/store.pi";

export function RegisterProduct() {
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (!isNaN(data[key])) {
        data[key] = parseFloat(data[key]);
      }
    }
    try {
      await registerProducts(data);
      console.log("el registro se hizo con exito!!!");
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
    setInputValue("");
  });

  return (
    <div className="">
      <label className="rounded m-3 flex justify-center bg-neutral-600 ">Register Product</label>
      <form onSubmit={onSubmit} className="flex justify-center gap-7">
        {/* input name of product */}
        <input
          type="text"
          placeholder="Name product"
          {...register("name")}
          className="p-1 rounded m-3 text-black"
        />
        {/* input price product */}
        <input
          type="number"
          step="any"
          placeholder="Price"
          {...register("price")}
          className="p-1 rounded m-3 text-black"
        />
        {/* input number stock */}
        <input
          type="number"
          placeholder="Stock"
          {...register("stock")}
          className="p-1 rounded m-3 text-black"
        />
        {/* input stock */}
        <input
          type="number"
          placeholder="Category"
          {...register("category")}
          className="p-1 rounded m-3 text-black"
        />
        <button className="bg-sky-600	m-3 p-1 rounded-lg block justify-center">Register</button>
      </form>
    </div>
  );
}
