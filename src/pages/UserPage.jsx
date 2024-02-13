import React from "react";
import Header from "./layouts/Header";
import ProfileContainer from "./layouts/ProfileContainer";

function UserPage() {
  return (
    <>
      <div className="relative">
        <Header />
        <ProfileContainer />
      </div>
    </>
  );
}

export default UserPage;
