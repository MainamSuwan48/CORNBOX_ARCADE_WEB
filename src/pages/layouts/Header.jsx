import React, { useEffect, useState } from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import { getToken } from "../../utils/local-storage";
import * as authApi from "../../api/auth";

function Header() {
  const { authUser } = useAuth();

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
        <Link to={`/user/${authUser ? "" : ""}`}>
          <UserIcon size={"2x"} />
        </Link>
        <div className="text-small align-baseline my-1">
          Hi, {authUser ? authUser.username : "Guest"}
        </div>
        <CartIcon size={"2x"} />
      </div>
    </div>
  );
}

export default Header;
