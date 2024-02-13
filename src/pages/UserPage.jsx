import React from "react";
import Header from "./layouts/Header";
import ProfileContainer from "./layouts/ProfileContainer";
import Adresses from "../features/user/components/Adresses";

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
