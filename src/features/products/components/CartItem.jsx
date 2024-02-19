import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";
import { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { toast } from "sonner";

function CartItem({ cartItemData, productsData }) {
  const { deleteCartItem } = useProduct();
  const [deleted, setDeleted] = useState(false);
  const product = productsData.find(
    (product) => product.id === cartItemData.productItemId
  );
  const { mainImage, name, price } = product;
  const { id, attribute, quantity } = cartItemData;

  const handleDelete = async () => {
    try {
      await deleteCartItem(id);
      setDeleted(true);
      toast.success("Item deleted");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete item");
    }
  };

  const test = () => {
    console.log(id);
  };
  return (
    <div className="flex justify-between items-center mt-4 p-2 min-w-full relative">
      <div 
      onClick={test}
      className="max-w-40 flex-1">
        <img src={mainImage}></img>
      </div>
      <div className="flex-1">
        <p className="text-neutral font-bold">{name}</p>
        <p className="text-neutral">{attribute}</p>
      </div>
      {/* for debugging purposes */}
      <div className="flex items-center justify-center text-xl text-primary">
        ID:{id}
      </div>
      <ProductCounter cartItemId={id} quantity={quantity} type="cart" />
      <div className="text-neutral font-bold pr-4">{price}</div>
      <>
        <div
          className={`flex items-center justify-center w-8 h-8 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:scale-125 hover:text-white transition-all duration-300 ease-in-out active:scale-75`}
          onClick={handleDelete}
        >
          <TrashIcon />
        </div>
        {deleted ? (
          <div
            className={`backdrop-blur-md absolute text-red-600 text-3xl border-2 border-red-600 font-black w-full p-1`}
          >
            DELETED
          </div>
        ) : null}
      </>
    </div>
  );
}

export default CartItem;
