import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faUserNinja,
  faShoppingCart,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

export function UserIcon({ size }) {
  return (
    <div  
    className="transition-all hover:scale-110 active:scale-75 ">
      <FontAwesomeIcon
        icon={faUserNinja}
        style={{ color: "#FFD43B" }}
        size={size}
      />
    </div>
  );
}

export function CartIcon({ size }) {
  return (
    <div className="transition-all hover:scale-110 active:scale-75">
      <FontAwesomeIcon
        icon={faShoppingCart}
        style={{ color: "#FFD43B" }}
        size={size}
      />
    </div>
  );
}

export function EditUserIcon({ size }) {
  return (
    <div className="transition-all hover:scale-110 active:scale-75">
      <FontAwesomeIcon
        icon={faUserPen}
        style={{ color: "#FFD43B" }}
        size={size}
      />
    </div>
  );
}

export function EditIcon({ size }) {
  return (
    <div className="transition-all hover:scale-110 active:scale-75">
      <FontAwesomeIcon
        icon={faPenToSquare}
        style={{ color: "#FFD43B" }}
        size={size}
      />
    </div>
  );
}
export function TrashIcon({ size }) {
  return (
    <div className="transition-all hover:scale-110 active:scale-75">
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: "#FFD43B" }}
        size={size}
      />
    </div>
  );
}
