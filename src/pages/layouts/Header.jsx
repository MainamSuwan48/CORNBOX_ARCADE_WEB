import React, { useEffect, useState } from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import ShoppingCart from "../../features/products/components/ShoppingCart";
import { useProduct } from "../../features/products/contexts/ProductContext";

function Header() {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { products, cart } = useProduct();

  const navigateToUser = async () => {
    if (!authUser) {
      navigate("/login");
      return;
    }
    navigate(`/user/${authUser.id}`);
  };

  useEffect(() => {
        setUser(authUser);
  }, [authUser]);

  const [cartData, setCartData] = useState(cart); // [1]
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = async () => {
    if (!authUser) {
      navigate("/login");
      return;
    } else if (!openCart) {
      setOpenCart(!openCart);
      return;
    } else {
      setOpenCart(!openCart);
    }
  };

  useEffect(() => {
    setCartData(cart);
  }, [cart]);

  return (
    <>
      <div className="fixed w-full h-20 top-0 z-50 drop-shadow-lg backdrop-blur-2xl flex justify-between items-center px-4 py-2">
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
            <div className="absolute -top-3 -right-3 animate-ping-once bg-red-600 text-neutral font-bold rounded-full w-6 h-6 flex justify-center items-center">
              {cartData.reduce((acc, cartItem) => {
                return acc + cartItem.quantity;
              }, 0)}
            </div>
          </div>{" "}
        </div>
      </div>
      {openCart ? (
        <ShoppingCart
          cartData={cart}
          userData={authUser}
          productsData={products}
        />
      ) : null}
    </>
  );
}

export default Header;
