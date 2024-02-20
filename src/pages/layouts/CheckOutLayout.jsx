import React from "react";
import CheckOutDetail from "../../features/products/components/CheckOutDetail";
import PaymentDetail from "../../features/products/components/PaymentDetail";
import Footer from "./Footer";
import { useAuth } from "../../features/auth/contexts/AuthContext";
import { useProduct } from "../../features/products/contexts/ProductContext";
import { useEffect } from "react";



function CheckOutLayout() {
  const { authUser } = useAuth();
  const { cart, products } = useProduct();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if (authUser) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);    
    }
  }, [authUser]);

  console.log(authUser, cart, products, "im here in checkout layout");
  return (
    isLoading ? (
      <div>
        <div className="text-6xl font-bold text-center text-red-600 mt-20">Loading...</div>
        <img
          className="w-1/2 mx-auto"
          src="https://media1.tenor.com/m/BAzma6OlbvAAAAAd/dancing-toothless-tothless.gif"
          alt="Funny Corn"
        />
      </div>
   
    ) : (
      <div className="flex mt-6 pt-20 h-with_header flex-1 justify-center items-start p-8 gap-8 backdrop-blur-sm -mb-8">
        <CheckOutDetail
          userData={authUser}
          cartData={cart}
          productsData={products}
        />
        <PaymentDetail />
      </div>
    )
  );
}

export default CheckOutLayout;
