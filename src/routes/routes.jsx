import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CheckOutPage from "../pages/CheckOutPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import Header from "../pages/layouts/Header";
import {
  AuthContext,
  AuthProvider,
} from "../features/auth/contexts/AuthContext";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/product", element: <ProductPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
