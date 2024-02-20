import React from "react";
import Title from "../../../components/ui/Title";
import ColorPellet from "./ColorPellet";
import ProductCounter from "./ProductCounter";
import ActionButton from "../../../components/ui/ActionButton";
import { useProduct } from "../contexts/ProductContext";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { data } from "autoprefixer";
import { exist } from "joi";

function ProductDetail({ productData }) {
  const { id, name, price, description, status, stock } = productData;
  const { authUser } = useAuth();
  const { addItemToCart, getCartByUserId, setCart, cart, updateCartItem } =
    useProduct();
  const [cartId, setCartId] = useState(null);
  const [color, setColor] = useState({
    attribute: "CLEAR",
    class: "border-white",
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (authUser) {
      const fetchCart = async () => {
        const res = await getCartByUserId(authUser.id);
        console.log(res.data.id);
        setCartId(res.data.id);
      };
      fetchCart();
    }
  }, [authUser]);

  const addToCart = async () => {
    //I SPENT 3 HOURS ON THIS GOD HELP ME
    console.log(cart);
    const data = {
      cartId: cartId,
      productItemId: id,
      quantity: quantity,
      attribute: color.attribute,
    };
    //check if there is existing item in cart
    const existingItem = cart.find((item) => item.productItemId === id);
    console.log(existingItem);

    if (existingItem) {
      if (existingItem.attribute != color.attribute) {
        toast.error("You can't add different color buttons to the same item");
        return;
      }
      const newQuantity = existingItem.quantity + quantity;
      console.log(newQuantity, "newQuantity");
      if (newQuantity > stock) {
        toast.error(`You can't add more than ${stock} items`);
        return;
      }
      const result = await updateCartItem(existingItem.id, newQuantity);
      console.log(result.data);
      setCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.id === existingItem.id) {
            return result.data;
          }
          return item;
        });
      });
      toast.success(
        `You have added ${quantity} ${name} with ${color.attribute} to your cart`
      );
      return;
    }

    console.log(data);
    ///if there is no existing item in cart
    try {
      const result = await addItemToCart(data);
      setQuantity(1);
      console.log(result.data);
      setCart((prevCart) => {
        return [...prevCart, result.data];
      });
      toast.success(
        `You have added ${quantity} ${color.attribute} buttons  ${name} to your cart`
      );
    } catch (error) {
      console.log(error);
      toast.error("Please Login before adding to cart");
    }
  };

  const checkOut = () => {
    try {
      addToCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-8 flex flex-col min-h-screen">
      <Title>{name}</Title>
      <div className="mt-8">
        <p className="text-2xl font-bold">{price} THB</p>
        <p className="text-lg text-primary">
          {status} {stock} in Stock
        </p>
      </div>
      <div className="mt-8">
        <p className="text-lg max-w-screen-sm pr-12">{description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className={`text-xl text-primary font-bold mr-4`}>Buttons</div>
        <ColorDisplay color={color} />
        <ColorPellet
          color="clear"
          onClick={() =>
            setColor({ attribute: "CLEAR", class: "border-white" })
          }
        />
        <ColorPellet
          color="black"
          onClick={() =>
            setColor({ attribute: "BLACK", class: "border-black" })
          }
        />
        <ColorPellet
          color="blue"
          onClick={() =>
            setColor({ attribute: "BLUE", class: "border-blue-500" })
          }
        />
        <ColorPellet
          color="green"
          onClick={() =>
            setColor({ attribute: "GREEN", class: "border-green-500" })
          }
        />
        <ColorPellet
          color="pink"
          onClick={() =>
            setColor({ attribute: "PINK", class: "border-red-500" })
          }
        />
        <ColorPellet
          color="purple"
          onClick={() =>
            setColor({ attribute: "PURPLE", class: "border-purple-500" })
          }
        />
        <ColorPellet
          color="red"
          onClick={() =>
            setColor({ attribute: "RED", class: "border-red-700" })
          }
        />
        <ColorPellet
          color="yellow"
          onClick={() =>
            setColor({ attribute: "YELLOW", class: "border-yellow-400" })
          }
        />
      </div>
      {status === "AVAILABLE" ? (
        <div className="flex items-baseline gap-8 align-bottom">
          <ProductCounter
            type="normal"
            quantity={quantity}
            setQuantity={setQuantity}
            stock={stock}
          />
          <ActionButton onClick={addToCart}>ADD TO CART</ActionButton>
          <Link to="/checkout">
            <ActionButton onClick={addToCart}>CHECKOUT</ActionButton>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;
