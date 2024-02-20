import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CheckOutPage from "../pages/CheckOutPage";
import UserPage from "../pages/UserPage";
import Container from "../pages/layouts/Container";
import { getToken } from "../utils/local-storage";
import UserProfile from "../features/user/components/UserProfile";
import Addresses from "../features/user/components/Addresses";
import UserOrderSection from "../features/user/components/UserOrderSection";
import ProductLayout from "../pages/layouts/ProductLayout";
import NotFoundPage from "../pages/NotFoundPage";

const ProtectedRoutes = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/", element: <ProductPage /> },
      { path: "/product/:productId", element: <ProductLayout /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      ,
      {
        path: "/user/:userId",
        element: (
          <ProtectedRoutes>
            <UserPage />
          </ProtectedRoutes>
        ),
        children: [
          { path: "", element: <UserProfile /> },
          { path: "address", element: <Addresses /> },
          { path: "order", element: <UserOrderSection /> },
        ],
      },
    ],
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoutes>
        <CheckOutPage />
      </ProtectedRoutes>
    ),
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
