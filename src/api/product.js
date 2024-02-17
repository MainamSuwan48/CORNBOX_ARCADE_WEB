import axios from "../config/axios";

export const getAllProducts = () => axios.get("/product");
export const getProductById = (id) => axios.get(`/product/${id}`);
export const createCart = (data) => axios.post("/cart/create", data);
export const getCartByUserIdData = (data) => axios.post("/cart/", data); 
export const addItemToCart = (data) => axios.post("/cart/add", data);
export const updateCartItem = (data) => axios.put("/cart/item", data);
export const deleteCartItem = (data) => axios.delete("/cart/item", { data });



