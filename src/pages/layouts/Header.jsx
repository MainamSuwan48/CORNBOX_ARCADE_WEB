import React from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed w-full top-0 z-50 drop-shadow-lg backdrop-blur-2xl flex justify-between items-center px-4 py-2">
      <LogoCornbox />
      <div className="flex gap-6">
        <Link to="/">
          <LinkWeb>HOME</LinkWeb>
        </Link>
        <Link to="/product/1">
          <LinkWeb>PRODUCTS</LinkWeb>
        </Link>
        <UserIcon size={"2x"} />
        <CartIcon size={"2x"} />
      </div>
    </div>
  );
}

export default Header;
