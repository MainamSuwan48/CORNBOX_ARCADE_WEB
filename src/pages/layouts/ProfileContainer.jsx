import React from "react";
import ProfileMenu from "./ProfileMenu";
import UserProfile from "../../features/user/components/UserProfile";
;
import UserOrderSection from "../../features/user/components/UserOrderSection";

function ProfileContainer({ children}) {
  return (
    <div className="relative flex justify-between min-h-screen ">
      <ProfileMenu />
      <div className="w-full h-with_header flex mt-24 justify-start items-start gap-3 flex-wrap">
        {children}
      </div>
    </div>
  );
}

export default ProfileContainer;
