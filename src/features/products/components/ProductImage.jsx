import React from "react";
import stickPic from "../../../assets/stick.png";

function ProductImage() {
  return <div className="flex max-w-screen-md bg-primary h-auto mx-4 my-8">
    <img className="select-none max-h-full m-auto" src={stickPic} alt="stick" />
  </div>;
}

export default ProductImage;
