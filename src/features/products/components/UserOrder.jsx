import { useState } from "react";

import OrderItemList from "./OrderItemList";
import { useEffect } from "react";
import { useOrder } from "../contexts/OrderContext";
import { useUser } from "../../user/contexts/UserContext";
import AddressSingular from "../../user/components/AddressSingular";

function UserOrder({ order }) {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const { addresses } = useUser();
  const { orders } = useOrder();

  const {
    id,
    orderItem,
    userId,
    shippingAddressId,
    paymentStatus,
    status,
    updatedAt,
  } = order;
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Bangkok",
  };
  const dateOrdered = new Date(updatedAt);
  console.log(dateOrdered, "updated at in user order");
  const formattedDate = dateOrdered.toLocaleDateString("en-US", dateOptions);

  const shippedAddress = addresses.find(
    (address) => address.id === order.shippingAddressId
  );


  useEffect(() => {
    if (order) {
      setLoading(false);
    }
  }, [orders]);

  return loading ? null : (
    <div className="transition-all flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div>
            <h1 className="text-lg font-bold">Order ID: {id}</h1>
            <h1 className="text-lg font-bold">User ID: {userId}</h1>
            <p>Ordered At: {formattedDate} </p>
          </div>
        </div>
        <div className="flex justify-between max-w-4/12 gap-4">
          <button
            onClick={handleShow}
            className="transition-all p-4 border-2 border-primary hover:bg-primary hover:font-black hover:text-base-300 active:scale-90"
          >
            View Order
          </button>
          <p className="flex justify-center items-center transition-all p-2 w-32 border-2 border-primary font-bold hover:text-base-300 hover:bg-primary">
            {paymentStatus}
          </p>
          <p className="flex justify-center items-center transition-all p-2 w-32 border-2 border-primary font-bold hover:text-base-300 hover:bg-primary">
            {status}
          </p>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          isShow ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        {/* <AddressSingular address={shippedAddress} type="billing" /> */}
        <OrderItemList orderItems={orderItem} />
      </div>
    </div>
  );
}

export default UserOrder;
