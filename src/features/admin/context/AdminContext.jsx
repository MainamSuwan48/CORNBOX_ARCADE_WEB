import { createContext, useState } from "react";
import * as adminApi from "../../../api/admin";
import { useEffect } from "react";
import { useOrder } from "../../products/contexts/OrderContext";
import { useContext } from "react";
import { useUser } from "../../user/contexts/UserContext";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const { orders } = useOrder();
  const { addresses } = useUser();
  const [allOrders, setAllOrders] = useState([]);
  const [allAddresses, setAllAddresses] = useState([]);

  const getAllOrders = async () => {
    const response = await adminApi.getAllOrders();
    console.log(response, "response from admin context ********************");
    return response;
  };

  const getAllAddresses = async () => {
    const response = await adminApi.getAllAddresses();
    console.log(response, "response from admin context ********************");
    return response;
  };

  useEffect(() => {
    getAllOrders().then((response) => {
      setAllOrders(response.data);
    });
  }, [orders]);

  useEffect(() => {
    getAllAddresses().then((response) => {
      setAllAddresses(response.data);
    });
  }, [addresses]);

  return (
    <AdminContext.Provider
      value={{
        allOrders,
        setAllOrders,
        allAddresses,
        setAllAddresses,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

const useAdmin = () => {
  return useContext(AdminContext);
};

export { AdminContextProvider, useAdmin, AdminContext };
