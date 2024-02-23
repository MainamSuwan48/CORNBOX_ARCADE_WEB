import { useProduct } from "../contexts/ProductContext";
import OrderItem from "./OrderItem";

function OrderItemList({ orderItems }) {
  const { products } = useProduct();
  return (
    <div className="flex flex-col bg-primary p-2 mt-2">
      {orderItems.map((orderItem) => {
        const product = products.find(
          (product) => product.id === orderItem.productId
        );
        if (!product) {
          return null; // or a loading spinner, or some other placeholder component
        }
        return (
          <OrderItem
            key={orderItem.id}
            orderItem={orderItem}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default OrderItemList;
