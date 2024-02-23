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

function ProductPage({type}) {
  const { products } = useProduct();

  if (type === "home") {

    return (
      <div     
        className="flex justify-around items-center min-h-with_header_2 flex-1 "
     
      >
        {products && products.length > 0
          ? products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductPreview
                  key={product.id}
                  img={product.mainImage}
                  name={product.name}                
                  stock={product.stock}
                />
              </Link>
            ))
          : null}
      </div>
    );
  }

  

  return (
    <div     
      className="flex mt-20 justify-around items-center min-h-with_header_2 flex-1 bg-primary"
      style={{
        backgroundImage: `url(${EVOpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {products && products.length > 0
        ? products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductPreview
                key={product.id}
                img={product.mainImage}
                name={product.name}
                price={product.price}
                stock={product.stock}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default ProductPage;
