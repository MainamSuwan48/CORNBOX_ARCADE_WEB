import React from "react";
import UserOrder from "../../products/components/UserOrder";
import OrderButtons from "../../products/components/OrderButtons";

function UserOrderSection() {
  return (
    <div className="w-full bg-base-300 p-8">
    <OrderButtons />
      <div className="flex flex-col gap-4">
        <UserOrder status="DEPOSITED" />
        <UserOrder status="COMPLETED" />
        <UserOrder status="COMPLETED" />
        <UserOrder status="CANCELED" />
      </div>
    </div>
  );
}

export default UserOrderSection;
