import React from "react";
import ActionButton from "../../../components/ui/ActionButton";
import QrPic from "../../../assets/QR.png";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useProduct } from "../contexts/ProductContext";
import { useUser } from "../../user/contexts/UserContext";
import { toast } from "sonner";
import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PaymentDetail() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { shippingAddress } = useUser();
  const { cartId, cart, stocks, updateStock, deleteCart } = useProduct();
  const {
    createOrder,
    createOrderItems,
    getOrderByUserId,
    setOrders,
    uploadReceipt,
  } = useOrder();

  const [receipt, setReceipt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setReceipt(file);
  };

  const handleFormData = () => {
    if (!receipt) {
      toast.error("Please Upload Receipt");
      return;
    }
    const formData = new FormData();
    formData.append("image", receipt);
    return formData;
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
    if (!receipt) {
      toast.error("Please Upload Receipt");
      return;
    }
    setIsSubmitting(true);
    try {
      const order = await createOrder(authUser.id, shippingAddress.id, cartId);
      const orderId = order.data.id;
      const formData = handleFormData();
      const receiptRes = await uploadReceipt(orderId, formData);
      const orderItem = await createOrderItems(orderId, cartId);
      const newStocks = newStock(cart, stocks);
      await deleteCart(cartId);
      await upDateStocks(newStocks);
      const newOrder = await getOrderByUserId(authUser.id);
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
          onChange={handleFileUpload}
          className="bg-transparent  border border-input border-primary bg-primary rounded-lg p-2 w-60"
          type="file"
        ></input>
        {isSubmitting ? (
          <div>
            <span className="loading loading-ball loading-xs text-secondary"></span>
            <span className="loading loading-ball loading-sm text-primary"></span>
            <span className="loading loading-ball loading-md text-secondary"></span>
            <span className="loading loading-ball loading-lg text-primary"></span>
          </div>
        ) : (
          <ActionButton onClick={handleCheckout}>CHECKOUT</ActionButton>
        )}
      </div>
    </>
  );
}

export default PaymentDetail;
