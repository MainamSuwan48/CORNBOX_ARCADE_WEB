import React, { useEffect, useState } from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";

function Header() {
  const { authUser, fetchMe } = useAuth();
  const navigate = useNavigate();

  const navigateToUser = async () => {
    const response = await fetchMe();
    if (!response) {
      navigate("/login")
      return;
    }
    navigate(`/user/${response.user.id}`);    
  };

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
        <div onClick={navigateToUser}>
          <UserIcon size={"2x"} />
        </div>
        <CartIcon size={"2x"} />
      </div>
    </div>
  );
}

export default Header;
