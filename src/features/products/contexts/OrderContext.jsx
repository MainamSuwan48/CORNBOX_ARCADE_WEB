import { createContext } from "react";
import * as orderApi from "../../../api/order";
import { useState } from "react";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const createOrder = async (id, shippingAddressId) => {
    console.log(
      id,
      shippingAddressId,
      "id and shipping address id in order context"
    );
    const response = await orderApi.createOrder(id, shippingAddressId);
    return response;
  };

  const createOrderItems = async (orderId, data) => {
    const response = await orderApi.createOrderItems(orderId, data);
    return response;
  };

  const getOrderByUserId = async (id) => {
    const response = await orderApi.getOrderByUserId(id);
    return response;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  return useContext(OrderContext);
}

export { OrderContextProvider, useOrder };
