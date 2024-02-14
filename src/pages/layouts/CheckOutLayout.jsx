import React from "react";
import CheckOutDetail from "../../features/products/components/CheckOutDetail";
import PaymentDetail from "../../features/products/components/PaymentDetail";


function CheckOutLayout() {
  return (
    <div className="flex h-with_header mt-20 flex-1 justify-center items-start p-8 gap-8">
      <CheckOutDetail />
      <PaymentDetail />
    </div>
  );
}

export default CheckOutLayout;
