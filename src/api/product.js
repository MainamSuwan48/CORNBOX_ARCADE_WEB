import axios from "../config/axios";

export const getAllProducts = () => axios.get("/product");
