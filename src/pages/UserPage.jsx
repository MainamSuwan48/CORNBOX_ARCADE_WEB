import React from "react";
import ProfileContainer from "./layouts/ProfileContainer";


import { Outlet } from "react-router-dom";

function UserPage() {
  return (
    <>
      <div className="">
        <ProfileContainer>
          <Outlet />
        </ProfileContainer>
      </div>
    </>
  );
}

export default UserPage;
