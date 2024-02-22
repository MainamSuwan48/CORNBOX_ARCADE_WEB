import axios from "../config/axios";

export const getAllOrders = () => {
  return axios.get("/order/getAll");
};
export const updateOrderStatus = (orderId, data) => {
  return axios.patch(`/order/update/${orderId}`, data);
};
