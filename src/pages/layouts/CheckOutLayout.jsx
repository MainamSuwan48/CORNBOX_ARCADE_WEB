import React from "react";
import ShoppingCart from "../../features/products/components/ShoppingCart";
import CheckOutDetail from "../../features/products/components/CheckOutDetail";

function CheckOutLayout() {
  return (
    <div className="flex h-with_header mt-20 flex-1 justify-between items-center p-8">
      <CheckOutDetail />
    </div>
  );
}

export default CheckOutLayout;
