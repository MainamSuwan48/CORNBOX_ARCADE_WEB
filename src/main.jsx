import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'alpinejs';

import { AuthProvider } from "./features/auth/contexts/AuthContext.jsx";
import { ProductContextProvider } from "./features/products/contexts/ProductContext.jsx";
import { UserProvider } from "./features/user/contexts/UserContext.jsx";
import { OrderContextProvider } from "./features/products/contexts/OrderContext.jsx";
import { AdminContextProvider } from "./features/admin/context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <ProductContextProvider>
        <OrderContextProvider>
          <AdminContextProvider>
            <App />
          </AdminContextProvider>
        </OrderContextProvider>
      </ProductContextProvider>
    </UserProvider>
  </AuthProvider>
);
