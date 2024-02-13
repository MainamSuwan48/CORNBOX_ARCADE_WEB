import React from "react";
import ProductImage from "../../features/products/components/ProductImage";
import ProductDetail from "../../features/products/components/ProductDetail";

function ProductLayout() {
  return (
    <div className="flex h-with_header mt-20 flex-1 justify-between">
      <ProductImage />
      <ProductDetail />
    </div>
  );
}

export default ProductLayout;
