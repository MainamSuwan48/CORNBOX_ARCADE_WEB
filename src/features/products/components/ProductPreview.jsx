import React from "react";

function ProductPreview({ img, name, price }) {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 mt-2">
      <div
        className="transition-all my-8 flex flex-col justify-center items-center max-w-screen-sm border-2 border-primary backdrop-blur-sm
    hover:border-secondary 
    hover:backdrop-blur-3xl
    h-96 p-4 rounded-lg"
      >
        <img
          className="hover:scale-110 transition duration-300 ease-in-out transform active:scale-95"
          src={img}
        />
      </div>
      <div className="text-2xl font-bold text-primary">{name}</div>
      <div className="text-xl font-bold text-primary mt-4">{price}</div>
    </div>
  );
}

export default ProductPreview;
