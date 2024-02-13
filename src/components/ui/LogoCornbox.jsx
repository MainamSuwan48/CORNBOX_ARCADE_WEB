import React from "react";

function logo({scale = "100"}) {
  return (
    <div className={`flex scale-${scale}`}>
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
