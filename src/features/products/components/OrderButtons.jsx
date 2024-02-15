import { useState } from "react";
import OrderButton from "./OrderButton";

function OrderButtons() {
  const [active, setActive] = useState("ALL");
  return (
    <div className="flex justify-start gap-4 py-3 flex-1">
      <OrderButton onClick={() => setActive("ALL")} active={active}>
        ALL
      </OrderButton>
      <OrderButton onClick={() => setActive("DEPOSITED")} active={active}>
        DEPOSITED
      </OrderButton>
      <OrderButton onClick={() => setActive("PROCESSING")} active={active}>
        PROCESSING
      </OrderButton>
      <OrderButton onClick={() => setActive("SHIPPED")} active={active}>
        SHIPPED
      </OrderButton>
      <OrderButton onClick={() => setActive("COMPLETED")} active={active}>
        COMPLETED
      </OrderButton>
      <OrderButton onClick={() => setActive("CANCELED")} active={active}>
        CANCELED
      </OrderButton>
    </div>
  );
}

export default OrderButtons;
