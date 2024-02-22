import UserOrder from "../../products/components/UserOrder";
import OrderButtons from "../../products/components/OrderButtons";
import { useOrder } from "../../products/contexts/OrderContext";
import { useEffect } from "react";
import { useState } from "react";

function UserOrderSection() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("ALL");
  const { orders } = useOrder();

  useEffect(() => {
    if (orders) {
      setLoading(false);
    }
  }, [orders]);

  return loading ? null : orders ? (
    <div className="w-full bg-base-300 p-8">
      <OrderButtons setView={setView} view={view} />
      <div className="flex flex-col gap-4">
        {orders
          .filter((order) => view === "ALL" || order.status === view)
          .map((order) => {
            return <UserOrder key={order.id} order={order} />;
          })}
      </div>
    </div>
  ) : null;
}

export default UserOrderSection;
