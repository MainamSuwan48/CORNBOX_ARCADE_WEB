import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { useEffect } from "react";

const CounterTypeClasses = {
  normal: "",
  cart: "scale-75",
};

function ProductCounter({ type = "normal", quantity = 1, setQuantity }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  // For product page
  const decreaseProductCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setQuantity(count - 1);
    }
  };

  const increaseProductCount = () => {
    setCount(count + 1);
    setQuantity(count + 1);
  };


  // For Cart Item

  return (
    <div className={`flex items-center py-2 ${CounterTypeClasses[type]}`}>
      <div
        className="flex justify-center items-baseline h-10 w-10 border-2 border-primary text-neutral text-2xl active:bg-primary select-none active:text-base-100"
        onClick={decreaseProductCount}
      >
        -
      </div>
      <div className="flex justify-center items-baseline h-10 w-20 border-2 border-primary text-neutral text-2xl">
        {count}
      </div>
      <div
        className="flex justify-center items-baseline h-10 w-10 border-2 border-primary text-neutral text-2xl active:bg-primary select-none active:text-base-100"
        onClick={increaseProductCount}
      >
        +
      </div>
    </div>
  );
}

export default ProductCounter;
