import React from "react";
import ProfileMenu from "./ProfileMenu";
import UserProfile from "../../features/user/components/UserProfile";
import Adresses from "../../features/user/components/Adresses";

function ProfileContainer() {
  return (
    <div className="relative flex justify-between h-100vh ">
      <ProfileMenu />
      <div className="w-full h-with_header flex mt-24 justify-start items-start gap-3 flex-wrap">
        <UserProfile />
        <Adresses />
        <Adresses />
        <Adresses />
        
      </div>
    </div>
  );
}

export default ProfileContainer;
