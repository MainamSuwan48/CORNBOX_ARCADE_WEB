import { AuthProvider } from "./features/auth/contexts/AuthContext";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import TestPage from "./pages/TestPage";
import UserPage from "./pages/UserPage";
import Footer from "./pages/layouts/Footer";
import Header from "./pages/layouts/Header";
import Router from "./routes/routes";

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}
