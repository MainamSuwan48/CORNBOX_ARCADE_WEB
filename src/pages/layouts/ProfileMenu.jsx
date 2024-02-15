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
        className="btn btn-primary text-base font-bold active:btn-secondary mb-20"
      >
        LOG OUT
      </button>
    </div>
  );
}

export default ProfileMenu;
