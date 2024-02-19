import React from "react";
import CartItem from "./CartItem";
import ActionButton from "../../../components/ui/ActionButton";
import { useState, useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";

function ShoppingCart({ userData , cartData, productsData}) {
  const { cart ,deleteCartItem} = useProduct();
  const { username, id } = userData;


  useEffect(() => {
    return () => {
      console.log("clean up");
    }
  }, [cart]);
  return (
    <div className="absolute top-0 right-4 w-screen-sm flex-1 p-8 rounded-lg mt-20 z-50 border-2 border-black bg-base-200 bg-opacity-75 overflow-y-scroll overflow-x-hidden max-h-96">
      <div className="text-2xl border-b-2 border-primary text-neutral font-bold">
        {username}'s Shopping Cart
      </div>
      {cartData
        .sort((a, b) => b.id - a.id)
        .map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              cartItemData={cartItem}
              productsData={productsData}           
            />
          );
        })}

      <div className="flex justify-between items-center mt-4">
        <div className="text-black font-bold">Total</div>
        <div className="text-black font-bold">
          {cartData.reduce((acc, cartItem) => {          
            return acc + cartItem.quantity;
          }, 0)}{" "}
          Items
        </div>

        <div className="text-black font-bold">
          {cartData.reduce((acc, cartItem) => {
            const product = productsData.find(
              (product) => product.id === cartItem.productItemId
            );
            return acc + product.price * cartItem.quantity;
          }, 0)}{" "}
          THB
        </div>
      </div>
      <div className="flex justify-end">
        <ActionButton>CHECKOUT</ActionButton>
      </div>
    </div>
  );
}

export default ShoppingCart;
