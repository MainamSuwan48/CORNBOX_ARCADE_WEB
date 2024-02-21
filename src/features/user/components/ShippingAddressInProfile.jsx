import React from "react";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import AddressSingular from "./AddressSingular";

function ShippingAddressInProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { shippingAddress ,address } = useUser();

  useEffect(() => {
    if (shippingAddress) {
      setIsLoading(false);
    }
  }, [shippingAddress]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col">
          <div className="text-2xl text-white font-bold">
            Your Shipping Address
          </div>
        </div>
        <AddressSingular address={shippingAddress} type={"shipping"} />
      </div>
    </div>
  );
}

export default ShippingAddressInProfile;
