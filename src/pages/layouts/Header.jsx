import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import Link from "../../components/ui/Link";

function Header() {
  return (
    <div className="drop-shadow-lg backdrop-blur-sm flex justify-between items-center px-4 py-2 bg-base-200">
      <LogoCornbox />
      <div className="flex gap-6">
        <Link>HOME</Link>
        <Link>PRODUCTS</Link>
        <UserIcon size={"2x"} />
        <CartIcon size={"2x"} />
      </div>
    </div>
  );
}

export default Header;
