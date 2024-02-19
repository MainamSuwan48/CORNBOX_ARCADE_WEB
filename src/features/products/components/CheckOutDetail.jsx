import React from "react";
import ShippingAddress from "./ShippingAddress";



function CheckOutDetail() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-500 max-w-screen-sm flex-1 p-8 rounded-lg min-w-full h-full">
        <div className="text-2xl border-b-2 border-base-100 text-base-100 font-bold">
          Your Items
        </div>       
        <div className="flex justify-between items-center mt-4">
          <div className="text-base-100 font-bold">Total</div>
          <div className="text-base-100 font-bold">16800 THB</div>
        </div>
      </div>
      <ShippingAddress />
    </div>
  );
}

export default CheckOutDetail;
