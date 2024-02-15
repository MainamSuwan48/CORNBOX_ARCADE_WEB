import { useState } from "react";
import { EditUserIcon } from "../../../components/icons";

import UserEditor from "./UserEditor";

function UserProfile() {
  const [edit, setEdit] = useState(false);
  const editProfile = () => {
    setEdit(!edit);
    console.log(edit);
  };
  return (
    <>
      <div className="bg-neutral p-5 rounded border-2">
        <div className="flex justify-between border-b-2 mx-2 border-accent py-2">
          <p className="text-2xl font-bold text-slate-700 drop-shadow-sm ">
            Profile
          </p>
          <div onClick={editProfile}>
            <EditUserIcon size={"2x"} />
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <div className="px-2 flex flex-col">
            <p className="text-base-100 font-medium">Username</p>
            <p className="text-base-100 font-medium">Email</p>
            <p className="text-base-100 font-medium">Full Name</p>
            <p className="text-base-100 font-medium">Mobile Phone</p>
          </div>
          <div className="px-2 flex flex-col">
            <p className="text-base-100 font-medium">usernameman</p>
            <p className="text-base-100 font-medium">Email</p>
            <p className="text-base-100 font-medium">Grownman Fullmanboy</p>
            <p className="text-base-100 font-medium">08123456789</p>
          </div>
        </div>
      </div>
      {edit && <UserEditor />}
    </>
  );
}

export default UserProfile;
