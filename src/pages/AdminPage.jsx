import { useState } from "react";
import { useEffect } from "react";
import { useOrder } from "../features/products/contexts/OrderContext";
import OrderButtons from "../features/products/components/OrderButtons";
import UserOrder from "../features/products/components/UserOrder";
import { useProduct } from "../features/products/contexts/ProductContext";
import { useAdmin } from "../features/admin/context/AdminContext";

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("ALL");
  const { products } = useProduct();
  const { orders } = useOrder();
  const { allOrders } = useAdmin();

  useEffect(() => {
    if (allOrders) {
      setLoading(false);
    }
  }, [orders]);

  return loading ? null : allOrders ? (
    <div className="w-full bg-base-300 p-8">
      <OrderButtons setView={setView} view={view} />
      <div className="flex flex-col gap-4">
        {allOrders
          .filter((order) => view === "ALL" || order.status === view)
          .map((order) => {
            return <UserOrder key={order.id} order={order} />;
          })}
      </div>
    </div>
  ) : null;
}
export default AdminPage;
