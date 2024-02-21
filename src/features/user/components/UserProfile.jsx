import { useEffect, useState } from "react";
import { EditUserIcon } from "../../../components/icons";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

import UserEditor from "./UserEditor";

function UserProfile({ type = "profile" }) {
  const { authUser, fetchMe } = useAuth();
  const [userProfile, setUserProfile] = useState({});
  const [edit, setEdit] = useState(false);
  const editProfile = () => {
    setEdit(!edit);
    console.log(edit);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchMe();
        console.log(response);
        setUserProfile(response.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [authUser]);

  const { id, username, email, fullName, mobilePhone } = userProfile;

  if (type === "checkout") {
    return (
      <>
        <div className="glass rounded">
          <div className="flex justify-between mx-2 border-accent py-2">
            <div>
              <p className="text-base-100 font-medium">Full name: {fullName}</p>
              <p className="text-base-100 font-medium">
                Mobilephone: {mobilePhone}
              </p>
            </div>
            <div onClick={editProfile}>
              <EditUserIcon size={"2x"} />
            </div>
          </div>
        </div>
        {edit && (
          <UserEditor
            setEdit={setEdit}
            id={id}
            fullName={fullName}
            mobilePhone={mobilePhone}
          />
        )}
      </>
    );
  }

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
            <p className="text-base-100 font-medium">{username}</p>
            <p className="text-base-100 font-medium">{email}</p>
            <p className="text-base-100 font-medium">{fullName}</p>
            <p className="text-base-100 font-medium">{mobilePhone}</p>
          </div>
        </div>
      </div>
      {edit && (
        <UserEditor
          setEdit={setEdit}
          id={id}
          fullName={fullName}
          mobilePhone={mobilePhone}
        />
      )}
    </>
  );
}

export default UserProfile;
