import { createContext } from "react";
import * as orderApi from "../../../api/order";
import { useState } from "react";
import { useContext } from "react";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useEffect } from "react";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const { authUser } = useAuth();
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

  const uploadReceipt = async (orderId, data) => {
    const response = await orderApi.uploadReceipt(orderId, data);
    return response;
  };

  useEffect(() => {
    if (authUser) {
      getOrderByUserId(authUser.id).then((response) => {
        console.log(response.data, "order by user id");
        setOrders(response.data);
      });
    }
  }, [authUser]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        createOrder,
        createOrderItems,
        getOrderByUserId,
        uploadReceipt,
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
