import React from "react";
import ActionButton from "../../../components/ui/ActionButton";
import QrPic from "../../../assets/QR.png";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useProduct } from "../contexts/ProductContext";
import { useUser } from "../../user/contexts/UserContext";

function PaymentDetail() {
  const { authUser } = useAuth();
  const { address } = useUser();
  const { cart, products, stocks } = useProduct();

  const handleCheckout = () => {
    console.log(authUser, "authUser in payment detail");
    console.log(address, "address in payment detail");
    console.log(cart, "cart in payment detail");
    console.log(products, "products in payment detail");
    console.log(stocks, "stocks in payment detail");
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
