import ProfileEditButton from "./ProfileEditButton";
import UserInput from "./UserInput";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useState } from "react";

function UserEditor() {
  const { setAuthUser } = useAuth();
  const [input, setInput] = useState({
    fullName: "",
    mobilePhone: "",
  });
  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded bg-black border-2">
      <div className="flex justify-between border-b-2 mx-2 border-neutral py-2">
        <p className="text-2xl font-bold text-Neutral drop-shadow-sm ">
          Edit Your Profile
        </p>
        <ProfileEditButton />
      </div>
      <div onSubmit={handleSubmit} className="flex justify-between gap-2">
        <div className="px-2 flex flex-col">
          <div className="flex justify-between items-center gap-2">
            <p className="text-white font-medium">Full Name</p>
            <UserInput
              name="fullName"
              value={input.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="text-white font-medium">Mobile Phone</p>
            <UserInput
              name="mobilePhone"
              value={input.mobilePhone}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserEditor;