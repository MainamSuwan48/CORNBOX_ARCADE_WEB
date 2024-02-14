import React from "react";

function UserOrder() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-base-200 rounded-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">Order ID: 123456</h1>
            <p>Order Date: 2021-10-10</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="transition-all p-4 border-2 border-primary hover:bg-primary hover:font-black hover:text-base-300 active:scale-90">
            View Order
          </button>
          <p className="transition-all p-4 border-2 border-primary font-black hover:text-base-300 hover:bg-primary">
            SHIPPED
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
