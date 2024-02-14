import React from "react";
import ActionButton from "../../../components/ui/ActionButton";
import QrPic from "../../../assets/QR.png";

function PaymentDetail() {
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
        <ActionButton>CHECKOUT</ActionButton>
      </div>
    </>
  );
}

export default PaymentDetail;
