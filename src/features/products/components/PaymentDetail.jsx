import React from "react";
import ActionButton from "../../../components/ui/ActionButton";
import QrPic from "../../../assets/QR.png";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useProduct } from "../contexts/ProductContext";
import { useUser } from "../../user/contexts/UserContext";
import { toast } from "sonner";
import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

function PaymentDetail() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { shippingAddress } = useUser();
  const { cartId, cart, stocks, updateStock, deleteCart } = useProduct();
  const { createOrder, createOrderItems, getOrderByUserId, setOrders } =
    useOrder();

  const newStock = (cart, stocks) => {
    const newStock = stocks.map((stock) => {
      const cartItem = cart.find((item) => item.productItemId === stock.id);
      if (cartItem) {
        const newStock = {
          ...stock,
          stock: stock.stock - cartItem.quantity,
        };
        if (newStock.quantity < 0) {
          throw new Error("Out of stock Please Update Your Cart And Refresh");
        }
        return newStock;
      }
      return stock;
    });
    return newStock;
  };

  const upDateStocks = async (newStocks) => {
    newStocks.forEach(async (stock) => {
      console.log(
        stock.id,
        stock.newStock,
        "stock id and new stock in payment detail"
      );
      const response = await updateStock(stock.id, stock.stock);
      return response;
    });
  };

  const handleCheckout = async () => {
    if (!cartId) {
      toast.error("Cart Is not Found Please Refresh the Page and Try Again");
      return;
    }
    if (!cart.length) {
      toast.error("Cart is Empty Why don't you add some products first?");
      return;
    }
    if (!shippingAddress) {
      toast.error("You don't have any address");
      return;
    }
    try {
      const order = await createOrder(authUser.id, shippingAddress.id, cartId);
      console.log(order, "order in payment detail");
      const orderId = order.data.id;
      const orderItem = await createOrderItems(orderId, cartId);
      console.log(orderItem, "orderItem in payment detail");
      console.log(cart, "cart in payment detail");
      const newStocks = newStock(cart, stocks);
      console.log(newStocks, "newStocks in payment detail");
      await deleteCart(cartId);
      await upDateStocks(newStocks);
      const newOrder = await getOrderByUserId(authUser.id);
      console.log(newOrder.data, "new order in payment detail");
      setOrders(newOrder.data);
      setTimeout(() => {
        navigate(`/user/${authUser.id}/order`);
      }, 2000);
      toast.success("Order Created Successfully Redirecting to Orders Page");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="sticky -top-36 flex flex-col p-8 bg-black w-96 rounded-xl justify-center items-center gap-2 z-50">
        <div>
          <img src={QrPic}></img>
        </div>
        <div className="text-white  text-xl">
          <p>Scan the QR code to pay</p>
        </div>
        <div className="text-primary  text-xl">
          <p>Please Deposit : 1500 THB</p>
        </div>
        <input
          className="bg-transparent  border border-input border-primary bg-primary rounded-lg p-2 w-60"
          type="file"
        ></input>
        <ActionButton onClick={handleCheckout}>CHECKOUT</ActionButton>
      </div>
    </>
  );
}

export default PaymentDetail;
