import axios from "../config/axios";

export const getAllAddresses = () => {
  return axios.get("/user/addressAll");
};
export const getAllOrders = () => {
  return axios.get("/order/getAll");
};
export const updateOrderStatus = (orderId, data) => {
  return axios.patch(`/order/update/${orderId}`, data);
};
export const getAllReceipts = () => {
  return axios.get(`/order/getReceipts`);
};

