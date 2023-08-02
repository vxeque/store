import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAllProducts } from "../api/store.pi";
import { ListProduct } from "./ListProduct";

export function MakeSale() {
  const [products, setProducts] = useState([]);
  const [valueSearh, setvalueSearch] = useState("");
  const [productSelect, setProductSelect] = useState([]);
  const [totalArticle, setTotalArticle] = useState(0);
  const [totalPay, setTotalPay] = useState(0.0);
  const {
    register,
    handleSubmit,
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
    const searchProduct = products.filter((element) => {
      if (element.name.includes(event.target.value)) {
        setvalueSearch({ ...element, amount: 0 });
        return element;
      }
    });
  };

  const onSubmit = handleSubmit((data) => {
    const existProduct = productSelect.find(
      (element) => element.id == valueSearh.id
    );

    if (existProduct) {
      console.log("produc in the list");
    } else {
      valueSearh.amount = data.amount;
      setProductSelect([...productSelect, valueSearh]);
      setTotalArticle(totalArticle + 1);
      setTotalPay(
        totalPay + Number.parseFloat(valueSearh.price) * valueSearh.amount
      );
    }
  });

  return (
    <div className="text-white ">
      <div className=" flex justify-center gap-5 m-14" >
        <p>Total article: {totalArticle}</p>
        <p>Total to pay: {totalPay}</p>
      </div>

      <form className="flex justify-center ">
        <label>
          Search:{" "}
          <input
            type="search"
            onChange={petition}
            placeholder="Search product"
            className="pl-2 p-1 rounded  text-black"
          />
        </label>

        <label className="pl-2 ">
          Amount:{" "}
          <input
            type="number"
            min="1"
            placeholder="Number of products"
            {...register("amount", { required: true })}
            defaultValue={1}
            className="pl-2 p-1 rounded  text-black"
          />
        </label>

        <button onClick={onSubmit} className="bg-sky-700 p-1 rounded ml-2">Select</button>
      </form>
      <label className="flex ml-80 mt-4 mr-80 rounded justify-center bg-sky-800 ">Product: {valueSearh.name}</label>

      {/* <div style={{ justifyContent: "space-between", display: "flex" }}> */}
      <div className="flex mt-7 space-x-44 justify-center bg-opacity-20 bg-neutral-950 rounded">
        <p>Code</p>
        <p>Description</p>
        <p>Price</p>
        <p>Amount</p>
        <p>Total</p>
      </div>

      <div>
        {productSelect.map((element) => (
          <ListProduct key={element.id} element={element}></ListProduct>
        ))}
      </div>
    </div>
  );
}
