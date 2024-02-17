import axios from "axios";

export const getAllProducts = () => axios.get("/product");
export const getProductById = (id) => axios.get(`/product/${id}`);
export const createCart = (data) => axios.post("/product/cart/create", data);
export const getCartByUserIdData = (data) => axios.post("/product/cart/", data);
export const addItemToCart = (data) => axios.post("/product/cart/add", data);
export const updateCartItem = (data) => axios.put("/product/cart/item", data);
export const deleteCartItem = (data) =>
  axios.delete("/product/cart/item", { data });
