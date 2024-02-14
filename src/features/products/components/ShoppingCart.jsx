import React from "react";
import CartItem from "./CartItem";
import ActionButton from "../../../components/ui/ActionButton";

function ShoppingCart() {
  return (
    <div className="bg-gray-500 w-80 max-w-screen-sm flex-1 p-8 rounded-lg">
      <div className="text-2xl border-b-2 border-base-100 text-base-100 font-bold">
        Your cart
      </div>
      <CartItem />      
      <div className="flex justify-between items-center mt-4">
        <div className="text-base-100 font-bold">Total</div>
        <div className="text-base-100 font-bold">16800 THB</div>
      </div>
      <div className="flex justify-end">
        <ActionButton>CHECKOUT</ActionButton>
      </div>
    </div>
  );
}

export default ShoppingCart;
