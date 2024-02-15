import React from "react";
import ProfileContainer from "./layouts/ProfileContainer";
import { UserProvider } from "../features/user/contexts/UserContext";

import { Outlet } from "react-router-dom";

function UserPage() {
  return (
    <>
      <div className="relative">
        <UserProvider>
          <ProfileContainer>
            <Outlet />
          </ProfileContainer>
        </UserProvider>
      </div>
    </>
  );
}

export default UserPage;
