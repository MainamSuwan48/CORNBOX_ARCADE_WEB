import { useEffect } from "react";
import { useState } from "react";

function ColorDisplay({ color }) {
  const [displayColor, setDisplayColor] = useState({
    attribute: "CLEAR",
    class: "border-white",
  });

  useEffect(() => {
    setDisplayColor(color);
  }, [color]);

  return (
    <div
      className={`flex justify-center border-4 p-1 -ml-4 ${displayColor.class} min-w-20`}
    >
      {displayColor.attribute}
    </div>
  );
}

export default ColorDisplay;
