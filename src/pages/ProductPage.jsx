import React from "react";
import Header from "./layouts/Header";
import ProductLayout from "./layouts/ProductLayout";
import stickPicXXL from "../assets/stick.png";
import stickPicXL from "../assets/stickXL.png";
import EVOpic from "../assets/EVO.jpg";
import ProductPreview from "../features/products/components/ProductPreview";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useProduct } from "../features/products/contexts/ProductContext";

function ProductPage() {
  const { products, fetchProducts } = useProduct();
  const [frontProducts, setFrontProducts] = useState([]);

  const test = () => {
    console.log(frontProducts);
  };

  useEffect(() => {
    const getFrontProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log(response.data);
        setFrontProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFrontProducts();
  }, [products]);
  return (
    <div
      onClick={test}
      className="flex mt-20 justify-around h-with_header flex-1 bg-primary"
      style={{
        backgroundImage: `url(${EVOpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {frontProducts && frontProducts.length > 0
        ? frontProducts.map((product) => (
            <Link to={`/product/${product.id}`}>
              <ProductPreview
                img={product.mainImage}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default ProductPage;
