import { useState } from "react";
import OrderButton from "./OrderButton";
import { useEffect } from "react";

function OrderButtons({ setView, view }) {
  const [active, setActive] = useState(view);

  const handleActive = (view) => {
    setActive(view);
    setView(view);
  };

  return (
    <div className="flex justify-start gap-4 py-3 flex-1">
      <OrderButton onClick={() => handleActive("ALL")} active={active}>
        ALL
      </OrderButton>
      <OrderButton onClick={() => handleActive("DEPOSITED")} active={active}>
        DEPOSITED
      </OrderButton>
      <OrderButton onClick={() => handleActive("PROCESSING")} active={active}>
        PROCESSING
      </OrderButton>
      <OrderButton onClick={() => handleActive("SHIPPED")} active={active}>
        SHIPPED
      </OrderButton>
      <OrderButton onClick={() => handleActive("COMPLETED")} active={active}>
        COMPLETED
      </OrderButton>
      <OrderButton onClick={() => handleActive("CANCELED")} active={active}>
        CANCELED
      </OrderButton>
    </div>
  );
}

export default OrderButtons;
