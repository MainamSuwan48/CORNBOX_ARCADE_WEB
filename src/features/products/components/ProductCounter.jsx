import React, { useState } from "react";

const CounterTypeClasses = {
  normal: "",
  cart: "scale-75",
};

function ProductCounter({ type = "normal", quantity = 1 }) {
  const [count, setCount] = useState(quantity);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className={`flex items-center py-2 ${CounterTypeClasses[type]}`}>
      <div
        className="flex justify-center items-baseline h-10 w-10 border-2 border-primary text-neutral text-2xl active:bg-primary select-none active:text-base-100"
        onClick={decreaseCount}
      >
        -
      </div>
      <div className="flex justify-center items-baseline h-10 w-20 border-2 border-primary text-neutral text-2xl">
        {count}
      </div>
      <div
        className="flex justify-center items-baseline h-10 w-10 border-2 border-primary text-neutral text-2xl active:bg-primary select-none active:text-base-100"
        onClick={increaseCount}
      >
        +
      </div>
    </div>
  );
}

export default ProductCounter;
