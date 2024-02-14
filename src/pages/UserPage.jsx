import React from "react";
import Header from "./layouts/Header";
import ProfileContainer from "./layouts/ProfileContainer";
import Adresses from "../features/user/components/Addresses";

function UserPage() {
  return (
    <>
      <div className="relative">       
        <ProfileContainer />        
      </div>
    </>
  );
}

export default UserPage;
