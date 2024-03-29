import React from "react";

function LinkWeb({ children, size = "2xl", color = "neutral", onClick }) {
  return (
    <p
      onClick={onClick}
      className={`select-none transition-all text-${size} font-bold hover:text-primary hover:text-${color} active:scale-90 ac active:text-secondary cursor-pointer`}
    >
      {children}
    </p>
  );
}

export default LinkWeb;
