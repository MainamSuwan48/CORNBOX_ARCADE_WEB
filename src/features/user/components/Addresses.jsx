import { useEffect, useState } from "react";
import { EditIcon, EditUserIcon } from "../../../components/icons";
import { useUser } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import AddressSingular from "./AddressSingular";

function Addresses() {
  const [frontAddress, setFrontAddress] = useState({});
  const { getAddressesByUserId ,addresses } = useUser();
  const param = useParams();

  useEffect(() => {
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
    fetchAddresses();
  }, []);
  return (
   <AddressSingular address={frontAddress[2]} />
  );
}

export default Addresses;
