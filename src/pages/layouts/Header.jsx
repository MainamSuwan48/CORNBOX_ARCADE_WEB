import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <LogoCornbox />
      <div className="flex gap-6">
        <p className="transition-all text-2xl font-bold hover:scale-105 hover:text-primary active:scale-90 active:text-secondary cursor-pointer">HOME</p>
        <p className="transition-all text-2xl font-bold hover:scale-105 hover:text-primary active:scale-90 active:text-secondary cursor-pointer">PRODUCT</p>
        <UserIcon size={"2x"} />
        <CartIcon size={"2x"} />
      </div>
    </div>
  );
}

export default Header;
