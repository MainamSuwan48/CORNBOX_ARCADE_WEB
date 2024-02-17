import React from "react";
import EVO from "../assets/EVO.jpg";
import LogoCornBox from "../components/ui/LogoCornbox";
import ShoppingCart from "../features/products/components/ShoppingCart";

function HomePage() {
  return (
    <div
      className="flex h-screen items-center justify-center w-full"
      style={{
        backgroundImage: `url(${EVO})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" select-none flex h-with_header items-center justify-center w-full backdrop-blur-sm">
        <LogoCornBox size="big" />
      </div>
    </div>
  );
}

export default HomePage;
