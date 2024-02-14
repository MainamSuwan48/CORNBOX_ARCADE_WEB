import React from "react";
import ShoppingCart from "./ShoppingCart";
import ShippingAddress from "./ShippingAddress";
import CartItem from "./CartItem";

function CheckOutDetail() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-500 max-w-screen-sm flex-1 p-8 rounded-lg min-w-full">
        <div className="text-2xl border-b-2 border-base-100 text-base-100 font-bold">
          Your Items
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="flex justify-between items-center mt-4">
          <div className="text-base-100 font-bold">Total</div>
          <div className="text-base-100 font-bold">16800 THB</div>
        </div>
      </div>
      <ShippingAddress />
    </div>
  );
}

export default CheckOutDetail;
