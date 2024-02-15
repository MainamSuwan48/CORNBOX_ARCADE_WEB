import axios from "../config/axios";    

export const upDateUserById = (id, data) => axios.patch(`/user/${id}`, data);