import React from "react";

function ProductImage({src}) {
  return <div className="flex max-w-screen-md bg-primary h-auto mx-4 my-8">
    <img className="select-none max-h-full m-auto" src={src} alt="stick" />
  </div>;
}

export default ProductImage;
