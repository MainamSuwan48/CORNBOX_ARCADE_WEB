import React from "react";
import Header from "./layouts/Header";
import ProductLayout from "./layouts/ProductLayout";
import stickPicXXL from "../assets/stick.png";
import stickPicXL from "../assets/stickXL.png";
import EVOpic from "../assets/EVO.jpg";
import ProductPreview from "../features/products/components/ProductPreview";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div
      className="flex mt-20 justify-around h-with_header flex-1 bg-primary"
      style={{
        backgroundImage: `url(${EVOpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link to="/product/1">
        <ProductPreview
          img={stickPicXXL}
          name={"FLATBOX XXL"}
          price={"4200 THB"}
        />
      </Link>
      <Link to="/product/2">
        <ProductPreview
          img={stickPicXL}
          name={"FLATBOX XL"}
          price={"4000 THB"}
        />
      </Link>
    </div>
  );
}

export default ProductPage;
