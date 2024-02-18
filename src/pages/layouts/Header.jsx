import React, { useEffect, useState } from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import ShoppingCart from "../../features/products/components/ShoppingCart";

function Header() {
  const { authUser, fetchMe } = useAuth();
  const navigate = useNavigate();

  const navigateToUser = async () => {
    const response = await fetchMe();
    if (!response) {
      navigate("/login");
      return;
    }
    navigate(`/user/${response.user.id}`);
  };

  const [openCart, setOpenCart] = useState(false);
  const [user, setUser] = useState({
    username: "Guest",
  });
  const [cart, setCart] = useState([]);

  const openCartHandler = async () => {
    if (openCart) {
      setOpenCart(!openCart);
      return;
    } else {
      try {
        const response = await fetchMe();
        if (!response) {
          navigate("/login");
          return;
        }
        console.log(response);
        setUser(response.user);
        setOpenCart(!openCart);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="fixed w-full top-0 z-50 drop-shadow-lg backdrop-blur-2xl flex justify-between items-center px-4 py-2">
        <Link to="/">
          <LogoCornbox />
        </Link>
        <div className="flex gap-6">
          <Link to="/">
            <LinkWeb>HOME</LinkWeb>
          </Link>
          <Link to="/product/">
            <LinkWeb>PRODUCTS</LinkWeb>
          </Link>
          <div onClick={navigateToUser}>
            <UserIcon size={"2x"} />
          </div>
          <div className="relative" onClick={openCartHandler}>
            <CartIcon size={"2x"} />
          </div>
        </div>
      </div>
      {openCart ? <ShoppingCart cartData={cart} userData={user} /> : null}
    </>
  );
}

export default Header;
