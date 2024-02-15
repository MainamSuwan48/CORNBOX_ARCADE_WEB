import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CheckOutPage from "../pages/CheckOutPage";
import UserPage from "../pages/UserPage";
import Container from "../pages/layouts/Container";
import { getToken } from "../utils/local-storage";

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
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
      {
        path: "/user/:userId",
        element: (
          <ProtectedRoutes>
            <UserPage />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
