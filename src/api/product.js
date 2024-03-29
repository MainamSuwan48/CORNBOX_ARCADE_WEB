import axios from "../config/axios";
//product
export const getAllProducts = () => axios.get("/product");
export const getProductById = (id) => axios.get(`/product/${id}`);
//cart
export const createCart = (data) => axios.post("/product/cart/create", data);
export const getCartByUserId = (id) => axios.get(`/product/cart/${id}`);
export const addItemToCart = (data) => axios.post("/product/cart/add", data);
export const updateCartItem = (id, data) =>
  axios.put(`/product/cart/item/${id}`, data);
export const deleteCartItem = (id) => axios.delete(`/product/cart/item/${id}`);
export const deleteCart = (id) => axios.delete(`/product/cart/${id}`);
export const updateStock = (id, data) =>
  axios.put(`/product/${id}`, data);
export const getAllProductsImages = () => axios.get("/product/image/get");
export const uploadProductImage = (id,data) => axios.post(`/product/upload/${id}`,data);
