import React, { createContext, useContext } from "react";
import * as productApi from "../../../api/product";
import { useState } from "react";
import { useEffect } from "react";

// Create an empty context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  // product handler
  const fetchProducts = async () => {
    const response = await productApi.getAllProducts();
    return response;
  };

  const getProductById = async (id) => {
    const response = await productApi.getProductById(id);
    return response;
  };

  //cart handler
  const [cart, setCart] = useState([]); // [{}]
  const createCart = async (data) => {
    const response = await productApi.createCart(data);
    return response;
  };

  const getCartByUserId = async (id) => {
    const response = await productApi.getCartByUserId(id);
    return response;
  };

  const addItemToCart = async (data) => {
    const response = await productApi.addItemToCart(data);
    return response;
  };

  const updateCartItem = async (id, quantity) => {
    const data = { quantity };
    const response = await productApi.updateCartItem(id, data);
    return response;
  };

  const deleteCartItem = async (id) => {
    const response = await productApi.deleteCartItem(id);
    return response;
  };

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await fetchProducts();
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProducts,
        getProductById,
        createCart,
        getCartByUserId,
        updateCartItem,
        deleteCartItem,
        addItemToCart,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  return useContext(ProductContext);
}

export { ProductContextProvider, useProduct };
