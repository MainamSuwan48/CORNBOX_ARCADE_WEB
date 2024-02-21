import React from "react";
import ProfileContainer from "./layouts/ProfileContainer";


import { Outlet } from "react-router-dom";

function UserPage() {
  return (
    <>
      <div className="relative min-h-screen h-full">
        <ProfileContainer>
          <Outlet />
        </ProfileContainer>
      </div>
    </>
  );
}

export default UserPage;
