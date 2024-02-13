import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import Link from "../../components/ui/Link";

function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
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
