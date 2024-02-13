import React from "react";
import Header from "./layouts/Header";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Footer from "./layouts/Footer";

function LoginPage() {
  return (
    <>
      <Header />
      <RegisterForm />
    </>
  );
}

export default LoginPage;
