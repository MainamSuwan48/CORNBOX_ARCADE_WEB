import { useState } from "react";
import { EditIcon } from "../../../components/icons";
import UserInput from "./UserInput";
import AddressEditor from "./AddressEditor";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import { useOrder } from "../../products/contexts/OrderContext";

function AddressSingular({ address, type }) {
  const param = useParams();
  const [isEdit, setIsEdit] = useState();
  const { deleteAddressById, setAddresses } = useUser();
  const { orders } = useOrder();
  const { id, addressLine1, addressLine2, city, postalCode } = address;
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(id);
      console.log(param.id);
      const response = await deleteAddressById(param.userId, id);
      console.log(response);
      setAddresses((prevAddresses) =>
        prevAddresses.filter((address) => address.id !== id)
      );
      toast.success("Address Deleted");
    } catch (err) {
      console.log(err);
      toast.error("Address Not Deleted");
    }
  };

  useEffect(() => {
    if (address) {
      setLoading(false);
    }
  }, [address,orders]);

  if (type === "billing") {
    return loading ? null : (
      <div
        className="flex items-center border-2 rounded min-w-80 scroll-mt-4 p-5 gap-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cardboard-wallpaper-template_1194-6785.jpg?w=1380&t=st=1708528323~exp=1708528923~hmac=f7b28358d03702ac41b60cec7a1d1a6c81dc304c0758df1a8a60f97de16bf7bb')",
        }}
      >
        <div className="w-full h-full">
          <div
            className="flex justify-start gap-4 items-center mx-2 py-2 p-2 backdrop-blur-lg  text-black border-2
          border-black"
          >
            <span className="text-red-600 font-bold ">Line 1:</span>
            {addressLine1}
            <span className="text-red-600 font-bold ">Line 2:</span>
            {addressLine2}
            <span className="text-red-600 font-bold ">City:</span>
            {city}
            <span className="text-red-600 font-bold ">Postal Code:</span>
            {postalCode}
          </div>
        </div>
        <div className="text-lg flex flex-col">
          <p className="text-2xl font-bold text-primary drop-shadow-sm border text-nowrap py-2 px-1 bg-slate-800">
            Adresses ID {id}
          </p>
        </div>
      </div>
    );
  }

  if (type === "shipping") {
    return loading ? null : (
      <div
        className="flex items-start relative bg-black border-2 rounded min-w-80 scroll-mt-4 p-5 gap-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cardboard-wallpaper-template_1194-6785.jpg?w=1380&t=st=1708528323~exp=1708528923~hmac=f7b28358d03702ac41b60cec7a1d1a6c81dc304c0758df1a8a60f97de16bf7bb')",
        }}
      >
        <div className="w-full h-full">
          <div className="flex justify-center gap-4 items-center border-2 mx-2 border-accent py-2 p-2 glass text-black">
            <div className="flex flex-col">
              <span className="text-primary font-bold ">Line 1:</span>
              {addressLine1}
              <span className="text-primary font-bold ">Line 2:</span>
              {addressLine2}
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold ">City:</span>
              {city}
              <span className="text-primary font-bold ">Postal Code:</span>
              {postalCode}
            </div>
          </div>
        </div>
        <div className="text-lg flex flex-col">
          <p className="text-2xl font-bold text-primary drop-shadow-sm border text-nowrap py-2 px-1 bg-slate-800">
            Adresses ID
          </p>
          <p className="text-5xl font-bold text-red-600 drop-shadow-sm text-center">
            {id}
          </p>
        </div>
      </div>
    );
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative bg-transparent border-2 rounded min-w-80 scroll-mt-4 p-5 min-h-60">
      <div
        onClick={handleDelete}
        className="transition-all absolute -right-2 -top-2 flex justify-center items-center h-8 w-8 bg-red-600 text-neutral rounded-full active:scale-50 hover:scale-125"
      >
        X
      </div>
      <div className="flex justify-between border-b-2 mx-2 border-accent py-2">
        <p className="text-2xl font-bold text-primary drop-shadow-sm ">
          Adresses ID :{id}
        </p>
        <div onClick={() => setIsEdit(!isEdit)} className="cursor-pointer">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(!isEdit)}
              className="px-2 py-1 text-1xl font-bold text-red-600 drop-shadow-sm border-2 border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-all active:scale-90"
            >
              Cancle
            </button>
          ) : (
            <EditIcon size={"2x"} />
          )}
        </div>
      </div>
      {isEdit ? (
        <AddressEditor address={address} setIsEdit={setIsEdit} />
      ) : (
        <div className="flex flex-col px-2">
          <p className="text-neutral text-lg">Line 1: {addressLine1}</p>
          <p className="text-neutral text-lg">Line 2: {addressLine2}</p>
          <p className="text-neutral text-lg">City :{city}</p>
          <p className="text-neutral text-lg">Postal Code: {postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default AddressSingular;
