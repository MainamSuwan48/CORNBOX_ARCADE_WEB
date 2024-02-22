import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../user/contexts/UserContext";
import { useOrder } from "../../products/contexts/OrderContext";
import AddressSingular from "../../user/components/AddressSingular";
import OrderItemList from "../../products/components/OrderItemList";
import { useAdmin } from "../context/AdminContext";
import { toast } from "sonner";

function AdminOrder({ order, receipt }) {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewFull, setViewFull] = useState(false);
  const { allAddresses, updateOrder, getAllOrders, allOrders } = useAdmin();

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
  const formattedDate = dateOrdered.toLocaleDateString("en-US", dateOptions);

  const shippedAddress = allAddresses.find(
    (address) => address.id === order.shippingAddressId
  );

  const thisReceipts = receipt.find((rec) => rec.orderId === id);
  const shippedReceipt = thisReceipts?.src;

  useEffect(() => {
    if (order && receipt && allAddresses.length > 0) {
      setLoading(false);
    }
  }, [allOrders, allAddresses]);

  const [paymentStatusChange, setPaymentStatusChange] = useState(paymentStatus);
  const [statusChange, setStatusChange] = useState(status);

  const handlePaymentStatusChange = async (event) => {
    updateOrder(id, { paymentStatus: event.target.value });
    setPaymentStatusChange(event.target.value);
    getAllOrders();
    toast.success(
      "Payment Status Updated please refresh the page to see changes"
    );
  };

  const handleStatusChange = async (event) => {
    updateOrder(id, { status: event.target.value });
    setStatusChange(event.target.value);
    getAllOrders();
    toast.success(
      "Order Status Updated please refresh the page to see changes"
    );
  };

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
        <div className="relative flex justify-between max-w-4/12 gap-4">
          <img
            src={shippedReceipt || `https://i.imgur.com/kyFqnuH.png`}
            alt="shipping"
            onClick={() => {
              setViewFull(!viewFull);
            }}
            className={`${
              viewFull ? `h-receipt z-50` : "h-14"
            } transition-all hover:scale-125 active:scale-95`}
          />
          <button
            onClick={handleShow}
            className="h-12 flex items-center transition-all p-4 border-2 border-primary hover:bg-primary hover:font-black hover:text-base-300 active:scale-90"
          >
            View Order
          </button>
          <p className="h-12 flex justify-center items-center transition-all p-2 w-32 border-2 border-primary font-bold hover:text-base-300 hover:bg-primary">
            <select
              className="transition-all glass text-primary border-2 border-primary hover:text-base-300 hover:bg-primary"
              value={paymentStatusChange}
              onChange={handlePaymentStatusChange}
            >
              <option value="NOT_PAID">NOT_PAID</option>
              <option value="DEPOSITED">DEPOSITED</option>
              <option value="PAID">PAID</option>
            </select>
          </p>
          <p className="flex justify-center h-12 items-center transition-all p-2 w-32 border-2 border-primary font-bold hover:text-base-300 hover:bg-primary">
            <select
              className="transition-all glass text-primary border-2 border-primary hover:text-base-300 hover:bg-primary"
              value={statusChange}
              onChange={handleStatusChange}
            >
              <option value="DEPOSITED">DEPOSITED</option>
              <option value="PROCESSING">PROCESSING</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELED">CANCELED</option>
            </select>
          </p>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          isShow ? "h-auto " : "h-0 opacity-0 scale-y-0"
        } overflow-hidden`}
      >
        {shippedAddress ? (
          <AddressSingular address={shippedAddress} type="billing" />
        ) : (
          <p>Loading address...</p>
        )}

        <OrderItemList orderItems={orderItem} />
      </div>
    </div>
  );
}

export default AdminOrder;
