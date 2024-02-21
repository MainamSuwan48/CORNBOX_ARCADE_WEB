import React from "react";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import AddressSingular from "./AddressSingular";
import { EditIcon } from "../../../components/icons";
import ShippingAddressSelector from "./ShippingAddressSelector";

function ShippingAddressInProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const { shippingAddress, addresses } = useUser();

  useEffect(() => {
    if (shippingAddress) {
      setIsLoading(false);
    }
  }, [shippingAddress, addresses]);

  return isLoading ? (
    <div>loading...</div>
  ) : addresses.length === 0 ? "create some address first": (
    <div className="flex justify-start items-start m-2 gap-2">
      <div className="flex flex-col justify-between gap-2 items-start text-2xl">
        <p className="text-2xl text-white ml-2">Your Shipping Address</p>
        <ShippingAddressSelector />
      </div>
      <AddressSingular address={shippingAddress} type={"shipping"} />
    </div>
  );
}

export default ShippingAddressInProfile;
