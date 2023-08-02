import React, { useEffect, useState } from "react";
import { updateProducts, getAllProducts } from "../api/store.pi";
import { useForm } from "react-hook-form";

export function UpdateProduct() {
  const [listProducs, setListProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const [cierto, setCierto] = useState(false);

  useEffect(() => {
    async function apiUpdate() {
      const productToUpdate = await getAllProducts();
      setListProduct(productToUpdate.data);
    }
    apiUpdate();
  }, []);

  const filterProducts = (event) => {
    const searchProduct = listProducs.find((element) => {
      if (element.name.includes(event.target.value)) {
        setProductSearch({ ...element, amount: 0 });
        return element;
      }
    });
  };

  const onSubmit = handleSubmit((data) => {
    data.available_stock = parseFloat(data.stock);
    console.log(data);
    updateProducts(productSearch.id, data);
    console.log("actualizado con exito...");
  });

  const searchProduct = () => {
    async function search() {
      setCierto(true);
      setValue("name", productSearch.name);
      setValue("price", productSearch.price);
      setValue("stock", productSearch.stock);
      setValue("category", productSearch.category);
    }
    search();
  };

  return (
    <div>
      <div className="">
        <h2>Update values of on product</h2>
        {/* <form> */}
        <label>
          Name product:{" "}
          <input
            type="text"
            onChange={filterProducts}
            className="p-1 rounded text-black"
          />
        </label>
        {/* <button onClick={onSubmit}>Search</button> */}
        <button
          onClick={searchProduct}
          className="bg-sky-600	p-2 rounded-lg ml-2"
        >
          Search
        </button>
        <p className="bg-violet-400 text-black rounded p-3 mt-2 ">
          name: {productSearch.name}
        </p>
      </div>
      {/* </form> */}
      {cierto && (
        <div className="p-3 bg-violet-400 fixed z-50 mt-3 justify-center rounded-lg">
          <form className="">
            <p>Name product: </p>
            <input
              {...register("name")}
              placeholder="Name product"
              className="p-1 rounded m-3 text-black"
            ></input>
            <p>Price product: </p>
            <input
              type="number"
              step="any"
              {...register("price")}
              className="p-1 rounded m-3 text-black"
            />
            <p>Stock: </p>
            <input
              type="number"
              min={1}
              {...register("stock")}
              className="p-1 rounded m-3 text-black"
            />
            <p>Category: </p>
            <input
              type="number"
              {...register("category")}
              className="p-1 rounded m-3 text-black"
            />
            <button onClick={onSubmit} className="bg-sky-600	p-2 rounded-lg">
              update
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
