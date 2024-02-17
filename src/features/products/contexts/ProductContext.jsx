import React, { createContext, useContext } from "react";
import * as productApi from "../../../api/product";
import { useState } from "react";
import { useEffect } from "react";

// Create an empty context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await productApi.getAllProducts();
    return response;
  };

  const getProductById = async (id) => {
    const response = await productApi.getProductById(id);
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
