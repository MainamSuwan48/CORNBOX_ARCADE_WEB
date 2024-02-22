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
    setAllOrders(response.data);
    return response;
  };

  const getAllAddresses = async () => {
    const response = await adminApi.getAllAddresses();
    setAllAddresses(response.data);
    return response;
  };

  const updateOrder = async (id, order) => {
    const response = await adminApi.updateOrderStatus(id, order);
    return response;
  };

  useEffect(() => {
    getAllOrders();
  }, [orders]);

  useEffect(() => {
    getAllAddresses();
  }, [addresses]);

  return (
    <AdminContext.Provider
      value={{
        allOrders,
        setAllOrders,
        allAddresses,
        setAllAddresses,
        updateOrder,
        getAllOrders
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
