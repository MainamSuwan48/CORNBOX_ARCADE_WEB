import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import TestPage from "./pages/TestPage";
import UserPage from "./pages/UserPage";
import Footer from "./pages/layouts/Footer";
import Header from "./pages/layouts/Header";

export default function App() {
  return (
    <>
      <Header />
      <LoginPage />
      <RegisterPage />
      <ProductPage />
      <CheckOutPage />
      <UserPage />
      <Footer />
    </>
  );
}
