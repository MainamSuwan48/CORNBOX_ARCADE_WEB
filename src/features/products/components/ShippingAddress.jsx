import React from "react";
import UserProfile from "../../user/components/UserProfile";

function ShippingAddress() {
  return (
    <div className="glass rounded-lg p-2 overflow-y-scroll">
      <div className="flex justify-between border-b-2 border-base-100 ">
        <div className="text-2xl text-white font-bold">Shipping Address</div>
      </div>
      <UserProfile type="checkout" />
      <div>
        <div>
          <div className="text-xl text-white">
            This is Address line 1 This is Address line 2
          </div>
          <div className="text-xl text-white">
            This is City This is Postalcode
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
