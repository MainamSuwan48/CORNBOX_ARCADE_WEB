import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";
import { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { toast } from "sonner";
import { useEffect } from "react";

function CartItem({ cartItemData, productsData, deleteCartItem }) {
  const [deleted, setDeleted] = useState(false);
  const product = productsData.find(
    (product) => product.id === cartItemData.productItemId
  );
  const { mainImage, name, price } = product;
  const { id, attribute, quantity } = cartItemData;
  const { updateCartItem } = useProduct();
  const [cartItemQuantity, setCartItemQuantity] = useState(quantity);

  const test = () => {
    console.log(id);
  };

  useEffect(() => {
    return async () => {
      console.log(id, cartItemQuantity);
      const res = await updateCartItem(id, cartItemQuantity);
      console.log(res)
      console.log("clean up");
    };
  }, [cartItemQuantity]);
  return (
    <div className="flex justify-between items-center mt-4 p-2 min-w-full relative">
      <div onClick={test} className="max-w-40 flex-1">
        <img src={mainImage}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">{name}</p>
        <p className="text-neutral">{attribute}</p>
      </div>
      {/* for debugging purposes */}
      <div className="flex items-center justify-center text-xl text-primary">
        ID:{id}
      </div>
      <ProductCounter
        setQuantity={setCartItemQuantity}
        quantity={quantity}
        type="cart"
      />
      <div className="text-neutral font-bold pr-4">{price}</div>
      <>
        <div
          className={`flex items-center justify-center w-8 h-8 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:scale-125 hover:text-white transition-all duration-300 ease-in-out active:scale-75`}
        >
          <TrashIcon />
        </div>
        {deleted ? (
          <div
            className={`backdrop-blur-lg absolute text-red-600 text-3xl border-2 border-red-600 font-black w-full p-1`}
          >
            DELETED
          </div>
        ) : null}
      </>
    </div>
  );
}

export default CartItem;
