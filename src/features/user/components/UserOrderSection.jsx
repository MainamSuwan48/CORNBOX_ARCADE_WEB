import UserOrder from "../../products/components/UserOrder";
import OrderButtons from "../../products/components/OrderButtons";
import { useOrder } from "../../products/contexts/OrderContext";
import { useEffect } from "react";
import { useState } from "react";

function UserOrderSection() {
  const [loading, setLoading] = useState(true);
  const { orders } = useOrder();
  console.log(orders, "orders in user order section");

  useEffect(() => {
    if (orders) {
      setLoading(false);
    }
  }, [orders]);

  return (
    <div className="w-full bg-base-300 p-8">
      <OrderButtons />
      <div className="flex flex-col gap-4">
        {orders.map((order) => {
          return <UserOrder key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}

export default UserOrderSection;
