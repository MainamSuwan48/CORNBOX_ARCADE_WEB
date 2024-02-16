import React from "react";
import ProductImage from "../../features/products/components/ProductImage";
import ProductDetail from "../../features/products/components/ProductDetail";
import stickPickXXL from "../../assets/stick.png";
import stickPickXL from "../../assets/stickXL.png";
import { useParams } from "react-router-dom";

function ProductLayout() {
  const { productId } = useParams();
  console.log(productId);
  const product = {
    1: {
      id: 1,
      name: "FLATBOX XXL",
      price: "4200 THB",
      img: stickPickXXL,
      description:
        "Flatbox Controller is a pay to win controller , you buy this and you ascended in to GOD HOOD become Daigo, become king! BECOME GOD! and Probably win EVO idk it’s pretty hard since there are greater gods there, but not impossible if you believed. Flatbox XXL is bigger than Flatbox XL, so it’s better. Nope just kidding it's just bigger",
    },
    2: {
      id: 2,
      name: "FLATBOX XL",
      price: "4000 THB",
      img: stickPickXL,
      description:
        "Flatbox Controller is a pay to win controller , you buy this and you ascended in to GOD HOOD become Daigo, become king! BECOME GOD! and Probably win EVO idk it’s pretty hard since there are greater gods there, but not impossible if you believed. Flatbox XL is smaller than Flatbox XXL, so it’s more popular for some reason. Nope just kidding it's just smaller",
    },
  };

  return (
    <div className="flex h-with_header mt-20 flex-1 justify-between">
      <ProductImage src={product[`${productId}`].img} />
      <ProductDetail productData={product[`${productId}`]} />
    </div>
  );
}

export default ProductLayout;
