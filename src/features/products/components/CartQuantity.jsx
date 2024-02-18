import React, { useState, useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";

function CartQuantity() {
  const { cart, getCartItemQuantity } = useProduct();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchQuantity = async () => {
      const quantity = await getCartItemQuantity(1);
      setQuantity(quantity);
    };

    fetchQuantity();
  }, [cart]);

  return (
    <div className="flex items-center justify-center text-xl text-primary">
      Quantity in cart: {quantity}
    </div>
  );
}

export default CartQuantity;
