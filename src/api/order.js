import axios from "../config/axios";

export const createOrder = (id, shippingAddressId) => {
  return axios.post(`/order/create/${id}`, shippingAddressId);
};

export const createOrderItems = (id, data) => {
  return axios.post(`/order/createItems/${id}`, data);
};

export const getOrderByUserId = (id) => {
  return axios.get(`/order/get/${id}`);
};

export const updateOrderStatus = (orderId, data) => {
  return axios.patch(`/order/update/${orderId}`, data);
};

export const uploadReceipt = (orderId, data) => {
  return axios.post(`/order/uploadReceipt/${orderId}`, data);
};


