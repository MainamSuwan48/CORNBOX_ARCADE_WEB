import React from "react";
import ProductCounter from "./ProductCounter";
import stickPic from "../../../assets/stick.png";
import { TrashIcon } from "../../../components/icons";
import { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { toast } from "sonner";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CartItem({ cartItemData, productsData, stocks }) {
  const [deleted, setDeleted] = useState(false);
  const [editAttribute, setEditAttribute] = useState(false);
  const product = productsData.find(
    (product) => product.id === cartItemData.productItemId
  );
  const { mainImage, name, price } = product;
  const { id, attribute, quantity, productItemId } = cartItemData;
  const { updateCartItem, setCart, deleteCartItem, updateCartItemAttribute } =
    useProduct();
  const [cartItemQuantity, setCartItemQuantity] = useState(quantity);
  const [cartItemAttribute, setCartItemAttribute] = useState("HEEEEE");

  const thisStock = stocks.find((stock) => stock.id === productItemId);

  const test = () => {
    console.log(id);
  };

  useEffect(() => {
    setCart((prevCart) => {
      return prevCart.map((newCartItem) => {
        if (newCartItem.id === id) {
          return { ...newCartItem, quantity: cartItemQuantity };
        }
        return newCartItem;
      });
    });
    const updateCartItemQuantity = async () => {
      const response = await updateCartItem(id, cartItemQuantity);
    };
    updateCartItemQuantity();
    return () => {};
  }, [cartItemQuantity]);

  const onDelete = async () => {
    await deleteCartItem(id);
    setDeleted(true);
    setTimeout(() => {
      setCart((prevCart) => {
        return prevCart.filter((item) => item.id !== id);
      });
    }, 2000);
  };

  const upDateAttribute = async () => {
    console.log(cartItemAttribute)
    const response = await updateCartItemAttribute(id, cartItemAttribute);
    toast.success("Attribute updated");
  };

  return (
    <div className="flex justify-between items-center mt-4 p-2 min-w-full relative">
      <div onClick={test} className="max-w-40 flex-1">
        <Link to={`/product/${productItemId}`}>
          <img src={mainImage}></img>
        </Link>
      </div>
      <div className="flex flex-col mr-3 items-start">
        <p className="text-neutral font-bold">{name}</p>
        <p 
        className="text-neutral border-2 border-primary p-1 transition-all hover:bg-primary hover:text-base-100 cursor-pointer"
       >
          {attribute}
        </p>
      </div>
      {/* for debugging purposes */}
      <div className="flex items-center justify-center text-xl text-primary">
        ID:{id}
      </div>
      <ProductCounter
        setQuantity={setCartItemQuantity}
        quantity={quantity}
        type="cart"
        stock={thisStock.stock}
      />
      <div className="text-neutral font-bold pr-4">{price}</div>
      <>
        <div
          onClick={onDelete}
          className={`flex items-center justify-center w-8 h-8 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:scale-125 hover:text-white transition-all duration-300 ease-in-out active:scale-75`}
        >
          <TrashIcon />
        </div>
        {deleted ? (
          <div
            className={`flex justify-between backdrop-blur-3xl absolute w-full p-1`}
          >
            <div className="text-red-600 text-3xl border-2 border-red-600 font-black">
              DELETED
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
}

export default CartItem;
