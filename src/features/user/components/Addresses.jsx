import { useEffect, useState } from "react";
import { EditIcon, EditUserIcon } from "../../../components/icons";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import AddressSingular from "./AddressSingular";
import AddressCreator from "./AddressCreator";

function Addresses() {
  const [frontAddress, setFrontAddress] = useState({});
  const { getAddressesByUserId, addresses } = useUser();
  const param = useParams();
  const [watch, setWatch] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const fetchAddresses = async () => {
    console.log(param);
    try {
      const response = await getAddressesByUserId(param.userId);
      console.log(response);
      setFrontAddress(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onClose = () => {
    setIsCreating(false);
  };

  useEffect(() => {
    fetchAddresses();
  }, [addresses, watch]);
  return (
    <>
      <div className="flex justify-between gap-10">
        <div className="text-3xl">Create Address</div>
        {isCreating ? (
          <button
            onClick={() => setIsCreating(!isCreating)}
            className="transition-all flex items-center gap-2 bg-red-500 font-bold text-black px-3 py-1 rounded hover:scale-110 active:scale-75 active:bg-red-300"
          >
            CANCEL
          </button>
        ) : (
          <button
            onClick={() => setIsCreating(!isCreating)}
            className="transition-all flex items-center gap-2 bg-primary font-bold text-black px-3 py-1 rounded hover:scale-110 active:scale-75 active:bg-secondary"
          >
            CREATE
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {isCreating ? (
          <AddressCreator onClose={onClose} watch={watch} setWatch={setWatch} />
        ) : null}
        {frontAddress && frontAddress.length > 0 ? (
          frontAddress
            .sort((a, b) => b.id - a.id)
            .map((address, index) => (
              <AddressSingular
                key={index}
                address={address}
                setWatch={setWatch}
                watch={watch}
              />
            ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
}

export default Addresses;
