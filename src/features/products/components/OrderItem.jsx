import React from "react";
import stickPic from "../../../assets/stick.png";
import { Link } from "react-router-dom";

function OrderItem({ orderItem, product }) {
  const { quantity, attribute } = orderItem;
  const { mainImage, name, price } = product;
  return (
    <div className="flex justify-between items-center mt-4 glass p-2 min-w-full">
      <div className="max-w-40 flex-1">
        <Link to={`/product/${product.id}`}>
          <img
            className="transition-all hover:scale-110 active:scale-90"
            src={mainImage}
          ></img>
        </Link>
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
