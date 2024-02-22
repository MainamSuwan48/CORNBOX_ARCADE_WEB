import React from "react";
import ProductImage from "../../features/products/components/ProductImage";
import ProductDetail from "../../features/products/components/ProductDetail";
import { useParams } from "react-router-dom";
import { useProduct } from "../../features/products/contexts/ProductContext";
import { useState } from "react";
import { useEffect } from "react";

function ProductLayout() {
  const { productId } = useParams();
  const { products, getProductById, productsImages } = useProduct();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    console.log(productsImages, "products images in product layout");
    if (productsImages) {
      setLoading(false);
    }
  }, [productsImages]);

  return (
    <>
      <div className="flex h-with_header mt-20 flex-1 justify-around">
        <ProductImage src={product.mainImage} />
        <ProductDetail productData={product} />
      </div>
      {loading ? null : (
        <div
          className="flex justify-around items-center flex-wrap mt-10"
          style={{ width: "100%" }}
        >
          {productsImages.map((productImage) => {
            if (productImage.productId === product.id) {
              return (
                <ProductImage key={productImage.id} src={productImage.src} />
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default ProductLayout;
