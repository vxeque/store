import axios from "axios";

const storeApi = axios.create({
  baseURL: "http://127.0.0.1:8000/store/api/v1/products/",
});
export const updateProducts = (id, product) => storeApi.put(`/${id}/`, product)

// get (mostrar) - post (registrar) - delete - put (actualizar)

// mostrar productos
export const getAllProducts = () => storeApi.get("/");

// registrar productos
export const registerProducts = (date) => storeApi.post("/", date);

// actualizar productos
