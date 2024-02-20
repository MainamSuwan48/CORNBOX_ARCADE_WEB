import React from "react";
import CartItem from "./CartItem";
import ActionButton from "../../../components/ui/ActionButton";
import { useProduct } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

function ShoppingCart({
  userData,
  cartData,
  productsData,
  type = "shoppingCart",
}) {
  const { cart, stocks } = useProduct();
  const { username, id } = userData;

  if (type === "checkout") {
    return (
      <div className="glass flex-1 min-w-96 p-8 rounded-lg z-50 border-2 border-black overflow-y-scroll max-h-96">
        <div className="text-2xl border-b-2 border-primary text-neutral font-bold">
          {username}'s Check Out
        </div>
        {cartData
          .sort((a, b) => b.id - a.id)
          .map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItemData={cartItem}
                productsData={productsData}
                stocks={stocks}
              />
            );
          })}

        <div className="flex justify-between items-center mt-4">
          <div className="text-neutral font-bold">Total</div>
          <div className="text-neutral font-bold">
            {cartData.reduce((acc, cartItem) => {
              return acc + cartItem.quantity;
            }, 0)}{" "}
            Items
          </div>

          <div className="text-neutral font-bold">
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
        </div>
      </div>
    );
  }

  return (
    <div className="glass absolute top-0 right-4 w-screen-sm flex-1 p-8 rounded-lg mt-20 z-50 border-2 border-black overflow-y-scroll overflow-x-hidden max-h-96">
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
              stocks={stocks}
            />
          );
        })}

      <div className="flex justify-between items-center mt-4">
        <div className="text-neutral font-bold">Total</div>
        <div className="text-neutral font-bold">
          {cartData.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
          }, 0)}{" "}
          Items
        </div>

        <div className="text-neutral font-bold">
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
        <Link to="/checkout">
          <ActionButton onClick={() => console.log(cart)}>
            CHECKOUT
          </ActionButton>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
