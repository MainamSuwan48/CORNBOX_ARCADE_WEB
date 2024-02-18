import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";

const CounterTypeClasses = {
  normal: "",
  cart: "scale-75",
};

function ProductCounter({ type = "normal", quantity = 1, cartItemId }) {
  const [count, setCount] = useState(quantity);
  const { updateCartItem } = useProduct();
  const upDateQuantity = async (quantity) => {
    try {
      await updateCartItem(cartItemId, quantity); 
    } catch (error) {
      console.log(error);
    }
  }

  const decreaseCount = () => {
    if (count > 1) {
      upDateQuantity(count - 1);
      setCount(count - 1);
    }
  };

  const increaseCount = () => { 
    upDateQuantity(count + 1);  
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
