import axios from "../config/axios";

export const upDateUserById = (id, data) => axios.patch(`/user/${id}`, data);
export const createAddressByUserId = (id, data) =>
  axios.post(`/user/${id}/address`, data);
export const getAddressesByUserId = (id) => axios.get(`/user/${id}/address`);
export const updateAddressById = (id, data) =>
  axios.patch(`/user/${id}/address`, data);
export const deleteAddressById = (id, data) =>
  axios.delete(`/user/${id}/address`, { data });
