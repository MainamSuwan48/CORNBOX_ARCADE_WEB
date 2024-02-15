import React from "react";

function ProfileMenuLinks({ children }) {
  return (
    <p className="transition-all text-xl font-medium hover:text-primary  active:translate-x-2">
      {children}
    </p>
  );
}

export default ProfileMenuLinks;
