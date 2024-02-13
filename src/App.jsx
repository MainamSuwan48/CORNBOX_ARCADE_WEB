import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import TestPage from "./pages/TestPage";
import UserPage from "./pages/UserPage";
import Footer from "./pages/layouts/Footer";

export default function App() {
  return (
    <>
      <LoginPage />
      <RegisterPage />
      <UserPage />
      <ProductPage />
      <Footer />
    </>
  );
}
