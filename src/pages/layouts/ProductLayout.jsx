import React from "react";
import ProductImage from "../../features/products/components/ProductImage";
import ProductDetail from "../../features/products/components/ProductDetail";
import stickPickXXL from "../../assets/stick.png";
import stickPickXL from "../../assets/stickXL.png";
import { useParams } from "react-router-dom";

function ProductLayout() {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div className="flex h-with_header mt-20 flex-1 justify-between">
      <ProductImage />
      <ProductDetail />
    </div>
  );
}

export default ProductLayout;
