import React from "react";
import { EditIcon } from "../../../components/icons";

function AddressSingular({ address }) {
  const {id,addressLine1, addressLine2, city, postalCode } = address;
  return (
    <div className="relative bg-neutral rounded min-w-80 scroll-mt-4 p-5 min-h-60">
      <div className="absolute -right-2 -top-2 flex justify-center items-center h-8 w-8 bg-red-600 text-neutral rounded-full active:scale-90">
        X
      </div>
      <div className="flex justify-between border-b-2 mx-2 border-accent py-2">
        <p className="text-2xl font-bold text-primary drop-shadow-sm ">
          Adresses 
        </p>
        <EditIcon size={"2x"} />
      </div>
      <div className="flex flex-col px-2">
        <p className="text-base-300 text-lg">{addressLine1}</p>
        <p className="text-base-300 text-lg">{addressLine2}</p>
        <p className="text-base-300 text-lg">{city}</p>
        <p className="text-base-300 text-lg">{postalCode}</p>
      </div>
    </div>
  );
}

export default AddressSingular;
