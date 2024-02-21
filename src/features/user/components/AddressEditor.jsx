import React, { useState } from "react";
import UserInput from "./UserInput";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

function AddressEditor({ address, setIsEdit, setWatch, watch }) {
  const param = useParams();
  const { id, addressLine1, addressLine2, city, postalCode } = address;
  const { updateAddressById, setAddresses } = useUser();
  const [input, setInput] = useState({
    id: id,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    city: city,
    postalCode: postalCode,
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateAddressById(param.userId, input);
      console.log(response);
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) => {
          if (address.id === input.id) {
            return { ...address, ...input };
          }
          return address;
        })
      );

      setIsEdit(false);
      toast.success("Address Updated");
      setWatch(!watch);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col px-2">
      <UserInput
        name="addressLine1"
        value={input.addressLine1}
        placeholder="Address Line 1"
        onChange={handleInputChange}
      />
      <UserInput
        name="addressLine2"
        value={input.addressLine2}
        placeholder="Address Line 2"
        onChange={handleInputChange}
      />
      <UserInput
        name="city"
        value={input.city}
        placeholder="City"
        onChange={handleInputChange}
      />
      <UserInput
        name="postalCode"
        value={input.postalCode}
        placeholder="Postal Code"
        onChange={handleInputChange}
      />
      <button className="px-2 py-1 text-1xl font-bold text-primary drop-shadow-sm border-2 border-primary rounded-md hover:bg-primary hover:text-black transition-all active:scale-90">
        Update
      </button>
    </form>
  );
}

export default AddressEditor;
