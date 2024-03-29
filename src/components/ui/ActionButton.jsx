import React from "react";

function ActionButton({ type, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-nowrap backdrop-blur-lg transition-all p-2 border-2 border-primary text-primary text-2xl font-black mt-4 hover:bg-primary hover:text-base-100 active:scale-75 active:translate-x-1"
    >
      {children}
    </button>
  );
}

export default ActionButton;
