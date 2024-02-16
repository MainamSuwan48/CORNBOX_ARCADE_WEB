import React from "react";
import Header from "./layouts/Header";
import ProductLayout from "./layouts/ProductLayout";
import stickPicXXL from "../assets/stick.png";
import stickPicXL from "../assets/stickXL.png";
import EVOpic from "../assets/EVO.jpg";
import ProductPreview from "../features/products/components/ProductPreview";

function ProductPage() {
  return (
    <div
      className="flex mt-20 justify-around"
      style={{
        backgroundImage: `url(${EVOpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ProductPreview
        img={stickPicXXL}
        name={"FLATBOX XXL"}
        price={"4200 THB"}
      />
      <ProductPreview img={stickPicXL} name={"FLATBOX XL"} price={"4000 THB"} />
    </div>
  );
}

export default ProductPage;
