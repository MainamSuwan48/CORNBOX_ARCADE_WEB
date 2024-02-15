import React from "react";
import ProfileEditButton from "./ProfileEditButton";
import UserInput from "./UserInput";

function UserEditor() {
  return (
    <div className="p-5 rounded bg-black border-2">
      <div className="flex justify-between border-b-2 mx-2 border-neutral py-2">
        <p className="text-2xl font-bold text-Neutral drop-shadow-sm ">
          Edit Your Profile
        </p>
        <ProfileEditButton/>
      </div>
      <form className="flex justify-between gap-2">
        <div className="px-2 flex flex-col">
          <div className="flex justify-between items-center gap-2">
            <p className="text-white font-medium">Full Name</p>
            <UserInput />
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="text-white font-medium">Mobile Phone</p>
            <UserInput />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserEditor;
