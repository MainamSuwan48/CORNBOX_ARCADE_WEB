import React from "react";


function Header({ children }) {
  return <p className="text-primary text-4xl font-bold tracking-tighter drop-shadow-md">{children}</p>;
}

export default Header;
