import { useState } from "react";
import UserInput from "./UserInput";
import { toast } from "sonner";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";

function AddressCreator({ watch, setWatch, onClose }) {
  const param = useParams();
  const [newAddress, setNewAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  });
  const { createAddressByUserId } = useUser();
  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAddressByUserId(param.userId, newAddress);
      console.log(response);
      toast.success("Address Created");
      onClose();

      setWatch(!watch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-primary border-2 rounded min-w-80 scroll-mt-4 p-5 min-h-60"
    >
      <div className="flex justify-between border-b-2 mx-2 border-base-100 py-2">
        <p className="text-2xl font-bold text-black drop-shadow-sm ">
          Create Address
        </p>
        <button className="transition-all flex items-center gap-2 bg-transparent border-2 border-black font-bold text-black px-3 py-1 rounded hover:scale-110 active:scale-75 active:bg-secondary">
          CREATE
        </button>
      </div>
      <div className="flex flex-col bg-black p-2 mt-2">
        <UserInput
          onChange={handleInputChange}
          placeholder={"Address Line 1"}
          value={newAddress.addressLine1}
          name="addressLine1"
        ></UserInput>
        <UserInput
          onChange={handleInputChange}
          placeholder={"Address Line 2"}
          value={newAddress.addressLine2}
          name="addressLine2"
        ></UserInput>
        <UserInput
          onChange={handleInputChange}
          placeholder={"City"}
          value={newAddress.city}
          name="city"
        ></UserInput>
        <UserInput
          onChange={handleInputChange}
          placeholder={"Postal Code"}
          value={newAddress.postalCode}
          name="postalCode"
        ></UserInput>
      </div>
    </form>
  );
}

export default AddressCreator;
