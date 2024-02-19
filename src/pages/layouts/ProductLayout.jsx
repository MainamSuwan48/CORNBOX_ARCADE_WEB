import React from "react";
import ProductImage from "../../features/products/components/ProductImage";
import ProductDetail from "../../features/products/components/ProductDetail";
import { useParams } from "react-router-dom";
import { useProduct } from "../../features/products/contexts/ProductContext";
import { useState } from "react";
import { useEffect } from "react";

function ProductLayout() {
  const { productId } = useParams(); 
  const { products, getProductById } = useProduct();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getProductById(productId);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div className="flex h-with_header mt-20 flex-1 justify-between">
      <ProductImage src={product.mainImage} />
      <ProductDetail productData={product} />
    </div>
  );
}

export default ProductLayout;
