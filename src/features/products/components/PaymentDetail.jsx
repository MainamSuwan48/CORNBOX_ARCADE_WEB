import React from "react";
import ActionButton from "../../../components/ui/ActionButton";
import QrPic from "../../../assets/QR.png";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useProduct } from "../contexts/ProductContext";
import { useUser } from "../../user/contexts/UserContext";
import { toast } from "sonner";

function PaymentDetail() {
  const { authUser } = useAuth();
  const { addresses } = useUser();
  const { cart, stocks } = useProduct();

  const newStock = (cart, stocks) => {
    const newStock = stocks.map((stock) => {
      const cartItem = cart.find((item) => item.productItemId === stock.id);
      if (cartItem) {
        const newStock = {
          ...stock,
          quantity: stock.stock - cartItem.quantity,
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

  const shippingAddressId = 1;

  const handleCheckout = () => {
    try {
      const newStocks = newStock(cart, stocks);
      console.log(newStocks, "newStocks in payment detail");
      console.log(shippingAddressId, "shippingAddressId in payment detail")
      console.log(cart, "cart in payment detail")
      toast.success("Checkout success");
    } catch (error) {
      toast.error(error.message);
    }

  };
  return (
    <>
      <div className="flex flex-col p-8 bg-black w-96 rounded-none rounded-xl justify-center items-center gap-2">
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
