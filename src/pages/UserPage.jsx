import React from "react";
import ProfileContainer from "./layouts/ProfileContainer";

import { Outlet } from "react-router-dom";
import UserProfile from "../features/user/components/UserProfile";

function UserPage() {
  return (
    <>
      <div className="relative">
        <ProfileContainer>
          <UserProfile />
        </ProfileContainer>
      </div>
    </>
  );
}

export default UserPage;
