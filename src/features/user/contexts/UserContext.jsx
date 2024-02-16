import { createContext, useContext, useEffect, useState } from "react";
import * as UserApi from "../../../api/user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);

  const updateUserById = async (id, data) => {
    const response = await UserApi.upDateUserById(id, data);
    return response.data;
  };

  const getAddressesByUserId = async (id) => {
    const response = await UserApi.getAddressesByUserId(id);    
    return response.data;
  };

  const test = () => {
    console.log("I'm from user context");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUserById,
        test,
        getAddressesByUserId,
        addresses,
        setAddresses,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
