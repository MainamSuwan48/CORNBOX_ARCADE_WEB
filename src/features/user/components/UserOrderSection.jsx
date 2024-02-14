import React from "react";
import UserOrder from "../../products/components/UserOrder";


function UserOrderSection() {
  return (
    <div className="w-full bg-base-300 h-with_header px-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <UserOrder status="DEPOSITED"/>
        <UserOrder status="COMPLETED"/>
        <UserOrder status="COMPLETED"/>
        <UserOrder status="CANCELED"/>
      </div>
    </div> 
  );
}

export default UserOrderSection;
