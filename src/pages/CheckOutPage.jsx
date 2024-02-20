import React from "react";
import CheckOutLayout from "./layouts/CheckOutLayout";
import { Link } from "react-router-dom";
import LogoCornbox from "../components/ui/LogoCornbox";
import EVOpic from "../assets/EVO.jpg";
import Footer from "./layouts/Footer";

function CheckOutPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${EVOpic})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed w-full top-0 h-20 z-50 drop-shadow-lg backdrop-blur-2xl flex justify-between items-center px-4 py-2">
        <Link to="/">
          <LogoCornbox />
        </Link>

        <Link to="/product">
          <div
            className="flex justify-center items-center bg-primary text-base-100 active:scale-90
            font-bold p-2 rounded-lg hover:bg-secondary hover:text-base-200 transition-all duration-300 ease-in-out"
            style={{ cursor: "pointer" }}
          >Get Back to Shopping?
          <div
          className="animate-bounce text-2xl text-secondary"
          >💸</div>
          </div>
        </Link>
      </div>
      <CheckOutLayout />;
      <Footer />
    </div>
  );
}

export default CheckOutPage;
