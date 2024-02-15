import React from "react";

function UserInput({ type = "text", placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-none text-white font-medium bg-transparent border-2 border-white my-1"
    />
  );
}

export default UserInput;
