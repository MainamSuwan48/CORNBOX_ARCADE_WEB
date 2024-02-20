import React from "react";
import ShippingAddress from "./ShippingAddress";
import ShoppingCart from "./ShoppingCart";

function CheckOutDetail({ userData, cartData, productsData }) {
  return (
    <div className="flex flex-col gap-4">
      <ShoppingCart
        type="checkout"
        cartData={cartData}
        userData={userData}
        productsData={productsData}
      />
      <ShippingAddress />
    </div>
  );
}

export default CheckOutDetail;
