import React from "react";
import Title from "../../../components/ui/Title";
import ColorPellet from "./ColorPellet";
import ProductCounter from "./ProductCounter";
import ActionButton from "../../../components/ui/ActionButton";

function ProductDetail({ productData }) {
  const { id, name, price, description } = productData;

  return (
    <div className="my-8 flex flex-col min-h-screen">
      <Title>{name}</Title>
      <div className="mt-8">
        <p className="text-2xl font-bold">{price}</p>
        <p className="text-lg">In stock</p>
      </div>
      <div className="mt-8">
        <p className="text-lg max-w-screen-sm pr-12">{description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="text-xl text-primary font-bold mr-4">
          Buttons Colors :
        </div>
        <ColorPellet color="clear" />
        <ColorPellet color="black" />
        <ColorPellet color="blue" />
        <ColorPellet color="green" />
        <ColorPellet color="pink" />
        <ColorPellet color="purple" />
        <ColorPellet color="red" />
        <ColorPellet color="yellow" />
      </div>
      <div className="flex items-baseline gap-8 align-bottom">
        <ProductCounter />
        <ActionButton>ADD TO CART</ActionButton>
        <ActionButton>BUYNOW</ActionButton>
      </div>
    </div>
  );
}

export default ProductDetail;
