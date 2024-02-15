import React from "react";

function ProfileEditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 px-2 py-1 hover:bg-primary hover:border-primary hover:text-black active:scale-75 active:bg-secondary transition-all"
    >
      SAVE
    </button>
  );
}

export default ProfileEditButton;
