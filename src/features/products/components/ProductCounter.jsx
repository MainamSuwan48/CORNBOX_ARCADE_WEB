import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { useEffect } from "react";

const CounterTypeClasses = {
  normal: "",
  cart: "scale-75",
};

function ProductCounter({
  type = "normal",
  quantity = 1, //
  cartItemId,
  setQuantity,
}) {
  const [count, setCount] = useState(quantity);
  const { updateCartItem } = useProduct();

  const upDateQuantity = async (id, quantity) => {
    console.log(id, quantity , "i'm From update quantity");
    try {
      const newItem = await updateCartItem(id, quantity);     
    } catch (error) {
      console.log(error);
    }
  };

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
  const decreaseCartItem = () => {
    if (count > 1) {
      setCount(count - 1);
      upDateQuantity(cartItemId, count - 1);
    }
  };

  const increaseCartItem = () => {
    setCount(count + 1);
    console.log(cartItemId, "i'mFromProductCounter")
    upDateQuantity(cartItemId, count + 1);
  };

  const test  = () => {
    console.log(cartItemId);
  }

  if (type === "cart") {
    return (
      <div className={`flex items-center py-2 ${CounterTypeClasses[type]}`}>
        <div
          className="flex justify-center items-baseline h-10 w-10 border-2 border-neutral text-neutral text-2xl active:bg-primary select-none active:text-base-100"
          onClick={decreaseCartItem}
        >
          -
        </div>
        <div 
        onClick={test}
        className="flex justify-center items-baseline h-10 w-20 border-2 border-neutral text-neutral text-2xl">
          {count}
        </div>
        <div
          className="flex justify-center items-baseline h-10 w-10 border-2 border-neutral text-neutral text-2xl active:bg-primary select-none active:text-base-100"
          onClick={increaseCartItem}
        >
          +
        </div>
      </div>
    );
  }

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
