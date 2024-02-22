import React from "react";

function ProfileMenuLinks({ children, type }) {
  if (type === "admin") {
    return (
      <p className="flex justify-center animate-pulse transition-all border-2 text-xl font-medium hover:text-black hover:bg-primary active:translate-x-2">
        {children}
      </p>
    );
  }

  return (
    <p className="transition-all text-xl font-medium hover:text-primary  active:translate-x-2">
      {children}
    </p>
  );
}

export default ProfileMenuLinks;
