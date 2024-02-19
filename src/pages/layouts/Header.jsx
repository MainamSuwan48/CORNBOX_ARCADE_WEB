import React, { useEffect, useState } from "react";
import LogoCornbox from "../../components/ui/LogoCornbox";
import { CartIcon, UserIcon } from "../../components/icons"; // Import the UserIcon component
import LinkWeb from "../../components/ui/LinkWeb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import ShoppingCart from "../../features/products/components/ShoppingCart";
import { useProduct } from "../../features/products/contexts/ProductContext";

function Header() {
  const { fetchMe } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { products, cart, getCartByUserId } = useProduct();

  const navigateToUser = async () => {
    const response = await fetchMe();
    if (!response) {
      navigate("/login");
      return;
    }
    navigate(`/user/${response.user.id}`);
  };

  const [cartData, setCartData] = useState([]); // [1]
  const [openCart, setOpenCart] = useState(false);

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
        setOpenCart(!openCart);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const fetchUserData = async () => {
    const response = await fetchMe();
    console.log(response.user);
    setUser(response.user);
  };

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }
    const getCartData = async () => {
      const user = await fetchMe();
      const res = await getCartByUserId(user.user.id);
      console.log(res.data.shoppingCartItem);
      setCartData(res.data.shoppingCartItem);
    };
    getCartData();
  }, [cart]);

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
          total:{" "}
          {cartData.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
          },0)}
        </div>
      </div>
      {openCart ? (
        <ShoppingCart
          cartData={cartData}
          userData={user}
          productsData={products}
        />
      ) : null}
    </>
  );
}

export default Header;
