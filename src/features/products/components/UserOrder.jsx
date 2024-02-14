import { useState } from "react";

import OrderItemList from "./OrderItemList";

function UserOrder({ status }) {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">       
            <div>
              <h1 className="text-lg font-bold">Order ID: 123456</h1>
              <p>Order Date: 2021-10-10</p>
            </div>
          </div>
          <div className="flex justify-between max-w-4/12 gap-4">
            <button
              onClick={handleShow}
              className="transition-all p-4 border-2 border-primary hover:bg-primary hover:font-black hover:text-base-300 active:scale-90"
            >
              View Order
            </button>
            <p className="flex justify-center items-center transition-all p-4 w-36 border-2 border-primary font-black hover:text-base-300 hover:bg-primary">
              {status}
            </p>
          </div>
        </div>
      </div>
      {isShow ? <OrderItemList /> : null}
    </div>
  );
}

export default UserOrder;
