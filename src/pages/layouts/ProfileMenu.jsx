import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/contexts/AuthContext";

function ProfileMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="flex flex-col px-4 w-60 justify-between h-with_header mt-20">
      <div>
        <p className="transition-all text-xl font-medium hover:text-primary  active:translate-x-2">
          Profile
        </p>
        <p className="transition-all text-xl font-medium hover:text-primary  active:translate-x-2">
          Orders
        </p>
        <p className="transition-all text-xl font-medium hover:text-primary  active:translate-x-2">
          Addresses
        </p>
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
