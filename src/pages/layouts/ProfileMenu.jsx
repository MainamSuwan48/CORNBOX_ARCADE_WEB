import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import ProfileMenuLink from "../../features/user/components/ProfileMenuLink";

function ProfileMenu() {
  const navigate = useNavigate();
  const [user, setUser] = useState({}); // [1
  const { logout, fetchMe } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const test = () => {
    console.log(user);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchMe();
        console.log(response);
        setUser(response.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);





  return (
    <div className="flex flex-col px-4 w-60 justify-between h-with_header mt-20">
      <div>
        <p
          onClick={test}
          className="flex mt-4 mb-6 px-2 justify-center items-center py-1 transition-all text-xl font-medium hover:text-primary border-2 border-primary     "
        >
          Hi, {user.username}
        </p>
        <ProfileMenuLink>Order</ProfileMenuLink>
        <ProfileMenuLink>Profile</ProfileMenuLink>
        <ProfileMenuLink>Addresses</ProfileMenuLink>
      </div>
      <button
        onClick={handleLogout}
        className="transition-all px-4 py-2 border-2 border-primary text-primary font-bold active:btn-secondary mb-20 hover:bg-primary hover:text-base-100 hover:shadow-lg active:translate-x-2 active:translate-y-2 active:shadow-none"
      >
        LOG OUT
      </button>
    </div>
  );
}

export default ProfileMenu;
