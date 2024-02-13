import React from "react";
import { EditIcon, EditUserIcon } from "../../../components/icons";

function Adresses() {
  return (
    <div className="relative bg-neutral rounded min-w-80 scroll-mt-4 p-5">
    <div className="absolute -right-2 -top-2 flex justify-center items-center h-8 w-8 bg-red-600 text-neutral rounded-full active:scale-90">X</div>
      <div className="flex justify-between border-b-2 mx-2 border-accent py-2">
        <p className="text-2xl font-bold text-primary drop-shadow-sm ">
          Adresses 1
        </p>
        <EditIcon size={"2x"} />
      </div>
      <div className="flex flex-col px-2">
        <p className="text-base-300 text-lg">This is Address line 1</p>
        <p className="text-base-300 text-lg">This is Address line 2</p>
        <p className="text-base-300 text-lg">This is City</p>
        <p className="text-base-300 text-lg">This is Postalcode</p>        
      </div>
    </div>
  );
}

export default Adresses;
