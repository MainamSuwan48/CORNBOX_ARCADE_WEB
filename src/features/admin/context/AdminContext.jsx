import { createContext, useState } from "react";
import * as adminApi from "../../../api/admin";
import { useEffect } from "react";
import { useOrder } from "../../products/contexts/OrderContext";
import { useContext } from "react";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const { orders} = useOrder();
  const [allOrders, setAllOrders] = useState([]);

  const getAllOrders = async () => {
    const response = await adminApi.getAllOrders();
    console.log(response , "response from admin context ********************");
    return response;
  };

  useEffect(() => {
    getAllOrders().then((response) => {
      setAllOrders(response.data);
    });
  }, [orders]);

  return (
    <AdminContext.Provider
      value={{
        allOrders,
        setAllOrders,
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
