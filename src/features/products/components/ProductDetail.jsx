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

function ProductDetail({ productData }) {
  const { id, name, price, description, status ,stock} = productData;
  const { fetchMe } = useAuth();
  const { addItemToCart, getCartByUserId, setCart } = useProduct();
  const [color, setColor] = useState({
    attribute: "CLEAR",
    class: "border-white",
  });
  const [quantity, setQuantity] = useState(1);
  const test = {
    cartId: 1,
    productItemId: 1,
    quantity: 3,
    attribute: "GREEN",
  };

  const addToCart = async () => {
    try {
      const res = await fetchMe();
      const cartData = await getCartByUserId(res.user.id);
      const cartId = cartData.data.id;
      const data = {
        cartId: cartId,
        productItemId: id,
        quantity: quantity,
        attribute: color.attribute,
      };
      console.log(data);
      const result = await addItemToCart(data);
      setQuantity(1);
      console.log(result.data);
      setCart((prevCart) => {
        return [...prevCart, result.data];
      });
      toast.success(`You have added ${quantity} ${name} to your cart`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item to cart");
    }
  };

  return (
    <div className="my-8 flex flex-col min-h-screen">
      <Title>{name}</Title>
      <div className="mt-8">
        <p className="text-2xl font-bold">{price} THB</p>
        <p className="text-lg text-primary">{status}</p>
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
      <div className="flex items-baseline gap-8 align-bottom">
        <ProductCounter
          type="normal"
          quantity={quantity}
          setQuantity={setQuantity}
          stock={stock}
        />
        <ActionButton onClick={addToCart}>ADD TO CART</ActionButton>
        <ActionButton>BUYNOW</ActionButton>
      </div>
    </div>
  );
}

export default ProductDetail;
