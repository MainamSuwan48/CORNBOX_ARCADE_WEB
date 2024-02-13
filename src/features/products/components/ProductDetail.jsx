import React from "react";
import Title from "../../../components/ui/Title";
import ColorPellet from "./ColorPellet";
import ProductCounter from "./ProductCounter";
import ActionButton from "../../../components/ui/ActionButton";

function ProductDetail() {
  return (
    <div className="my-8 flex flex-col min-h-screen">
      <Title>FLATBOX XXL RGB</Title>
      <div className="mt-8">
        <p className="text-2xl font-bold">4200 THB</p>
        <p className="text-lg">In stock</p>
      </div>
      <div className="mt-8">
        <p className="text-lg max-w-screen-sm pr-12">
          Flatbox Controller is a pay to win controller , you buy this and you
          ascended in to GOD HOOD become Daigo, become king! BECOME GOD! and
          Probably win EVO idk it’s pretty hard since there are greater gods
          there, but not impossible if you believed.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="text-xl text-primary font-bold mr-4">
          Buttons Colors :
        </div>
        <ColorPellet color="white" />
        <ColorPellet color="slate-800" />
        <ColorPellet color="blue-500" />
        <ColorPellet color="green-500" />
        <ColorPellet color="red-500" />
        <ColorPellet color="purple-500" />
        <ColorPellet color="red-700" />
        <ColorPellet color="yellow-400" />
      </div>
      <div className="flex items-baseline gap-8 align-bottom">
        <ProductCounter />
        <ActionButton>BUYNOW</ActionButton>
      </div>
    </div>
  );
}

export default ProductDetail;
