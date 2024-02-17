import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./features/auth/contexts/AuthContext.jsx";
import { ProductContextProvider } from "./features/products/contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </AuthProvider>
);
