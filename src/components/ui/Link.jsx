import React from "react";

function Link({ children, size = "2xl", color = "neutral" }) {
  return (
    <p
      className={`select-none transition-all text-${size} font-bold hover:text-primary hover:text-${color} active:scale-90 active:text-secondary cursor-pointer`}
    >
      {children}
    </p>
  );
}

export default Link;
