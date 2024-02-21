import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import ProfileMenuLink from "../../features/user/components/ProfileMenuLink";
import { toast } from "sonner";
import { useProduct } from "../../features/products/contexts/ProductContext";

function ProfileMenu() {
  const navigate = useNavigate();
  const { logout, fetchMe, authUser, setAuthUser } = useAuth();
  const { setCart } = useProduct();
  const [isLoading, setIsLoading] = useState(true);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      setAuthUser(null);
      setCart([]);
    } catch (err) {
      console.log(err);
    }
  };
  const param = useParams();
  useEffect(() => {
    if (authUser) {
      setIsLoading(false);
    }
  }, [authUser]);

  return isLoading ? (
    "loading"
  ) : (
    <div className="shrink-0 flex flex-col px-4 w-60 justify-between h-with_header mt-20">
      <div>
        <p className="flex mt-4 mb-6 px-2 justify-center items-center py-1 transition-all text-xl font-medium hover:text-primary border-2 border-primary shrink-0">
          Hi, {authUser.username}
        </p>
        <Link to={`/user/${authUser.id}/Order`}>
          <ProfileMenuLink>Order</ProfileMenuLink>
        </Link>
        <Link to={`/user/${authUser.id}`}>
          <ProfileMenuLink>Profile</ProfileMenuLink>
        </Link>
        <Link to={`/user/${authUser.id}/address`}>
          <ProfileMenuLink>Addresses</ProfileMenuLink>
        </Link>
        <Link to={`/user/${authUser.id}/shipping-address`}>
          <ProfileMenuLink>Shipping Addresses</ProfileMenuLink>
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="transition-all px-4 py-2 border-2 border-primary text-primary font-bold active:btn-secondary hover:bg-primary hover:text-base-100 hover:shadow-lg active:translate-x-2 active:translate-y-2 active:shadow-none"
      >
        LOG OUT
      </button>
    </div>
  );
}

export default ProfileMenu;
