import React from "react";
import ProfileMenu from "./ProfileMenu";
import UserProfile from "../../features/user/components/UserProfile";

function ProfileContainer() {
  return (
    <div className="relative flex justify-between h-100vh ">
      <ProfileMenu />
      <div className="w-full h-screen flex justify-center items-center">
        <UserProfile />
      </div>
    </div>
  );
}

export default ProfileContainer;
