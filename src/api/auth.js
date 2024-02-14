import axios from "../config/axios";

export const login = (data) => axios.post("/auth/login", data);
export const register = (data) => axios.post("/auth/register", data);
export const getMe = () => axios.get("/auth/me");
