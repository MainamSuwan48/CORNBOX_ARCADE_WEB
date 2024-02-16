import axios from "../config/axios";    

export const upDateUserById = (id, data) => axios.patch(`/user/${id}`, data);
export const getAddressesByUserId = (id) => axios.get(`/user/${id}/address`);
export const upDateAddress = (id, data) => axios.patch(`/user/${id}/address`);
export const deleteAddress = (id) => axios.delete(`/user/${id}/address`);