import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";
import { useState } from "react";

function CartItem({ cartItemData, productsData }) {
  const product = productsData.find(
    (product) => product.id === cartItemData.productItemId
  );
  const {mainImage, name, price} = product;
  const {attribute} = cartItemData;
  console.log(product, "I AM PRODUCT********* from CartItem.jsx");
  console.log(cartItemData, productsData, "********* from CartItem.jsx");
  return (
    <div className="flex justify-between items-center mt-4 p-2 min-w-full">
      <div className="max-w-40 flex-1">
        <img src={mainImage}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">{name}</p>
        <p className="text-neutral">{attribute}</p>
      </div>
      <ProductCounter type="cart" />
      <div className="text-neutral font-bold pr-4">{price}</div>
      <TrashIcon />
    </div>
  );
}

export default CartItem;
