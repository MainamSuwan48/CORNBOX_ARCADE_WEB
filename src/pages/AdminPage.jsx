import { useState } from "react";
import { useEffect } from "react";
import { useOrder } from "../features/products/contexts/OrderContext";
import OrderButtons from "../features/products/components/OrderButtons";
import { useAdmin } from "../features/admin/context/AdminContext";
import AdminOrder from "../features/admin/components/AdminOrder";
import AdminProducts from "../features/admin/components/AdminProducts";

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("ALL");
  const { orders } = useOrder();
  const { allOrders, receipts } = useAdmin();

  useEffect(() => {
    if (allOrders) {
      setLoading(false);
    }
  }, [allOrders, orders]);

  return loading ? null : allOrders ? (
    <div className="w-full bg-base-300 p-8">
      <AdminProducts />
      <OrderButtons setView={setView} view={view} />
      <div className="flex flex-col gap-4">
        {allOrders
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .filter((order) => view === "ALL" || order.status === view)
          .map((order) => {
            return (
              <AdminOrder key={order.id} order={order} receipt={receipts} />
            );
          })}
      </div>
    </div>
  ) : null;
}
export default AdminPage;
