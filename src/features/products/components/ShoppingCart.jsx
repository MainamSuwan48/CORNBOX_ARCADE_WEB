import React from "react";
import CartItem from "./CartItem";
import ActionButton from "../../../components/ui/ActionButton";
import { useState, useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";

function ShoppingCart({ userData }) {
  const [productsData, setProductsData] = useState([]);
  const { fetchProducts, getCartByUserId } = useProduct();
  const { username, id } = userData;
  const [cartData, setCartData] = useState([]);
 

  useEffect(() => {
    console.log(id);
    const getProductsData = async () => {
      try {
        const products = await fetchProducts();
        console.log(products.data);
        const cart = await getCartByUserId(id);
        console.log(cart.data.shoppingCartItem);
        setProductsData(products.data);
        setCartData(cart.data.shoppingCartItem);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsData();
  }, []);
  return (
    <div className="absolute top-0 right-0 w-screen-sm flex-1 p-8 rounded-lg mt-20 z-50 border-2 border-black bg-opacity-95 bg-base-100">
      <div className="text-2xl border-b-2 border-primary text-neutral font-bold">
        {username}'s Shopping Cart
      </div>
      <CartItem 
        cartItemData={cartData[0]} 
        productsData={productsData}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="text-primary font-bold">Total</div>
        <div className="text-primary font-bold">16800 THB</div>
      </div>
      <div className="flex justify-end">
        <ActionButton>CHECKOUT</ActionButton>
      </div>
    </div>
  );
}

export default ShoppingCart;
