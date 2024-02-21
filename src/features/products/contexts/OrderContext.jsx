import { createContext } from "react";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}

function useOrder() {
  return useContext(OrderContext);
}

export { OrderContextProvider, useOrder };
