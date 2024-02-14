import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";

function CartItem() {
  return (
    <div className="flex justify-between items-center mt-4 bg-base-100 p-2">
      <div className="max-w-40 flex-1">
        <img src={stickPic}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">1x FLATBOX XL</p>
        <p className="text-neutral">RED BUTTONS</p>
      </div>
      <ProductCounter type="cart" />
      <div className="text-neutral font-bold pr-4">4200 THB</div>
      <TrashIcon />
    </div>
  );
}

export default CartItem;
