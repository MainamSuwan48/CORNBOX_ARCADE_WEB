import { useEffect, useState } from "react";
import { EditIcon, EditUserIcon } from "../../../components/icons";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import AddressSingular from "./AddressSingular";

function Addresses() {
  const [frontAddress, setFrontAddress] = useState({});
  const { getAddressesByUserId, addresses } = useUser();
  const param = useParams();

  useEffect(() => {
    const fetchAddresses = async () => {
      console.log(param);
      try {
        const response = await getAddressesByUserId(param.userId);        
        setFrontAddress(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAddresses();
  }, [addresses]);
  return (
    <div className="flex gap-2 flex-wrap">
      {frontAddress && frontAddress.length > 0 ? (
        frontAddress.map((address, index) => (
          <AddressSingular key={index} address={address} />
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Addresses;
