import axios from "../config/axios";

export const getAllProducts = () => axios.get("/product");
export const getProductById = (id) => axios.get(`/product/${id}`);
