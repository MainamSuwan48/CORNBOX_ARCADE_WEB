import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";
import { useState } from "react";

function CartItem({ cartItemData, productsData }) {
  return (
    <div className="flex justify-between items-center mt-4 p-2 min-w-full">
      <div className="max-w-40 flex-1">
        <img src={stickPic}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">FLATBOX XXL</p>
        <p className="text-neutral">RED BUTTONS</p>
      </div>
      <ProductCounter type="cart" />
      <div className="text-neutral font-bold pr-4">4200 THB</div>
      <TrashIcon />
    </div>
  );
}

export default CartItem;
