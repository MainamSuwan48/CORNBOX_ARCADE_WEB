import { useState } from "react";
import { EditIcon } from "../../../components/icons";
import UserInput from "./UserInput";
import AddressEditor from "./AddressEditor";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

function AddressSingular({ address}) {
  const param = useParams();
  const [isEdit, setIsEdit] = useState();
  const { deleteAddressById, setAddresses } = useUser();
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
  }, [address]);

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
        <AddressEditor
          address={address}
          setIsEdit={setIsEdit}
          setWatch={setWatch}
          watch={watch}
        />
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
