import React from "react";
import stickPic from "../../../assets/stick.png";

function OrderItem() {
  return (
    <div className="flex justify-between items-center mt-4 bg-base-100 p-2 min-w-full">
      <div className="max-w-40 flex-1">
        <img src={stickPic}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">1x FLATBOX XL</p>
        <p className="text-neutral">RED BUTTONS</p>
      </div>
      <div className="text-neutral font-bold pr-4">4200 THB</div>
    </div>
  );
}

export default OrderItem;