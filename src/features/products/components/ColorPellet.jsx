import React from "react";

function ColorPellet({ color }) {
  return (
    <div
      className={`transition-transform w-5 h-5 bg-${color} my-2 rounded-full border-2 hover:border-black hover:scale-110 active:scale-150`}
    ></div>
  );
}

export default ColorPellet;
