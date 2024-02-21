import { createContext, useContext, useEffect, useState } from "react";
import * as UserApi from "../../../api/user";
import { useAuth } from "../../auth/contexts/AuthContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { authUser } = useAuth();
  const [user, setUser] = useState(authUser);
  const [addresses, setAddresses] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});

  const updateUserById = async (id, data) => {
    const response = await UserApi.upDateUserById(id, data);
    return response.data;
  };

  const getAddressesByUserId = async (id) => {
    const response = await UserApi.getAddressesByUserId(id);
    return response.data;
  };

  const createAddressByUserId = async (id, data) => {
    const response = await UserApi.createAddressByUserId(id, data);
    return response.data;
  };

  const updateAddressById = async (id, data) => {
    console.log(data, "************HEEEEEEEEEEEE");
    const response = await UserApi.updateAddressById(id, data);
    return response.data;
  };

  const deleteAddressById = async (userId, id) => {
    const idData = { id: id };
    const response = await UserApi.deleteAddressById(userId, idData);
    return response;
  };
  const fetchAddresses = async () => {
    const response = await getAddressesByUserId(authUser.id);
    console.log(response, "addresses in fetchAddresses")
    const lastAddress = response[response.length - 1];
    console.log(lastAddress, "last address in fetchAddresses") 
    setAddresses(response);
    setShippingAddress(lastAddress);
  };

  useEffect(() => {
    if (authUser) {
      setUser(authUser);
      fetchAddresses();      
    }
  }, [authUser]);


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
        createAddressByUserId,
        getAddressesByUserId,
        addresses,
        setAddresses,
        updateAddressById,
        deleteAddressById,
        shippingAddress,
        setShippingAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
