import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../../routes/routes";

function Container() {
  return (
    <>
      <Header />
      <Router />    
      <Footer />
    </>
  );
}

export default Container;
