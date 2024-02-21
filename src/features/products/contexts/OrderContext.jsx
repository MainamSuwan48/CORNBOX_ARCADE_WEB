import { createContext } from "react";
import * as orderApi from "../../../api/order";
import { useState } from "react";
import { useContext } from "react";
import { data } from "autoprefixer";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const createOrder = async (id, shippingAddressId, shoppingCartId) => {
    console.log(
      id,
      shippingAddressId,
      "id and shipping address id in order context"
    );
    const data = { shippingAddressId, shoppingCartId };
    const response = await orderApi.createOrder(id, data);
    return response;
  };

  const createOrderItems = async (orderId, cartId) => {
    const data = { cartId: cartId };
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
        createOrder,
        createOrderItems,
        getOrderByUserId,
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
