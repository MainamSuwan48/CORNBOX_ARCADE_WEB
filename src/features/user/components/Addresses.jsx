import { useEffect, useState } from "react";
import { EditIcon, EditUserIcon } from "../../../components/icons";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import AddressSingular from "./AddressSingular";
import AddressCreator from "./AddressCreator";

function Addresses() {
  const [isLoading, setIsLoading] = useState(true);
  const { getAddressesByUserId, addresses, shippingAddress } = useUser();
  const param = useParams();
  const [watch, setWatch] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  const onClose = () => {
    setIsCreating(false);
  };

  useEffect(() => {
    if (addresses) {
      setLoading(false);
    }
  }, [addresses]);
  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start gap-10">
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

    

      <div className="text-3xl">Your Addresses</div>
      <div className="flex gap-2 flex-wrap justify-start">
        {isCreating ? <AddressCreator onClose={onClose} /> : null}
        {addresses && addresses.length > 0 ? (
          addresses
            .sort((a, b) => b.id - a.id)
            .map((address, index) => (
              <AddressSingular key={index} address={address} />
            ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default Addresses;
