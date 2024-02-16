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

  const updateAddressState = (id, data) => {
    const newAddresses = addresses
    const newIndex = newAddresses.findIndex((address) => address.id === id);
    console.log(data,"**************************")
    newAddresses[newIndex] = data;
    console.log(newAddresses,"///////////////////////")
    setAddresses(newAddresses);
  };

  const updateAddressById = async (id,data) => {
    console.log(data,"************HEEEEEEEEEEEE" )
    const response = await UserApi.updateAddressById(id, data);
    updateAddressState(data.id, data);
    return response.data;
  };

  useEffect(() => {
    const getAddressData = async () => {
      const response = await getAddressesByUserId(user.id);
      setAddresses(response);
    };
  }, []);

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
        updateAddressById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
