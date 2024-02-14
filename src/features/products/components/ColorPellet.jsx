import React from "react";

const colorClasses = {
  clear: "bg-white",
  black: "bg-black",
  blue : "bg-blue-500",
  green: "bg-green-500",
  pink: "bg-red-500",
  purple: "bg-purple-500",
  red: "bg-red-700",
  yellow: "bg-yellow-400"
}

function ColorPellet({ color }) {
  return (
    <div
      className={`transition-transform w-5 h-5 ${colorClasses[color]} my-2 rounded-full border-2 hover:border-black hover:scale-110 active:scale-150`}
    ></div>
  );
}

export default ColorPellet;

{/* <ColorPellet color="white" />
<ColorPellet color="slate-800" />
<ColorPellet color="blue-500" />
<ColorPellet color="green-500" />
<ColorPellet color="red-500" />
<ColorPellet color="purple-500" />
<ColorPellet color="red-700" />
<ColorPellet color="yellow-400" /> */}