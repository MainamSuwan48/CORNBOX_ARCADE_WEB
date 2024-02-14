import React from "react";
import { EditIcon } from "../../../components/icons";

function ShippingAddress() {
  return (
    <div className="bg-slate-400 rounded-lg p-8">
      <div className="flex justify-between border-b-2 border-base-100 ">
        <div className="text-2xl text-base-100 font-bold">Shipping Address</div>
        <EditIcon />
      </div>
      <div className="flex justify-between items-center pt-2">
        <div className="text-xl text-base-100">John Manguyboy</div>
        <div className="text-xl text-base-100">081234567</div>
      </div>
      <div>
        <div className="text-xl text-base-100">
          This is Address line 1 This is Address line 2
        </div>
        <div className="text-xl text-base-100">
          This is City This is Postalcode
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
