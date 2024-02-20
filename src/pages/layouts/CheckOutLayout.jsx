import React from "react";
import CheckOutDetail from "../../features/products/components/CheckOutDetail";
import PaymentDetail from "../../features/products/components/PaymentDetail";
import Footer from "./Footer";


function CheckOutLayout() {
  return (
    <div className="flex mt-6 pt-20 h-with_header flex-1 justify-center items-start p-8 gap-8 backdrop-blur-sm -mb-8">
      <CheckOutDetail />
      <PaymentDetail />
      
    </div>
   
  );
}

export default CheckOutLayout;
