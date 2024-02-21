import React from "react";
import stickPic from "../../../assets/stick.png";

function OrderItem({ orderItem, product }) {
  console.log(orderItem, "order item in order item");
  console.log(product, "product in order item");
  const { quantity, attribute,} = orderItem;
  const { mainImage, name, price } = product;
  return (
    <div className="flex justify-between items-center mt-4 glass p-2 min-w-full">
      <div className="max-w-40 flex-1">
        <img src={mainImage}></img>
      </div>
      <div className="flex-1">
        <p className="text-base-100 font-bold">
          {quantity}x {name}
        </p>
        <p className="text-base-100">{attribute}</p>
      </div>
      <div className="text-base-100 font-bold pr-4">{price * quantity} THB</div>
    </div>
  );
}

export default OrderItem;
