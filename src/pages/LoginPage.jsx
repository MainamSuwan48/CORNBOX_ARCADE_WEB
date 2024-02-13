import React from "react";
import Header from "./layouts/Header";
import LoginForm from "../features/auth/components/LoginForm";
import Footer from "./layouts/Footer";

function LoginPage() {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

export default LoginPage;
