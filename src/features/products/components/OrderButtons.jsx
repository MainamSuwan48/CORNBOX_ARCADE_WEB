import { useState } from "react";

function OrderButtons() {
  const [active, setActive] = useState("ALL");
  return (
    <div className="flex justify-start gap-4 py-3">
      <div
        onClick={() => setActive("ALL")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "ALL"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        ALL
      </div>
      <div
        onClick={() => setActive("DEPOSITED")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "DEPOSITED"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        DEPOSITED
      </div>
      <div
        onClick={() => setActive("PROCESSING")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "PROCESSING"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        PROCESSING
      </div>
      <div
        onClick={() => setActive("SHIPPED")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "SHIPPED"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        SHIPPED
      </div>
      <div
        onClick={() => setActive("COMPLETED")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "COMPLETED"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        COMPLETED
      </div>
      <div
        onClick={() => setActive("CANCELED")}
        className={`transition-all duration-300 px-4 py-1 text-2xl text-primary border-2 ${
          active === "CANCELED"
            ? "border-secondary"
            : "border-t-transparent border-l-transparent border-r-transparent"
        }    hover:border-primary hover:scale-95`}
      >
        CANCELED
      </div>
    </div>
  );
}

export default OrderButtons;
