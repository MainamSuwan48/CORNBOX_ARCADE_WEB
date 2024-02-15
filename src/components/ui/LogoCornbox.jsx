import React from "react";

function logo({ size }) {
  const sizeClass = {
    tiny: "scale-50",
    small: "scale-75",
    normal: "scale-100",
    big: "scale-150",
    huge: "scale-200",
  };
  return (
    <div className={`flex ${sizeClass[size]}`}>
      <span className="select-none transition-all bg-primary -tracking-widest hover:tracking-widest font-black text-base-100 text-4xl py-2 border-solid border-2 border-primary">
        CORNBOX
      </span>
      <span className="select-none file:text-primary font-black text-4xl py-2 px-1 border-solid border-2 border-primary">
        ARCADE
      </span>
    </div>
  );
}

export default logo;
