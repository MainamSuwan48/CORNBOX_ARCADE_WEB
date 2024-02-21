import React from "react";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";
import { useEffect } from "react";

function ShippingAddressSelector() {
  const [isLoading, setIsLoading] = useState(true);
  const { addresses, shippingAddress, setShippingAddress } = useUser();

  useEffect(() => {
    if (addresses) {
      setIsLoading(false);
    }
  }, [addresses]);

  const selectAddress = (e) => {
    const selectedAddress = addresses.find(
      (address) => address.id === parseInt(e.target.value)
    );
    setShippingAddress(selectedAddress);
  };

  const handleChange = (e) => {
    selectAddress(e);
  };

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <select
      onChange={handleChange}
      className="bg-slate-800 text-white p-2 rounded-md"
      value={shippingAddress.id}
    >
      {addresses.map((address) => {
        return (
          <option key={address.id} value={address.id}>
            ID:{address.id} {address.addressLine1}
          </option>
        );
      })}
    </select>
  );
}

export default ShippingAddressSelector;
